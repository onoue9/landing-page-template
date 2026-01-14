
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const CTASection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-5xl font-extrabold mb-4 sm:mb-8 leading-tight px-2">Sua saúde não pode esperar mais.</h2>
          <p className="text-slate-300 text-sm sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            As tabelas de preços sofrem reajustes frequentes. Garanta agora as condições atuais e economize de verdade.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white text-base sm:text-xl font-bold py-5 sm:py-6 px-8 sm:px-12 rounded-2xl transition-all active:scale-95 shadow-xl shadow-green-900/20"
            >
              Falar com Especialista
              <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] animate-pulse">Online</span>
            </a>
            <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Cotação 100% gratuita</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
