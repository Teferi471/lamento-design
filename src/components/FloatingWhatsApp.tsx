import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/content';
import { MessageCircle, X, Send, Phone, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FloatingWhatsAppProps {
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
  onOpenQuote?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
  onClose: controlledOnClose,
  onOpenQuote,
}) => {
  const { t } = useLanguage();
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const isChatOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (controlledOnToggle) {
      controlledOnToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = customMessage.trim() 
      ? encodeURIComponent(customMessage.trim()) 
      : encodeURIComponent(`Akkam Teferi! I'm interested in Lamento Design Studio's creative services.`);
    const whatsappUrl = `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setCustomMessage('');
  };

  return (
    <aside aria-label="Live Chat Support" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Live Chat Drawer / Box */}
      {isChatOpen && (
        <div 
          id="live-chat-window"
          className="mb-4 w-[340px] sm:w-[380px] rounded-2xl bg-[#0f0f0f] border border-[#d4af37]/35 shadow-2xl shadow-black/90 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#181818] via-[#121212] to-[#181818] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Designer Avatar with Online Dot */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f9edc8] p-0.5">
                  <div className="w-full h-full rounded-full bg-[#141414] overflow-hidden flex items-center justify-center">
                    <span className="font-serif-luxury text-sm font-bold text-[#d4af37]">TG</span>
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0f0f0f] animate-pulse" />
              </div>

              {/* Designer Info */}
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-white leading-none">
                    {t.floatingWhatsapp.designerName}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-[11px] text-[#d4af37] mt-0.5">
                  {t.floatingWhatsapp.designerRole}
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-emerald-300 font-medium">
                    {t.floatingWhatsapp.onlineStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 space-y-3 max-h-[280px] overflow-y-auto bg-[#0a0a0a]/90">
            {/* System welcome notice */}
            <div className="text-center">
              <span className="text-[10px] text-neutral-500 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
                Lamento Design Studio • Official Support
              </span>
            </div>

            {/* Teferi's Greeting Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#181818] border border-[#d4af37]/30 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-[#d4af37]">
                TG
              </div>
              <div className="bg-[#181818] border border-white/10 text-neutral-200 text-xs sm:text-sm p-3 rounded-2xl rounded-tl-sm leading-relaxed shadow-md">
                <p>{t.floatingWhatsapp.greeting}</p>
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Phone: {STUDIO_INFO.phone}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Chips */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={STUDIO_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs hover:bg-emerald-900/60 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t.floatingWhatsapp.sendWhatsapp}</span>
              </a>

              {onOpenQuote && (
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    onOpenQuote();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1a1710] border border-[#d4af37]/40 text-[#f9edc8] text-xs hover:bg-[#252014] transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{t.floatingWhatsapp.requestQuote}</span>
                </button>
              )}

              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>{t.floatingWhatsapp.callDirect}</span>
              </a>
            </div>
          </div>

          {/* Form Composer */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#121212] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder={t.floatingWhatsapp.quickMsgPlaceholder}
              className="flex-grow bg-[#090909] border border-white/10 rounded-full px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center flex-shrink-0 transition-transform active:scale-90 cursor-pointer shadow-lg shadow-emerald-500/30"
              title={t.floatingWhatsapp.sendWhatsapp}
            >
              <Send className="w-3.5 h-3.5 fill-black" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button with Online Badge */}
      <div className="flex items-center gap-2 group">
        {/* Tooltip on hover when closed */}
        {!isChatOpen && (
          <span className="hidden md:inline-block bg-[#121212] border border-[#d4af37]/30 text-white text-xs px-3.5 py-1.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            {t.floatingWhatsapp.tooltip}
          </span>
        )}

        <button
          onClick={handleToggle}
          className="h-13 px-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black flex items-center gap-2.5 shadow-2xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 relative focus:outline-none focus:ring-4 focus:ring-emerald-500/30 cursor-pointer font-bold text-xs sm:text-sm"
          aria-label="Open Live Chat with Teferi Gonfa"
          id="floating-live-chat-toggle"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-black text-black" />
          <span className="hidden sm:inline">Live Chat</span>
        </button>
      </div>
    </aside>
  );
};

