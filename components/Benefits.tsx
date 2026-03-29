'use client';

import React from 'react';
import { Wallet, UserCheck, BarChart, ShieldCheck } from 'lucide-react';
import { useConfig } from '@/contexts/ConfigContext';
import AnimatedSection from './ui/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  wallet: <Wallet className="w-8 h-8" aria-hidden="true" />,
  user: <UserCheck className="w-8 h-8" aria-hidden="true" />,
  chart: <BarChart className="w-8 h-8" aria-hidden="true" />,
  shield: <ShieldCheck className="w-8 h-8" aria-hidden="true" />,
};

// ─── Variant A: 4-column grid, centered text (default) ───

function BenefitsA() {
  const { content } = useConfig();
  const { benefits } = content;

  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-surface relative" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <h2 id="benefits-heading" className="text-2xl sm:text-5xl font-extrabold text-accent mb-4 sm:mb-6 tracking-tight">
            {benefits.title}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-lg">{benefits.subtitle}</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list">
          {benefits.items.map((benefit, i) => (
            <AnimatedSection key={benefit.id} delay={i * 100}>
              <article
                className="bg-background p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center border border-accent/5 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                role="listitem"
                aria-labelledby={`benefit-${benefit.id}`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 text-primary shadow-sm">
                  {iconMap[benefit.icon] || <span aria-hidden="true">✨</span>}
                </div>
                <h3 id={`benefit-${benefit.id}`} className="text-base sm:text-lg font-bold text-accent mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Variant B: 2-column grid, horizontal cards with icon left ───

function BenefitsB() {
  const { content } = useConfig();
  const { benefits } = content;

  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-surface relative" aria-labelledby="benefits-heading">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <h2 id="benefits-heading" className="text-2xl sm:text-5xl font-extrabold text-accent mb-4 sm:mb-6 tracking-tight">
            {benefits.title}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-lg">{benefits.subtitle}</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6" role="list">
          {benefits.items.map((benefit, i) => (
            <AnimatedSection key={benefit.id} delay={i * 100}>
              <article
                className="bg-background p-5 sm:p-6 rounded-2xl flex items-start gap-4 sm:gap-5 border border-accent/5 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                role="listitem"
                aria-labelledby={`benefit-${benefit.id}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                  {iconMap[benefit.icon] || <span aria-hidden="true">✨</span>}
                </div>
                <div>
                  <h3 id={`benefit-${benefit.id}`} className="text-base sm:text-lg font-bold text-accent mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Benefits component ───

const Benefits: React.FC = () => {
  const { content } = useConfig();
  const variant = content.layout?.benefits ?? 'benefits-a';

  if (variant === 'benefits-b') return <BenefitsB />;
  return <BenefitsA />;
};

export default Benefits;
