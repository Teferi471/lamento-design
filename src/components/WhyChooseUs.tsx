import React from 'react';
import { Lightbulb, Award, Users, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'creative-ideas':
        return <Lightbulb className="w-6 h-6 text-[#d4af37]" />;
      case 'professional-quality':
        return <Award className="w-6 h-6 text-[#d4af37]" />;
      case 'client-focused':
        return <Users className="w-6 h-6 text-[#d4af37]" />;
      case 'reliable-service':
        return <Clock className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <Award className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <section className="py-24 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
            <span className="w-6 h-px bg-[#d4af37]" />
            <span>{t.whyChooseUs.badge}</span>
            <span className="w-6 h-px bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            {t.whyChooseUs.heading}
          </h2>
          <p className="text-base text-neutral-400 max-w-lg mx-auto">
            {t.whyChooseUs.subheading}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChooseUs.cards.map((item, index) => (
            <div
              key={item.id}
              id={`why-choose-${item.id}`}
              className="luxury-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="w-8 h-1 bg-[#d4af37]/30 group-hover:bg-[#d4af37] transition-colors rounded-full mb-6" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#18150f] border border-[#d4af37]/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getFeatureIcon(item.id)}
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#f5df88] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Number watermark */}
              <div className="text-right mt-6">
                <span className="text-2xl font-serif-luxury font-bold text-white/5 group-hover:text-[#d4af37]/10 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
