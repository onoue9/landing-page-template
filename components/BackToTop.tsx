'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 bg-accent hover:bg-primary text-white p-3 sm:p-3.5 rounded-full shadow-xl transition-all active:scale-90 opacity-80 hover:opacity-100"
      aria-label="Voltar ao topo da página"
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
