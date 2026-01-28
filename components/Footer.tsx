
import React from 'react';
import { site } from '@/lib/config';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-accent/10 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold" aria-hidden="true">{site.company.name.charAt(0)}</div>
              <span className="text-xl font-bold text-accent tracking-tight">{site.company.name.split('Pro')[0]}<span className="text-primary">Pro</span></span>
            </div>
            <p className="text-text-muted max-w-sm mb-6">
              {site.company.tagline}. Atendemos todo o território nacional com foco em redução de custos e qualidade de atendimento.
            </p>
          </div>
          
          <nav aria-label="Links rápidos">
            <h4 className="font-bold text-accent mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors">Tipos de Planos</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Solicitar Cotação</a></li>
            </ul>
          </nav>
          
          <nav aria-label="Links legais">
            <h4 className="font-bold text-accent mb-6">Legal</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="/privacidade" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="/privacidade" className="hover:text-primary transition-colors">LGPD</a></li>
            </ul>
          </nav>
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
