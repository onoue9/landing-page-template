import React from 'react';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { site } from '@/lib/config';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased text-slate-900 overflow-x-hidden`}>
        {children}
        {/* Formulário oculto para Netlify Forms */}
        <form name="leads-saude" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="nome" />
          <input type="text" name="whatsapp" />
          <input type="email" name="email" />
          <input type="text" name="cidade_estado" />
          <input type="text" name="tipo_plano" />
          <input type="number" name="vidas" />
        </form>
      </body>
    </html>
  );
}