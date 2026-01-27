
import React from 'react';
import Image from 'next/image';
import { content } from '@/lib/config';

const PlanTypes: React.FC = () => {
  const { planTypes } = content;
  
  return (
    <section id="planos" className="py-20 sm:py-32 bg-slate-50 relative" aria-labelledby="plans-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 id="plans-heading" className="text-2xl sm:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">{planTypes.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-lg">{planTypes.subtitle}</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-10" role="list">
          {planTypes.items.map((plan) => (
            <article key={plan.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm flex flex-col group border border-slate-100 transition-all active:scale-[0.98]" role="listitem" aria-labelledby={`plan-${plan.id}`}>
              <div className="h-48 sm:h-64 overflow-hidden relative">
                <Image 
                  src={plan.image} 
                  alt={plan.imageAlt} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 sm:p-10 flex flex-col flex-grow">
                <h3 id={`plan-${plan.id}`} className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight">{plan.title}</h3>
                <p className="text-slate-500 mb-6 sm:mb-8 flex-grow leading-relaxed text-xs sm:text-base">{plan.description}</p>
                <a 
                  href="#contato" 
                  className="w-full text-center py-3.5 sm:py-4 bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-900 font-bold rounded-xl transition-all text-xs sm:text-sm border border-slate-100"
                  aria-label={`Solicitar cotação para plano ${plan.title}`}
                >
                  Cotar este Plano
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanTypes;
