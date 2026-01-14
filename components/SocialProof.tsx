
import React from 'react';
import { TESTIMONIALS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que dizem nossos clientes</h2>
          <div className="flex justify-center gap-1 text-yellow-400 text-2xl mb-2">
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <p className="text-slate-600">Nota 4.9/5 baseada em avaliações reais.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full">
              <div className="text-blue-600 text-4xl mb-4 font-serif">“</div>
              <p className="text-slate-700 italic flex-grow mb-6">{t.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
