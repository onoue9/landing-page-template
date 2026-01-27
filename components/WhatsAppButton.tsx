'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/config';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white p-3.5 sm:p-4 rounded-full shadow-xl transition-all active:scale-90 flex items-center gap-2 group"
      aria-label="Falar conosco via WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" aria-hidden="true" />
      <span className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-semibold text-sm">
        Falar agora
      </span>
    </a>
  );
};

export default WhatsAppButton;