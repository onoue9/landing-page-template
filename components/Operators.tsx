'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { content } from '@/lib/config';

// Logos that are vertical/square and need special sizing
const verticalLogos = ['Porto Seguro', 'Omint', 'Sami'];

const OperatorLogo = ({ name, logoUrl }: { name: string, logoUrl: string }) => {
  const [hasError, setHasError] = useState(false);
  const isVertical = verticalLogos.includes(name);

  if (hasError) {
    return <span className="text-[10px] font-bold text-text-muted uppercase">{name}</span>;
  }

  return (
    <Image 
      src={logoUrl} 
      alt={`Logo da operadora ${name}`} 
      width={isVertical ? 80 : 140}
      height={isVertical ? 60 : 48}
      className={`object-contain pointer-events-none ${isVertical ? 'max-h-14' : 'max-h-12'} w-auto`}
      onError={() => setHasError(true)}
    />
  );
};

const Operators: React.FC = () => {
  const { operators } = content;
  
  return (
    <section className="py-16 sm:py-24 bg-surface border-y border-accent/5" aria-labelledby="operators-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 id="operators-heading" className="text-xl sm:text-3xl font-black text-accent mb-2 sm:mb-4 tracking-tight uppercase">{operators.title}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" aria-hidden="true"></div>
        </div>
        
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 items-center justify-items-center" role="list" aria-label="Lista de operadoras parceiras">
          {operators.items.map((op) => (
            <li 
              key={op.name} 
              className="group flex items-center justify-center h-16 w-full max-w-[160px] p-2 transition-all duration-500"
            >
              <div className="flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <OperatorLogo name={op.name} logoUrl={op.logoUrl} />
              </div>
            </li>
          ))}
        </ul>
        
        <div className="mt-12 text-center">
          <p className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-[0.3em]">Rede Credenciada Nacional</p>
        </div>
      </div>
    </section>
  );
};

export default Operators;