'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { useConfig } from '@/contexts/ConfigContext';
import AnimatedSection from './ui/AnimatedSection';

// ─── Shared star display ───

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
      ))}
    </div>
  );
}

// ─── Variant A: 3-column equal grid (default) ───

function SocialProofA() {
  const { content } = useConfig();
  const { testimonials } = content;

  return (
    <section id="depoimentos" className="py-20 sm:py-32 relative overflow-hidden bg-surface" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-4">
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <h2 id="testimonials-heading" className="text-2xl sm:text-5xl font-extrabold text-accent tracking-tight">
            {testimonials.title}
          </h2>
        </AnimatedSection>

        <ul className="grid lg:grid-cols-3 gap-6 sm:gap-8" role="list">
          {testimonials.items.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 120}>
              <li className="h-full">
                <article
                  className="bg-background p-8 sm:p-10 rounded-[2rem] relative h-full border border-accent/5 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  aria-labelledby={`testimonial-${t.id}`}
                >
                  <Stars rating={t.rating} />
                  <blockquote className="mt-6">
                    <p className="text-text-muted mb-8 text-sm sm:text-base leading-relaxed italic">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <footer>
                      <p id={`testimonial-${t.id}`} className="font-bold text-accent">{t.name}</p>
                      <p className="text-text-muted text-xs sm:text-sm">{t.role}</p>
                    </footer>
                  </blockquote>
                </article>
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Variant B: Featured first + 2 smaller below ───

function SocialProofB() {
  const { content } = useConfig();
  const { testimonials } = content;
  const [featured, ...rest] = testimonials.items;

  return (
    <section id="depoimentos" className="py-20 sm:py-32 relative overflow-hidden bg-surface" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto px-6 sm:px-4">
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <h2 id="testimonials-heading" className="text-2xl sm:text-5xl font-extrabold text-accent tracking-tight">
            {testimonials.title}
          </h2>
        </AnimatedSection>

        {/* Featured testimonial */}
        {featured && (
          <AnimatedSection>
            <article
              className="bg-background p-8 sm:p-12 rounded-[2rem] border-l-4 border-primary mb-6 sm:mb-8 border-r border-t border-b border-r-accent/5 border-t-accent/5 border-b-accent/5"
              aria-labelledby={`testimonial-${featured.id}`}
            >
              <Stars rating={featured.rating} />
              <blockquote className="mt-6">
                <p className="text-text-muted mb-8 text-base sm:text-lg leading-relaxed italic">
                  &ldquo;{featured.content}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm sm:text-base">
                    {featured.name.charAt(0)}
                  </div>
                  <div>
                    <p id={`testimonial-${featured.id}`} className="font-bold text-accent text-base sm:text-lg">{featured.name}</p>
                    <p className="text-text-muted text-xs sm:text-sm">{featured.role}</p>
                  </div>
                </footer>
              </blockquote>
            </article>
          </AnimatedSection>
        )}

        {/* Remaining testimonials */}
        {rest.length > 0 && (
          <ul className="grid sm:grid-cols-2 gap-6" role="list">
            {rest.map((t, i) => (
              <AnimatedSection key={t.id} delay={(i + 1) * 120}>
                <li className="h-full">
                  <article
                    className="bg-background p-6 sm:p-8 rounded-2xl relative h-full border border-accent/5 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    aria-labelledby={`testimonial-${t.id}`}
                  >
                    <Stars rating={t.rating} />
                    <blockquote className="mt-4">
                      <p className="text-text-muted mb-6 text-sm leading-relaxed italic">
                        &ldquo;{t.content}&rdquo;
                      </p>
                      <footer>
                        <p id={`testimonial-${t.id}`} className="font-bold text-accent">{t.name}</p>
                        <p className="text-text-muted text-xs sm:text-sm">{t.role}</p>
                      </footer>
                    </blockquote>
                  </article>
                </li>
              </AnimatedSection>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

// ─── Main SocialProof component ───

const SocialProof: React.FC = () => {
  const { content } = useConfig();
  const variant = content.layout?.socialProof ?? 'social-a';

  if (variant === 'social-b') return <SocialProofB />;
  return <SocialProofA />;
};

export default SocialProof;
