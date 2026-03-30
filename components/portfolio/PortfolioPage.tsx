import React from 'react';
import { ArrowRight, Palette, Zap, ShieldCheck, MessageCircle, ExternalLink } from 'lucide-react';

const DEMOS = [
  {
    slug: 'saude',
    label: 'Plano de Saúde',
    description: 'Para corretores e operadoras de planos de saúde individuais, familiares e empresariais.',
    tag: 'Mais popular',
    highlighted: true,
  },
  {
    slug: 'odontologia',
    label: 'Clínica Odontológica',
    description: 'Para dentistas e clínicas que desejam atrair novos pacientes e divulgar tratamentos.',
    tag: 'Novo',
    highlighted: false,
  },
  {
    slug: 'imoveis',
    label: 'Imobiliária',
    description: 'Para corretores e imobiliárias que querem captar leads qualificados de compradores e locatários.',
    tag: 'Novo',
    highlighted: false,
  },
];

const FEATURES = [
  {
    icon: Zap,
    title: 'Entrega em 48h',
    description: 'Você nos passa os dados, nós configuramos e publicamos.',
  },
  {
    icon: Palette,
    title: 'Sua identidade visual',
    description: 'Cores, logo e textos 100% personalizados para a sua marca.',
  },
  {
    icon: ShieldCheck,
    title: 'Hospedagem inclusa',
    description: 'Domínio próprio, HTTPS e hospedagem sem custo adicional no primeiro ano.',
  },
  {
    icon: MessageCircle,
    title: 'Leads direto no WhatsApp',
    description: 'Formulários integrados que entregam o contato do cliente diretamente para você.',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* ── Navbar ── */}
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-black text-lg tracking-tight">
            land<span className="text-blue-400">pages</span>
          </span>
          <a
            href="https://wa.me/5511999999999"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-4 py-2 rounded-full text-sm font-bold transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20 mb-6">
            Landing pages profissionais
          </span>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-6 tracking-tight">
            Seu negócio merece uma página que{' '}
            <span className="text-blue-400">converte de verdade</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Landing pages otimizadas para geração de leads, prontas para publicar com
            sua identidade visual e dados. Escolha um modelo abaixo e veja ao vivo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demos"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all active:scale-95 shadow-xl shadow-blue-500/20"
            >
              Ver modelos disponíveis
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="flex items-center gap-2 text-slate-400 hover:text-white px-6 py-4 rounded-2xl font-semibold text-base transition-colors border border-white/10 hover:border-white/20"
            >
              Tirar dúvidas
            </a>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-sm mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Demos ── */}
      <section id="demos" className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Modelos disponíveis</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Clique em qualquer modelo para ver a demonstração completa e personalizar com os dados da sua empresa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEMOS.map((demo) => (
              <a
                key={demo.slug}
                href={`/demo/${demo.slug}`}
                className={`group relative rounded-2xl p-6 border transition-all hover:-translate-y-1 ${
                  demo.highlighted
                    ? 'bg-blue-600/10 border-blue-500/30 hover:border-blue-400/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {demo.tag && (
                  <span className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {demo.tag}
                  </span>
                )}
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="font-bold text-base mb-2">{demo.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{demo.description}</p>
                <span className="inline-flex items-center gap-1 text-blue-400 text-xs font-bold group-hover:gap-2 transition-all">
                  Ver demonstração <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="px-6 py-24 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
            Pronto para começar?
          </h2>
          <p className="text-slate-400 text-base mb-8">
            Escolha um modelo, personalize e receba sua landing page no ar em até 48 horas.
          </p>
          <a
            href="https://wa.me/5511999999999"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-2xl font-bold text-base transition-all active:scale-95 shadow-xl shadow-green-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Quero minha landing page
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 px-6 py-8 text-center">
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} landpages · Todos os direitos reservados
        </p>
      </footer>

    </div>
  );
}
