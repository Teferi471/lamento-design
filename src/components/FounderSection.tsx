import React from 'react';
import { STUDIO_INFO } from '../data/content';
import { MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FounderSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Founder Photo Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Gold frame accent */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#d4af37]/25 via-transparent to-[#d4af37]/25 blur-sm" />

              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#121212] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop"
                  alt="LAMENTO Lead Designer"
                  referrerPolicy="no-referrer"
                  className="w-full h-[450px] object-cover object-top filter contrast-105"
                />

                {/* Dark overlay with name card */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    {t.founder.role}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mt-1">
                    LAMENTO Design Studio
                  </h3>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]" />
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
              <span className="w-6 h-px bg-[#d4af37]" />
              <span>{t.founder.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              {t.founder.heading}
            </h2>

            {/* Prompt exact text */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-6">
              {t.founder.bioParagraph1}
            </p>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8">
              {t.founder.bioParagraph2}
            </p>

            {/* Specializations */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
              {t.founder.specializations.map((spec, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#141414] border border-white/5 text-center">
                  <div className="text-xs font-semibold text-white truncate" title={spec}>{spec}</div>
                  <div className="text-[10px] text-[#d4af37] mt-0.5">Specialized</div>
                </div>
              ))}
            </div>

            {/* Direct Connect Options */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={STUDIO_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/40 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{t.nav.chatWhatsapp}</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-[#161616] hover:bg-[#202020] border border-white/10 hover:border-[#d4af37]/50 text-neutral-200 hover:text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>{t.founder.ctaText}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
