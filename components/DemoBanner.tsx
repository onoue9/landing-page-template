'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Paintbrush } from 'lucide-react';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO === 'true';

interface DemoBannerProps {
  previewHref?: string;
}

const DemoBanner: React.FC<DemoBannerProps> = ({ previewHref = '/preview' }) => {
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    if (window !== window.top) setIsIframe(true);
  }, []);

  if (!IS_DEMO || isIframe) return null;

  return (
    <div
      role="banner"
      className="fixed top-0 left-0 right-0 z-[100] bg-amber-400 text-amber-900 text-xs sm:text-sm font-bold py-2 px-4 flex items-center justify-between"
    >
      <a
        href="/"
        className="flex items-center gap-1 hover:text-amber-950 transition-colors shrink-0"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Voltar</span>
      </a>
      <span className="truncate mx-2">MODO DEMONSTRAÇÃO — formulários não enviam dados reais</span>
      <a
        href={previewHref}
        className="shrink-0 flex items-center gap-1.5 bg-amber-900 text-amber-50 px-3 py-1 rounded-full text-xs font-bold hover:bg-amber-800 transition-colors"
      >
        <Paintbrush className="w-3.5 h-3.5" />
        <span>Ver com minha identidade</span>
      </a>
    </div>
  );
};

export default DemoBanner;
