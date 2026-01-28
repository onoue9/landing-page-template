// Form validation utilities

export interface ValidationErrors {
  [key: string]: string | undefined;
}

export const validateName = (value: string): string | undefined => {
  return value.trim().length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : undefined;
};

export const validatePhone = (value: string): string | undefined => {
  const digits = value.replace(/\D/g, '');
  return digits.length < 10 ? 'WhatsApp inválido' : undefined;
};

export const validateEmail = (value: string): string | undefined => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return !isValid ? 'E-mail inválido' : undefined;
};

export const validateCity = (value: string): string | undefined => {
  return value.trim().length < 3 ? 'Cidade/UF inválido' : undefined;
};

export const validateField = (name: string, value: string): string | undefined => {
  switch (name) {
    case 'nome':
      return validateName(value);
    case 'whatsapp':
      return validatePhone(value);
    case 'email':
      return validateEmail(value);
    case 'cidade_estado':
      return validateCity(value);
    default:
      return undefined;
  }
};

export const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

export const isValidPhone = (value: string): boolean => {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10;
};
