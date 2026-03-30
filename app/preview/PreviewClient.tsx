'use client';

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Monitor, Tablet, Smartphone, MessageCircle, RotateCcw, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { site, content, theme } from '@/lib/config';
import type { ConfigContextValue } from '@/contexts/ConfigContext';

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function darken(hex: string): string {
  const clean = hex.replace('#', '');
  const full = clean.length === 3
    ? clean.split('').map((c) => c + c).join('')
    : clean;
  const num = parseInt(full, 16);
  const r = Math.max(0, (num >> 16) - 20);
  const g = Math.max(0, ((num >> 8) & 0xff) - 20);
  const b = Math.max(0, (num & 0xff) - 20);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// ─────────────────────────────────────────────
// Color presets
// ─────────────────────────────────────────────

const PRESETS = {
  claro: {
    label: 'Claro',
    primaryColor: '#2563eb',
    secondaryColor: '#10b981',
    backgroundColor: '#f8fafc',
    surfaceColor: '#ffffff',
    accentColor: '#0f172a',
    textMutedColor: '#64748b',
  },
  escuro: {
    label: 'Escuro',
    primaryColor: '#60a5fa',
    secondaryColor: '#34d399',
    backgroundColor: '#0f172a',
    surfaceColor: '#1e293b',
    accentColor: '#f1f5f9',
    textMutedColor: '#94a3b8',
  },
  roxo: {
    label: 'Roxo',
    primaryColor: '#7c3aed',
    secondaryColor: '#06b6d4',
    backgroundColor: '#faf5ff',
    surfaceColor: '#ffffff',
    accentColor: '#1e1b4b',
    textMutedColor: '#6b7280',
  },
  verde: {
    label: 'Verde',
    primaryColor: '#059669',
    secondaryColor: '#0284c7',
    backgroundColor: '#f0fdf4',
    surfaceColor: '#ffffff',
    accentColor: '#064e3b',
    textMutedColor: '#4b5563',
  },
};

type PresetKey = keyof typeof PRESETS;

// ─────────────────────────────────────────────
// Device definitions
// ─────────────────────────────────────────────

const DEVICES = [
  { key: 'desktop', label: 'Desktop', icon: Monitor, iframeWidth: '100%' },
  { key: 'tablet', label: 'Tablet', icon: Tablet, iframeWidth: '768px' },
  { key: 'mobile', label: 'Mobile', icon: Smartphone, iframeWidth: '390px' },
] as const;

type DeviceKey = (typeof DEVICES)[number]['key'];

// ─────────────────────────────────────────────
// Reusable form field
// ─────────────────────────────────────────────

function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: 'text' | 'email' | 'color' | 'textarea';
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold text-slate-500 mb-1">{label}</label>
      {type === 'color' ? (
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-9 h-9 rounded-lg border border-slate-200 cursor-pointer p-0.5 shrink-0"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none font-mono"
            placeholder="#000000"
          />
        </div>
      ) : type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={2}
          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      )}
    </div>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-5">
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 pb-2 border-b border-slate-100">
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Initial field state
// ─────────────────────────────────────────────

const defaultFields = {
  namePrefix: site.company.namePrefix,
  nameHighlight: site.company.nameHighlight,
  tagline: site.company.tagline,
  whatsapp: site.company.whatsapp,
  email: site.company.email,
  primaryColor: theme.colors.primary,
  secondaryColor: theme.colors.secondary,
  backgroundColor: theme.colors.background,
  surfaceColor: theme.colors.surface,
  accentColor: theme.colors.accent,
  textMutedColor: theme.colors.textMuted,
  heroBadge: content.hero.badge,
  heroTitle: content.hero.title,
  heroHighlight: content.hero.titleHighlight,
  heroSubtitle: content.hero.subtitle,
  consultantName: content.consultant?.name ?? '',
  consultantRole: content.consultant?.role ?? '',
};

// ─────────────────────────────────────────────
// Preview page
// ─────────────────────────────────────────────

