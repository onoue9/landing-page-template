import { notFound } from 'next/navigation';
import { demoConfigs } from '@/lib/demo-configs';
import { ConfigProvider } from '@/contexts/ConfigContext';
import LandingPage from '@/components/LandingPage';

const IS_CLIENT = !!process.env.NEXT_PUBLIC_CLIENT;
const { theme } = demoConfigs.saude;

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

export default function SaudeDemoPage() {
  if (IS_CLIENT) notFound();
  return (
    <ConfigProvider value={demoConfigs.saude}>
      <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
      <LandingPage previewHref="/demo/saude/preview" />
    </ConfigProvider>
  );
}
