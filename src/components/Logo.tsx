import React from 'react';

interface LogoProps {
  size?: 'nav' | 'sm' | 'md' | 'lg' | 'hero' | 'footer';
  className?: string;
  id?: string;
  useTransparent?: boolean;
  src?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'nav',
  className = '',
  id = 'official-lamento-logo',
  useTransparent = true,
  src
}) => {
  // Dimension classes preserving exact 1:1 original proportions without distortion
  const sizeClasses = {
    nav: 'h-9 sm:h-11 lg:h-12 w-auto max-w-[150px] sm:max-w-[180px]',
    sm: 'h-8 sm:h-9 w-auto max-w-[120px]',
    md: 'h-10 sm:h-12 w-auto max-w-[160px]',
    lg: 'h-14 sm:h-16 w-auto max-w-[220px]',
    hero: 'h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] drop-shadow-[0_8px_24px_rgba(212,175,55,0.4)]',
    footer: 'h-12 sm:h-14 w-auto max-w-[180px] drop-shadow-[0_4px_12px_rgba(212,175,55,0.2)]'
  };

  const imageSrc = src || (useTransparent 
    ? '/images/logo-transparent.png' 
    : '/images/logo.png');

  const fallbackPng = src || (useTransparent 
    ? '/images/logo-transparent.png' 
    : '/images/logo.png');

  return (
    <div 
      id={id} 
      className={`inline-flex items-center justify-center select-none ${className}`}
    >
      <picture className="flex items-center justify-center">
        {/* High performance WebP with transparent background when using default */}
        {!src && <source srcSet={imageSrc} type="image/webp" />}
        {/* Logo Image */}
        <img
          src={fallbackPng}
          alt="LAMENTO Design Studio - Official Logo"
          referrerPolicy="no-referrer"
          className={`${sizeClasses[size]} object-contain filter contrast-105 transition-all duration-300 hover:brightness-105`}
          loading="eager"
        />
      </picture>
    </div>
  );
};
