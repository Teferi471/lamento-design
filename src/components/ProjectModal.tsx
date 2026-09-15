import React from 'react';
import { PortfolioProject } from '../types';
import { X, ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  const { t } = useLanguage();

  if (!project) return null;

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
          {/* Main Showcase Image with Zoom container */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black aspect-video max-h-[380px]">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

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
