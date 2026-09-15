import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Palette, 
  Share2, 
  Sparkles, 
  SlidersHorizontal, 
  Video, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'graphic-design':
        return <Palette className="w-6 h-6 text-[#d4af37]" />;
      case 'social-media-design':
        return <Share2 className="w-6 h-6 text-[#d4af37]" />;
      case 'branding':
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
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
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

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
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#d4af37] hover:text-black text-neutral-200 border border-white/10 hover:border-[#d4af37] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group/btn"
                >
                  <span>{t.services.orderThisService}</span>
                  <ChevronRight className="w-4 h-4 text-[#d4af37] group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all" />
                </button>
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
