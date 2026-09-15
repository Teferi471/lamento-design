import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Globe, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'nav' | 'mobile' | 'footer';
  className?: string;
  id?: string;
}

interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  nativeName: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', shortLabel: 'EN', nativeName: 'English' },
  { code: 'om', label: 'Afaan Oromoo', shortLabel: 'OM', nativeName: 'Afaan Oromoo' },
  { code: 'am', label: 'Amharic', shortLabel: 'AM', nativeName: 'አማርኛ' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'nav',
  className = '',
  id = 'language-switcher'
}) => {
  const { language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentOption = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  // Mobile drawer variant: clear full-width segmented buttons
  if (variant === 'mobile') {
    return (
      <div id={id} className={`w-full ${className}`}>
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2 font-medium">
          <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Select Language / Afaan Filadhaa / ቋንቋ ይምረጡ</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#161616] rounded-xl border border-white/10">
          {LANGUAGES.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`py-2 px-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-black font-semibold shadow-md'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
                aria-pressed={isActive}
              >
                <span className="text-[11px] font-bold tracking-wider">{lang.shortLabel}</span>
                <span className="text-[10px] opacity-85 truncate max-w-full">{lang.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Footer variant
  if (variant === 'footer') {
    return (
      <div id={id} className={`flex items-center gap-2 ${className}`}>
        <Globe className="w-4 h-4 text-[#d4af37]" />
        <div className="flex items-center bg-[#141414] border border-white/10 rounded-full p-0.5">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-2.5 py-1 text-xs rounded-full transition-all cursor-pointer ${
                language === lang.code
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang.shortLabel}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Nav desktop variant: luxury compact segmented switch
  return (
    <div id={id} ref={dropdownRef} className={`relative flex items-center ${className}`}>
      {/* Sleek Segmented Switcher */}
      <div className="flex items-center bg-[#111111]/90 border border-[#d4af37]/30 rounded-full p-0.5 shadow-sm backdrop-blur-md">
        <div className="pl-2 pr-1 text-[#d4af37] flex items-center">
          <Globe className="w-3.5 h-3.5" />
        </div>
        {LANGUAGES.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              title={`${lang.label} (${lang.nativeName})`}
              className={`px-2.5 py-1 rounded-full text-xs transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-black font-bold shadow-sm'
                  : 'text-neutral-300 hover:text-[#e5c158] hover:bg-white/5 font-medium'
              }`}
              aria-label={`Switch language to ${lang.label}`}
              aria-pressed={isActive}
            >
              <span>{lang.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
