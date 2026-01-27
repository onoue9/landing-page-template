
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
    <section id="beneficios" className="py-20 sm:py-32 bg-white relative" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 id="benefits-heading" className="text-2xl sm:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">{benefits.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-lg">{benefits.subtitle}</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list">
          {benefits.items.map((benefit) => (
            <article key={benefit.id} className="bg-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all" role="listitem" aria-labelledby={`benefit-${benefit.id}`}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 text-blue-600 shadow-sm">
                {iconMap[benefit.icon] || <span aria-hidden="true">✨</span>}
              </div>
              <h3 id={`benefit-${benefit.id}`} className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
