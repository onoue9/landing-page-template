
import React from 'react';
import { Star } from 'lucide-react';
import { content } from '@/lib/config';

const SocialProof: React.FC = () => {
  const { testimonials } = content;
  
  return (
    <section id="depoimentos" className="py-20 sm:py-32 relative overflow-hidden bg-surface" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 id="testimonials-heading" className="text-2xl sm:text-5xl font-extrabold text-accent tracking-tight">{testimonials.title}</h2>
        </div>
        
        <ul className="grid lg:grid-cols-3 gap-6 sm:gap-8" role="list">
          {testimonials.items.map((t) => (
            <li key={t.id}>
              <article className="bg-background p-8 sm:p-10 rounded-[2rem] relative h-full border border-accent/5" aria-labelledby={`testimonial-${t.id}`}>
                <div className="flex items-center gap-1 mb-6" role="img" aria-label={`Avaliação: ${t.rating} de 5 estrelas`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote>
                  <p className="text-text-muted mb-8 text-sm sm:text-base leading-relaxed italic">&ldquo;{t.content}&rdquo;</p>
                  <footer>
                    <p id={`testimonial-${t.id}`} className="font-bold text-accent">{t.name}</p>
                    <p className="text-text-muted text-xs sm:text-sm">{t.role}</p>
                  </footer>
                </blockquote>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialProof;
