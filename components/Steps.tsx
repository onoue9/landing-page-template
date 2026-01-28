'use client';

import React from 'react';
import { Search, FileCheck, PartyPopper } from 'lucide-react';
import { content } from '@/lib/config';

const iconMap: Record<string, React.ReactNode> = {
  search: <Search className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />,
  'file-check': <FileCheck className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />,
  party: <PartyPopper className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />,
};

const Steps: React.FC = () => {
  const { steps } = content;
  
  return (
    <section className="py-20 sm:py-32 bg-surface relative overflow-hidden" aria-labelledby="steps-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 id="steps-heading" className="text-2xl sm:text-5xl font-extrabold text-accent mb-4 sm:mb-6 tracking-tight">{steps.title}</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-lg">{steps.subtitle}</p>
        </div>
        
        <ol className="grid lg:grid-cols-3 gap-8 sm:gap-16 relative list-none">
          <div className="hidden lg:block absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-accent/5 -z-10" aria-hidden="true"></div>
          
          {steps.items.map((step, idx) => (
            <li key={step.id} className="text-center relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-6 sm:mb-8 relative shadow-xl">
                {iconMap[step.icon] || <span>{idx + 1}</span>}
                <span className="absolute -top-2 -right-2 bg-primary text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center shadow-lg">
                  {idx + 1}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-accent mb-3 sm:mb-4">{step.title}</h3>
              <p className="text-text-muted text-xs sm:text-base leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Steps;
