import siteConfig from '@/config/site.json';
import themeConfig from '@/config/theme.json';
import contentConfig from '@/config/content.json';
import type { SiteConfig, ThemeConfig, ContentConfig, FullConfig } from './config-types';

// Export typed configs
export const site = siteConfig as SiteConfig;
export const theme = themeConfig as ThemeConfig;
export const content = contentConfig as ContentConfig;

// Export full config
export const config: FullConfig = {
  site,
  theme,
  content,
};

// Helper function to get WhatsApp link
export const getWhatsAppLink = (customMessage?: string): string => {
  const message = encodeURIComponent(customMessage || site.company.whatsappMessage);
  return `https://wa.me/${site.company.whatsapp}?text=${message}`;
};

// Default export
export default config;
