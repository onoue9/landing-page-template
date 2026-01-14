
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">Diferenciais que importam.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-lg">
            Consultoria estratégica para que você nunca pague mais do que o necessário.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="group p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 border border-slate-100 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-sm flex items-center justify-center text-2xl sm:text-3xl mb-5 sm:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-4">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed text-xs sm:text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
