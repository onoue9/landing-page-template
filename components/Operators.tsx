'use client';

import React, { useState } from 'react';
import { OPERATORS } from '../constants';

const OperatorLogo = ({ name, logoUrl }: { name: string, logoUrl: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="text-[10px] font-bold text-slate-400 uppercase">{name}</span>;
  }

  return (
    <img 
      src={logoUrl} 
      alt={`Logo ${name}`} 
      className="max-w-full max-h-full object-contain pointer-events-none"
      onError={() => setHasError(true)}
    />
  );
};

const Operators: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 mb-2 sm:mb-4 tracking-tight uppercase">Operadoras Parceiras</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-12 items-center justify-items-center">
          {OPERATORS.map((op) => (
            <div 
              key={op.name} 
              className="group flex flex-col items-center justify-center w-full max-w-[140px] sm:max-w-[180px] p-2 sm:p-4 transition-all duration-500"
              title={op.name}
            >
              <div className="relative w-full aspect-[3/1] flex items-center justify-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <OperatorLogo name={op.name} logoUrl={op.logoUrl} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-[0.3em]">Rede Credenciada Nacional</p>
        </div>
      </div>
    </section>
  );
};

export default Operators;