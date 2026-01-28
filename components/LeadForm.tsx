'use client';

import React from 'react';
import { content } from '@/lib/config';
import { useLeadForm } from '@/hooks/useLeadForm';

const LeadForm: React.FC = () => {
  const { form } = content;
  const {
    formData,
    phone,
    status,
    errors,
    touched,
    handleChange,
    handlePhoneChange,
    handleBlur,
    handleSubmit,
    getInputClassName,
  } = useLeadForm();

  if (status === 'success') {
    return (
      <div className="bg-surface rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-accent/5 text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-accent mb-2">{form.successTitle}</h3>
        <p className="text-text-muted text-sm sm:text-base">{form.successMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-accent/5">
      <div className="text-center mb-8 sm:mb-10">
        <h3 className="text-xl sm:text-3xl font-black text-accent mb-2 tracking-tight">{form.title}</h3>
        <p className="text-text-muted text-xs sm:text-base">{form.subtitle}</p>
      </div>
      
      <form 
        name="leads-saude" 
        method="POST" 
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-5"
        noValidate
      >
        <input type="hidden" name="form-name" value="leads-saude" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>
        
        <div>
          <label htmlFor="nome" className="sr-only">Nome completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome completo"
            value={formData.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('nome')}
            aria-required="true"
            aria-invalid={touched.nome && !!errors.nome}
            aria-describedby={errors.nome ? 'nome-error' : undefined}
          />
          {touched.nome && errors.nome && (
            <p id="nome-error" className="text-red-500 text-xs mt-1 ml-1">{errors.nome}</p>
          )}
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="whatsapp" className="sr-only">WhatsApp</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handleBlur}
              className={getInputClassName('whatsapp')}
              aria-required="true"
              aria-invalid={touched.whatsapp && !!errors.whatsapp}
              aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
            />
            {touched.whatsapp && errors.whatsapp && (
              <p id="whatsapp-error" className="text-red-500 text-xs mt-1 ml-1">{errors.whatsapp}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu melhor e-mail"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName('email')}
              aria-required="true"
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {touched.email && errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="cidade_estado" className="sr-only">Cidade e Estado</label>
          <input
            type="text"
            id="cidade_estado"
            name="cidade_estado"
            placeholder="Cidade / UF"
            value={formData.cidade_estado}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('cidade_estado')}
            aria-required="true"
            aria-invalid={touched.cidade_estado && !!errors.cidade_estado}
            aria-describedby={errors.cidade_estado ? 'cidade-error' : undefined}
          />
          {touched.cidade_estado && errors.cidade_estado && (
            <p id="cidade-error" className="text-red-500 text-xs mt-1 ml-1">{errors.cidade_estado}</p>
          )}
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="tipo_plano" className="sr-only">Tipo de Plano</label>
            <select
              id="tipo_plano"
              name="tipo_plano"
              value={formData.tipo_plano}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-accent/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-surface text-accent text-sm sm:text-base"
            >
              <option value="">Tipo de plano</option>
              <option value="individual">Individual / Autônomo</option>
              <option value="familiar">Familiar</option>
              <option value="empresarial">Empresarial / MEI</option>
            </select>
          </div>
          <div>
            <label htmlFor="vidas" className="sr-only">Quantidade de Vidas</label>
            <input
              type="number"
              id="vidas"
              name="vidas"
              placeholder="Quantidade de vidas"
              min="1"
              value={formData.vidas}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-accent/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-accent text-sm sm:text-base"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full mt-4 bg-primary hover:bg-primary-hover disabled:bg-text-muted text-white py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            form.submitButton
          )}
        </button>
        
        {status === 'error' && (
          <p className="text-red-500 text-sm text-center mt-3">Erro ao enviar. Tente novamente.</p>
        )}
        
        <p className="text-center text-text-muted text-[10px] sm:text-xs mt-4">
          Ao enviar, você concorda com nossa{' '}
          <a href="/privacidade" className="underline hover:text-accent">Política de Privacidade</a>.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;