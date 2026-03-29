import { demoConfigs } from '@/lib/demo-configs';
import { ConfigProvider } from '@/contexts/ConfigContext';
import LandingPage from '@/components/LandingPage';

const { theme } = demoConfigs.imoveis;

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

export default function ImoveisDemoPage() {
  return (
    <ConfigProvider value={demoConfigs.imoveis}>
      <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
      <LandingPage previewHref="/demo/imoveis/preview" />
    </ConfigProvider>
  );
}
