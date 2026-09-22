import React, { useState } from 'react';
import { PortfolioProject } from '../types';
import { X, ExternalLink, CheckCircle, ArrowRight, Sliders, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  const { t } = useLanguage();
  const [sliderPos, setSliderPos] = useState(50);
  const [activeViewMode, setActiveViewMode] = useState<'comparison' | 'slider' | 'before' | 'after'>('comparison');

  if (!project) return null;

  const hasBeforeAfter = Boolean(project.beforeImageUrl && project.afterImageUrl);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#111111] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xl shadow-black/90 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d0d0d]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={t.portfolio.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Main Showcase Area */}
          {hasBeforeAfter ? (
            <div className="space-y-3">
              {/* View Mode Switcher */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-1">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <button
                    onClick={() => setActiveViewMode('comparison')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      activeViewMode === 'comparison'
                        ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Side-by-Side
                  </button>
                  <button
                    onClick={() => setActiveViewMode('slider')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
                      activeViewMode === 'slider'
                        ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Interactive Slider</span>
                  </button>
                  <button
                    onClick={() => setActiveViewMode('before')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      activeViewMode === 'before'
                        ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setActiveViewMode('after')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
                      activeViewMode === 'after'
                        ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>After</span>
                  </button>
                </div>

                <span className="text-[11px] text-neutral-400">
                  {activeViewMode === 'slider' ? 'Drag slider to compare' : 'Real Studio Retouch'}
                </span>
              </div>

              {/* View Containers */}
              {activeViewMode === 'comparison' && (
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black aspect-video max-h-[420px]">
                  <img 
                    src={project.imageUrl} 
                    alt={`${project.title} Comparison`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain bg-[#0a0a0a]"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[10px] uppercase font-bold tracking-wider text-neutral-300 border border-white/20 backdrop-blur-sm">
                    Before
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#d4af37]/90 text-[10px] uppercase font-bold tracking-wider text-black border border-[#d4af37] backdrop-blur-sm">
                    After
                  </div>
                </div>
              )}

              {activeViewMode === 'slider' && (
                <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/40 bg-black aspect-video max-h-[420px] select-none">
                  {/* After (Bottom Layer) */}
                  <img 
                    src={project.afterImageUrl} 
                    alt="Retouched After"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-contain bg-[#0a0a0a]"
                  />
                  
                  {/* Before (Top Layer clipped to slider position) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                  >
                    <img 
                      src={project.beforeImageUrl} 
                      alt="Original Before"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-contain bg-[#0a0a0a]"
                    />
                  </div>

                  {/* Vertical Dividing Line & Handle */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)] pointer-events-none"
                    style={{ left: `calc(${sliderPos}% - 0.5px)` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg border-2 border-black">
                      <Sliders className="w-3.5 h-3.5 rotate-90" />
                    </div>
                  </div>

                  {/* Floating Labels */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[10px] uppercase font-bold tracking-wider text-neutral-300 border border-white/20 backdrop-blur-sm pointer-events-none">
                    Before (Raw)
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#d4af37]/90 text-[10px] uppercase font-bold tracking-wider text-black border border-[#d4af37] backdrop-blur-sm pointer-events-none">
                    After (Retouched)
                  </div>

                  {/* Invisible Range Input on Top */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label="Before and after slider"
                  />
                </div>
              )}

              {activeViewMode === 'before' && (
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black aspect-video max-h-[420px]">
                  <img 
                    src={project.beforeImageUrl} 
                    alt="Original Before"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain bg-[#0a0a0a]"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[10px] uppercase font-bold tracking-wider text-neutral-300 border border-white/20 backdrop-blur-sm">
                    Original Unedited Photo
                  </div>
                </div>
              )}

              {activeViewMode === 'after' && (
                <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/50 bg-black aspect-video max-h-[420px]">
                  <img 
                    src={project.afterImageUrl} 
                    alt="Retouched After"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain bg-[#0a0a0a]"
                  />
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#d4af37] text-[10px] uppercase font-bold tracking-wider text-black border border-[#d4af37] backdrop-blur-sm">
                    Commercial Studio Retouched
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Standard Showcase Image */
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black aspect-video max-h-[380px]">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Title & Metadata */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {project.title}
            </h3>
            {project.client && (
              <p className="text-sm text-[#d4af37] font-medium">
                {t.portfolio.clientLabel}: {project.client}
              </p>
            )}
          </div>

          {/* Descriptions */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {project.fullDesc || project.shortDesc}
          </p>

          {/* Deliverables tags */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                {t.portfolio.deliverablesLabel}:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((item, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#191712] border border-[#d4af37]/30 text-xs text-neutral-200"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={STUDIO_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{t.nav.chatWhatsapp}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title);
              }}
              className="w-full sm:w-auto gold-metallic-btn text-black font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.portfolio.consultOnProject}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
