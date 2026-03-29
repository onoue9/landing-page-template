'use client';

import { useEffect } from 'react';
import { useSetConfig } from '@/contexts/ConfigContext';
import type { ConfigContextValue } from '@/contexts/ConfigContext';

// Runs inside the iframe. Listens for config updates from the preview page
// and also reports the document height so the iframe auto-sizes.
export function PreviewListener() {
  const setConfig = useSetConfig();

  useEffect(() => {
    if (typeof window === 'undefined' || window === window.top) return;

    // Disable the sticky-footer pattern (min-h-screen + flex-grow) so the page
    // wraps tightly around its content instead of expanding to fill the iframe viewport.
    const style = document.createElement('style');
    style.textContent = '.min-h-screen { min-height: unset !important; }';
    document.head.appendChild(style);

    // Report height to parent whenever the document resizes.
    // Use the footer's bottom position as the true content height to avoid
    // the feedback loop caused by min-h-screen expanding to match the iframe viewport.
    const reportHeight = () => {
      const footer = document.querySelector('footer[role="contentinfo"]');
      const height = footer
        ? Math.round(footer.getBoundingClientRect().bottom + window.pageYOffset)
        : document.body.offsetHeight;
      window.parent.postMessage({ type: 'PREVIEW_HEIGHT', height }, '*');
    };

    const resizeObserver = new ResizeObserver(reportHeight);
    resizeObserver.observe(document.body);
    reportHeight();

    // Handle incoming config updates
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type !== 'PREVIEW_CONFIG') return;

      const config = e.data.config as ConfigContextValue;
      setConfig(config);

      // Apply colors directly on :root so CSS custom properties update instantly
      const c = config.theme.colors;
      const root = document.documentElement;
      root.style.setProperty('--color-primary', c.primary);
      root.style.setProperty('--color-primary-hover', c.primaryHover);
      root.style.setProperty('--color-secondary', c.secondary);
      root.style.setProperty('--color-secondary-hover', c.secondaryHover);
      root.style.setProperty('--color-accent', c.accent);
      root.style.setProperty('--color-background', c.background);
      root.style.setProperty('--color-surface', c.surface);
      root.style.setProperty('--color-text', c.text);
      root.style.setProperty('--color-text-muted', c.textMuted);
    };

    window.addEventListener('message', handleMessage);

    // Signal to parent that the iframe is ready to receive config
    window.parent.postMessage({ type: 'PREVIEW_READY' }, '*');

    return () => {
      style.remove();
      resizeObserver.disconnect();
      window.removeEventListener('message', handleMessage);
    };
  }, [setConfig]);

  return null;
}
