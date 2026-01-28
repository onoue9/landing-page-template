'use client';

import { useState, useCallback } from 'react';
import { validateField, formatPhone } from '@/lib/validation';

export interface LeadFormData {
  nome: string;
  whatsapp: string;
  email: string;
  cidade_estado: string;
  tipo_plano: string;
  vidas: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface UseLeadFormReturn {
  formData: LeadFormData;
  phone: string;
  status: FormStatus;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  getInputClassName: (field: string) => string;
}

const initialFormData: LeadFormData = {
  nome: '',
  whatsapp: '',
  email: '',
  cidade_estado: '',
  tipo_plano: '',
  vidas: '1'
};

export function useLeadForm(): UseLeadFormReturn {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error || '' }));
    }
  }, [touched]);

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    setFormData(prev => ({ ...prev, whatsapp: formatted }));
    if (touched.whatsapp) {
      const error = validateField('whatsapp', formatted);
      setErrors(prev => ({ ...prev, whatsapp: error || '' }));
    }
  }, [touched.whatsapp]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error || '' }));
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};
    const fields = ['nome', 'whatsapp', 'email', 'cidade_estado'];
    fields.forEach(field => {
      const value = field === 'whatsapp' ? phone : formData[field as keyof LeadFormData];
      const error = validateField(field, value);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    setTouched({ nome: true, whatsapp: true, email: true, cidade_estado: true });
    return Object.keys(newErrors).length === 0;
  }, [formData, phone]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus('submitting');
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "leads-saude",
          ...formData
        }).toString(),
      });

      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'lead_form_submit'
        });
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, [formData, validateForm]);

  const getInputClassName = useCallback((field: string): string => {
    const hasError = touched[field] && errors[field];
    return `w-full px-5 py-4 rounded-xl border ${hasError ? 'border-red-400 focus:ring-red-500' : 'border-accent/10 focus:ring-primary'} focus:ring-2 focus:border-transparent outline-none transition-all text-accent text-sm sm:text-base`;
  }, [touched, errors]);

  return {
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
  };
}
