
import React from 'react';
import { Search, FileCheck, PartyPopper } from 'lucide-react';

const Steps: React.FC = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="steps-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="steps-heading" className="text-3xl font-extrabold text-slate-900 mb-4">Como funciona?</h2>
          <p className="text-slate-500">Contratar seu plano nunca foi tão simples.</p>
        </div>

        <ol className="grid md:grid-cols-3 gap-8 relative list-none">
          <div className="hidden md:block absolute top-[2.5rem] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 -z-10 bg-[length:200%_auto] animate-shimmer" aria-hidden="true"></div>

          {[
            { 
              icon: <Search className="w-8 h-8" aria-hidden="true" />, 
              title: "1. Simulação", 
              desc: "Você preenche seus dados e nossa IA identifica as melhores opções para o seu perfil."
            },
            { 
              icon: <FileCheck className="w-8 h-8" aria-hidden="true" />, 
              title: "2. Análise", 
              desc: "Um consultor especialista refina a proposta e tira todas as suas dúvidas."
            },
            { 
              icon: <PartyPopper className="w-8 h-8" aria-hidden="true" />, 
              title: "3. Contratação", 
              desc: "Processo 100% digital, sem burocracia e com total segurança."
            }
          ].map((step, i) => (
            <li key={i} className="flex flex-col items-center text-center bg-white">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 mb-6 rotate-3 hover:rotate-6 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Steps;

