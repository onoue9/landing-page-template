'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { content } from '@/lib/config';

const FAQ: React.FC = () => {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-background" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="faq-heading" className="text-2xl sm:text-5xl font-extrabold text-accent tracking-tight mb-4">{faq.title}</h2>
          <p className="text-text-muted text-sm sm:text-lg">{faq.subtitle}</p>
        </div>
        
        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <div key={index} className="bg-surface rounded-2xl sm:rounded-3xl overflow-hidden border border-accent/5 shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 sm:p-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <h3 className="font-bold text-accent text-sm sm:text-lg pr-4">{item.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-text-muted transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                aria-hidden={openIndex !== index}
              >
                <p className="px-5 pb-5 sm:px-8 sm:pb-8 text-text-muted text-xs sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
