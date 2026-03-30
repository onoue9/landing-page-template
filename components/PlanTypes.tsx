
'use client';

import React from 'react';
import Image from 'next/image';
import { useConfig } from '@/contexts/ConfigContext';
import AnimatedSection from './ui/AnimatedSection';

const PlanTypes: React.FC = () => {
  const { content } = useConfig();
  const { planTypes } = content;

  return (
    <section id="planos" className="py-20 sm:py-32 bg-background relative" aria-labelledby="plans-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-4">
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <h2 id="plans-heading" className="text-2xl sm:text-5xl font-extrabold text-accent mb-4 sm:mb-6 tracking-tight">
            {planTypes.title}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-lg">{planTypes.subtitle}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-10" role="list">
          {planTypes.items.map((plan, i) => (
            <AnimatedSection key={plan.id} delay={i * 150}>
              <article
                className="bg-surface rounded-[2rem] overflow-hidden shadow-sm flex flex-col group border border-accent/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                role="listitem"
                aria-labelledby={`plan-${plan.id}`}
              >
                <div className="h-48 sm:h-64 overflow-hidden relative">
                  <Image
                    src={plan.image}
                    alt={plan.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-10 flex flex-col flex-grow">
                  <h3 id={`plan-${plan.id}`} className="text-xl sm:text-2xl font-black text-accent mb-3 sm:mb-4 tracking-tight">
                    {plan.title}
                  </h3>
                  <p className="text-text-muted mb-6 sm:mb-8 flex-grow leading-relaxed text-xs sm:text-base">
                    {plan.description}
                  </p>
                  <a
                    href="#contato"
                    className="w-full text-center py-3.5 sm:py-4 bg-background hover:bg-primary hover:text-white text-accent font-bold rounded-xl transition-all text-xs sm:text-sm border border-accent/5"
                    aria-label={`Solicitar cotação para plano ${plan.title}`}
                  >
                    Cotar este Plano
                  </a>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanTypes;
