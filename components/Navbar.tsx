'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/config';
import { useConfig } from '@/contexts/ConfigContext';
import BrandLogo from '@/components/ui/BrandLogo';

const Navbar: React.FC = () => {
  const { site } = useConfig();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waLink = buildWhatsAppLink(site.company.whatsapp, site.company.whatsappMessage);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 px-3 sm:px-4 py-3 sm:py-4 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : ''}`}>
      <nav className={`max-w-6xl mx-auto ${scrolled ? '' : 'bg-white/60 backdrop-blur-lg'} rounded-2xl sm:rounded-full py-2.5 sm:py-3 px-4 sm:px-6 shadow-lg border border-white/20`} aria-label="Navegação principal">
        <div className="flex items-center justify-between">
          <a href="/" aria-label={`${site.company.name} - Página inicial`}>
            <BrandLogo size="sm" />
          </a>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-8" role="list">
            {site.nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-text-muted hover:text-accent font-semibold text-sm transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={waLink}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md transition-all flex items-center gap-2 active:scale-95"
              aria-label={`${site.nav.cta} via WhatsApp`}
            >
              {site.nav.cta}
            </a>
          </div>

          <button
            className="lg:hidden p-1.5"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-accent/10 mt-3" role="navigation" aria-label="Menu mobile">
            <ul className="flex flex-col gap-3" role="list">
              {site.nav.mobileLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-text-muted font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={waLink}
                  className="mt-2 block w-full bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold text-center"
                  aria-label={`${site.nav.cta} via WhatsApp`}
                >
                  {site.nav.cta}
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
