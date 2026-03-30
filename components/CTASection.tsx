'use client';

import React from 'react';
import { buildWhatsAppLink } from '@/lib/config';
import { useConfig } from '@/contexts/ConfigContext';
import AnimatedSection from './ui/AnimatedSection';

const CTASection: React.FC = () => {
  const { site, content } = useConfig();
  const { cta } = content;
  const waLink = buildWhatsAppLink(site.company.whatsapp, site.company.whatsappMessage);

  return (
    <section className="py-20 sm:py-32 bg-accent relative overflow-hidden" aria-labelledby="cta-heading">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, var(--color-primary), transparent 70%)',
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 sm:px-4 text-center relative z-10">
        <AnimatedSection>
          <h2 id="cta-heading" className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8 leading-snug tracking-tight">
            {cta.title}
          </h2>
          <p className="text-white/60 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            {cta.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <a
            href={waLink}
            className="inline-flex items-center justify-center gap-3 bg-surface text-accent px-8 py-5 sm:px-12 sm:py-6 rounded-2xl text-base sm:text-lg font-bold shadow-2xl hover:bg-primary hover:text-white transition-all active:scale-95"
            aria-label="Falar com especialista via WhatsApp"
          >
            {cta.buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <p className="mt-6 text-white/40 text-xs sm:text-sm">{cta.note}</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
