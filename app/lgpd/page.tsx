import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/lib/config';

export const metadata: Metadata = {
  title: `LGPD - ${site.company.name}`,
  description: 'Saiba como tratamos seus dados pessoais conforme a Lei Geral de Proteção de Dados.',
};

export default function LGPDPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4">
      <article className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            LGPD — Lei Geral de Proteção de Dados
          </h1>
          <p className="text-slate-500">Lei nº 13.709/2018 · Última atualização: Janeiro de 2025</p>
        </header>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Nosso Compromisso</h2>
            <p className="text-slate-600 leading-relaxed">
              {site.company.name} está comprometida com a proteção dos seus dados pessoais e com
              o cumprimento integral da Lei Geral de Proteção de Dados (LGPD). Esta página detalha
              como exercer seus direitos como titular de dados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Base Legal para Tratamento</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Tratamos seus dados pessoais com base nas seguintes hipóteses legais previstas na LGPD:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li><strong>Consentimento</strong> (Art. 7º, I): para envio de cotações e comunicações</li>
              <li><strong>Execução de contrato</strong> (Art. 7º, V): para prestação dos serviços de corretagem</li>
              <li><strong>Legítimo interesse</strong> (Art. 7º, IX): para melhoria dos serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Seus Direitos como Titular</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Nos termos do Art. 18 da LGPD, você tem os seguintes direitos:
            </p>
            <div className="space-y-3">
              {[
                ['Confirmação e acesso', 'Confirmar se tratamos seus dados e acessar uma cópia.'],
                ['Correção', 'Solicitar a correção de dados incompletos, inexatos ou desatualizados.'],
                ['Anonimização ou eliminação', 'Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.'],
                ['Portabilidade', 'Receber seus dados em formato estruturado para transferência a outro fornecedor.'],
                ['Eliminação', 'Solicitar a eliminação dos dados tratados com base em consentimento.'],
                ['Informação', 'Obter informações sobre entidades com as quais compartilhamos seus dados.'],
                ['Revogação do consentimento', 'Revogar o consentimento a qualquer momento, sem prejuízo da licitude dos tratamentos anteriores.'],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <strong>{title}:</strong> {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Como Exercer seus Direitos</h2>
            <p className="text-slate-600 leading-relaxed">
              Para exercer qualquer um dos direitos listados acima, entre em contato com nosso
              Encarregado de Proteção de Dados (DPO) pelo e-mail{' '}
              <a href={`mailto:${site.company.email}`} className="text-blue-600 hover:underline">
                {site.company.email}
              </a>
              {' '}com o assunto "LGPD — [Tipo de solicitação]". Responderemos em até 15 dias úteis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Transferência Internacional de Dados</h2>
            <p className="text-slate-600 leading-relaxed">
              Seus dados podem ser processados por serviços de terceiros (como Netlify para
              armazenamento de formulários), que mantêm políticas de privacidade e conformidade
              com regulamentações internacionais de proteção de dados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Autoridade Nacional de Proteção de Dados</h2>
            <p className="text-slate-600 leading-relaxed">
              Você tem o direito de peticionar à ANPD (Autoridade Nacional de Proteção de Dados)
              em caso de não atendimento de seus direitos. Mais informações em{' '}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.gov.br/anpd
              </a>.
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-slate-100 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors">
            ← Voltar para a página inicial
          </a>
        </footer>
      </article>
    </main>
  );
}
