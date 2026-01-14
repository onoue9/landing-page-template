
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Saúde<span className="text-blue-600">Pro</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Consultoria especializada em planos de saúde e seguros de vida. Atendemos todo o território nacional com foco em redução de custos e qualidade de atendimento.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#beneficios" className="hover:text-blue-600">Benefícios</a></li>
              <li><a href="#planos" className="hover:text-blue-600">Tipos de Planos</a></li>
              <li><a href="#contato" className="hover:text-blue-600">Solicitar Cotação</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-600">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-600">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} SaúdePro Corretora de Seguros. Todos os direitos reservados.
          </p>
          <div className="text-[10px] text-slate-400 max-w-lg text-center md:text-right uppercase">
            A SaúdePro é uma plataforma de consultoria. Os valores e coberturas são de responsabilidade das respectivas operadoras e podem variar conforme idade e região.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
