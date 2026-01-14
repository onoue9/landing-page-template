'use client';

import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl text-center border border-green-100 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl sm:text-4xl">✓</div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">Cotação Enviada!</h3>
        <p className="text-slate-600 mb-8 text-sm sm:text-lg leading-relaxed px-4">Entraremos em contato via WhatsApp em instantes.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors active:scale-95"
        >
          Novo Pedido
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-50 rounded-bl-full opacity-50"></div>
      
      <div className="relative z-10">
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 tracking-tight">Receba seu comparativo agora</h2>
          <p className="text-slate-500 text-sm sm:text-lg">Preencha e receba a melhor oferta no seu WhatsApp.</p>
        </div>

        <form 
          name="leads-saude" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit}
          className="flex flex-col sm:grid sm:grid-cols-2 gap-y-5 sm:gap-x-8 sm:gap-y-6"
        >
          <input type="hidden" name="form-name" value="leads-saude" />
          
          <div className="space-y-1 sm:space-y-2">
            <label className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
            <input 
              type="text" 
              name="nome" 
              required 
              placeholder="Digite seu nome"
              className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all text-sm sm:text-base"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label>
            <input 
              type="tel" 
              name="whatsapp" 
              required 
              placeholder="(00) 00000-0000"
              className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all text-sm sm:text-base"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="exemplo@email.com"
              className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all text-sm sm:text-base"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Cidade / UF</label>
            <input 
              type="text" 
              name="cidade_estado" 
              required 
              placeholder="Ex: São Paulo, SP"
              className="w-full px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all text-sm sm:text-base"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Perfil do Plano</label>
            <div className="relative">
              <select 
                name="tipo_plano" 
                className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer text-sm sm:text-base"
              >
                <option value="Individual">Individual / Autônomo</option>
                <option value="Familiar">Familiar</option>
                <option value="Empresarial">Empresarial / MEI</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Vidas</label>
            <input 
              type="number" 
              name="vidas" 
              min="1"
              defaultValue="1"
              className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all text-sm sm:text-base"
            />
          </div>

          <div className="md:col-span-2 mt-4 sm:mt-6">
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-100 transition-all active:scale-95 text-sm sm:text-lg uppercase tracking-wider"
            >
              Gerar Cotação Agora
            </button>
            <p className="flex items-center justify-center gap-2 mt-4 text-[9px] text-slate-400 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              DADOS PROTEGIDOS POR CRIPTOGRAFIA
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;