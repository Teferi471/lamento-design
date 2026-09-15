import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
            <span className="w-6 h-px bg-[#d4af37]" />
            <span>{t.testimonials.badge}</span>
            <span className="w-6 h-px bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            {t.testimonials.heading}
          </h2>
          <p className="text-base text-neutral-400 max-w-lg mx-auto">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={`testimonial-${item.id}`}
              className="luxury-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Row: Stars and Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d4af37]/30 group-hover:text-[#d4af37]/60 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-[#d4af37]/40 flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#e5c158] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {item.role} &bull; <span className="text-neutral-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
