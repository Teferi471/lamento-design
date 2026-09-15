import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/content';
import { X, CheckCircle2, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Graphic Design'
}) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceNeeded: preselectedService || 'Graphic Design',
    budget: 'Professional ($500 - $1,500)',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceNeeded: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0f0f0f] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl shadow-black max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#0a0a0a]">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
            <h3 className="text-lg sm:text-xl font-display font-bold text-white">
              {t.nav.getQuote} &bull; LAMENTO
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-display font-bold text-white">
                {t.contact.form.successHeading}
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                {t.contact.form.successMessage}
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/251911234567?text=${encodeURIComponent(
                    `Hello LAMENTO, I just requested a quote for ${formData.serviceNeeded}. Name: ${formData.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.contact.whatsappBox.button}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1c1c1c] hover:bg-[#252525] text-neutral-300 text-xs sm:text-sm font-medium cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Service & Budget Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.contact.form.serviceNeeded} <span className="text-[#d4af37]">*</span>
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 focus:border-[#d4af37] text-white text-sm focus:outline-none"
                  >
                    {t.services.items.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Complete Brand Overhaul">Complete Brand Overhaul</option>
                    <option value="Social Media & Video Bundle">Social Media & Video Bundle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Estimated Budget Scope
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 focus:border-[#d4af37] text-white text-sm focus:outline-none"
                  >
                    <option value="Starter / Single Asset (< $500)">Starter / Single Asset (&lt; $500)</option>
                    <option value="Professional ($500 - $1,500)">Professional ($500 - $1,500)</option>
                    <option value="Luxury Studio Package ($1,500 - $3,500)">Luxury Studio Package ($1,500 - $3,500)</option>
                    <option value="Enterprise / Retainer ($3,500+)">Enterprise / Retainer ($3,500+)</option>
                  </select>
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.contact.form.name} <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141414] border border-white/10 focus:border-[#d4af37] text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.contact.form.email} <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141414] border border-white/10 focus:border-[#d4af37] text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.contact.form.phone} <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.contact.form.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141414] border border-white/10 focus:border-[#d4af37] text-white text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  {t.contact.form.projectDetails} <span className="text-[#d4af37]">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder={t.contact.form.projectDetailsPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 focus:border-[#d4af37] text-white text-sm focus:outline-none resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={STUDIO_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.contact.whatsappBox.button}</span>
                </a>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-7 py-3 rounded-full gold-metallic-btn text-black font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>{t.contact.form.submitting}</span>
                  ) : (
                    <>
                      <span>{t.contact.form.submit}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
