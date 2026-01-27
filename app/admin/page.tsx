'use client';

import React, { useState, useEffect } from 'react';
import { Download, Eye, Save, RefreshCw } from 'lucide-react';

// Types
interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    logo: string;
    whatsapp: string;
    whatsappMessage: string;
  };
  seo: {
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
    disclaimer: string;
  };
}

interface ThemeConfig {
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
  };
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'site' | 'theme' | 'content'>('site');
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [themeConfig, setThemeConfig] = useState<ThemeConfig | null>(null);
  const [isSaved, setIsSaved] = useState(true);

  // Load configs
  useEffect(() => {
    const loadConfigs = async () => {
      try {
        const [siteRes, themeRes] = await Promise.all([
          fetch('/api/config?file=site'),
          fetch('/api/config?file=theme')
        ]);
        
        if (siteRes.ok) setSiteConfig(await siteRes.json());
        if (themeRes.ok) setThemeConfig(await themeRes.json());
      } catch {
        // Fallback: load from static files
        const site = await import('@/config/site.json');
        const theme = await import('@/config/theme.json');
        setSiteConfig(site.default as SiteConfig);
        setThemeConfig(theme.default as ThemeConfig);
      }
    };
    loadConfigs();
  }, []);

  // Apply theme colors to CSS variables
  useEffect(() => {
    if (themeConfig) {
      const root = document.documentElement;
      Object.entries(themeConfig.colors).forEach(([key, value]) => {
        const cssVar = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssVar, value);
      });
    }
  }, [themeConfig]);

  const handleSiteChange = (section: keyof SiteConfig, field: string, value: string) => {
    if (!siteConfig) return;
    setSiteConfig({
      ...siteConfig,
      [section]: {
        ...siteConfig[section],
        [field]: value
      }
    });
    setIsSaved(false);
  };

  const handleThemeChange = (field: string, value: string) => {
    if (!themeConfig) return;
    setThemeConfig({
      ...themeConfig,
      colors: {
        ...themeConfig.colors,
        [field]: value
      }
    });
    setIsSaved(false);
  };

  const exportConfig = () => {
    const fullConfig = {
      site: siteConfig,
      theme: themeConfig
    };
    
    const blob = new Blob([JSON.stringify(fullConfig, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config-export.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const openPreview = () => {
    window.open('/', '_blank');
  };

  if (!siteConfig || !themeConfig) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <h1 className="font-bold text-slate-900">Painel Admin</h1>
              <p className="text-xs text-slate-500">Configurador de Landing Page</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={openPreview}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              onClick={exportConfig}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Exportar Config
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Tabs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
              <nav className="space-y-2">
                {[
                  { id: 'site', label: 'Empresa & SEO', icon: '🏢' },
                  { id: 'theme', label: 'Cores & Tema', icon: '🎨' },
                  { id: 'content', label: 'Conteúdo', icon: '📝' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <span className="text-xl">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
              
              {!isSaved && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Alterações não salvas
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              {/* Site Tab */}
              {activeTab === 'site' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-4">Dados da Empresa</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nome da Empresa</label>
                        <input
                          type="text"
                          value={siteConfig.company.name}
                          onChange={(e) => handleSiteChange('company', 'name', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Tagline</label>
                        <input
                          type="text"
                          value={siteConfig.company.tagline}
                          onChange={(e) => handleSiteChange('company', 'tagline', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp (com código do país)</label>
                        <input
                          type="text"
                          value={siteConfig.company.whatsapp}
                          onChange={(e) => handleSiteChange('company', 'whatsapp', e.target.value)}
                          placeholder="5521999999999"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem padrão do WhatsApp</label>
                        <input
                          type="text"
                          value={siteConfig.company.whatsappMessage}
                          onChange={(e) => handleSiteChange('company', 'whatsappMessage', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-4">SEO</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Título da Página</label>
                        <input
                          type="text"
                          value={siteConfig.seo.title}
                          onChange={(e) => handleSiteChange('seo', 'title', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Meta Description</label>
                        <textarea
                          value={siteConfig.seo.description}
                          onChange={(e) => handleSiteChange('seo', 'description', e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-4">Footer</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nome no Copyright</label>
                        <input
                          type="text"
                          value={siteConfig.footer.copyright}
                          onChange={(e) => handleSiteChange('footer', 'copyright', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Disclaimer</label>
                        <textarea
                          value={siteConfig.footer.disclaimer}
                          onChange={(e) => handleSiteChange('footer', 'disclaimer', e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Theme Tab */}
              {activeTab === 'theme' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">Cores do Tema</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(themeConfig.colors).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-3">
                        <input
                          type="color"
                          value={value}
                          onChange={(e) => handleThemeChange(key, e.target.value)}
                          className="w-12 h-12 rounded-lg border border-slate-200 cursor-pointer"
                        />
                        <div>
                          <p className="text-sm font-medium text-slate-700 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-xs text-slate-400 uppercase">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-slate-50 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-700 mb-3">Preview das Cores</h3>
                    <div className="flex gap-2">
                      <div 
                        className="w-16 h-16 rounded-lg shadow-sm"
                        style={{ backgroundColor: themeConfig.colors.primary }}
                      />
                      <div 
                        className="w-16 h-16 rounded-lg shadow-sm"
                        style={{ backgroundColor: themeConfig.colors.secondary }}
                      />
                      <div 
                        className="w-16 h-16 rounded-lg shadow-sm"
                        style={{ backgroundColor: themeConfig.colors.accent }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Content Tab */}
              {activeTab === 'content' && (
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <h3 className="font-bold text-blue-900 mb-2">📝 Editor de Conteúdo</h3>
                    <p className="text-blue-700 text-sm">
                      Para editar o conteúdo das seções (Hero, Benefits, FAQ, etc.), 
                      edite diretamente o arquivo <code className="bg-blue-100 px-1 rounded">config/content.json</code>.
                    </p>
                    <p className="text-blue-600 text-xs mt-2">
                      Em breve: editor visual completo para todas as seções.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-700 mb-2">Arquivos de Configuração</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>📁 <code>config/site.json</code> - Empresa, SEO, Footer</li>
                      <li>📁 <code>config/theme.json</code> - Cores e fontes</li>
                      <li>📁 <code>config/content.json</code> - Textos das seções</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Export Instructions */}
            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">💡 Como usar para um novo cliente</h3>
              <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
                <li>Edite as configurações acima</li>
                <li>Clique em &quot;Exportar Config&quot; para baixar o JSON</li>
                <li>Copie este projeto para um novo repositório</li>
                <li>Substitua os arquivos em <code className="bg-slate-200 px-1 rounded">/config/</code> pelos exportados</li>
                <li>Faça deploy no Netlify</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
