'use client';

import React from 'react';
import { Search, FileCheck, PartyPopper } from 'lucide-react';
import { useConfig } from '@/contexts/ConfigContext';
import AnimatedSection from './ui/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  search: <Search className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />,
  'file-check': <FileCheck className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />,
  party: <PartyPopper className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />,
};

// ─── Variant A: 3-column horizontal grid (default) ───

function StepsA() {
  const { content } = useConfig();
  const { steps } = content;

  return (
    <section id="como-funciona" className="py-20 sm:py-32 bg-surface relative overflow-hidden" aria-labelledby="steps-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-4">
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <h2 id="steps-heading" className="text-2xl sm:text-5xl font-extrabold text-accent mb-4 sm:mb-6 tracking-tight">
            {steps.title}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-lg">{steps.subtitle}</p>
        </AnimatedSection>

        <ol className="grid lg:grid-cols-3 gap-8 sm:gap-16 relative list-none">
          <div className="hidden lg:block absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-accent/5 -z-10" aria-hidden="true"></div>

          {steps.items.map((step, idx) => (
            <AnimatedSection key={step.id} delay={idx * 150}>
              <li className="text-center relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-6 sm:mb-8 relative shadow-xl">
                  {iconMap[step.icon] || <span>{idx + 1}</span>}
                  <span className="absolute -top-2 -right-2 bg-primary text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-accent mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-text-muted text-xs sm:text-base leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </li>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── Variant B: Vertical timeline ───

function StepsB() {
  const { content } = useConfig();
  const { steps } = content;

  return (
    <section id="como-funciona" className="py-20 sm:py-32 bg-surface relative overflow-hidden" aria-labelledby="steps-heading">
      <div className="max-w-3xl mx-auto px-6 sm:px-4">
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <h2 id="steps-heading" className="text-2xl sm:text-5xl font-extrabold text-accent mb-4 sm:mb-6 tracking-tight">
            {steps.title}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-lg">{steps.subtitle}</p>
        </AnimatedSection>

        <ol className="relative list-none">
          {/* Vertical connecting line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-accent/10" aria-hidden="true" />

          {steps.items.map((step, idx) => (
            <AnimatedSection key={step.id} delay={idx * 150}>
              <li className={`relative flex gap-5 sm:gap-8 ${idx < steps.items.length - 1 ? 'pb-10 sm:pb-14' : ''}`}>
                {/* Circle node */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent text-white flex items-center justify-center shadow-xl">
                    {iconMap[step.icon] || <span>{idx + 1}</span>}
                  </div>
                  <span className="absolute -top-1 -right-1 bg-primary text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs font-bold flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1 sm:pt-2">
                  <h3 className="text-lg sm:text-2xl font-bold text-accent mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-text-muted text-xs sm:text-base leading-relaxed">{step.description}</p>
                </div>
              </li>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── Main Steps component ───

const Steps: React.FC = () => {
  const { content } = useConfig();
  const variant = content.layout?.steps ?? 'steps-a';

  if (variant === 'steps-b') return <StepsB />;
  return <StepsA />;
};

export default Steps;
