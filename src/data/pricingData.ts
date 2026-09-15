import { PricingPackage, PaymentAccount } from '../types';

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    badge: 'Jalqabaa / ጀማሪ',
    priceEtb: 2500,
    priceUsd: 35,
    popular: false,
    description: 'Perfect for individual creators, freelancers, and small business startups needing essential visual polish.',
    features: [
      '2 Custom Logo Concepts or 3 Social Media Graphics',
      'High-Resolution Exports (PNG, JPG, Transparent)',
      '2 Revision Rounds Included',
      'Standard 24–48h Turnaround',
      'Direct WhatsApp Communication'
    ]
  },
  {
    id: 'business-branding',
    name: 'Business & Brand Suite',
    badge: 'Daldalaa / ንግድ (Most Popular)',
    priceEtb: 6500,
    priceUsd: 95,
    popular: true,
    description: 'Our most sought-after full brand identity system for businesses looking to dominate their market.',
    features: [
      '3D & Metallic Gold Luxury Logo (Multiple Angles)',
      'Brand Identity Guidelines (Colors, Fonts, Spacing)',
      'Luxury Business Card & Corporate Brochure Layout',
      '5 Custom Social Media Banners/Posts (FB, IG, TikTok)',
      'All Master Vector Source Files (AI, EPS, SVG, PDF)',
      'Unlimited Revisions until 100% Satisfied',
      'Priority 24-Hour Delivery'
    ]
  },
  {
    id: 'vip-agency',
    name: 'VIP Multimedia & Video Suite',
    badge: 'Guutuu / የተሟላ ኤጀንሲ',
    priceEtb: 14000,
    priceUsd: 190,
    popular: false,
    description: 'The complete creative studio solution including 4K video editing, high-end retouching, and VIP support.',
    features: [
      'Everything in Business & Brand Suite',
      '4K Cinematic Video Editing (Reels, TikTok Shorts, or YouTube)',
      'High-End Commercial Photo Retouching & Color Grading',
      'Corporate Stationery, Certificates, and Promotional Banners',
      'Dedicated 1-on-1 VIP Direct Line with Teferi Gonfa',
      'Lifetime Cloud Backup of All Raw Design Assets'
    ]
  }
];

export interface ServiceRate {
  id: string;
  name: string;
  category: string;
  startingPriceEtb: number;
  startingPriceUsd: number;
  unit: string;
  deliverablesSummary: string;
}

export const SERVICE_RATES: ServiceRate[] = [
  {
    id: 'rate-logo',
    name: 'Logo & Brand Identity',
    category: 'Logo & Branding',
    startingPriceEtb: 2500,
    startingPriceUsd: 35,
    unit: 'per brand project',
    deliverablesSummary: '3D Gold or minimalist vector, stationery mockups & high-res vector files'
  },
  {
    id: 'rate-social',
    name: 'Social Media Banners & Posters',
    category: 'Social Media',
    startingPriceEtb: 800,
    startingPriceUsd: 15,
    unit: 'per graphic/flyer',
    deliverablesSummary: 'Facebook covers, Instagram posts/carousels, YouTube thumbnails & promo ads'
  },
  {
    id: 'rate-print',
    name: 'Business Cards & Brochures',
    category: 'Print Design',
    startingPriceEtb: 1500,
    startingPriceUsd: 25,
    unit: 'per layout/collateral',
    deliverablesSummary: 'Double-sided luxury business cards, bi-fold/tri-fold marketing brochures'
  },
  {
    id: 'rate-photo',
    name: 'Photo Retouching & Color Correction',
    category: 'Photo Retouching',
    startingPriceEtb: 500,
    startingPriceUsd: 10,
    unit: 'per photo',
    deliverablesSummary: 'Studio skin retouching, background enhancement & commercial tone correction'
  },
  {
    id: 'rate-video',
    name: '4K Video Editing & Shorts',
    category: 'Video Editing',
    startingPriceEtb: 2000,
    startingPriceUsd: 30,
    unit: 'per video / short clip',
    deliverablesSummary: '4K YouTube videos, viral TikTok Shorts & Instagram Reels with dynamic subtitles'
  }
];

