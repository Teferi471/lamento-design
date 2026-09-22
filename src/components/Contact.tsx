import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/content';
import { 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Video as VideoIcon
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PhotoUploadZone } from './PhotoUploadZone';
import { UploadedPhoto } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceNeeded: initialService || 'Graphic Design',
    projectDetails: '',
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhoto[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if initialService changes from props
  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable studio submission dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setUploadedPhotos([]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceNeeded: t.services.items[0]?.title || 'Graphic Design',
      projectDetails: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#070707] relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
            <span className="w-6 h-px bg-[#d4af37]" />
            <span>{t.contact.badge}</span>
            <span className="w-6 h-px bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="text-base text-neutral-400 max-w-lg mx-auto">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="luxury-card rounded-3xl p-7 sm:p-10 border border-[#d4af37]/25 relative">
              
              {submitted ? (
                <div className="text-center py-12 px-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {t.contact.form.successHeading}
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto mb-4 leading-relaxed">
                    {t.contact.form.successMessage}
                  </p>
                  {uploadedPhotos.length > 0 && (
                    <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs text-[#d4af37]">
                      <span>{uploadedPhotos.length} photo(s) attached with your submission</span>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(
                        `Hello Teferi Gonfa / LAMENTO, I just submitted a project request for "${formData.serviceNeeded}" under the name ${formData.name}${
                          uploadedPhotos.length > 0 ? ` with ${uploadedPhotos.length} photo(s) attached (${uploadedPhotos.map(p => p.name).join(', ')})` : ''
                        }.`
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
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#181818] hover:bg-[#222] border border-white/10 text-neutral-300 text-xs sm:text-sm font-medium cursor-pointer"
                    >
                      {t.contact.form.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        {t.contact.form.name} <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 focus:border-[#d4af37] text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        {t.contact.form.email} <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 focus:border-[#d4af37] text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp & Service Needed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        {t.contact.form.phone} <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 focus:border-[#d4af37] text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceNeeded" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        {t.contact.form.serviceNeeded} <span className="text-[#d4af37]">*</span>
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 focus:border-[#d4af37] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-colors"
                      >
                        {t.services.items.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#121212] text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Complete Brand Overhaul" className="bg-[#121212] text-white">Complete Brand Overhaul</option>
                        <option value="Other / Custom Project" className="bg-[#121212] text-white">Other / Custom Project</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      {t.contact.form.projectDetails} <span className="text-[#d4af37]">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={4}
                      required
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder={t.contact.form.projectDetailsPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 focus:border-[#d4af37] text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-colors resize-y"
                    />
                  </div>

                  {/* Photo Upload Zone */}
                  <PhotoUploadZone
                    photos={uploadedPhotos}
                    onPhotosChange={setUploadedPhotos}
                    label={t.contact.form.uploadPhoto}
                    hint={t.contact.form.uploadPhotoHint}
                    idPrefix="contact-photo"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl gold-metallic-btn text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-transform"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>{t.contact.form.submitting}</span>
                      </span>
                    ) : (
                      <>
                        <span>{t.contact.form.submit}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-neutral-500">
                    {t.contact.form.privacyNote}
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Contact Options & Highly Visible WhatsApp Direct */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Highly Visible WhatsApp Contact Option */}
            <div className="rounded-3xl p-7 bg-gradient-to-br from-[#0c1f15] via-[#0d1611] to-[#0a120e] border-2 border-emerald-500/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{t.contact.whatsappBox.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                  {t.contact.whatsappBox.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {t.contact.whatsappBox.desc}
                </p>

                <a
                  href={STUDIO_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>{t.contact.whatsappBox.button} ({STUDIO_INFO.whatsappDisplay})</span>
                </a>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="luxury-card rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#1a1711] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                    {t.contact.emailBox.title}
                  </div>
                  <a href={STUDIO_INFO.socials.email} className="text-sm sm:text-base font-bold text-white hover:text-[#d4af37] transition-colors">
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>
              <a
                href={STUDIO_INFO.socials.email}
                className="p-2 text-neutral-400 hover:text-white"
                aria-label="Send Email"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Social Media Channels List */}
            <div className="luxury-card rounded-2xl p-6">
              <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">
                {t.contact.socialsTitle}
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                {/* WhatsApp */}
                <a
                  href={STUDIO_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#131313] hover:bg-[#1a1a1a] border border-white/5 hover:border-emerald-500/40 text-xs font-medium text-neutral-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                {/* Instagram */}
                <a
                  href={STUDIO_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#131313] hover:bg-[#1a1a1a] border border-white/5 hover:border-pink-500/40 text-xs font-medium text-neutral-200 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href={STUDIO_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#131313] hover:bg-[#1a1a1a] border border-white/5 hover:border-blue-500/40 text-xs font-medium text-neutral-200 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>Facebook</span>
                </a>

                {/* TikTok */}
                <a
                  href={STUDIO_INFO.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#131313] hover:bg-[#1a1a1a] border border-white/5 hover:border-[#d4af37]/40 text-xs font-medium text-neutral-200 transition-colors"
                >
                  <VideoIcon className="w-4 h-4 text-[#d4af37]" />
                  <span>TikTok</span>
                </a>

                {/* YouTube */}
                <a
                  href={STUDIO_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#131313] hover:bg-[#1a1a1a] border border-white/5 hover:border-red-500/40 text-xs font-medium text-neutral-200 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-400" />
                  <span>YouTube</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={STUDIO_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#131313] hover:bg-[#1a1a1a] border border-white/5 hover:border-sky-500/40 text-xs font-medium text-neutral-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
