
import React from 'react';
import { Wallet, UserCheck, BarChart, ShieldCheck } from 'lucide-react';
import { content } from '@/lib/config';

const iconMap: Record<string, React.ReactNode> = {
  wallet: <Wallet className="w-8 h-8" aria-hidden="true" />,
  user: <UserCheck className="w-8 h-8" aria-hidden="true" />,
  chart: <BarChart className="w-8 h-8" aria-hidden="true" />,
  shield: <ShieldCheck className="w-8 h-8" aria-hidden="true" />,
};

const Benefits: React.FC = () => {
  const { benefits } = content;
  
  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-surface relative" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 id="benefits-heading" className="text-2xl sm:text-5xl font-extrabold text-accent mb-4 sm:mb-6 tracking-tight">{benefits.title}</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-lg">{benefits.subtitle}</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list">
          {benefits.items.map((benefit) => (
            <article key={benefit.id} className="bg-background p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center border border-accent/5 hover:border-accent/10 hover:shadow-lg transition-all" role="listitem" aria-labelledby={`benefit-${benefit.id}`}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 text-primary shadow-sm">
                {iconMap[benefit.icon] || <span aria-hidden="true">✨</span>}
              </div>
              <h3 id={`benefit-${benefit.id}`} className="text-base sm:text-lg font-bold text-accent mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
