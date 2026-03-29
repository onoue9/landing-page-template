'use client';

import React from 'react';
import { useConfig } from '@/contexts/ConfigContext';

interface BrandLogoProps {
  size?: 'sm' | 'lg';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'sm' }) => {
  const { site } = useConfig();
  const iconSize = size === 'lg' ? 'w-8 h-8' : 'w-7 h-7 sm:w-8 sm:h-8';
  const textSize = size === 'lg' ? 'text-xl' : 'text-base sm:text-lg';
  const iconTextSize = size === 'lg' ? 'text-sm' : 'text-xs sm:text-sm';

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${iconSize} bg-primary rounded-lg flex items-center justify-center text-white font-bold ${iconTextSize}`}
        aria-hidden="true"
      >
        {site.company.name.charAt(0)}
      </div>
      <span className={`${textSize} font-bold text-accent tracking-tight`}>
        {site.company.namePrefix}<span className="text-primary">{site.company.nameHighlight}</span>
      </span>
    </div>
  );
};

export default BrandLogo;
