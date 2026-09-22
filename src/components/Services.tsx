import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Palette, 
  Share2, 
  Sparkles, 
  SlidersHorizontal, 
  Video, 
  CreditCard,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  UploadCloud,
  Layers,
  Eye
} from 'lucide-react';

const PHOTO_RETOUCH_SHOWCASES = [
  {
    id: 1,
    title: 'Studio Skin & Lighting Retouch',
    image: '/images/photo-retouch-before-after.jpg',
    beforeImage: '/images/photo-retouch-before.jpg',
    afterImage: '/images/photo-retouch-after.jpg',
    label: 'Studio 1'
  },
  {
    id: 2,
    title: 'High-End Beauty & Skin Smoothing',
    image: '/images/befor&affter (2).jpg',
    beforeImage: '/images/photo-retouch-before-2.jpg',
    afterImage: '/images/photo-retouch-after-2.jpg',
    label: 'Beauty 2'
  },
  {
    id: 3,
    title: 'Male Portrait & Frequency Separation',
    image: '/images/befor&affter (3).jpg',
    beforeImage: '/images/photo-retouch-before-3.jpg',
    afterImage: '/images/photo-retouch-after-3.jpg',
    label: 'Portrait 3'
  },
  {
    id: 4,
    title: 'Fashion Golden Hour Color Grading',
    image: '/images/befor&affter (4).jpg',
    beforeImage: '/images/photo-retouch-before-4.jpg',
    afterImage: '/images/photo-retouch-after-4.jpg',
    label: 'Color 4'
  },
  {
    id: 5,
    title: 'Luxury Product & Jewelry Polish',
    image: '/images/befor&affter (5).jpg',
    beforeImage: '/images/photo-retouch-before-5.jpg',
    afterImage: '/images/photo-retouch-after-5.jpg',
    label: 'Product 5'
  },
  {
    id: 6,
    title: 'Romantic Bridal & Lighting Retouch',
    image: '/images/befor&affter (6).jpg',
    beforeImage: '/images/photo-retouch-before-6.jpg',
    afterImage: '/images/photo-retouch-after-6.jpg',
    label: 'Bridal 6'
  },
  {
    id: 7,
    title: 'Editorial Cosmetic Makeup Retouch',
    image: '/images/befor&affter (7).jpg',
    beforeImage: '/images/photo-retouch-before-7.jpg',
    afterImage: '/images/photo-retouch-after-7.jpg',
    label: 'Makeup 7'
  },
  {
    id: 8,
    title: 'Studio Background Replacement & Grade',
    image: '/images/befor&affter (8).jpg',
    beforeImage: '/images/photo-retouch-before-8.jpg',
    afterImage: '/images/photo-retouch-after-8.jpg',
    label: 'Composite 8'
  }
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { t } = useLanguage();
  const [activeRetouchIndex, setActiveRetouchIndex] = useState(0);

  const currentRetouch = PHOTO_RETOUCH_SHOWCASES[activeRetouchIndex];

  const handlePrevRetouch = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveRetouchIndex((prev) => (prev === 0 ? PHOTO_RETOUCH_SHOWCASES.length - 1 : prev - 1));
  };

  const handleNextRetouch = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveRetouchIndex((prev) => (prev === PHOTO_RETOUCH_SHOWCASES.length - 1 ? 0 : prev + 1));
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'graphic-design':
        return <Palette className="w-6 h-6 text-[#d4af37]" />;
      case 'logo-brand-identity':
      case 'branding':
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
      case 'business-cards-brochures':
        return <CreditCard className="w-6 h-6 text-[#d4af37]" />;
      case 'social-media-design':
        return <Share2 className="w-6 h-6 text-[#d4af37]" />;
      case 'photo-retouching':
      case 'photo-editing':
        return <SlidersHorizontal className="w-6 h-6 text-[#d4af37]" />;
      case 'video-editing':
        return <Video className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#080808] relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
            <span className="w-6 h-px bg-[#d4af37]" />
            <span>{t.services.badge}</span>
            <span className="w-6 h-px bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            {t.services.heading}
          </h2>
          <p className="text-base text-neutral-400 max-w-xl mx-auto">
            {t.services.subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((service, index) => {
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="luxury-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative group"
              >
                {/* Subtle top gold accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/0 to-transparent group-hover:via-[#d4af37]/80 transition-all duration-500" />

                <div>
                  {/* Card Header with Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-[#171510] border border-[#d4af37]/30 flex items-center justify-center group-hover:border-[#d4af37] group-hover:scale-105 transition-all duration-300">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-[#f3e5ab] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Photo Retouching Visual Showcase Thumbnail & Gallery */}
                  {(service.id === 'photo-retouching' || service.id === 'photo-editing') && (
                    <div className="mb-5 rounded-xl overflow-hidden border border-[#d4af37]/30 bg-black/60 relative group/thumb shadow-inner">
                      {/* Main Before & After Preview */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                        <img
                          key={currentRetouch.image}
                          src={currentRetouch.image}
                          alt={`${currentRetouch.title} before and after retouch comparison`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />
                        
                        {/* Before & After Badges */}
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] uppercase font-bold text-neutral-300 border border-white/10 backdrop-blur-sm">
                          Before
                        </div>
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#d4af37] text-[10px] uppercase font-bold text-black border border-[#d4af37] backdrop-blur-sm shadow-sm">
                          After
                        </div>

                        {/* Slide Counter Badge */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/80 text-[10px] font-semibold text-[#f5df88] border border-[#d4af37]/30 backdrop-blur-sm">
                          {activeRetouchIndex + 1} / {PHOTO_RETOUCH_SHOWCASES.length} Photos
                        </div>

                        {/* Navigation Arrows */}
                        <button
                          type="button"
                          onClick={handlePrevRetouch}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center transition-all border border-white/20 shadow-lg cursor-pointer z-10"
                          aria-label="Previous retouch photo"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextRetouch}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center transition-all border border-white/20 shadow-lg cursor-pointer z-10"
                          aria-label="Next retouch photo"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        {/* Title Caption */}
                        <div className="absolute bottom-2 left-2 right-2 text-center text-[11px] font-semibold text-[#f5df88] tracking-wide truncate px-2">
                          {currentRetouch.title}
                        </div>
                      </div>

                      {/* 8-Photo Interactive Thumbnail Strip */}
                      <div className="p-2 bg-[#0c0c0c] border-t border-white/10">
                        <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar py-0.5">
                          {PHOTO_RETOUCH_SHOWCASES.map((item, idx) => {
                            const isSelected = activeRetouchIndex === idx;
                            return (
                              <button
                                key={item.id}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveRetouchIndex(idx);
                                }}
                                className={`relative flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer border ${
                                  isSelected 
                                    ? 'border-[#d4af37] ring-1 ring-[#d4af37] scale-105 shadow-md shadow-[#d4af37]/30' 
                                    : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                                }`}
                                title={item.title}
                              >
                                <img 
                                  src={item.image} 
                                  alt={item.title} 
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover" 
                                />
                                <span className={`absolute bottom-0 inset-x-0 text-[8px] font-bold text-center leading-tight ${
                                  isSelected ? 'bg-[#d4af37] text-black' : 'bg-black/80 text-white/90'
                                }`}>
                                  #{idx + 1}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Deliverables List */}
                  <div className="border-t border-white/5 pt-5 mb-6">
                    <div className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold mb-3">
                      {t.services.deliverablesTitle}:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/70 flex-shrink-0" />
                          <span className="truncate" title={item}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                {service.id === 'photo-retouching' || service.id === 'photo-editing' ? (
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full mt-2 py-3 px-4 rounded-xl gold-metallic-btn text-black text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg hover:scale-101"
                  >
                    <UploadCloud className="w-4 h-4 text-black" />
                    <span>Upload Photo & Get Retouch</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#d4af37] hover:text-black text-neutral-200 border border-white/10 hover:border-[#d4af37] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span>{t.services.orderThisService}</span>
                    <ChevronRight className="w-4 h-4 text-[#d4af37] group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Quote Teaser Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14120c] via-[#1a1711] to-[#14120c] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              {t.services.requestCustomService}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              LAMENTO Design Studio &bull; Addis Ababa, Ethiopia &bull; Worldwide Delivery
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Design Package')}
            className="gold-metallic-btn text-black font-semibold text-xs sm:text-sm px-6 py-3 rounded-full flex-shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>{t.nav.getQuote}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
