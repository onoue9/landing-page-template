'use client';

import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all group animate-float"
      aria-label="Contato via WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        fill="currentColor"
        className="drop-shadow-sm"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.002 12.048c0 2.12.54 4.189 1.57 6.05L0 24l6.095-1.599a11.77 11.77 0 005.949 1.617h.005c6.636 0 12.046-5.411 12.048-12.047 0-3.213-1.25-6.234-3.522-8.507"/>
      </svg>
      <span className="absolute -top-12 right-0 bg-white text-slate-800 text-xs font-bold py-2 px-3 rounded-lg shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Clique para conversar!
      </span>
    </a>
  );
};

export default WhatsAppButton;