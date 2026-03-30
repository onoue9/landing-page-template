import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/lib/config';

export const metadata: Metadata = {
  title: `Página não encontrada — ${site.company.name}`,
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-black text-primary mb-4">404</p>
        <h1 className="text-2xl font-extrabold text-accent mb-3">Página não encontrada</h1>
        <p className="text-text-muted mb-8 leading-relaxed">
          Não foi possível encontrar a página que você procura.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold text-sm transition-all active:scale-95"
        >
          ← Voltar para o início
        </a>
      </div>
    </main>
  );
}
