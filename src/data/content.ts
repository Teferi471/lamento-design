import { ServiceItem, PortfolioProject, Testimonial } from '../types';

export const STUDIO_INFO = {
  name: "Lamento Design Studio",
  shortName: "LAMENTO",
  slogan: "Creative Designs. Professional Results.",
  tagline: "We Design Your Vision.",
  subtitle: "Creative Graphic Design, Branding & Visual Solutions",
  shortDesc: "Lamento Design Studio is a growing creative studio providing professional graphic design, brand identity, photo editing, website visual solutions, and high-quality video editing services for individuals, creators, and businesses locally and worldwide. We turn your ideas into clean, creative, and purposeful visual experiences.",
  aboutHeading: "About LAMENTO",
  aboutText: "Lamento Design Studio is a growing creative studio providing professional graphic design, brand identity, photo editing, website visual solutions, and high-quality video editing services for individuals, creators, and businesses locally and worldwide. We turn your ideas into clean, creative, and purposeful visual experiences.",
  aboutGoal: "Your vision. Our creativity. One powerful design.",
  leadDesignerName: "Teferi Gonfa",
  leadDesignerRole: "Lead Graphic Designer",
  founderTitle: "Lead Graphic Designer",
  founderBio: "Lamento Design Studio was founded to transform client visions into top-tier professional design. Our Lead Graphic Designer, Teferi Gonfa, brings rich multidisciplinary design experience focused on brand identity, visual communication, and high-impact digital content creation with uncompromising excellence.",
  email: "horreegonfa@gmail.com",
  phone: "+251 959 215 575",
  phoneRaw: "251959215575",
  whatsapp: "+251959215575",
  whatsappDisplay: "+251 959 215 575",
  whatsappMessage: "Hello Teferi Gonfa / LAMENTO Design Studio, I would like to discuss a design project with you.",
  liveChatStatus: "Teferi Gonfa • Online Chat Support",
  socials: {
    whatsapp: "https://wa.me/251959215575?text=Hello%20Teferi%20Gonfa%20/%20LAMENTO%20Design%20Studio,%20I%20would%20like%20to%20discuss%20a%20new%20project.",
    email: "mailto:horreegonfa@gmail.com",
    facebook: "https://facebook.com/lamentodesignstudio",
    instagram: "https://instagram.com/lamentodesignstudio",
    tiktok: "https://tiktok.com/@lamentodesignstudio",
    youtube: "https://youtube.com/@lamentodesignstudio",
    linkedin: "https://linkedin.com/company/lamento-design-studio"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Graphic Design",
    shortDesc: "Modern and creative visual concepts.",
    deliverables: [
      "Logo & Iconography",
      "Business Cards & Collateral",
      "Flyers & Event Posters",
      "Brochures & Catalogs",
      "Book Covers & Editorial",
      "ID Cards & Certificates"
    ],
    icon: "Palette"
  },
  {
    id: "logo-brand-identity",
    title: "Logo & Brand Identity",
    category: "Logo & Brand Identity",
    shortDesc: "Professional 3D and gold logo branding solutions.",
    deliverables: [
      "3D & Metallic Gold Logos",
      "Brand Identity Architecture",
      "Typography & Color Palettes",
      "Stationery & Merch Guidelines",
      "Vector & High-Res Source Files"
    ],
    icon: "Sparkles"
  },
  {
    id: "business-cards-brochures",
    title: "Business Cards & Brochures",
    category: "Business Cards & Brochures",
    shortDesc: "Elegant corporate stationery and promotional materials.",
    deliverables: [
      "Luxury Business Cards",
      "Bi-fold & Tri-fold Brochures",
      "Corporate Marketing Booklets",
      "Product Catalogs",
      "Print-Ready Press Specifications"
    ],
    icon: "CreditCard"
  },
  {
    id: "social-media-design",
    title: "Social Media Design",
    category: "Social Media Design",
    shortDesc: "Custom banners, thumbnails, and promotional posters.",
    deliverables: [
      "Facebook Posts & Covers",
      "Instagram Carousels & Stories",
      "TikTok Graphics & Thumbnails",
      "YouTube Thumbnails & Banners",
      "Sponsored Ad Creatives"
    ],
    icon: "Share2"
  },
  {
    id: "photo-retouching",
    title: "Photo Retouching",
    category: "Photo Retouching",
    shortDesc: "High-end skin retouching, color correction, and background enhancements.",
    deliverables: [
      "High-End Skin Retouching",
      "Background Removal & Replacement",
      "Color Correction & Grading",
      "Product Photo Enhancement",
      "Lighting & Atmosphere Balancing"
    ],
    icon: "SlidersHorizontal"
  },
  {
    id: "video-editing",
    title: "Video Editing (4K & Shorts)",
    category: "Video Editing",
    shortDesc: "Engaging video production for YouTube, Facebook Reels, and TikTok.",
    deliverables: [
      "4K Ultra-HD Video Editing",
      "TikTok Shorts & Instagram Reels",
      "YouTube Long-Form Videos",
      "Commercial & Promotional Ads",
      "Cinematic Sound & Motion Titles"
    ],
    icon: "Video"
  }
];

