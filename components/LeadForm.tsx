'use client';

import React, { useState, useCallback } from 'react';

// Função para formatar telefone: (00) 00000-0000
const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

// Validação de email
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Validação de telefone (mínimo 10 dígitos)
const isValidPhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
};

type FormErrors = {
  nome?: string;
  whatsapp?: string;
  email?: string;
  cidade_estado?: string;
};

const LeadForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  }, []);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'nome':
        return value.trim().length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : undefined;
      case 'whatsapp':
        return !isValidPhone(value) ? 'WhatsApp inválido' : undefined;
      case 'email':
        return !isValidEmail(value) ? 'E-mail inválido' : undefined;
      case 'cidade_estado':
        return value.trim().length < 3 ? 'Informe cidade e estado' : undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Validar todos os campos
    const newErrors: FormErrors = {};
    formData.forEach((value, key) => {
      if (['nome', 'whatsapp', 'email', 'cidade_estado'].includes(key)) {
        const error = validateField(key, value.toString());
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ nome: true, whatsapp: true, email: true, cidade_estado: true });
      return;
    }

    setStatus('submitting');

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      // Tracking: disparar evento de conversão
      // TODO: Integrar com GA4/GTM quando configurado
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'lead_form_submit'
        });
      }
      
      setStatus('success');
      form.reset();
      setPhone('');
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const inputClassName = (fieldName: keyof FormErrors) => `
    w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 
    ${touched[fieldName] && errors[fieldName] ? 'border-red-400 bg-red-50/30' : 'border-transparent'} 
    focus:border-blue-500 focus:bg-white outline-none transition-all text-sm sm:text-base
  `;

  if (status === 'success') {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl text-center border border-green-100 animate-in fade-in zoom-in duration-500" role="alert" aria-live="polite">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl sm:text-4xl" aria-hidden="true">✓</div>
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
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-50 rounded-bl-full opacity-50" aria-hidden="true"></div>
      
      <div className="relative z-10">
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <h2 id="form-heading" className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 tracking-tight">Receba seu comparativo agora</h2>
          <p id="form-description" className="text-slate-500 text-sm sm:text-lg">Preencha e receba a melhor oferta no seu WhatsApp.</p>
        </div>

        <form 
          name="leads-saude" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit}
          className="flex flex-col sm:grid sm:grid-cols-2 gap-y-5 sm:gap-x-8 sm:gap-y-6"
          aria-labelledby="form-heading"
          aria-describedby="form-description"
          noValidate
        >
          <input type="hidden" name="form-name" value="leads-saude" />
          
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="nome" className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
            <input 
              type="text" 
              id="nome"
              name="nome" 
              required 
              aria-required="true"
              aria-invalid={touched.nome && !!errors.nome}
              aria-describedby={errors.nome ? 'nome-error' : undefined}
              placeholder="Digite seu nome"
              className={inputClassName('nome')}
              onBlur={handleBlur}
            />
            {touched.nome && errors.nome && (
              <p id="nome-error" className="text-red-500 text-xs mt-1 ml-1">{errors.nome}</p>
            )}
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="whatsapp" className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label>
            <input 
              type="tel" 
              id="whatsapp"
              name="whatsapp" 
              required 
              aria-required="true"
              aria-invalid={touched.whatsapp && !!errors.whatsapp}
              aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handleBlur}
              className={inputClassName('whatsapp')}
            />
            {touched.whatsapp && errors.whatsapp && (
              <p id="whatsapp-error" className="text-red-500 text-xs mt-1 ml-1">{errors.whatsapp}</p>
            )}
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="email" className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              required 
              aria-required="true"
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="exemplo@email.com"
              className={inputClassName('email')}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
            )}
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="cidade_estado" className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Cidade / UF</label>
            <input 
              type="text" 
              id="cidade_estado"
              name="cidade_estado" 
              required 
              aria-required="true"
              aria-invalid={touched.cidade_estado && !!errors.cidade_estado}
              aria-describedby={errors.cidade_estado ? 'cidade-error' : undefined}
              placeholder="Ex: São Paulo, SP"
              className={inputClassName('cidade_estado').replace('px-5', 'px-6')}
              onBlur={handleBlur}
            />
            {touched.cidade_estado && errors.cidade_estado && (
              <p id="cidade-error" className="text-red-500 text-xs mt-1 ml-1">{errors.cidade_estado}</p>
            )}
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="tipo_plano" className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Perfil do Plano</label>
            <div className="relative">
              <select 
                id="tipo_plano"
                name="tipo_plano" 
                className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer text-sm sm:text-base"
              >
                <option value="Individual">Individual / Autônomo</option>
                <option value="Familiar">Familiar</option>
                <option value="Empresarial">Empresarial / MEI</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="vidas" className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Vidas</label>
            <input 
              type="number" 
              id="vidas"
              name="vidas" 
              min="1"
              defaultValue="1"
              className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all text-sm sm:text-base"
            />
          </div>

          <div className="md:col-span-2 mt-4 sm:mt-6">
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-black py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-100 transition-all active:scale-95 disabled:active:scale-100 text-sm sm:text-lg uppercase tracking-wider flex items-center justify-center gap-3"
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
                'Gerar Cotação Agora'
              )}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center mt-3">Erro ao enviar. Tente novamente.</p>
            )}
            <p className="flex items-center justify-center gap-2 mt-4 text-[9px] text-slate-400 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              DADOS PROTEGIDOS POR CRIPTOGRAFIA
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;