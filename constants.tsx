
import React from 'react';
import { Benefit, PlanType, Testimonial } from './types';

export const WHATSAPP_NUMBER = "5521972923224"; // Número atualizado: +55 21 97292-3224
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de uma cotação de plano de saúde.`;

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Economia Garantida",
    description: "Analisamos o mercado para encontrar o melhor custo-benefício para sua necessidade.",
    icon: "wallet"
  },
  {
    id: 2,
    title: "Atendimento Personalizado",
    description: "Um especialista dedicado para entender seu perfil e tirar todas as suas dúvidas.",
    icon: "user"
  },
  {
    id: 3,
    title: "Comparação de Planos",
    description: "Comparamos as principais operadoras do Brasil em uma única apresentação clara.",
    icon: "chart"
  },
  {
    id: 4,
    title: "Suporte Completo",
    description: "Assessoria técnica e jurídica antes, durante e após o fechamento do contrato.",
    icon: "shield"
  }
];

export const PLAN_TYPES: PlanType[] = [
  {
    id: 1,
    title: "Individual / Autônomo",
    description: "Planos pensados para você que busca segurança e rede de atendimento de qualidade.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Familiar",
    description: "Proteção para quem você mais ama com descontos progressivos por dependente.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Empresarial / MEI",
    description: "A partir de 2 vidas. Redução de até 40% nos custos em relação ao plano individual.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
  }
];

export const OPERATORS = [
  { name: "Unimed", logoUrl: "/logos/unimed.svg" },
  { name: "Amil", logoUrl: "/logos/amil.svg" },
  { name: "Bradesco Saúde", logoUrl: "/logos/bradesco.svg" },
  { name: "SulAmérica", logoUrl: "/logos/sulamerica.svg" },
  { name: "Porto Seguro", logoUrl: "/logos/porto.svg" },
  { name: "Hapvida", logoUrl: "/logos/hapvida.png" },
  { name: "NotreDame Intermédica", logoUrl: "/logos/notredame.svg" },
  { name: "Prevent Senior", logoUrl: "/logos/prevent.png" },
  { name: "Omint", logoUrl: "/logos/omint.svg" },
  { name: "Sami", logoUrl: "/logos/sami.svg" }
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
