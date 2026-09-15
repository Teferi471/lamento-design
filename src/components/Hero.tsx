import React from 'react';
import { ArrowRight, Sparkles, ChevronDown, CheckCircle2, MessageCircle, Send, FolderGit2 } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenQuote: () => void;
  onViewWork: () => void;
  onStartProject: () => void;
  onOpenLiveChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenQuote, 
  onViewWork, 
  onStartProject, 
  onOpenLiveChat 
}) => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#070707]"
    >
      {/* Ambient Lighting & Luxury Metallic Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[550px] bg-gradient-to-b from-[#d4af37]/15 via-[#c59b27]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#997819]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle architectural geometric grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }} 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        {/* Studio Slogan Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16140f] border border-[#d4af37]/40 text-[#f9edc8] text-xs sm:text-sm font-semibold tracking-wider mb-4 shadow-md max-w-full text-center">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
          <span>{t.hero.slogan}</span>
        </div>

        {/* Hero Title & Studio Tagline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-2">
          <span className="gold-text-gradient block font-serif-luxury tracking-widest text-3xl sm:text-5xl lg:text-6xl mb-2">
            {STUDIO_INFO.shortName}
          </span>
          <span className="text-white block font-display tracking-tight font-extrabold text-2xl sm:text-4xl lg:text-5xl">
            "{t.hero.tagline}"
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-[#e5c158] font-medium tracking-wide mb-4 max-w-2xl">
          {t.hero.subtitle}
        </p>

        {/* Short Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
          {t.hero.shortDesc}
        </p>

        {/* 4 Requested CTA Buttons: View Our Work | Start Project | Get a Quote | Live Chat */}
        <div className="w-full max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            {/* 1. View Our Work */}
            <button
              id="hero-view-work-btn"
              onClick={onViewWork}
              className="px-4 py-3 rounded-xl border border-neutral-700 bg-[#121212] hover:border-[#d4af37]/60 text-white font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#1a1a1a] flex items-center justify-center gap-2 shadow-lg cursor-pointer group"
            >
              <FolderGit2 className="w-4 h-4 text-[#d4af37]" />
              <span className="truncate">{t.hero.viewWork}</span>
            </button>

            {/* 2. Start Project */}
            <button
              id="hero-start-project-btn"
              onClick={onStartProject}
              className="px-4 py-3 rounded-xl border border-[#d4af37]/40 bg-[#1a160d] hover:bg-[#251f10] text-[#f9edc8] font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer group"
            >
              <Send className="w-4 h-4 text-[#d4af37] group-hover:translate-x-0.5 transition-transform" />
              <span className="truncate">{t.hero.startProject}</span>
            </button>

            {/* 3. Get a Quote */}
            <button
              id="hero-get-quote-btn"
              onClick={onOpenQuote}
              className="px-4 py-3 rounded-xl gold-metallic-btn text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-102 transition-transform"
            >
              <Sparkles className="w-4 h-4 fill-black text-black" />
              <span className="truncate">{t.hero.getQuote}</span>
            </button>

            {/* 4. Live Chat */}
            <button
              id="hero-live-chat-btn"
              onClick={onOpenLiveChat}
              className="px-4 py-3 rounded-xl border border-emerald-500/50 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer group relative"
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="truncate">{t.hero.liveChat}</span>
            </button>
          </div>

          {/* Designer live availability badge */}
          <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-medium">{t.hero.liveChatSub}</span>
            <span className="text-neutral-600">•</span>
            <span>{STUDIO_INFO.phone}</span>
          </div>
        </div>

        {/* Core Value Pillars / Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/10 w-full max-w-3xl flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
            <span>{t.hero.pillars.bespoke}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
            <span>{t.hero.pillars.delivery}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
            <span>{t.hero.pillars.support}</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={onViewWork}
          className="mt-8 sm:mt-10 text-neutral-500 hover:text-[#d4af37] transition-colors cursor-pointer flex flex-col items-center gap-1 animate-bounce"
        >
          <span className="text-[10px] tracking-widest uppercase">{t.hero.exploreStudio}</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};
