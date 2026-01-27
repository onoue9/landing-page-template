import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade - SaúdePro',
  description: 'Conheça nossa política de privacidade e como tratamos seus dados pessoais.',
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4">
      <article className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-slate-500">Última atualização: Janeiro de 2025</p>
        </header>

        <div className="prose prose-slate max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Informações que Coletamos</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Coletamos informações que você nos fornece diretamente, como nome, e-mail, 
              telefone (WhatsApp), cidade/estado e informações sobre o tipo de plano desejado 
              quando você preenche nosso formulário de cotação.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Como Usamos suas Informações</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Utilizamos suas informações exclusivamente para:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Entrar em contato para oferecer cotações personalizadas</li>
              <li>Responder às suas solicitações e dúvidas</li>
              <li>Melhorar nossos serviços de consultoria</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Compartilhamento de Dados</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
              para fins de marketing. Podemos compartilhar seus dados apenas com operadoras de 
              planos de saúde parceiras, exclusivamente para fins de cotação, conforme sua solicitação.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Seus Direitos (LGPD)</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Segurança</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger 
              suas informações pessoais contra acesso não autorizado, alteração, divulgação 
              ou destruição.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Contato</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
              entre em contato conosco através do WhatsApp disponível em nosso site.
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-slate-100 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors"
          >
            ← Voltar para a página inicial
          </a>
        </footer>
      </article>
    </main>
  );
}
