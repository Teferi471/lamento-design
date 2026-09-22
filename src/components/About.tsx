import React from 'react';
import { Target, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Subtle gold radial ambient */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column / Studio Aesthetic Image with Luxury Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer gold-accented frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#d4af37]/30 via-transparent to-[#d4af37]/20 blur-sm" />
              
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#141414] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=900&auto=format&fit=crop"
                  alt="LAMENTO Design Studio Creative Workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] sm:h-[480px] object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Studio Credential Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0c0c0c]/90 border border-[#d4af37]/30 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Logo size="sm" id="about-studio-logo" className="h-8 sm:h-9 w-auto flex-shrink-0" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Visionary Craft</div>
                      <div className="text-sm font-bold text-white">LAMENTO Design Studio</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#1a1711] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Decorative Corner Marks */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]" />
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
              <span className="w-6 h-px bg-[#d4af37]" />
              <span>{t.about.subheading}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              {t.about.heading}
            </h2>

            {/* Main Text required in user prompt */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-6">
              {t.about.paragraph1}
            </p>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8">
              {t.about.paragraph2}
            </p>

            {/* Goal Statement Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#17140e] via-[#121212] to-[#17140e] border border-[#d4af37]/30 mb-8 relative">
              <div className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#d4af37]" />
                <span>Goal / Kaayyoo / ግባችን:</span>
              </div>
              <div className="text-xl sm:text-2xl font-serif-luxury font-bold text-white tracking-wide mt-2">
                &ldquo;{t.about.goalTagline}&rdquo;
              </div>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#111] border border-white/5">
                <Layers className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.about.values.excellence}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">{t.about.values.excellenceDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#111] border border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.about.values.creativity}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">{t.about.values.creativityDesc}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
