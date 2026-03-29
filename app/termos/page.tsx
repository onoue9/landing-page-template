import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/lib/config';

export const metadata: Metadata = {
  title: `Termos de Uso - ${site.company.name}`,
  description: 'Leia nossos termos de uso e condições de serviço.',
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4">
      <article className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Termos de Uso
          </h1>
          <p className="text-slate-500">Última atualização: Janeiro de 2025</p>
        </header>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-slate-600 leading-relaxed">
              Ao acessar e utilizar os serviços de {site.company.name}, você concorda com estes
              Termos de Uso. Caso não concorde com qualquer parte destes termos, não utilize
              nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Descrição dos Serviços</h2>
            <p className="text-slate-600 leading-relaxed">
              {site.company.name} oferece serviços de consultoria e corretagem de planos de saúde,
              auxiliando pessoas físicas e jurídicas na comparação e contratação de planos junto
              às operadoras parceiras. Nossos serviços de consultoria são gratuitos para o contratante,
              remunerados por comissão das operadoras.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Uso do Site</h2>
            <p className="text-slate-600 leading-relaxed mb-3">Ao utilizar este site, você se compromete a:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Fornecer informações verdadeiras e atualizadas no formulário de cotação</li>
              <li>Não utilizar o site para fins ilegais ou não autorizados</li>
              <li>Não reproduzir, duplicar ou copiar conteúdo sem autorização prévia</li>
              <li>Não interferir na segurança ou funcionamento do site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Responsabilidades</h2>
            <p className="text-slate-600 leading-relaxed">
              {site.company.name} atua como intermediária entre o cliente e as operadoras de
              planos de saúde. Os valores, coberturas, carências e condições contratuais são de
              responsabilidade exclusiva de cada operadora e podem variar conforme regulamentação
              da ANS (Agência Nacional de Saúde Suplementar).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Propriedade Intelectual</h2>
            <p className="text-slate-600 leading-relaxed">
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos e elementos visuais,
              é propriedade de {site.company.name} ou licenciado para uso. É proibida a reprodução
              sem autorização expressa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-slate-600 leading-relaxed">
              {site.company.name} não se responsabiliza por decisões tomadas com base nas
              informações deste site sem a devida consulta a um de nossos especialistas.
              As condições dos planos podem variar e estão sujeitas à aprovação das operadoras.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Alterações nos Termos</h2>
            <p className="text-slate-600 leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações
              entram em vigor imediatamente após a publicação. O uso contínuo do site após as
              alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Foro</h2>
            <p className="text-slate-600 leading-relaxed">
              Estes termos são regidos pela legislação brasileira. Fica eleito o foro da comarca
              de domicílio do usuário para dirimir quaisquer controvérsias.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">9. Contato</h2>
            <p className="text-slate-600 leading-relaxed">
              Dúvidas sobre estes termos podem ser enviadas para{' '}
              <a href={`mailto:${site.company.email}`} className="text-blue-600 hover:underline">
                {site.company.email}
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
