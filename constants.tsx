
import React from 'react';
import { Benefit, PlanType, Testimonial } from './types';

export const WHATSAPP_NUMBER = "5521972923224"; // Número atualizado: +55 21 97292-3224
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de uma cotação de plano de saúde.`;

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Economia Garantida",
    description: "Analisamos o mercado para encontrar o melhor custo-benefício para sua necessidade.",
    icon: "💰"
  },
  {
    id: 2,
    title: "Atendimento Personalizado",
    description: "Um especialista dedicado para entender seu perfil e tirar todas as suas dúvidas.",
    icon: "🤝"
  },
  {
    id: 3,
    title: "Comparação de Planos",
    description: "Comparamos as principais operadoras do Brasil em uma única apresentação clara.",
    icon: "📊"
  },
  {
    id: 4,
    title: "Suporte Completo",
    description: "Assessoria técnica e jurídica antes, durante e após o fechamento do contrato.",
    icon: "🚀"
  }
];

export const PLAN_TYPES: PlanType[] = [
  {
    id: 1,
    title: "Individual / Autônomo",
    description: "Planos pensados para você que busca segurança e rede de atendimento de qualidade.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Familiar",
    description: "Proteção para quem você mais ama com descontos progressivos por dependente.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Empresarial / MEI",
    description: "A partir de 2 vidas. Redução de até 40% nos custos em relação ao plano individual.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=800"
  }
];

export const OPERATORS = [
  { name: "Unimed", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_Unimed.svg" },
  { name: "Amil", logoUrl: "https://logodownload.org/wp-content/uploads/2014/10/amil-logo.png" },
  { name: "Bradesco Saúde", logoUrl: "https://logodownload.org/wp-content/uploads/2014/10/bradesco-saude-logo.png" },
  { name: "SulAmérica", logoUrl: "https://logodownload.org/wp-content/uploads/2014/05/sulamerica-logo.png" },
  { name: "Porto Seguro", logoUrl: "https://logodownload.org/wp-content/uploads/2014/10/porto-seguro-logo.png" },
  { name: "Hapvida", logoUrl: "https://logodownload.org/wp-content/uploads/2019/02/hapvida-logo.png" },
  { name: "NotreDame Intermédica", logoUrl: "https://logodownload.org/wp-content/uploads/2019/07/notredame-intermedica-logo.png" },
  { name: "Prevent Senior", logoUrl: "https://logodownload.org/wp-content/uploads/2021/04/prevent-senior-logo.png" },
  { name: "Omint", logoUrl: "https://www.omint.com.br/wp-content/themes/omint-theme/assets/img/omint-logo.png" },
  { name: "Sami", logoUrl: "https://samisaude.com.br/wp-content/uploads/2020/10/Logo-Sami-Saude-01-1.png" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "Empresário",
    content: "Consegui reduzir o custo do plano de saúde da minha empresa em 30% mantendo a mesma rede de hospitais. O atendimento foi impecável.",
    rating: 5
  },
  {
    id: 2,
    name: "Cláudia Oliveira",
    role: "Profissional Liberal",
    content: "Estava perdida com tantas opções. A corretora me explicou as carências e coberturas de forma simples. Recomendo muito!",
    rating: 5
  },
  {
    id: 3,
    name: "Marcos Silva",
    role: "Pai de Família",
    content: "Excelente suporte no pós-venda. Tive um problema com um boleto e a corretora resolveu tudo rapidamente com a operadora.",
    rating: 5
  }
];
