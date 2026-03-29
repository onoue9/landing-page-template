'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/config';
import { useConfig } from '@/contexts/ConfigContext';
import AnimatedSection from './ui/AnimatedSection';

const Pricing: React.FC = () => {
  const { site, content } = useConfig();
  if (!content.pricing) return null;
  const { title, subtitle, items } = content.pricing;

  return (
    <section id="precos" className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-accent mb-4 tracking-tight">{title}</h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">{subtitle}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {items.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 100}>
              <div
                className={`h-full flex flex-col rounded-3xl p-8 border transition-all ${
                  item.highlighted
                    ? 'bg-primary text-white border-primary shadow-2xl shadow-primary/25 scale-105'
                    : 'bg-surface border-accent/10 shadow-sm hover:shadow-md'
                }`}
              >
                {item.highlighted && (
                  <div className="mb-4">
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Mais Popular
                    </span>
                  </div>
                )}

                <h3 className={`text-xl font-black mb-1 ${item.highlighted ? 'text-white' : 'text-accent'}`}>
                  {item.name}
                </h3>
                <p className={`text-sm mb-6 ${item.highlighted ? 'text-white/80' : 'text-text-muted'}`}>
                  {item.description}
                </p>

                <div className="mb-8">
                  <span className={`text-4xl font-black ${item.highlighted ? 'text-white' : 'text-accent'}`}>
                    {item.price}
                  </span>
                  {item.period && (
                    <span className={`text-sm ml-1 ${item.highlighted ? 'text-white/70' : 'text-text-muted'}`}>
                      {item.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${item.highlighted ? 'text-white' : 'text-secondary'}`}
                        aria-hidden="true"
                      />
                      <span className={`text-sm ${item.highlighted ? 'text-white/90' : 'text-text-muted'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppLink(site.company.whatsapp, site.company.whatsappMessage)}
                  className={`block text-center py-3 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                    item.highlighted
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'bg-primary text-white hover:bg-primary-hover'
                  }`}
                >
                  {item.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
