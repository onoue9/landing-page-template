'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura da página"
    />
  );
};

export default ScrollProgress;
