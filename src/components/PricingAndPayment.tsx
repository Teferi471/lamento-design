import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRICING_PACKAGES, PAYMENT_ACCOUNTS, SERVICE_RATES } from '../data/pricingData';
import { STUDIO_INFO } from '../data/content';
import { 
  Check, 
  Copy, 
  CreditCard, 
  Sparkles, 
  Smartphone, 
  Building2, 
  Globe, 
  ShieldCheck, 
  Send,
  MessageCircle,
  Receipt,
  ExternalLink,
  UploadCloud,
  Camera
} from 'lucide-react';
import { PhotoUploadZone } from './PhotoUploadZone';
import { UploadedPhoto } from '../types';

interface PricingAndPaymentProps {
  onSelectPackage: (packageName: string) => void;
  onOpenQuote: () => void;
}

export const PricingAndPayment: React.FC<PricingAndPaymentProps> = ({
  onSelectPackage,
  onOpenQuote
}) => {
  const { t } = useLanguage();
  const [currency, setCurrency] = useState<'ETB' | 'USD'>('ETB');
  const [activeTab, setActiveTab] = useState<'banks' | 'packages' | 'rates'>('banks');
  const [bankFilter, setBankFilter] = useState<'all' | 'mobile_money' | 'bank' | 'international'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [receiptPhotos, setReceiptPhotos] = useState<UploadedPhoto[]>([]);
  const [showReceiptUploader, setShowReceiptUploader] = useState(false);

  const handleCopy = (id: string, textToCopy: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      // safe fallback
    }
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  const filteredAccounts = bankFilter === 'all'
    ? PAYMENT_ACCOUNTS
    : PAYMENT_ACCOUNTS.filter((acc) => acc.type === bankFilter);

  return (
    <section id="pricing" className="py-24 bg-[#070707] relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#997819]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-3">
            <span className="w-6 h-px bg-[#d4af37]" />
            <span>{t.pricing.badge}</span>
            <span className="w-6 h-px bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            {t.pricing.heading}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {t.pricing.subheading}
          </p>
        </div>

        {/* Top Control Bar: Main Tabs & Currency Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 max-w-5xl mx-auto">
          {/* Main Category Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#121212] border border-white/10 w-full sm:w-auto justify-center">
            <button
              onClick={() => setActiveTab('banks')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'banks'
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#d4af37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{t.pricing.paymentMethodsTab}</span>
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'packages'
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#d4af37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.pricing.packagesTab}</span>
            </button>
            <button
              onClick={() => setActiveTab('rates')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'rates'
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#d4af37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>{t.pricing.serviceRatesTab}</span>
            </button>
          </div>

          {/* Currency Toggle (ETB vs USD) */}
          <div className="inline-flex items-center gap-2 p-1 bg-[#141414] rounded-xl border border-white/10">
            <span className="text-xs text-neutral-400 pl-3 font-medium hidden sm:inline">
              {t.pricing.currencyToggleLabel}
            </span>
            <button
              onClick={() => setCurrency('ETB')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                currency === 'ETB'
                  ? 'bg-[#d4af37] text-black shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              ETB (Birr)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                currency === 'USD'
                  ? 'bg-[#d4af37] text-black shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* TAB 1: ETHIOPIAN BANKS & DIGITAL WALLETS */}
        {activeTab === 'banks' && (
          <div className="animate-portfolio-fade-slide">
            {/* Bank Sub-Filter Chips */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
              <button
                onClick={() => setBankFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-150 ${
                  bankFilter === 'all'
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#141414] text-neutral-300 hover:text-white border border-white/10'
                }`}
              >
                {t.pricing.allFilter}
              </button>
              <button
                onClick={() => setBankFilter('mobile_money')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-150 flex items-center gap-1.5 ${
                  bankFilter === 'mobile_money'
                    ? 'bg-[#ea580c] text-white font-semibold shadow-md shadow-orange-950/40'
                    : 'bg-[#141414] text-neutral-300 hover:text-white border border-white/10'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-orange-400" />
                <span>{t.pricing.mobileMoneyFilter}</span>
              </button>
              <button
                onClick={() => setBankFilter('bank')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-150 flex items-center gap-1.5 ${
                  bankFilter === 'bank'
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'bg-[#141414] text-neutral-300 hover:text-white border border-white/10'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{t.pricing.banksFilter}</span>
              </button>
              <button
                onClick={() => setBankFilter('international')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-150 flex items-center gap-1.5 ${
                  bankFilter === 'international'
                    ? 'bg-[#dc2626] text-white font-semibold'
                    : 'bg-[#141414] text-neutral-300 hover:text-white border border-white/10'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-rose-400" />
                <span>{t.pricing.internationalFilter}</span>
              </button>
            </div>

            {/* Dedicated International Freelance Websites Quick-Bar */}
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#121212] via-[#16140f] to-[#121212] border border-[#d4af37]/30 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-center lg:text-left">
                  <div className="p-2.5 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 justify-center lg:justify-start">
                      <span>International Freelance Websites & Escrow Payment</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Hire directly, order design packages, or pay safely via verified escrow contracts on official platforms:
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5 w-full lg:w-auto">
                  {/* Upwork Website */}
                  <a
                    href="https://www.upwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#14a800]/15 hover:bg-[#14a800] text-[#14a800] hover:text-white border border-[#14a800]/40 transition-all duration-200 flex items-center gap-1.5 shadow-sm group/btn"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#14a800] group-hover/btn:bg-white" />
                    <span>Upwork Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {/* Fiverr Website */}
                  <a
                    href="https://www.fiverr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#1dbf73]/15 hover:bg-[#1dbf73] text-[#1dbf73] hover:text-white border border-[#1dbf73]/40 transition-all duration-200 flex items-center gap-1.5 shadow-sm group/btn"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1dbf73] group-hover/btn:bg-white" />
                    <span>Fiverr Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {/* Freelancer Website */}
                  <a
                    href="https://www.freelancer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0082c8]/15 hover:bg-[#0082c8] text-[#0082c8] hover:text-white border border-[#0082c8]/40 transition-all duration-200 flex items-center gap-1.5 shadow-sm group/btn"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0082c8] group-hover/btn:bg-white" />
                    <span>Freelancer Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bank Accounts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {filteredAccounts.map((account) => {
                const isCopied = copiedId === account.id;
                return (
                  <div
                    key={account.id}
                    className="p-5 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg"
                  >
                    {/* Top Type Icon & Provider Tag */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div 
                            className="p-2 rounded-xl bg-[#181818] border border-white/10 text-white group-hover:scale-105 transition-transform"
                            style={{ borderColor: account.accentColor ? `${account.accentColor}50` : undefined }}
                          >
                            {account.type === 'mobile_money' ? (
                              <Smartphone className="w-4 h-4 text-orange-400" />
                            ) : account.type === 'international' ? (
                              <Globe className="w-4 h-4 text-rose-400" />
                            ) : (
                              <Building2 className="w-4 h-4 text-[#d4af37]" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-white text-sm sm:text-base leading-tight">
                              {account.name}
                            </h3>
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">
                              {account.badge}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                          {account.currency}
                        </span>
                      </div>

                      {/* Account Number Box with 1-Click Copy */}
                      <div className="my-3 p-3 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-between gap-2 group-hover:border-[#d4af37]/40 transition-colors">
                        <div className="min-w-0 flex-1 pr-2">
                          <span className="block text-[10px] text-neutral-500 font-medium uppercase tracking-wider mb-0.5">
                            {account.type === 'international' 
                              ? `${account.name.split(' ')[0]} Email / Direct Account` 
                              : t.pricing.accountNumberLabel}
                          </span>
                          <span className="font-mono text-sm sm:text-base font-bold text-[#f5df88] tracking-wide select-all break-all">
                            {account.accountNumber}
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopy(account.id, account.accountNumber)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                              : 'bg-[#1e1e1e] text-neutral-200 hover:text-white hover:bg-[#d4af37] hover:text-black border border-white/10'
                          }`}
                          aria-label={`Copy ${account.name} account number`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                              <span>{t.pricing.copiedBtn}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>{t.pricing.copyBtn}</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Account Name */}
                      <div className="text-xs text-neutral-300 flex items-center justify-between mb-2">
                        <span className="text-neutral-500">{t.pricing.accountHolderLabel}:</span>
                        <span className="font-semibold text-white">{account.accountName}</span>
                      </div>

                      {/* Short Instructions */}
                      <p className="text-[11px] text-neutral-400 leading-relaxed mb-1">
                        {account.instructions}
                      </p>

                      {/* Optional Direct Website Button (Upwork, Fiverr, Freelancer, Payoneer) */}
                      {account.websiteUrl && (
                        <a
                          href={account.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 w-full py-2 px-3 rounded-xl bg-white/[0.06] hover:bg-[#d4af37]/20 border border-white/10 hover:border-[#d4af37]/50 text-xs font-semibold text-neutral-200 hover:text-white flex items-center justify-center gap-1.5 transition-all duration-200 group/link"
                        >
                          <span>{account.websiteLabel || 'Visit Website'}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#d4af37] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment Verification & Screenshot WhatsApp Box */}
            <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#14120b] via-[#1a170f] to-[#14120b] border border-[#d4af37]/30 shadow-2xl relative">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] flex-shrink-0">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base sm:text-lg mb-1 flex items-center gap-2">
                      <span>{t.pricing.paymentNoteTitle}</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                      {t.pricing.paymentNoteDesc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setShowReceiptUploader(!showReceiptUploader)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Camera className="w-4 h-4 text-[#d4af37]" />
                    <span>{showReceiptUploader ? 'Hide Uploader' : 'Attach Receipt Photo'}</span>
                  </button>

                  <a
                    href={`https://wa.me/251959215575?text=${encodeURIComponent(
                      `Hello Teferi Gonfa / Lamento Design Studio, I have transferred payment for my design project. Here is my transaction slip / screenshot${
                        receiptPhotos.length > 0 ? ` (${receiptPhotos.map(p => p.name).join(', ')})` : ''
                      }.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 whitespace-nowrap transition-all duration-200 cursor-pointer hover:scale-102"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{t.pricing.confirmOnWhatsapp}</span>
                  </a>
                </div>
              </div>

              {/* Collapsible Receipt Photo Upload Zone */}
              {showReceiptUploader && (
                <div className="pt-4 border-t border-white/10 animate-in fade-in duration-200">
                  <PhotoUploadZone
                    photos={receiptPhotos}
                    onPhotosChange={setReceiptPhotos}
                    label="Upload Bank Transfer / Telebirr Receipt Photo"
                    hint="Drag & drop your payment transaction receipt or screenshot (JPG, PNG, WEBP up to 25MB)"
                    compact={true}
                    maxFiles={3}
                    idPrefix="receipt-upload"
                  />
                  {receiptPhotos.length > 0 && (
                    <p className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Receipt screenshot ready! Click &quot;{t.pricing.confirmOnWhatsapp}&quot; to notify the studio immediately.</span>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: PACKAGES */}
        {activeTab === 'packages' && (
          <div className="animate-portfolio-fade-slide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {PRICING_PACKAGES.map((pkg) => {
                const displayPrice = currency === 'ETB' 
                  ? `${pkg.priceEtb.toLocaleString()} ETB` 
                  : `$${pkg.priceUsd}`;

                return (
                  <div
                    key={pkg.id}
                    className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                      pkg.popular
                        ? 'bg-gradient-to-b from-[#1c1912] via-[#12110c] to-[#0a0a0a] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/15 lg:-translate-y-2'
                        : 'luxury-card border border-white/10'
                    }`}
                  >
                    {/* Most Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#e5c158] to-[#d4af37] text-black shadow-md">
                          {t.pricing.mostPopular}
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Package Title & Sub-badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                          {pkg.name}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold text-[#d4af37] block mb-3">
                        {pkg.badge}
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                        {pkg.description}
                      </p>

                      {/* Price Display */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">
                          {t.pricing.startingFrom}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl sm:text-4xl font-display font-black text-white">
                            {displayPrice}
                          </span>
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                            <Check className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Order Package Button */}
                    <button
                      onClick={() => onSelectPackage(pkg.name)}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                        pkg.popular
                          ? 'gold-metallic-btn text-black font-bold shadow-lg hover:scale-102'
                          : 'bg-[#181818] hover:bg-[#222] text-white border border-white/15 hover:border-[#d4af37]/40'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.pricing.choosePlan}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Custom Scope Banner */}
            <div className="text-center p-6 rounded-2xl bg-[#121212] border border-white/10 max-w-2xl mx-auto">
              <p className="text-sm text-neutral-300 mb-3">
                {t.pricing.customQuoteCta}
              </p>
              <button
                onClick={onOpenQuote}
                className="px-6 py-2.5 rounded-xl border border-[#d4af37]/50 text-[#f5df88] hover:bg-[#d4af37] hover:text-black font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                {t.hero.getQuote}
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: SERVICE RATE CARD */}
        {activeTab === 'rates' && (
          <div className="animate-portfolio-fade-slide max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden shadow-xl">
              <div className="divide-y divide-white/5">
                {SERVICE_RATES.map((rate) => {
                  const displayRate = currency === 'ETB'
                    ? `${rate.startingPriceEtb.toLocaleString()} ETB`
                    : `$${rate.startingPriceUsd}`;

                  return (
                    <div
                      key={rate.id}
                      className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#d4af37]/10 text-[#f5df88] border border-[#d4af37]/20">
                            {rate.category}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-white text-base sm:text-lg mb-1">
                          {rate.name}
                        </h4>
                        <p className="text-xs text-neutral-400 max-w-lg leading-relaxed">
                          {rate.deliverablesSummary}
                        </p>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                        <div className="text-left sm:text-right">
                          <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                            {t.pricing.startingFrom}
                          </span>
                          <span className="text-lg sm:text-xl font-bold font-mono text-[#f5df88]">
                            {displayRate}
                          </span>
                        </div>
                        <button
                          onClick={() => onSelectPackage(rate.name)}
                          className="px-4 py-1.5 rounded-lg border border-white/10 hover:border-[#d4af37] bg-[#161616] hover:bg-[#d4af37] hover:text-black text-neutral-200 text-xs font-medium transition-colors cursor-pointer"
                        >
                          {t.services.orderThisService}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
