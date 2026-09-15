import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CtaSectionProps {
  onStartProject: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartProject }) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative geometric framing line */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#16130b] via-[#0d0d0d] to-[#12100a] border border-[#d4af37]/40 p-10 sm:p-14 md:p-16 text-center shadow-2xl overflow-hidden">
          
          {/* Subtle gold corner accents */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#d4af37]" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-[#d4af37]" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-[#d4af37]" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#d4af37]" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c180e] border border-[#d4af37]/30 text-[#e5c158] text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>LAMENTO Design Studio</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight">
            {t.footer.tagline}
          </h2>

          {/* Text */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            {t.process.readyToStart}
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-start-project-btn"
              onClick={onStartProject}
              className="w-full sm:w-auto px-9 py-4 rounded-full gold-metallic-btn text-black font-semibold text-base sm:text-lg flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>{t.process.startNowBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Subtle trust tag */}
          <div className="mt-8 text-xs text-neutral-400">
            Rapid response &bull; Addis Ababa &amp; Global Delivery &bull; High Professional Standards
          </div>
        </div>
      </div>
    </section>
  );
};
