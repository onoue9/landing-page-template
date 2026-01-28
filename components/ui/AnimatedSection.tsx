'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'slide-up',
  delay = 0 
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-700 ${
        isInView 
          ? `opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationName: isInView ? animation : 'none'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
