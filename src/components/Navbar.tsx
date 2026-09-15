import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.services, href: '#services', id: 'services' },
    { label: t.nav.portfolio, href: '#portfolio', id: 'portfolio' },
    { label: t.nav.process, href: '#process', id: 'process' },
    { label: t.nav.pricing, href: '#pricing', id: 'pricing' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#d4af37]/20 py-2.5 sm:py-3 shadow-2xl shadow-black/70'
          : 'bg-transparent py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo (Top-Left) */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 rounded-xl py-1 px-1 flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-[1.02] group"
          aria-label="LAMENTO Design Studio Home"
        >
          <img
            src="/images/logo.png"
            alt="LAMENTO Design Studio Logo"
            className="h-8 sm:h-10 w-auto max-w-[46px] object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
          <div className="flex flex-col justify-center">
            <span className="font-display font-black tracking-[0.2em] text-base sm:text-lg text-white group-hover:text-[#f5df88] transition-colors leading-tight">
              LAMENTO
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold leading-none">
              Design Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121212]/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                  isActive
                    ? 'text-black bg-gradient-to-r from-[#e5c158] to-[#d4af37] font-semibold shadow-sm'
                    : 'text-neutral-300 hover:text-[#e5c158] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Language Switcher + WhatsApp + CTA */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
          {/* Language Switcher */}
          <LanguageSwitcher variant="nav" id="desktop-lang-switcher" />

          {/* Quick WhatsApp Link */}
          <a
            href={STUDIO_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/40 transition-colors flex items-center justify-center hover:scale-105"
            title={t.nav.chatWhatsapp}
            aria-label="Direct WhatsApp Contact"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Primary CTA "Get a Quote" */}
          <button
            id="nav-get-quote-btn"
            onClick={onOpenQuote}
            className="gold-metallic-btn text-black font-semibold text-xs lg:text-sm px-4 lg:px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>{t.nav.getQuote}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu & Quick Lang Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher variant="nav" id="mobile-quick-lang" className="scale-90 origin-right" />

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg border border-white/10 text-neutral-200 bg-[#141414] hover:border-[#d4af37]/40 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0c] border-b border-[#d4af37]/20 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            {/* Language Selection in Drawer */}
            <div className="pb-3 border-b border-white/10 mb-1">
              <LanguageSwitcher variant="mobile" id="mobile-drawer-lang-switcher" />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 px-3 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-black bg-[#d4af37] font-semibold'
                    : 'text-neutral-200 hover:text-[#d4af37] hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3 mt-2">
              <a
                href={STUDIO_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/40 text-emerald-400 bg-emerald-950/20 flex items-center justify-center gap-2 font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{t.nav.chatWhatsapp} ({STUDIO_INFO.whatsappDisplay})</span>
              </a>

              <button
                id="mobile-get-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full gold-metallic-btn text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <span>{t.nav.getQuote}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
