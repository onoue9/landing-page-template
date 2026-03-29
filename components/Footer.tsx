'use client';

import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/config';
import { useConfig } from '@/contexts/ConfigContext';
import BrandLogo from '@/components/ui/BrandLogo';

const Footer: React.FC = () => {
  const { site } = useConfig();
  const currentYear = new Date().getFullYear();
  const waLink = buildWhatsAppLink(site.company.whatsapp, site.company.whatsappMessage);

  const socialLinks = [
    site.social.instagram && { href: site.social.instagram, icon: Instagram, label: 'Instagram' },
    site.social.facebook && { href: site.social.facebook, icon: Facebook, label: 'Facebook' },
    site.social.linkedin && { href: site.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  ].filter(Boolean) as Array<{ href: string; icon: React.ElementType; label: string }>;

  return (
    <footer className="bg-surface border-t border-accent/10 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <BrandLogo size="lg" />
            </div>
            <p className="text-text-muted text-sm mb-6">{site.company.tagline}</p>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent/5 hover:bg-primary hover:text-white rounded-full flex items-center justify-center text-text-muted transition-all"
                    aria-label={`Seguir no ${social.label}`}
                  >
                    <social.icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Site Map */}
          <nav aria-label="Mapa do site">
            <h4 className="font-bold text-accent mb-6">Mapa do Site</h4>
            <ul className="space-y-3 text-text-muted text-sm">
              {site.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Links legais">
            <h4 className="font-bold text-accent mb-6">Legal</h4>
            <ul className="space-y-3 text-text-muted text-sm">
              <li><a href="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="/termos" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="/lgpd" className="hover:text-primary transition-colors">LGPD</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-accent mb-6">Contato</h4>
            <ul className="space-y-4 text-text-muted text-sm">
              <li>
                <a href={waLink} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </li>
              {site.company.email && (
                <li>
                  <a href={`mailto:${site.company.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>{site.company.email}</span>
                  </a>
                </li>
              )}
            </ul>
            <div className="mt-6">
              <a
                href={waLink}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full text-sm font-bold transition-all"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accent/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {currentYear} {site.footer.copyright}. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-text-muted max-w-lg text-center md:text-right uppercase">
            {site.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
