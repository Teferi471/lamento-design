import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
            <span className="w-6 h-px bg-[#d4af37]" />
            <span>{t.process.badge}</span>
            <span className="w-6 h-px bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            {t.process.heading}
          </h2>
          <p className="text-base text-neutral-400 max-w-lg mx-auto">
            {t.process.subheading}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {t.process.steps.map((item, index) => (
            <div
              key={item.step}
              id={`process-step-${item.step}`}
              className="luxury-card rounded-2xl p-7 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number Display */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-luxury text-3xl font-bold text-[#d4af37] tracking-wider">
                    {item.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]/50 group-hover:scale-150 transition-transform" />
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#f5df88] transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Step Status check */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span>Phase 0{index + 1} milestone</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
