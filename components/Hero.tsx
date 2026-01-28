
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { content, getWhatsAppLink } from '@/lib/config';

const Hero: React.FC = () => {
  const { hero } = content;
  
  return (
    <section className="relative pt-28 pb-12 sm:pt-48 sm:pb-40 mesh-gradient overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-4 grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 py-1.5 px-3 bg-white/90 border border-primary/20 rounded-full text-primary text-[10px] sm:text-xs font-bold mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
            {hero.badge}
          </div>
          
          <h1 id="hero-heading" className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-accent leading-[1.15] sm:leading-[1.1] mb-6 tracking-tight">
            {hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{hero.titleHighlight}</span>.
          </h1>
          
          <p className="text-base sm:text-xl text-text-muted mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
            {hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={getWhatsAppLink()}
              className="bg-accent hover:bg-primary text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl text-base sm:text-lg font-bold shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 group"
              aria-label="Falar com especialista via WhatsApp"
            >
              {hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a 
              href="#contato"
              className="bg-white/50 backdrop-blur-sm hover:bg-surface text-accent border border-accent/10 px-6 py-4 sm:px-10 sm:py-5 rounded-2xl text-base sm:text-lg font-bold transition-all flex items-center justify-center active:scale-95"
              aria-label="Ir para formulário de simulação de cotação"
            >
              {hero.ctaSecondary}
            </a>
          </div>
          
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 opacity-60" role="list" aria-label="Diferenciais do serviço">
            {hero.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2" role="listitem">
                <span className="text-xl sm:text-2xl" aria-hidden="true">{feature.emoji}</span>
                <span className="text-[10px] sm:text-sm font-bold text-accent/80">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-5 relative order-1 lg:order-2 px-6 sm:px-0">
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full -z-10" aria-hidden="true"></div>
          <div className="relative z-10">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-4 sm:border-8 border-white overflow-hidden aspect-[4/3]">
              <Image 
                src={hero.image} 
                alt={hero.imageAlt} 
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-top-6 sm:-right-6 glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-white/50" aria-label="Avaliação de satisfação: 4.9 de 5">
              <div className="text-primary text-xl sm:text-3xl font-black mb-0.5">4.9/5</div>
              <div className="text-text-muted text-[8px] sm:text-xs font-bold uppercase tracking-widest leading-none">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
