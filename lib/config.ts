import siteJson from '@/config/site.json';
import themeJson from '@/config/theme.json';
import contentJson from '@/config/content.json';
import type { SiteConfig, ThemeConfig, ContentConfig, FullConfig } from '@/types/config-types';
import { SiteConfigSchema, ThemeConfigSchema, ContentConfigSchema, validateConfig } from './validate-config';

// Validate and export typed configs
export const site: SiteConfig = validateConfig(SiteConfigSchema, siteJson, 'site');
export const theme: ThemeConfig = validateConfig(ThemeConfigSchema, themeJson, 'theme');
export const content: ContentConfig = validateConfig(ContentConfigSchema, contentJson, 'content');

// Export full config
export const config: FullConfig = { site, theme, content };

// Helper for static imports (build-time, uses static config)
export const getWhatsAppLink = (customMessage?: string): string => {
  const message = encodeURIComponent(customMessage || site.company.whatsappMessage);
  return `https://wa.me/${site.company.whatsapp}?text=${message}`;
};

// Pure helper for use with dynamic config (context/preview)
export function buildWhatsAppLink(
  whatsapp: string,
  defaultMessage: string,
  customMessage?: string
): string {
  const message = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${whatsapp}?text=${message}`;
}

export default config;