export const PORTFOLIO_ITEMS: PortfolioProject[] = [
  {
    id: "aurora-luxury-branding",
    title: "Aura Haute Joaillerie Identity",
    category: "Branding",
    shortDesc: "Complete luxury brand identity and gold-embossed packaging suite for an upscale jeweler.",
    fullDesc: "Crafted an evocative brand system featuring custom typography, gold-foil stamped stationery, premium packaging mockups, and comprehensive brand guidelines emphasizing timeless luxury.",
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
    client: "Aura Jewels & Atelier",
    deliverables: ["Brand Identity", "Gold Foil Packaging", "Visual Guidelines", "Custom Monogram"],
    featured: true
  },
  {
    id: "nexus-tech-logo",
    title: "Vanguard Modern Logo & Mark",
    category: "Logos",
    shortDesc: "Minimalist geometric emblem with metallic gold finishes for a high-tech venture capital firm.",
    fullDesc: "Constructed an iconic symbol embodying architectural symmetry and digital precision. The golden ratio mark works seamlessly across ultra-dense screens and stamped physical mediums.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
    client: "Vanguard Global Capital",
    deliverables: ["Primary & Secondary Logo", "Vector Suite", "Dark/Light Variants"],
    featured: true
  },
  {
    id: "lumina-social-campaign",
    title: "Lumina Social Launch Grid",
    category: "Social Media",
    shortDesc: "Aesthetic Instagram carousel system, animated stories, and campaign ads for a lifestyle launch.",
    fullDesc: "Designed an interconnected 9-grid feed layout and high-converting story assets that boosted launch day engagement by 320%. Includes reusable editable templates.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    client: "Lumina Skincare",
    deliverables: ["Instagram Carousels", "TikTok Video Covers", "Ad Creatives", "Story Kits"],
    featured: true
  },
  {
    id: "monolith-exhibition-print",
    title: "Sovereign Architectural Catalog",
    category: "Print Design",
    shortDesc: "Editorial brochure and exhibition posters featuring Swiss grid typography and tactile foil textures.",
    fullDesc: "Curated a 48-page architectural monograph and matching oversized street banners. Featuring precise typography, monochrome imagery, and gold varnish spot treatments.",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    client: "Sovereign Urban Institute",
    deliverables: ["Brochure Design", "Exhibition Posters", "Foil Finish Print Specs"],
    featured: false
  },
  {
    id: "cinematic-portrait-retouch",
    title: "Elysian Studio Commercial Retouch",
    category: "Photo Editing",
    shortDesc: "High-fashion beauty retouching, frequency separation, and dramatic studio color grading.",
    fullDesc: "Complete photographic post-production including micro-texture preservation, skin color balancing, specular highlight balancing, and clean background replacement.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    client: "Elysian Fashion Magazine",
    deliverables: ["Frequency Separation", "Color Correction", "Background Replacement"],
    featured: true
  },
  {
    id: "reels-hype-video-reel",
    title: "Tempo Sound Brand Promo Reel",
    category: "Video",
    shortDesc: "Cinematic commercial video edit with kinetic typography, sound design, and gold motion accents.",
    fullDesc: "Fast-paced short-form promotional reels crafted for YouTube Shorts and Instagram Reels, incorporating beat-matched rhythm cuts and branded animated intro/outro sequences.",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
    client: "Tempo Audio Lab",
    deliverables: ["Promo Video", "Shorts/Reels 9:16 Cut", "Custom Intro/Outro"],
    featured: false
  },
  {
    id: "solaris-organic-stationery",
    title: "Solaris Coffee Roasters Print Suite",
    category: "Print Design",
    shortDesc: "Minimalist business cards, cup sleeves, and packaging labels with bronze-gold accents.",
    fullDesc: "Created tactile print materials on recycled unbleached stock with metallic bronze-gold spot ink, conveying artisanal quality and sustainable craftsmanship.",
    imageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop",
    client: "Solaris Roasters",
    deliverables: ["Business Cards", "Product Labels", "Packaging Sleeves"],
    featured: false
  },
  {
    id: "valkyrie-monogram-logo",
    title: "Kallos Atelier Emblem",
    category: "Logos",
    shortDesc: "Bespoke interlocking monogram crafted with classical proportion and modern razor-sharp serifs.",
    fullDesc: "Custom hand-drawn emblem developed for an international interior architecture house, optimized for stone engraving, vector embroidery, and digital screens.",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    client: "Kallos Atelier",
    deliverables: ["Monogram", "Wordmark", "Vector Brand Assets"],
    featured: false
  },
  {
    id: "noir-lifestyle-campaign",
    title: "Noir Chrono Social Media Ad Suite",
    category: "Social Media",
    shortDesc: "High-contrast dark-mode promotional banners and story campaigns for luxury timepieces.",
    fullDesc: "Designed an aggressive yet refined ad campaign tailored for Meta & TikTok ads manager, driving a 4.8x ROAS during the initial pre-order weekend.",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    client: "Noir Horology",
    deliverables: ["Facebook Ads", "Instagram Stories", "Display Banners"],
    featured: false
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "creative-ideas",
    title: "Creative Ideas",
    description: "We create unique and meaningful designs that help your brand stand out.",
    icon: "Lightbulb"
  },
  {
    id: "professional-quality",
    title: "Professional Quality",
    description: "Every project is created with attention to detail and a strong focus on visual quality.",
    icon: "Award"
  },
  {
    id: "client-focused",
    title: "Client-Focused",
    description: "Your goals, ideas and preferences guide our creative process.",
    icon: "Users"
  },
  {
    id: "reliable-service",
    title: "Reliable Service",
    description: "We value clear communication, quality work and timely delivery.",
    icon: "Clock"
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Tell Us Your Idea",
    description: "You share your vision, needs and goals."
  },
  {
    step: "02",
    title: "We Create",
    description: "We develop creative concepts based on your requirements."
  },
  {
    step: "03",
    title: "Review & Refine",
    description: "You provide feedback and we improve the design."
  },
  {
    step: "04",
    title: "Final Delivery",
    description: "You receive your final professional design files."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Elena Vance",
    role: "Founder & Creative Director",
    company: "Vance Jewelry International",
    quote: "LAMENTO Design Studio turned our vague concepts into a breathtaking luxury brand identity. The attention to detail and golden accents captured exactly the prestige our clients expect.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "test-2",
    name: "Marcus Aurelius Thorne",
    role: "Managing Partner",
    company: "Apex Capital Ventures",
    quote: "Working with LAMENTO was seamless from day one. Their turnaround was swift, communication was crystal clear, and the final logo and corporate stationery elevated our market presence immediately.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "test-3",
    name: "Sophia Chen",
    role: "Head of Marketing",
    company: "Lumina Organic Skincare",
    quote: "Our social media engagement grew by over 300% after LAMENTO redesigned our feed layouts and video templates. Truly world-class craftsmanship that drives real business results.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"
  }
];