export default function PreviewClient() {
  const [device, setDevice] = useState<DeviceKey>('desktop');
  const [fields, setFields] = useState(defaultFields);
  const [iframeHeight, setIframeHeight] = useState(3200);
  const [iframeReady, setIframeReady] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isNarrow, setIsNarrow] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const narrow = w < 768;
      setIsNarrow(narrow);
      if (narrow) setSidebarOpen(false);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const w = window.innerWidth;
    if (w < 640) setDevice('mobile');
    else if (w < 1024) setDevice('tablet');
  }, []);

  const set = (key: keyof typeof fields) => (value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const applyPreset = (key: PresetKey) => {
    const p = PRESETS[key];
    setFields((prev) => ({
      ...prev,
      primaryColor: p.primaryColor,
      secondaryColor: p.secondaryColor,
      backgroundColor: p.backgroundColor,
      surfaceColor: p.surfaceColor,
      accentColor: p.accentColor,
      textMutedColor: p.textMutedColor,
    }));
  };

  const resetAll = () => setFields(defaultFields);

  // Build the full config to send to the iframe
  const previewConfig = useMemo<ConfigContextValue>(() => ({
    site: {
      ...site,
      company: {
        ...site.company,
        name: fields.namePrefix + fields.nameHighlight,
        namePrefix: fields.namePrefix,
        nameHighlight: fields.nameHighlight,
        tagline: fields.tagline,
        email: fields.email,
        whatsapp: fields.whatsapp,
      },
    },
    content: {
      ...content,
      hero: {
        ...content.hero,
        badge: fields.heroBadge,
        title: fields.heroTitle,
        titleHighlight: fields.heroHighlight,
        subtitle: fields.heroSubtitle,
      },
      consultant: content.consultant
        ? { ...content.consultant, name: fields.consultantName, role: fields.consultantRole }
        : undefined,
    },
    theme: {
      ...theme,
      colors: {
        ...theme.colors,
        primary: fields.primaryColor,
        primaryHover: darken(fields.primaryColor),
        secondary: fields.secondaryColor,
        secondaryHover: darken(fields.secondaryColor),
        accent: fields.accentColor,
        background: fields.backgroundColor,
        surface: fields.surfaceColor,
        text: fields.accentColor,
        textMuted: fields.textMutedColor,
      },
    },
  }), [fields]);

  // Listen for messages from the iframe
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'PREVIEW_READY') setIframeReady(true);
      if (e.data?.type === 'PREVIEW_HEIGHT') setIframeHeight(e.data.height);
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  // Send config to iframe whenever it changes
  useEffect(() => {
    if (!iframeReady || !iframeRef.current?.contentWindow) return;
    iframeRef.current.contentWindow.postMessage(
      { type: 'PREVIEW_CONFIG', config: previewConfig },
      '*'
    );
  }, [iframeReady, previewConfig]);

  // When device changes, reload iframe so it starts fresh at the correct viewport
  const handleDeviceChange = useCallback((key: DeviceKey) => {
    setIframeReady(false);
    setDevice(key);
  }, []);

  const currentDevice = DEVICES.find((d) => d.key === device)!;

  const ctaMessage = encodeURIComponent(
    `Olá! Testei o preview da landing page e gostei.\n\nDados da minha empresa:\n- Nome: ${fields.namePrefix}${fields.nameHighlight}\n- WhatsApp: ${fields.whatsapp}\n- E-mail: ${fields.email}\n\nPodemos conversar?`
  );
  const ctaLink = `https://wa.me/${site.company.whatsapp}?text=${ctaMessage}`;

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100" style={{ fontFamily: 'sans-serif' }}>

      {/* Backdrop — mobile overlay */}
      {isNarrow && sidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Left panel ── */}
      <aside className={[
        'bg-white border-r border-slate-200 flex flex-col overflow-hidden shadow-sm transition-all duration-300',
        isNarrow
          ? `fixed inset-y-0 left-0 z-20 w-72 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
          : `relative shrink-0 ${sidebarOpen ? 'w-72' : 'w-0'}`,
      ].join(' ')}>
        {/* Header */}
        <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-black text-slate-800">Configurador</h1>
            <p className="text-[10px] text-slate-400">Edite e veja ao vivo</p>
          </div>
          <button
            onClick={resetAll}
            title="Restaurar padrão"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-4 pb-6">

          <FormSection title="Empresa">
            <div className="grid grid-cols-2 gap-2">
              <Field label="Prefixo" value={fields.namePrefix} onChange={set('namePrefix')} placeholder="Saúde" />
              <Field label="Destaque" value={fields.nameHighlight} onChange={set('nameHighlight')} placeholder="Pro" />
            </div>
            <Field label="Slogan" value={fields.tagline} onChange={set('tagline')} />
            <Field label="WhatsApp (DDI+número)" value={fields.whatsapp} onChange={set('whatsapp')} placeholder="5521999999999" />
            <Field label="E-mail" value={fields.email} onChange={set('email')} type="email" />
          </FormSection>

          <FormSection title="Cores — Presets">
            <div className="grid grid-cols-4 gap-1.5">
              {(Object.keys(PRESETS) as PresetKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => applyPreset(key)}
                  className="py-1.5 text-[10px] font-bold rounded-lg border border-slate-200 hover:border-slate-400 transition-colors text-slate-600 capitalize"
                  style={{ background: PRESETS[key].backgroundColor, color: PRESETS[key].accentColor }}
                >
                  {PRESETS[key].label}
                </button>
              ))}
            </div>
          </FormSection>

          <FormSection title="Cores — Principal">
            <Field label="Cor principal" value={fields.primaryColor} onChange={set('primaryColor')} type="color" />
            <Field label="Cor secundária" value={fields.secondaryColor} onChange={set('secondaryColor')} type="color" />
          </FormSection>

          <FormSection title="Cores — Fundo">
            <Field label="Fundo da página" value={fields.backgroundColor} onChange={set('backgroundColor')} type="color" />
            <Field label="Fundo dos cards" value={fields.surfaceColor} onChange={set('surfaceColor')} type="color" />
          </FormSection>

          <FormSection title="Cores — Texto">
            <Field label="Texto principal" value={fields.accentColor} onChange={set('accentColor')} type="color" />
            <Field label="Texto secundário" value={fields.textMutedColor} onChange={set('textMutedColor')} type="color" />
          </FormSection>

          <FormSection title="Seção principal">
            <Field label="Selo" value={fields.heroBadge} onChange={set('heroBadge')} />
            <Field label="Título" value={fields.heroTitle} onChange={set('heroTitle')} />
            <Field label="Destaque do título" value={fields.heroHighlight} onChange={set('heroHighlight')} />
            <Field label="Subtítulo" value={fields.heroSubtitle} onChange={set('heroSubtitle')} type="textarea" />
          </FormSection>

          {content.consultant && (
            <FormSection title="Consultor">
              <Field label="Nome" value={fields.consultantName} onChange={set('consultantName')} />
              <Field label="Cargo" value={fields.consultantRole} onChange={set('consultantRole')} />
            </FormSection>
          )}

        </div>

        {/* CTA */}
        <div className="px-4 py-3 border-t border-slate-100 bg-slate-50">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da851] text-white py-2.5 rounded-xl font-bold text-xs transition-all active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Gostei! Quero este site
          </a>
          <p className="text-[10px] text-slate-400 text-center mt-1.5">Seus dados já vão no WhatsApp</p>
        </div>
      </aside>

      {/* ── Right panel ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Device toggle bar */}
        <div className="h-11 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              title={sidebarOpen ? 'Ocultar painel' : 'Mostrar painel'}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {sidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
              {DEVICES.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => handleDeviceChange(key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    device === key ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs text-slate-400 font-mono">{currentDevice.iframeWidth}</span>
        </div>

        {/* Preview area */}
        <div className="flex-1 overflow-auto bg-slate-200 p-4">
          <div
            className="mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300"
            style={{ width: currentDevice.iframeWidth, maxWidth: '100%' }}
          >
            <iframe
              key={device} // remount on device change so viewport resets
              ref={iframeRef}
              src="/"
              title="Preview da landing page"
              className="w-full border-0 block"
              style={{ height: `${iframeHeight}px` }}
              // Allow same-origin scripts for postMessage
            />
          </div>
        </div>

      </div>
    </div>
  );
}
