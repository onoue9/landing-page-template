import React from 'react';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { site, content, theme } from '@/lib/config';
import CookieConsent from '@/components/CookieConsent';
import { ConfigProvider } from '@/contexts/ConfigContext';
import { PreviewListener } from '@/components/PreviewListener';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
});

// Inject theme colors from theme.json as CSS custom properties
const themeCSS = `
:root {
  --color-primary: ${theme.colors.primary};
  --color-primary-hover: ${theme.colors.primaryHover};
  --color-secondary: ${theme.colors.secondary};
  --color-secondary-hover: ${theme.colors.secondaryHover};
  --color-accent: ${theme.colors.accent};
  --color-background: ${theme.colors.background};
  --color-surface: ${theme.colors.surface};
  --color-text: ${theme.colors.text};
  --color-text-muted: ${theme.colors.textMuted};
}
`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  metadataBase: new URL(site.seo.url),
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.url,
    siteName: site.company.name,
    images: [{ url: site.seo.ogImage, width: 1200, height: 630, alt: site.seo.title }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
      </head>
      <body className={`${jakarta.variable} font-sans antialiased text-slate-900 overflow-x-hidden`}>
        <ConfigProvider value={{ site, content, theme }}>
          {children}
          <CookieConsent />
          <PreviewListener />
        {/* Formulário oculto para Netlify Forms */}
        <form name="leads-saude" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="nome" />
          <input type="text" name="whatsapp" />
          <input type="email" name="email" />
          <input type="text" name="cidade_estado" />
          <input type="text" name="tipo_plano" />
          <input type="number" name="vidas" />
        </form>
        </ConfigProvider>
      </body>
    </html>
  );
}