export const PAYMENT_ACCOUNTS: PaymentAccount[] = [
  {
    id: 'telebirr',
    name: 'Telebirr (ቴሌብር)',
    type: 'mobile_money',
    accountNumber: '0959215575',
    accountName: 'Teferi Gonfa',
    badge: 'Mobile Money',
    currency: 'ETB',
    instructions: 'Kaffaltii salphaa Telebirr App ykn *127# fayyadamuun kaffalaatii nagahee ergaa.',
    accentColor: '#f97316'
  },
  {
    id: 'mpesa',
    name: 'Safaricom M-PESA',
    type: 'mobile_money',
    accountNumber: '0718155257',
    accountName: 'Teferi Gonfa',
    badge: 'M-PESA Ethiopia',
    currency: 'ETB',
    instructions: 'Safaricom M-PESA App ykn *733# fayyadamuun kaffaltii hatattamaa raawwadhaa.',
    accentColor: '#16a34a'
  },
  {
    id: 'cbe',
    name: 'Commercial Bank of Ethiopia (CBE)',
    type: 'bank',
    accountNumber: '1000464375388',
    accountName: 'Teferi Gonfa',
    badge: 'Baankii Daldala / ንግድ ባንክ',
    currency: 'ETB',
    instructions: 'CBE Mobile Banking, CBE Birr ykn damee baankichaa dhiyoo jiruun kaffalaa.',
    accentColor: '#831843'
  },
  {
    id: 'abyssinia',
    name: 'Bank of Abyssinia (BoA)',
    type: 'bank',
    accountNumber: '110996128',
    accountName: 'Teferi Gonfa',
    badge: 'Apollo & BoA Mobile',
    currency: 'ETB',
    instructions: 'Apollo Mobile App ykn damee Baankii Abisiiniyaa dhiyoo jiruun kaffalaa.',
    accentColor: '#d97706'
  },
  {
    id: 'awash',
    name: 'Awash Bank (አዋሽ ባንክ)',
    type: 'bank',
    accountNumber: '01320778543100',
    accountName: 'Teferi Gonfa',
    badge: 'Awash Birr & Banking',
    currency: 'ETB',
    instructions: 'Awash Mobile App, Awash Birr ykn damee Awash Bank kamiyyuu irratti dabarsaa.',
    accentColor: '#1d4ed8'
  },
  {
    id: 'coop',
    name: 'Cooperative Bank of Oromia',
    type: 'bank',
    accountNumber: '1035000090877',
    accountName: 'Teferi Gonfa',
    badge: 'Coopbank / Coopay-Ebirr',
    currency: 'ETB',
    instructions: 'Coopay-Ebirr ykn herrega Baankii Hojii Gamtaa Oromiyaatiin dabarsaa.',
    accentColor: '#0284c7'
  },
  {
    id: 'dashen',
    name: 'Dashen Bank (ዳሽን ባንክ)',
    type: 'bank',
    accountNumber: '5249592155011',
    accountName: 'Teferi Gonfa',
    badge: 'Amole & Dashen Mobile',
    currency: 'ETB',
    instructions: 'Amole App ykn herrega Baankii Daashaniin kaffaltii raawwadhaa.',
    accentColor: '#047857'
  },
  {
    id: 'siinqee',
    name: 'Siinqee Bank (ሲንቄ ባንክ)',
    type: 'bank',
    accountNumber: '1095921557501',
    accountName: 'Teferi Gonfa',
    badge: 'Siinqee Mobile Banking',
    currency: 'ETB',
    instructions: 'Siinqee Mobile App ykn damee Baankii Siinqee kamiiniyyuu kaffalaa.',
    accentColor: '#b45309'
  },
  {
    id: 'payoneer',
    name: 'Payoneer (International / Diaspora)',
    type: 'international',
    accountNumber: 'kebaradvert@gmail.com',
    accountName: 'Teferi Gonfa / Kebar Advert',
    badge: 'Worldwide (USD / EUR / GBP)',
    currency: 'USD / EUR',
    instructions: 'Payoneer account transfer gara kebaradvert@gmail.com kaffalaa ykn direct invoice gaafadhaa.',
    accentColor: '#dc2626'
  }
];
