
import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';
import { site, getWhatsAppLink } from '@/lib/config';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const siteMapLinks = [
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#planos', label: 'Tipos de Planos' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Solicitar Cotação' },
    { href: '#faq', label: 'Perguntas Frequentes' },
  ];

  const legalLinks = [
    { href: '/privacidade', label: 'Política de Privacidade' },
    { href: '/privacidade', label: 'Termos de Uso' },
    { href: '/privacidade', label: 'LGPD' },
  ];

  // Social links - can be customized per client
  const socialLinks = [
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-surface border-t border-accent/10 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold" aria-hidden="true">{site.company.name.charAt(0)}</div>
              <span className="text-xl font-bold text-accent tracking-tight">{site.company.name.split('Pro')[0]}<span className="text-primary">Pro</span></span>
            </div>
            <p className="text-text-muted text-sm mb-6">
              {site.company.tagline}
            </p>
            
            {/* Social Links */}
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
          </div>
          
          {/* Site Map */}
          <nav aria-label="Mapa do site">
            <h4 className="font-bold text-accent mb-6">Mapa do Site</h4>
            <ul className="space-y-3 text-text-muted text-sm">
              {siteMapLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Legal */}
          <nav aria-label="Links legais">
            <h4 className="font-bold text-accent mb-6">Legal</h4>
            <ul className="space-y-3 text-text-muted text-sm">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-accent mb-6">Contato</h4>
            <ul className="space-y-4 text-text-muted text-sm">
              <li>
                <a 
                  href={getWhatsAppLink()} 
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@saudepro.com.br" 
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>E-mail</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href={getWhatsAppLink()}
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
