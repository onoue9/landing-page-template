
import React from 'react';
import { TESTIMONIALS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que dizem nossos clientes</h2>
          <div className="flex justify-center gap-1 text-yellow-400 text-2xl mb-2" role="img" aria-label="Avaliação 5 de 5 estrelas">
            {"★★★★★".split("").map((s, i) => <span key={i} aria-hidden="true">{s}</span>)}
          </div>
          <p className="text-slate-600">Nota 4.9/5 baseada em avaliações reais.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8" role="list">
          {TESTIMONIALS.map((t) => (
            <article key={t.id} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full" role="listitem">
              <div className="text-blue-600 text-4xl mb-4 font-serif" aria-hidden="true">"</div>
              <blockquote className="text-slate-700 italic flex-grow mb-6">{t.content}</blockquote>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700" aria-hidden="true">
                  {t.name[0]}
                </div>
                <div>
                  <cite className="font-bold text-slate-900 text-sm not-italic">{t.name}</cite>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

