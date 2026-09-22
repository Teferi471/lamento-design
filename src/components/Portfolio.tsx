import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioCategory, PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { Eye, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioProps {
  onRequestProject: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onRequestProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const { t } = useLanguage();

  const categoryList: { key: PortfolioCategory; label: string }[] = [
    { key: 'All', label: t.portfolio.categories.all },
    { key: 'Logos', label: t.portfolio.categories.logos },
    { key: 'Branding', label: t.portfolio.categories.branding },
    { key: 'Social Media', label: t.portfolio.categories.socialMedia },
    { key: 'Print Design', label: t.portfolio.categories.printDesign },
    { key: 'Photo Editing', label: t.portfolio.categories.photoEditing },
    { key: 'Video', label: t.portfolio.categories.video }
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => {
        if (activeCategory === 'Photo Editing') {
          return item.category === 'Photo Editing' || (item.category as string) === 'Photo Retouching';
        }
        return item.category === activeCategory;
      });

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
            <span className="w-6 h-px bg-[#d4af37]" />
            <span>{t.portfolio.badge}</span>
            <span className="w-6 h-px bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            {t.portfolio.heading}
          </h2>
          <p className="text-base text-neutral-400 max-w-xl mx-auto">
            {t.portfolio.subheading}
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categoryList.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#e5c158] to-[#d4af37] text-black font-semibold shadow-md shadow-[#d4af37]/20 scale-105'
                    : 'bg-[#141414] text-neutral-300 hover:text-white border border-white/10 hover:border-[#d4af37]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid with smooth fade-and-slide transition on category change */}
        <div 
          key={activeCategory} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-portfolio-fade-slide"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`portfolio-item-${project.id}`}
              style={{ animationDelay: `${Math.min(index * 60, 360)}ms` }}
              className="animate-portfolio-card luxury-card rounded-2xl overflow-hidden group flex flex-col justify-between border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300"
            >
              {/* Image Container with Zoom & Overlay */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161616]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-black/80 border border-[#d4af37]/40 text-[#f5df88] backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick View Trigger on Image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-3.5 rounded-full bg-[#111] border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors transform translate-y-3 group-hover:translate-y-0 duration-300 cursor-pointer shadow-xl"
                    aria-label={`View ${project.title}`}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 group-hover:text-[#e5c158] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-5">
                    {project.shortDesc}
                  </p>
                </div>

                {/* "View Project" Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl border border-white/10 hover:border-[#d4af37] bg-[#141414] hover:bg-[#1a1710] text-neutral-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-between transition-all duration-200 cursor-pointer"
                >
                  <span>{t.portfolio.viewProject}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#d4af37]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if category filter has 0 items */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-400">No projects currently displayed in this category.</p>
          </div>
        )}

      </div>

      {/* Modal Popup for Project Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(title) => onRequestProject(title)}
      />
    </section>
  );
};
