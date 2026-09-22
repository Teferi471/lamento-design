import React from 'react';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { STUDIO_INFO } from '../data/content';
import { 
  MessageCircle, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  Video as VideoIcon,
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#d4af37]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Identity & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="inline-block mb-3 focus:outline-none focus:ring-1 focus:ring-[#d4af37]/40 rounded-lg">
              <Logo size="footer" id="footer-official-logo" />
            </a>
            {/* Required Discipline line */}
            <div className="text-xs sm:text-sm text-neutral-400 font-light tracking-wide mt-1">
              {t.footer.disciplines}
            </div>
            <div className="text-xs text-[#d4af37] font-medium mt-1">
              &ldquo;{t.footer.tagline}&rdquo;
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
              {t.footer.followWork}
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={STUDIO_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 hover:border-emerald-500/60 text-neutral-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 hover:border-pink-500/60 text-neutral-300 hover:text-pink-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 hover:border-blue-500/60 text-neutral-300 hover:text-blue-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 hover:border-[#d4af37]/60 text-neutral-300 hover:text-[#d4af37] flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <VideoIcon className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 hover:border-red-500/60 text-neutral-300 hover:text-red-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 hover:border-sky-500/60 text-neutral-300 hover:text-sky-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.socials.email}
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 hover:border-[#d4af37]/60 text-neutral-300 hover:text-[#d4af37] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* International Freelance & Escrow Platforms */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 mt-2">
              <span className="text-[11px] text-neutral-500 font-medium mr-1">Freelance Platforms:</span>
              <a
                href={STUDIO_INFO.socials.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#14a800]/10 border border-[#14a800]/30 text-[#14a800] hover:bg-[#14a800] hover:text-white transition-all flex items-center gap-1 shadow-sm"
                aria-label="Upwork Website"
              >
                <span>Upwork</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a
                href={STUDIO_INFO.socials.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#1dbf73]/10 border border-[#1dbf73]/30 text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white transition-all flex items-center gap-1 shadow-sm"
                aria-label="Fiverr Website"
              >
                <span>Fiverr</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a
                href={STUDIO_INFO.socials.freelancer}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#0082c8]/10 border border-[#0082c8]/30 text-[#0082c8] hover:bg-[#0082c8] hover:text-white transition-all flex items-center gap-1 shadow-sm"
                aria-label="Freelancer Website"
              >
                <span>Freelancer</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; 2026 LAMENTO Design Studio. {t.footer.rightsReserved}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <LanguageSwitcher variant="footer" id="footer-language-switcher" />
            <span className="hidden sm:inline text-neutral-500">Addis Ababa, Ethiopia &bull; Worldwide Creative</span>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-[#d4af37] transition-colors cursor-pointer"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
