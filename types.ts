
export interface FormData {
  nome: string;
  whatsapp: string;
  email: string;
  cidade_estado: string;
  tipo_plano: string;
  vidas: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PlanType {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
