import saudeSite from '@/config/clients/saude-exemplo/site.json';
import saudeContent from '@/config/clients/saude-exemplo/content.json';
import saudeTheme from '@/config/clients/saude-exemplo/theme.json';
import odontoSite from '@/config/clients/odontologia-exemplo/site.json';
import odontoContent from '@/config/clients/odontologia-exemplo/content.json';
import odontoTheme from '@/config/clients/odontologia-exemplo/theme.json';
import imoveisSite from '@/config/clients/imoveis-exemplo/site.json';
import imoveisContent from '@/config/clients/imoveis-exemplo/content.json';
import imoveisTheme from '@/config/clients/imoveis-exemplo/theme.json';
import { SiteConfigSchema, ThemeConfigSchema, ContentConfigSchema, validateConfig } from './validate-config';
import type { ConfigContextValue } from '@/contexts/ConfigContext';

export const demoConfigs: Record<string, ConfigContextValue> = {
  saude: {
    site: validateConfig(SiteConfigSchema, saudeSite, 'clients/saude-exemplo/site'),
    content: validateConfig(ContentConfigSchema, saudeContent, 'clients/saude-exemplo/content'),
    theme: validateConfig(ThemeConfigSchema, saudeTheme, 'clients/saude-exemplo/theme'),
  },
  odontologia: {
    site: validateConfig(SiteConfigSchema, odontoSite, 'clients/odontologia-exemplo/site'),
    content: validateConfig(ContentConfigSchema, odontoContent, 'clients/odontologia-exemplo/content'),
    theme: validateConfig(ThemeConfigSchema, odontoTheme, 'clients/odontologia-exemplo/theme'),
  },
  imoveis: {
    site: validateConfig(SiteConfigSchema, imoveisSite, 'clients/imoveis-exemplo/site'),
    content: validateConfig(ContentConfigSchema, imoveisContent, 'clients/imoveis-exemplo/content'),
    theme: validateConfig(ThemeConfigSchema, imoveisTheme, 'clients/imoveis-exemplo/theme'),
  },
};
