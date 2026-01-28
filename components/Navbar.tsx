'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { site, getWhatsAppLink } from '@/lib/config';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 px-3 sm:px-4 py-3 sm:py-4 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : ''}`}>
      <nav className={`max-w-6xl mx-auto ${scrolled ? '' : 'bg-white/60 backdrop-blur-lg'} rounded-2xl sm:rounded-full py-2.5 sm:py-3 px-4 sm:px-6 shadow-lg border border-white/20`} aria-label="Navegação principal">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label={`${site.company.name} - Página inicial`}>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm" aria-hidden="true">{site.company.name.charAt(0)}</div>
            <span className="text-base sm:text-lg font-bold text-accent tracking-tight">{site.company.name.split('Pro')[0]}<span className="text-primary">Pro</span></span>
          </a>
          
          <ul className="hidden md:flex items-center gap-6 lg:gap-10" role="list">
            <li><a href="#beneficios" className="text-text-muted hover:text-accent font-semibold text-sm transition-colors">Benefícios</a></li>
            <li><a href="#planos" className="text-text-muted hover:text-accent font-semibold text-sm transition-colors">Planos</a></li>
            <li><a href="#faq" className="text-text-muted hover:text-accent font-semibold text-sm transition-colors">FAQ</a></li>
          </ul>
          
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={getWhatsAppLink()}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md transition-all flex items-center gap-2 active:scale-95"
              aria-label="Falar com especialista via WhatsApp"
            >
              Falar com especialista
            </a>
          </div>
          
          <button 
            className="md:hidden p-1.5" 
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-accent/10 mt-3" role="navigation" aria-label="Menu mobile">
            <ul className="flex flex-col gap-3" role="list">
              <li><a href="#beneficios" className="block py-2 text-text-muted font-semibold" onClick={() => setMobileMenuOpen(false)}>Benefícios</a></li>
              <li><a href="#planos" className="block py-2 text-text-muted font-semibold" onClick={() => setMobileMenuOpen(false)}>Planos</a></li>
              <li><a href="#faq" className="block py-2 text-text-muted font-semibold" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
              <li>
                <a 
                  href={getWhatsAppLink()}
                  className="mt-2 block w-full bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold text-center"
                  aria-label="Falar com especialista via WhatsApp"
                >
                  Falar com especialista
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;