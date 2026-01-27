'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    question: "Como funcionam os períodos de carência?",
    answer: "Os períodos variam por operadora e procedimento. Urgências têm 24h. Consultas e exames simples geralmente 30 dias. Parto 300 dias. Doenças preexistentes 24 meses. Em casos de portabilidade, é possível reduzir a zero."
  },
  {
    question: "O que é coparticipação?",
    answer: "É uma modalidade onde você paga uma mensalidade menor, e uma pequena taxa quando utiliza consultas ou exames. Ideal para quem usa pouco o plano e quer economizar no custo fixo."
  },
  {
    question: "Posso incluir dependentes no plano empresarial?",
    answer: "Sim! Cônjuges e filhos podem ser incluídos na maioria dos contratos empresariais ou MEI, aproveitando as mesmas tabelas de preços reduzidas."
  },
  {
    question: "Atendem em todo o Brasil?",
    answer: "Depende da abrangência do plano escolhido (Regional ou Nacional). Trabalhamos com todas as opções para adequar à sua necessidade de deslocamento."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl font-extrabold text-slate-900 mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-500">Tudo o que você precisa saber antes de contratar.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <h3>
                <button
                  type="button"
                  className="w-full p-6 flex justify-between items-center gap-4 text-left hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-button-${idx}`}
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                  {openIndex === idx ? <ChevronUp className="text-blue-600 flex-shrink-0" aria-hidden="true" /> : <ChevronDown className="text-slate-400 flex-shrink-0" aria-hidden="true" />}
                </button>
              </h3>
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-button-${idx}`}
                hidden={openIndex !== idx}
              >
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

