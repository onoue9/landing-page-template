'use client';

import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] sm:w-[95%] max-w-7xl">
      <div className="bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between transition-all">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
          </div>
          <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tighter">SAÚDE<span className="text-blue-600">PRO</span></span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <a href="#beneficios" className="hover:text-blue-600 transition-colors">Diferenciais</a>
          <a href="#planos" className="hover:text-blue-600 transition-colors">Categorias</a>
          <a href="#contato" className="hover:text-blue-600 transition-colors">Solicitar Cotação</a>
        </div>

        <div className="flex items-center gap-2">
          <a 
            href={WHATSAPP_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-lg shadow-green-100 transition-all active:scale-95"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;