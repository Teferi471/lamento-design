import { Language } from '../types';

export interface TranslationData {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    process: string;
    pricing: string;
    contact: string;
    getQuote: string;
    chatWhatsapp: string;
  };
  hero: {
    slogan: string;
    tagline: string;
    subtitle: string;
    shortDesc: string;
    viewWork: string;
    startProject: string;
    getQuote: string;
    liveChat: string;
    liveChatSub: string;
    exploreStudio: string;
    pillars: {
      bespoke: string;
      delivery: string;
      support: string;
    };
  };
  about: {
    heading: string;
    subheading: string;
    paragraph1: string;
    paragraph2: string;
    goalTagline: string;
    stats: {
      experience: string;
      experienceLabel: string;
      projects: string;
      projectsLabel: string;
      clients: string;
      clientsLabel: string;
    };
    values: {
      excellence: string;
      excellenceDesc: string;
      creativity: string;
      creativityDesc: string;
      speed: string;
      speedDesc: string;
    };
  };
  founder: {
    badge: string;
    heading: string;
    name: string;
    role: string;
    bioParagraph1: string;
    bioParagraph2: string;
    experienceBadge: string;
    quoteTitle: string;
    quoteText: string;
    specializationsTitle: string;
    specializations: string[];
    ctaText: string;
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    requestCustomService: string;
    deliverablesTitle: string;
    orderThisService: string;
    items: {
      id: string;
      title: string;
      category: string;
      shortDesc: string;
      deliverables: string[];
    }[];
  };
  portfolio: {
    badge: string;
    heading: string;
    subheading: string;
    categories: {
      all: string;
      logos: string;
      branding: string;
      socialMedia: string;
      printDesign: string;
      photoEditing: string;
      video: string;
    };
    featuredOnly: string;
    viewProject: string;
    deliverablesLabel: string;
    clientLabel: string;
    closeModal: string;
    consultOnProject: string;
    sortLabel: string;
    sortFeatured: string;
    sortNewest: string;
    sortAlphaAsc: string;
    searchPlaceholder: string;
    showingCount: string;
    clearFilters: string;
    noProjectsFound: string;
    noProjectsDesc: string;
  };
  whyChooseUs: {
    badge: string;
    heading: string;
    subheading: string;
    cards: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  process: {
    badge: string;
    heading: string;
    subheading: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
    readyToStart: string;
    startNowBtn: string;
  };
  pricing: {
    badge: string;
    heading: string;
    subheading: string;
    currencyToggleLabel: string;
    currencyEtb: string;
    currencyUsd: string;
    packagesTab: string;
    paymentMethodsTab: string;
    serviceRatesTab: string;
    mostPopular: string;
    choosePlan: string;
    customQuoteCta: string;
    startingFrom: string;
    paymentBadge: string;
    paymentHeading: string;
    paymentSubheading: string;
    allFilter: string;
    mobileMoneyFilter: string;
    banksFilter: string;
    internationalFilter: string;
    accountNumberLabel: string;
    accountHolderLabel: string;
    copyBtn: string;
    copiedBtn: string;
    paymentNoteTitle: string;
    paymentNoteDesc: string;
    confirmOnWhatsapp: string;
  };
  testimonials: {
    badge: string;
    heading: string;
    subheading: string;
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      serviceNeeded: string;
      projectDetails: string;
      projectDetailsPlaceholder: string;
      submit: string;
      submitting: string;
      privacyNote: string;
      successHeading: string;
      successMessage: string;
      sendAnother: string;
    };
    whatsappBox: {
      badge: string;
      title: string;
      desc: string;
      button: string;
    };
    emailBox: {
      title: string;
    };
    socialsTitle: string;
  };
  quoteModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    selectServicePlaceholder: string;
    budgetLabel: string;
    budgetPlaceholder: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    closeBtn: string;
    whatsappDirectBtn: string;
  };
  footer: {
    disciplines: string;
    followWork: string;
    rightsReserved: string;
    backToTop: string;
    tagline: string;
  };
  floatingWhatsapp: {
    tooltip: string;
    badge: string;
    designerName: string;
    designerRole: string;
    onlineStatus: string;
    greeting: string;
    quickMsgPlaceholder: string;
    sendWhatsapp: string;
    requestQuote: string;
    callDirect: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      pricing: "Pricing & Banks",
      contact: "Contact",
      getQuote: "Get a Quote",
      chatWhatsapp: "Chat on WhatsApp"
    },
    hero: {
      slogan: "Creative Designs. Professional Results.",
      tagline: "We Design Your Vision.",
      subtitle: "Creative Graphic Design, Branding & Visual Solutions",
      shortDesc: "Lamento Design Studio is a growing creative studio providing professional graphic design, brand identity, photo editing, website visual solutions, and high-quality video editing services for individuals, creators, and businesses locally and worldwide. We turn your ideas into clean, creative, and purposeful visual experiences.",
      viewWork: "View Our Work",
      startProject: "Start Project",
      getQuote: "Get a Quote",
      liveChat: "Live Chat",
      liveChatSub: "Teferi Gonfa • Online Chat Support",
      exploreStudio: "Explore Studio",
      pillars: {
        bespoke: "Bespoke Visual Experiences",
        delivery: "International Standard Delivery",
        support: "Direct WhatsApp Support"
      }
    },
    about: {
      heading: "About Lamento Design Studio",
      subheading: "Dedicated to transforming client visions into powerful visual realities.",
      paragraph1: "Lamento Design Studio is a growing creative studio providing professional graphic design, brand identity, photo editing, website visual solutions, and high-quality video editing services for individuals, creators, and businesses locally and worldwide. We turn your ideas into clean, creative, and purposeful visual experiences.",
      paragraph2: "We believe exceptional design is not merely decoration—it is the strategic bridge that transforms your ambition into tangible, beautiful, and meaningful visual resonance.",
      goalTagline: "Your vision. Our creativity. One powerful design.",
      stats: {
        experience: "5+ Years",
        experienceLabel: "Design Excellence",
        projects: "250+",
        projectsLabel: "Completed Projects",
        clients: "120+",
        clientsLabel: "Delighted Clients"
      },
      values: {
        excellence: "Uncompromising Quality",
        excellenceDesc: "Meticulous pixel-perfection and tailored aesthetics crafted for distinction.",
        creativity: "Original Concepting",
        creativityDesc: "Bold concepts that stand out in saturated digital and physical landscapes.",
        speed: "Agile Turnaround",
        speedDesc: "Reliable delivery schedules with transparent communication at every stage."
      }
    },
    founder: {
      badge: "Lead Designer",
      heading: "About the Lead Designer",
      name: "Teferi Gonfa",
      role: "Lead Graphic Designer",
      bioParagraph1: "Lamento Design Studio was founded to transform client visions into top-tier professional design. Our Lead Graphic Designer, Teferi Gonfa, brings rich multidisciplinary design experience focused on brand identity, visual communication, and high-impact digital content creation with uncompromising excellence.",
      bioParagraph2: "Great design is more than aesthetics—it is about turning ambitious ideas into memorable, functional, and visually commanding assets that build trust and drive real-world results.",
      experienceBadge: "5+ Years of Creative Mastery",
      quoteTitle: "Design Philosophy",
      quoteText: "Design is where strategic discipline meets human emotion. We don't just create visuals—we build enduring symbols of trust and distinction.",
      specializationsTitle: "Core Disciplines & Expertise",
      specializations: [
        "Brand Identity Architecture",
        "Editorial & Commercial Print Design",
        "High-End Photo Retouching",
        "Digital Social Media Direction",
        "Cinematic Motion & Video Production",
        "Packaging & Luxury Collateral"
      ],
      ctaText: "Start a Conversation With Us"
    },
    services: {
      badge: "What We Craft",
      heading: "Our Professional Services",
      subheading: "Comprehensive visual solutions calibrated for brand growth and market distinction.",
      requestCustomService: "Need a custom design package? Contact us directly.",
      deliverablesTitle: "Key Deliverables Included",
      orderThisService: "Order This Service",
      items: [
        {
          id: "graphic-design",
          title: "Graphic Design",
          category: "Graphic Design",
          shortDesc: "Modern and creative visual concepts.",
          deliverables: [
            "Logo Design",
            "Business Card Design",
            "Flyer & Poster Design",
            "Brochure & Catalog Design",
            "Book Cover Design",
            "ID Card & Certificate Design"
          ]
        },
        {
          id: "logo-brand-identity",
          title: "Logo & Brand Identity",
          category: "Logo & Brand Identity",
          shortDesc: "Professional 3D and gold logo branding solutions.",
          deliverables: [
            "3D & Metallic Gold Logos",
            "Brand Identity Guidelines",
            "Typography & Color Palette",
            "Corporate Stationery Systems",
            "Vector Source Files (AI, EPS, SVG)"
          ]
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
          ]
        },
        {
          id: "social-media-design",
          title: "Social Media Design",
          category: "Social Media Design",
          shortDesc: "Custom banners, thumbnails, and promotional posters.",
          deliverables: [
            "Facebook Posts & Covers",
            "Instagram Posts & Stories",
            "TikTok Creative Assets",
            "YouTube Thumbnails & Banners",
            "Digital Ad Campaign Creatives"
          ]
        },
        {
          id: "photo-retouching",
          title: "Photo Retouching",
          category: "Photo Retouching",
          shortDesc: "High-end skin retouching, color correction, and background enhancements.",
          deliverables: [
            "Commercial Photo Retouching",
            "Background Removal & Replacement",
            "Color Correction & Grading",
            "High-End Skin Tone Balancing",
            "Lighting & Atmosphere Polishing"
          ]
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
            "Commercial & Promo Videos",
            "Intro & Outro Animation"
          ]
        }
      ]
    },
    portfolio: {
      badge: "Selected Works",
      heading: "Signature Design Portfolio",
      subheading: "A curation of recent branding, graphic design, and commercial media projects.",
      categories: {
        all: "All",
        logos: "Logos",
        branding: "Branding",
        socialMedia: "Social Media",
        printDesign: "Print",
        photoEditing: "Photo Editing",
        video: "Video"
      },
      featuredOnly: "Featured Showcase",
      viewProject: "View Project",
      deliverablesLabel: "Deliverables",
      clientLabel: "Client",
      closeModal: "Close",
      consultOnProject: "Discuss Similar Project",
      sortLabel: "Sort by:",
      sortFeatured: "Featured",
      sortNewest: "Latest Projects",
      sortAlphaAsc: "Title (A–Z)",
      searchPlaceholder: "Search projects, styles, or deliverables...",
      showingCount: "Showing {count} of {total} projects",
      clearFilters: "Reset Filters",
      noProjectsFound: "No design projects found in this selection",
      noProjectsDesc: "Try selecting a different category or clearing the search query."
    },
    whyChooseUs: {
      badge: "Why LAMENTO",
      heading: "Why Choose LAMENTO",
      subheading: "Partnering with us means unmatched creative dedication, precision, and reliable delivery.",
      cards: [
        {
          id: "creative-ideas",
          title: "Creative Ideas",
          description: "We create unique and meaningful designs that help your brand stand out."
        },
        {
          id: "professional-quality",
          title: "Professional Quality",
          description: "Every project is created with attention to detail and a strong focus on visual quality."
        },
        {
          id: "client-focused",
          title: "Client-Focused",
          description: "Your goals, ideas and preferences guide our creative process."
        },
        {
          id: "reliable-service",
          title: "Reliable Service",
          description: "We value clear communication, quality work and timely delivery."
        }
      ]
    },
    process: {
      badge: "Methodology",
      heading: "How We Work",
      subheading: "A transparent, structured creative process from initial spark to final delivery.",
      steps: [
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
      ],
      readyToStart: "Ready to transform your vision into reality?",
      startNowBtn: "Start Your Project Today"
    },
    pricing: {
      badge: "Pricing & Payment Methods",
      heading: "Transparent Pricing & Local Banking",
      subheading: "Accessible rates tailored for creators, startups, and growing enterprises in Ethiopia and globally.",
      currencyToggleLabel: "Currency:",
      currencyEtb: "ETB (Ethiopian Birr)",
      currencyUsd: "USD (International)",
      packagesTab: "Design Packages",
      paymentMethodsTab: "Bank & Wallet Accounts",
      serviceRatesTab: "Service Rate Card",
      mostPopular: "Most Popular",
      choosePlan: "Order This Package",
      customQuoteCta: "Need a Custom Quote?",
      startingFrom: "Starting from",
      paymentBadge: "Official Payment Accounts",
      paymentHeading: "Ethiopian Banks & Payment Gateways",
      paymentSubheading: "We accept payments through all major Ethiopian commercial banks, mobile money (telebirr, M-Pesa), and Payoneer for global clients.",
      allFilter: "All Channels",
      mobileMoneyFilter: "telebirr & M-PESA",
      banksFilter: "Ethiopian Banks",
      internationalFilter: "Payoneer (Global)",
      accountNumberLabel: "Account / Phone Number",
      accountHolderLabel: "Account Holder",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      paymentNoteTitle: "Payment Confirmation Notice",
      paymentNoteDesc: "After making your transfer or deposit, please send a screenshot or transaction reference number via WhatsApp to +251 959 215 575 (Teferi Gonfa) to verify and commence your project immediately.",
      confirmOnWhatsapp: "Send Payment Slip via WhatsApp"
    },
    testimonials: {
      badge: "Client Feedback",
      heading: "Endorsed by Brands Worldwide",
      subheading: "Discover what founders, marketing executives, and entrepreneurs say about working with LAMENTO."
    },
    contact: {
      badge: "Initiate Collaboration",
      heading: "Let’s Work Together",
      subheading: "Ready to bring your vision to life? Fill out the project brief below or reach out directly on WhatsApp for immediate discussion.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@company.com",
        phone: "Phone / WhatsApp",
        phonePlaceholder: "+251 91 123 4567 or WhatsApp number",
        serviceNeeded: "Service Needed",
        projectDetails: "Project Details",
        projectDetailsPlaceholder: "Describe your vision, requirements, timeline, or any specific ideas you have in mind...",
        submit: "Send Project Request",
        submitting: "Sending Project Request...",
        privacyNote: "Your information is held in strict privacy and will only be used to discuss your project.",
        successHeading: "Project Request Received!",
        successMessage: "Thank you. LAMENTO Design Studio will review your project details and respond within 24 hours.",
        sendAnother: "Send Another Request"
      },
      whatsappBox: {
        badge: "Instant Direct Chat",
        title: "Chat With Us on WhatsApp",
        desc: "Prefer instant messaging? Discuss your design ideas directly with our lead designer for quick quotes and real-time consultation.",
        button: "Open WhatsApp"
      },
      emailBox: {
        title: "Direct Studio Email"
      },
      socialsTitle: "Connect on Social Channels"
    },
    quoteModal: {
      title: "Request a Custom Quote",
      subtitle: "Tell us about your project requirements and we will provide a detailed proposal.",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "e.g. john@example.com",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "e.g. +251 91 123 4567",
      serviceLabel: "Service Needed",
      selectServicePlaceholder: "Select a service...",
      budgetLabel: "Estimated Budget (Optional)",
      budgetPlaceholder: "e.g. Flexible, $500 - $1,000, etc.",
      detailsLabel: "Project Details & Vision",
      detailsPlaceholder: "Describe your project, deadlines, aesthetic goals, or specific requirements...",
      submitBtn: "Send Request",
      submitting: "Submitting...",
      successTitle: "Quote Request Sent!",
      successMessage: "Thank you for reaching out. We have received your project details and will contact you promptly.",
      closeBtn: "Close",
      whatsappDirectBtn: "Send via WhatsApp Instead"
    },
    footer: {
      disciplines: "Graphic Design | Branding | Photo Editing | Video Editing",
      followWork: "Follow Our Work",
      rightsReserved: "All rights reserved.",
      backToTop: "Back to Top",
      tagline: "We Design Your Vision."
    },
    floatingWhatsapp: {
      tooltip: "Live Chat with Teferi Gonfa",
      badge: "Online",
      designerName: "Teferi Gonfa",
      designerRole: "Lead Graphic Designer & Visual Artist",
      onlineStatus: "Online (Chat Live)",
      greeting: "Hello! Welcome to Lamento Design Studio. I am Teferi Gonfa, Lead Graphic Designer & Visual Artist. How can I help bring your visual ideas to life today?",
      quickMsgPlaceholder: "Type your project idea or question here...",
      sendWhatsapp: "Chat via WhatsApp",
      requestQuote: "Request a Quote",
      callDirect: "Call +251 959 215 575"
    }
  },

  om: {
    nav: {
      home: "Fuula Duraa",
      about: "Waa'ee Keenya",
      services: "Tajaajiloota",
      portfolio: "Hojiiwwan",
      process: "Adeemsa",
      pricing: "Gatii & Kaffaltii",
      contact: "Quunnamtii",
      getQuote: "Gatii Gaafadhaa",
      chatWhatsapp: "WhatsApp irratti Haasofsiisaa"
    },
    hero: {
      slogan: "Creative Designs. Professional Results.",
      tagline: "We Design Your Vision.",
      subtitle: "Creative Graphic Design, Branding & Visual Solutions",
      shortDesc: "Lamento Design Studio'n stuudiyoo dizaayinii guddachaa jiru ta'ee, tajaajiloota dizaayinii giraafiksii Ogummaadhaan dhihaatan, ijaarsa brandii (branding), qulqulleessuu fi ammayyeessuu fakkii (photo retouching), dizaayinii marsariitii / sooshyal meediyaa, fi gulaalla viidiyoo (video editing) maamiltoota biyya keessaa fi idil-addunyaatiif ni dhiyeessa. Yaada keessan gara mul'ata qabatamaa, mimmidhagaa fi ergaa qabuutti ni jijjiirra.",
      viewWork: "Hojiiwwan Keenya Ilaalaa",
      startProject: "Piroojektii Eegalaa",
      getQuote: "Gatii Gaafadhaa",
      liveChat: "Haasawa Kallattii",
      liveChatSub: "Teferi Gonfa • Online (Chat Live)",
      exploreStudio: "Istuudiyoo Daawwadhaa",
      pillars: {
        bespoke: "Muuxannoo Ijaa Addaa",
        delivery: "Dhaqqabsiisa Sadarkaa Addunyaa",
        support: "Gargaarsa Kallattii WhatsApp"
      }
    },
    about: {
      heading: "Waa'ee Lamento Design Studio",
      subheading: "Mul'ata maamiltootaa gara hojii ogummaa ol'aanaatti jijjiiruuf kan hundeeffame.",
      paragraph1: "Lamento Design Studio'n stuudiyoo dizaayinii guddachaa jiru ta'ee, tajaajiloota dizaayinii giraafiksii Ogummaadhaan dhihaatan, ijaarsa brandii (branding), qulqulleessuu fi ammayyeessuu fakkii (photo retouching), dizaayinii marsariitii / sooshyal meediyaa, fi gulaalla viidiyoo (video editing) maamiltoota biyya keessaa fi idil-addunyaatiif ni dhiyeessa.",
      paragraph2: "Yaada keessan gara mul'ata qabatamaa, mimmidhagaa fi ergaa qabuutti ni jijjiirra. Dizaayiniin gaariin faaya qofa osoo hin taane, bu'aa qabatamaa fi amanamummaa daldala keessaniif uuma.",
      goalTagline: "Mul'ata keessan. Kalaqa keenya. Dizaayinii humna qabu tokko.",
      stats: {
        experience: "Waggaa 5+",
        experienceLabel: "Muuxannoo Dizaayinii",
        projects: "250+",
        projectsLabel: "Piroojektiiwwan Xumuraman",
        clients: "120+",
        clientsLabel: "Maamiltoota Gammadan"
      },
      values: {
        excellence: "Qulqullina Olaanaa",
        excellenceDesc: "Dizaayinii qulqulluu fi adda ta'e kan mul'ata keessaniin walgitu.",
        creativity: "Yaada Kalaqaa Haaraya",
        creativityDesc: "Yaadolee jajjaboo iddoo daldalaa keessatti addatti isin baasan.",
        speed: "Dhaqqabsiisa Yeroo Eeggate",
        speedDesc: "Yeroo beellamaa eeguun quunnamtii ifa ta'een dhiyeessuu."
      }
    },
    founder: {
      badge: "Oggeessa Dizaayinii",
      heading: "Waa'ee Oggeessa Dizaayinii",
      name: "Teferi Gonfa",
      role: "Lead Graphic Designer & Visual Artist",
      bioParagraph1: "Lamento Design Studio'n mul'ata maamiltootaa gara hojii ogummaa ol'aanaatti jijjiiruuf hundeeffame. Oggeessi dizaayinii keenya Teferi Gonfa muuxannoo fi ogummaa dizaayinii garaagaraatiin hojiiwwan brand identity, visual communication, fi content creation irratti xiyyeeffachuudhaan tajaajila amanamummaa qabu dhiyeessa.",
      bioParagraph2: "Dizaayiniin ogummaa qabu mul'ata daldala keessanii haala ifaa fi qulqullina olaanaadhaan maamiltoota keessaniif dhiyeessa.",
      experienceBadge: "Waggaa 5+ Ogummaa Kalaqaa",
      quoteTitle: "Falsafaa Dizaayinii",
      quoteText: "Dizaayiniin bakka tarsiimoon fi miirri namaa walquunnamaniidha. Nutis suuraa qofa hin hojjennu—mallattoo amansiisaa fi ulfina qabu ijaarra.",
      specializationsTitle: "Ogummaa fi Dandeettiiwwan Ijoo",
      specializations: [
        "Brand Identity (Eenyummaa Mallattoo)",
        "Visual Communication (Quunnamtii Ijaa)",
        "Content Creation (Qophii Qabiyyee)",
        "Dizaayinii Maxxansaa Daldalaa",
        "Gulaallii Suuraa fi Viidiyoo 4K",
        "Dizaayinii Saamsamaa fi Meeshaalee Kabajaa"
      ],
      ctaText: "Nu Waliin Haasawa Eegalaa"
    },
    services: {
      badge: "Tajaajiloota Keenna",
      heading: "Tajaajiloota Dizaayinii Ogummaa",
      subheading: "Dizaayinii giraafiksii, eenyummaa brandii fi gulaallii fakkii fi viidiyoo sadarkaa ol'aanaa.",
      requestCustomService: "Tajaajila dizaayinii addaa barbaadduu? Kallattiin nu quunnamaa.",
      deliverablesTitle: "Wanta Isiniif Dhiyaatu",
      orderThisService: "Tajaajila Kana Ajajaa",
      items: [
        {
          id: "graphic-design",
          title: "Graphic Design",
          category: "Graphic Design",
          shortDesc: "Dizaayinii giraafiksii hawwataamaa fi ammayyaa.",
          deliverables: [
            "Dizaayinii Loogoo",
            "Kaardii Daldalaa (Business Card)",
            "Waraqaa Beeksisaa (Flyer)",
            "Poostarii fi Baanara",
            "Biroosharii fi Kaataloogii",
            "Qadaada Kitaabaa",
            "Kaardii Eenyummaa (ID Card)",
            "Waraqaa Ragaa (Certificate)"
          ]
        },
        {
          id: "logo-brand-identity",
          title: "Logo & Brand Identity",
          category: "Logo & Brand Identity",
          shortDesc: "Mallattoo (Logo 3D/Gold) fi eenyummaa brandii sadarkaa ol'aanaa.",
          deliverables: [
            "Mallattoo 3D fi Metallic Gold",
            "Eenyummaa Brandii Sadarkaa Ol'aanaa",
            "Qajeelfama Brandii (Brand Guidelines)",
            "Filannoo Halluu fi Taaypogiraafii",
            "Meeshaalee Barreessaa fi Faaya Daldalaa"
          ]
        },
        {
          id: "business-cards-brochures",
          title: "Business Cards & Brochures",
          category: "Business Cards & Brochures",
          shortDesc: "Kartaawwan dhandhamaa fi waraqaalee beeksisaa (brochures).",
          deliverables: [
            "Kaardii Daldalaa Qulqullina Ol'aanaa",
            "Buroosharii Daldalaa (Bi-fold / Tri-fold)",
            "Waraqaalee Beeksisaa (Flyers)",
            "Kaataloogii Oomishaa fi Tajaajilaa",
            "Dizaayinii Maxxansaaf Qophaa'e"
          ]
        },
        {
          id: "social-media-design",
          title: "Social Media Design",
          category: "Social Media Design",
          shortDesc: "Poostara, baaneroota fi qabiyyee sooshyal meediyaa (FB, YouTube, TikTok, Instagram).",
          deliverables: [
            "Poostii fi Koverii Facebook",
            "Poostii fi Istoorii Instagram",
            "Qabiyyee fi Dizaayinii TikTok",
            "Taambineelii fi Baanarii YouTube",
            "Dizaayinii Beeksisa Sooshyal Meediyaa"
          ]
        },
        {
          id: "photo-retouching",
          title: "Photo Retouching",
          category: "Photo Retouching",
          shortDesc: "Fakkii qulqulleessuu, bifaa fi duuba isaanii ammayyeessuu.",
          deliverables: [
            "Fakkii Qulqulleessuu (Photo Retouching)",
            "Duubbee Suuraa Haquu fi Jijjiiruu",
            "Sirreeffama Halluu (Color Correction)",
            "Fakkii Oomishaa Bareechuu",
            "Qulqullina Suuraa Foyyeessuu"
          ]
        },
        {
          id: "video-editing",
          title: "Video Editing (4K & Shorts)",
          category: "Video Editing",
          shortDesc: "Gulaalla viidiyoo 4K, Reel, fi TikTok Shorts ammayyaa.",
          deliverables: [
            "Viidiyoo 4K Cinematic",
            "TikTok Shorts fi Instagram Reels",
            "Viidiyoo YouTube",
            "Viidiyoo Beeksisa Daldalaa",
            "Seensa fi Xumura Viidiyoo (Intro/Outro)"
          ]
        }
      ]
    },
    portfolio: {
      badge: "Hojiiwwan Filataman",
      heading: "Galmee Hojiiwwan Dizaayinii",
      subheading: "Hojiiwwan dizaayinii, brandiingii fi miidiyaa daldalaa dhiheenyatti hojjetaman.",
      categories: {
        all: "Hunda (All)",
        logos: "Loogoo (Logos)",
        branding: "Brandiingii (Branding)",
        socialMedia: "Miidiyaa Hawaasaa",
        printDesign: "Maxxansa (Print)",
        photoEditing: "Gulaallii Suuraa",
        video: "Viidiyoo"
      },
      featuredOnly: "Hojiiwwan Ijoo",
      viewProject: "Piroojektii Ilaalaa",
      deliverablesLabel: "Wanta Hojjetame",
      clientLabel: "Maamila",
      closeModal: "Cufaa",
      consultOnProject: "Piroojektii Akkasii Irratti Mari'adhaa",
      sortLabel: "Akkaataan:",
      sortFeatured: "Hojiiwwan Ijoo",
      sortNewest: "Kan Dhiheenyaa",
      sortAlphaAsc: "Maqaan (A–Z)",
      searchPlaceholder: "Piroojektii, brandii, dizaayinii barbaadaa...",
      showingCount: "Piroojektiiwwan {total} keessaa {count} argisiisaa jira",
      clearFilters: "Filtara Qulqulleessi",
      noProjectsFound: "Piroojektiin homaayyuu hin argamne",
      noProjectsDesc: "Mee gosa dizaayinii biraa filadhaa ykn barbaacha keessan qulqulleessaa."
    },
    whyChooseUs: {
      badge: "Maaliif LAMENTO",
      heading: "Maaliif LAMENTO Filattu?",
      subheading: "Kalaqa addaa, dandeettii dizaayinii olaanaa fi amanamummaa waliin isiniif dhiyeessina.",
      cards: [
        {
          id: "creative-ideas",
          title: "Yaada Kalaqaa",
          description: "Dizaayinii addaa fi hiika qabu kan mallattoon keessan akka beekamu godhu uumna."
        },
        {
          id: "professional-quality",
          title: "Qulqullina Ogummaa",
          description: "Piroojektiin hundi xiyyeeffannoo bal'aa fi qulqullina ijaa cimaan hojjetama."
        },
        {
          id: "client-focused",
          title: "Maamila Xiyyeeffannoo Qabu",
          description: "Galmi, yaadni fi fedhiin keessan adeemsa kalaqa keenya qajeelcha."
        },
        {
          id: "reliable-service",
          title: "Tajaajila Amanamaa",
          description: "Quunnamtii ifa ta'e, hojii qulqullina qabuu fi yeroo eeggatee dhiyaatutti amanna."
        }
      ]
    },
    process: {
      badge: "Adeemsa Hojii",
      heading: "Akkaataa Nutti Hojjennu",
      subheading: "Adeemsa hojii ifa ta'e, yaada jalqabaa irraa kaasee hanga dhaqqabsiisa xumuraatti.",
      steps: [
        {
          step: "01",
          title: "Yaada Keessan Nutti Himaa",
          description: "Mul'ata, barbaachisummaa fi galma keessan nuuf qooddu."
        },
        {
          step: "02",
          title: "Ni Kalaqna",
          description: "Ulaagaalee keessan irratti hundaa'uun yaadolee dizaayinii kalaqna."
        },
        {
          step: "03",
          title: "Gulaalaa fi Fooyyessaa",
          description: "Yaada nuuf kennitu, nutis dizaayinicha caalaatti foyyeessina."
        },
        {
          step: "04",
          title: "Dhaqqabsiisa Xumuraa",
          description: "Faayiloota dizaayinii ogummaa xumuraman guutuu ni fudhattu."
        }
      ],
      readyToStart: "Mul'ata keessan gara qabatamaatti jijjiiruuf qophiidhaa?",
      startNowBtn: "Piroojektii Keessan Har'a Eegalaa"
    },
    pricing: {
      badge: "Gatii & Karaalee Kaffaltii",
      heading: "Gatii Qulqulluu fi Baankota Biyya Keessaa",
      subheading: "Gatii madaalawaa daldaltoota, uumtota qabiyyee fi dhaabbilee Itiyoophiyaa fi addunyaa maraaf qophaa'e.",
      currencyToggleLabel: "Gosa Maallaqaa:",
      currencyEtb: "ETB (Qarshii Itiyoophiyaa)",
      currencyUsd: "USD (Doolaara)",
      packagesTab: "Paakeejota Dizaayinii",
      paymentMethodsTab: "Lakk. Baankii fi Telebirr",
      serviceRatesTab: "Tarree Gatii Tajaajilootaa",
      mostPopular: "Baay'ee Filatamaa",
      choosePlan: "Paakeejii Kana Ajajaa",
      customQuoteCta: "Gaaffii Gatii Addaa Qabduu?",
      startingFrom: "Kan Jalqabu",
      paymentBadge: "Lakk. Herrega Kaffaltii",
      paymentHeading: "Baankota Itiyoophiyaa fi Karaalee Kaffaltii",
      paymentSubheading: "Baankota Itiyoophiyaa jiran hundumaa, Telebirr, M-Pesa fi maamiltoota biyya alaa fi diyyaspooraaf Payoneer ni keessummeessina.",
      allFilter: "Hundumaa",
      mobileMoneyFilter: "Telebirr & M-Pesa",
      banksFilter: "Baankota Itiyoophiyaa",
      internationalFilter: "Payoneer (Addunyaa)",
      accountNumberLabel: "Lakk. Herregaa / Bilbilaa",
      accountHolderLabel: "Maqaa Abbaa Herregaa",
      copyBtn: "Waraabi",
      copiedBtn: "Waraabameera!",
      paymentNoteTitle: "Hubachiisa Kaffaltii",
      paymentNoteDesc: "Erga kaffaltii raawwattanii booda, nagahee (screenshot) kaffaltii keessanii WhatsApp (+251 959 215 575) Teferii Gonfaaf ergaa. Hojiin keessan hatattamaan jalqabama.",
      confirmOnWhatsapp: "Nagahee Kaffaltii WhatsApp'n Ergaa"
    },
    testimonials: {
      badge: "Yaada Maamiltootaa",
      heading: "Maamiltoota Keenyaan Kan Mirkanaa'e",
      subheading: "Dhaabbileen fi daldaltoonni waa'ee LAMENTO Design Studio maal akka jedhan dubbisaa."
    },
    contact: {
      badge: "Hojii Waliin Eegaluuf",
      heading: "Waliin Haa Hojjannu",
      subheading: "Mul'ata keessan gara qabatamaatti fiduuf qophiidhaa? Unka armaan gadii guutaa yookiin kallattiin WhatsApp irratti nu quunnamaa.",
      form: {
        name: "Maqaa",
        namePlaceholder: "Maqaa keessan guutuu",
        email: "Imeelii",
        emailPlaceholder: "maqaa@company.com",
        phone: "Bilbila / WhatsApp",
        phonePlaceholder: "+251 91 123 4567 ykn lakkoofsa WhatsApp",
        serviceNeeded: "Tajaajila Barbaaddan",
        projectDetails: "Bal'ina Piroojektii",
        projectDetailsPlaceholder: "Mul'ata, ulaagaalee, yeroo xumuraa fi yaada qabdan nuuf ibsaa...",
        submit: "Gaaffii Piroojektii Ergaa",
        submitting: "Ergamaa jira...",
        privacyNote: "Odeeffannoon keessan iccitiin kan eegamu yoo ta'u dhimma piroojektii qofaaf fayyada.",
        successHeading: "Gaaffiin Keessan Nu Qaqqabeera!",
        successMessage: "Galatoomaa! LAMENTO Design Studio odeeffannoo piroojektii keessanii sakatta'ee sa'aatii 24 keessatti deebii kenna.",
        sendAnother: "Gaaffii Kan Biraa Ergaa"
      },
      whatsappBox: {
        badge: "Haasawa Kallattii Battalaa",
        title: "WhatsApp irratti Nu Haasofsiisaa",
        desc: "Kallattiin ergaa erguu barbaadduu? Dizaayinaricha olaanaa waliin mari'achuun tilmaama gatii battalaa fi gorsa argadhaa.",
        button: "WhatsApp Bani"
      },
      emailBox: {
        title: "Imeelii Istuudiyoo Kallattii"
      },
      socialsTitle: "Miidiyaa Hawaasummaa Irratti Nu Hordofaa"
    },
    quoteModal: {
      title: "Waraqaa Gatii Gaafadhaa",
      subtitle: "Waa'ee piroojektii keessanii nutti himaa, nutis gabaasa gatii bal'aa isiniif ergina.",
      nameLabel: "Maqaa Keessan",
      namePlaceholder: "Fkn: Tolasaa Baqqalaa",
      emailLabel: "Teessoo Imeelii",
      emailPlaceholder: "Fkn: tolasa@example.com",
      phoneLabel: "Bilbila / WhatsApp",
      phonePlaceholder: "Fkn: +251 91 123 4567",
      serviceLabel: "Tajaajila Barbaaddan",
      selectServicePlaceholder: "Tajaajila filadhaa...",
      budgetLabel: "Tilmaama Baajataa (Yoo Jiraate)",
      budgetPlaceholder: "Fkn: Danda'amaa, Birrii 15,000 - 30,000",
      detailsLabel: "Ibsa Piroojektii fi Mul'ata",
      detailsPlaceholder: "Waa'ee piroojektii, yeroo xumuraa fi ulaagaalee barbaaddan nuuf barreessaa...",
      submitBtn: "Ergaa Ergaa",
      submitting: "Ergamaa jira...",
      successTitle: "Gaaffiin Keessan Ergameera!",
      successMessage: "Galatoomaa! Odeeffannoo piroojektii keessanii arganneerra, yeroo dhiyootti isin quunnamna.",
      closeBtn: "Cufaa",
      whatsappDirectBtn: "Kallattiin WhatsApp irratti Ergaa"
    },
    footer: {
      disciplines: "Dizaayinii Giraafiksii | Brandiingii | Gulaallii Suuraa | Gulaallii Viidiyoo",
      followWork: "Hojii Keenya Hordofaa",
      rightsReserved: "Mirgi hunduu eegamaadha.",
      backToTop: "Gara Oliitti",
      tagline: "Mul'ata Keessan Ni Dizaayinina."
    },
    floatingWhatsapp: {
      tooltip: "Teferi Gonfa waliin Haasawa Kallattii",
      badge: "Onlaayinii",
      designerName: "Teferi Gonfa",
      designerRole: "Lead Graphic Designer & Visual Artist",
      onlineStatus: "Teferi Gonfa • Online (Chat Live)",
      greeting: "Akkam! Baga nagaan gara Lamento Design Studio dhuftan. Ani Teferi Gonfa, Lead Graphic Designer & Visual Artist dha. Mul'ata dizaayinii keessan gara qabatamaatti jijjiiruuf akkamitti isin gargaaruu danda'a?",
      quickMsgPlaceholder: "Yaada piroojektii ykn gaaffii keessan asitti barreessaa...",
      sendWhatsapp: "WhatsApp irratti Haasofsiisaa",
      requestQuote: "Gatii Gaafadhaa",
      callDirect: "Kallattiin Bilbilaa +251 959 215 575"
    }
  },

  am: {
    nav: {
      home: "ዋና ገጽ",
      about: "ስለ እኛ",
      services: "አገልግሎቶች",
      portfolio: "ስራዎቻችን",
      process: "ሂደታችን",
      pricing: "ዋጋ እና ባንክ",
      contact: "ያግኙን",
      getQuote: "የዋጋ ዝርዝር ይጠይቁ",
      chatWhatsapp: "በዋትስአፕ ያውሩን"
    },
    hero: {
      slogan: "Creative Designs. Professional Results.",
      tagline: "We Design Your Vision.",
      subtitle: "የፈጠራ ግራፊክ ዲዛይን፣ ብራንዲንግ እና የእይታ መፍትሄዎች",
      shortDesc: "ላሜንቶ ዲዛይን ስቱዲዮ (Lamento Design Studio) በከፍተኛ ሙያዊ ብቃት የሚዘጋጁ የግራፊክ ዲዛይን፣ የብራንዲንግ (branding)፣ የፎቶ ማሻሻያ እና ቅንብር (photo retouching)፣ የማህበራዊ ሚዲያ/ዌብ ዲዛይን እና የቪዲዮ ኤዲቲንግ (video editing) አገልግሎቶችን ለአገር ውስጥና ለአለም አቀፍ ደንበኞች የሚያቀርብ የፈጠራ ስቱዲዮ ነው። ሀሳብዎን ወደ እውነተኛ፣ ማራኪ እና ተፅዕኖ ፈጣሪ እይታ እንቀይራለን።",
      viewWork: "ስራዎቻችንን ይመልከቱ",
      startProject: "ስራ ይጀምሩ",
      getQuote: "የዋጋ ዝርዝር ይጠይቁ",
      liveChat: "የቀጥታ ውይይት",
      liveChatSub: "ተፈሪ ጎንፋ • ኦንላይን (Chat Live)",
      exploreStudio: "ስቱዲዮውን ይጎብኙ",
      pillars: {
        bespoke: "ልዩ የእይታ ተሞክሮዎች",
        delivery: "ዓለም አቀፍ ደረጃውን የጠበቀ ርክክብ",
        support: "የቀጥታ ዋትስአፕ ድጋፍ"
      }
    },
    about: {
      heading: "ስለ ላሜንቶ ዲዛይን ስቱዲዮ",
      subheading: "የደንበኞችን ራዕይ ወደ ከፍተኛ ሙያዊ ስራ ለመቀየር የተቋቋመ የፈጠራ ስቱዲዮ።",
      paragraph1: "ላሜንቶ ዲዛይን ስቱዲዮ (Lamento Design Studio) በከፍተኛ ሙያዊ ብቃት የሚዘጋጁ የግራፊክ ዲዛይን፣ የብራንዲንግ (branding)፣ የፎቶ ማሻሻያ እና ቅንብር (photo retouching)፣ የማህበራዊ ሚዲያ/ዌብ ዲዛይን እና የቪዲዮ ኤዲቲንግ (video editing) አገልግሎቶችን ለአገር ውስጥና ለአለም አቀፍ ደንበኞች ያቀርባል።",
      paragraph2: "ሀሳብዎን ወደ እውነተኛ፣ ማራኪ እና ተፅዕኖ ፈጣሪ እይታ እንቀይራለን። ጥራት ያለው ዲዛይን ለብራንድዎ የላቀ እውቅና እና ዘላቂ የደንበኞች እምነት ይፈጥራል።",
      goalTagline: "የእርስዎ ራዕይ። የእኛ ፈጠራ። አንድ ጠንካራ ዲዛይን።",
      stats: {
        experience: "5+ ዓመታት",
        experienceLabel: "የስራ ልምድ",
        projects: "250+",
        projectsLabel: "የተጠናቀቁ ስራዎች",
        clients: "120+",
        clientsLabel: "ደስተኛ ደንበኞች"
      },
      values: {
        excellence: "ምርጥ ጥራት",
        excellenceDesc: "እያንዳንዱን ዝርዝር በጥንቃቄ በማስተካከል የሚሰራ ውብ ዲዛይን።",
        creativity: "የፈጠራ ሀሳብ",
        creativityDesc: "በገበያው ውስጥ ብራንድዎን ጎልቶ እንዲታይ የሚያደርግ ልዩ ፈጠራ።",
        speed: "ፈጣን ርክክብ",
        speedDesc: "ቀነ-ቀጠሮን በማክበር እና ግልጽ ግንኙነት በማድረግ በወቅቱ ማድረስ።"
      }
    },
    founder: {
      badge: "ዋና ዲዛይነር",
      heading: "ስለ ዋና ዲዛይነሩ",
      name: "ተፈሪ ጎንፋ (Teferi Gonfa)",
      role: "Lead Graphic Designer & Visual Artist",
      bioParagraph1: "ላሜንቶ ዲዛይን ስቱዲዮ የደንበኞችን ራዕይ ወደ ከፍተኛ ሙያዊ ስራ ለመቀየር የተመሰረተ ነው። ዋና የግራፊክ ዲዛይነር እና ቪዥዋል አርቲስታችን ተፈሪ ጎንፋ (Teferi Gonfa) ባካበተው ሰፊ ልምድ እና የዲዛይን ሙያዊ ብቃት በብራንድ መለያ (brand identity)፣ በእይታ ተግባቦት (visual communication) እና በዲጂታል ይዘት ፈጠራ (content creation) ላይ በማተኮር አስተማማኝ አገልግሎት ይሰጣል።",
      bioParagraph2: "ልዩ የፈጠራ ስራ የንግድዎን ማንነት በማጉላት በገበያው ውስጥ ተወዳዳሪና ተመራጭ እንዲሆን ያደርጋል።",
      experienceBadge: "5+ ዓመታት በፈጠራ ስራ ላይ",
      quoteTitle: "የዲዛይን ፍልስፍና",
      quoteText: "ዲዛይን ስልታዊ እቅድ ከሰው ልብ ስሜት ጋር የሚገናኝበት ጥበብ ነው። እኛ ምስል ብቻ አንሰራም—ዘላቂ ክብር እና እምነትን እንገነባለን።",
      specializationsTitle: "ዋና ዋና ሙያዎች እና ክህሎቶች",
      specializations: [
        "የብራንድ መለያ ግንባታ (Brand Identity)",
        "የእይታ ተግባቦት (Visual Communication)",
        "የዲጂታል ይዘት ፈጠራ (Content Creation)",
        "የንግድ እና የህትመት ዲዛይን",
        "የፎቶ ማሻሻያ እና 4K ቪዲዮ ኤዲቲንግ",
        "የማሸጊያ እና የቅንጦት እቃዎች ዲዛይን"
      ],
      ctaText: "ከእኛ ጋር ውይይት ይጀምሩ"
    },
    services: {
      badge: "አገልግሎቶቻችን",
      heading: "ሙያዊ የዲዛይን አገልግሎቶች",
      subheading: "የግራፊክ ዲዛይን፣ የብራንዲንግ፣ የፎቶ እና የቪዲዮ ኤዲቲንግ ከፍተኛ ደረጃ አገልግሎቶች።",
      requestCustomService: "ልዩ የዲዛይን ፓኬጅ ይፈልጋሉ? በቀጥታ ያግኙን።",
      deliverablesTitle: "የሚካተቱ ዋና ዋና ስራዎች",
      orderThisService: "ይህንን አገልግሎት ይዘዙ",
      items: [
        {
          id: "graphic-design",
          title: "Graphic Design",
          category: "Graphic Design",
          shortDesc: "ማራኪ እና ዘመናዊ የግራፊክ ዲዛይን ስራዎች።",
          deliverables: [
            "የሎጎ ዲዛይን",
            "የቢዝነስ ካርድ (Business Card)",
            "የማስታወቂያ ወረቀት (Flyer)",
            "ፖስተር እና ባነር",
            "ብሮሸር እና ካታሎግ",
            "የመጽሐፍ ሽፋን ዲዛይን",
            "የመታወቂያ ካርድ (ID Card)",
            "የሰርተፍኬት ዲዛይን"
          ]
        },
        {
          id: "logo-brand-identity",
          title: "Logo & Brand Identity",
          category: "Logo & Brand Identity",
          shortDesc: "ልዩ የ3D/Gold ሎጎ እና የተሟላ ከፍተኛ ደረጃ የብራንድ መለያ።",
          deliverables: [
            "የ3D እና ሜታሊክ ወርቅ ሎጎዎች",
            "የተሟላ የብራንድ መመሪያ (Brand Guidelines)",
            "የቀለም ቅንብር እና ታይፖግራፊ",
            "የቢሮ የጽህፈት መሳሪያዎች እና ሰነዶች",
            "የቬክተር ምንጭ ፋይሎች (AI, EPS, SVG)"
          ]
        },
        {
          id: "business-cards-brochures",
          title: "Business Cards & Brochures",
          category: "Business Cards & Brochures",
          shortDesc: "ውብ የቢዝነስ ካርዶች እና የድርጅት ማስተዋወቂያ ብሮሸሮች።",
          deliverables: [
            "ፕሪሚየም የቢዝነስ ካርዶች",
            "የተጣጠፉ የማስተዋወቂያ ብሮሸሮች",
            "የድርጅት ማስታወቂያ ወረቀቶች (Flyers)",
            "የምርት እና የአገልግሎት ካታሎግ",
            "ለህትመት የተዘጋጁ ጥራት ያላቸው ፋይሎች"
          ]
        },
        {
          id: "social-media-design",
          title: "Social Media Design",
          category: "Social Media Design",
          shortDesc: "ለFacebook፣ YouTube፣ TikTok እና Instagram የሚሆኑ ፖስተሮች፣ ባነሮች እና የዲጂታል ይዘቶች።",
          deliverables: [
            "የፌስቡክ ፖስቶች እና ከቨር",
            "የኢንስታግራም ፖስቶች እና ስቶሪዎች",
            "የቲክቶክ ይዘቶች እና ዲዛይኖች",
            "የዩቲዩብ ታምብኔል እና ባነር",
            "የማህበራዊ ሚዲያ ማስታወቂያ ዲዛይኖች"
          ]
        },
        {
          id: "photo-retouching",
          title: "Photo Retouching",
          category: "Photo Retouching",
          shortDesc: "ፎቶዎችን ማጽዳት፣ ማሳመር፣ ቀለማቸውን እና ጀርባቸውን በዘመናዊ መንገድ ማስተካከል።",
          deliverables: [
            "ሙያዊ የፎቶ ማሳመር (Photo Retouching)",
            "የፎቶ ጀርባ ማስወገድ እና መቀየር",
            "የቀለም ማስተካከል (Color Correction)",
            "የምርት ፎቶዎችን ማሳመር",
            "የፎቶ ጥራት ደረጃን ማሳደግ"
          ]
        },
        {
          id: "video-editing",
          title: "Video Editing (4K & Shorts)",
          category: "Video Editing",
          shortDesc: "ዘመናዊ የ4K ቪዲዮ ኤዲቲንግ፣ የReel እና TikTok Shorts ስራዎች።",
          deliverables: [
            "4K Ultra-HD የቪዲዮ ኤዲቲንግ",
            "የቲክቶክ Shorts እና የኢንስታግራም Reels",
            "የዩቲዩብ ረዣዥም ቪዲዮዎች",
            "የንግድ ማስተዋወቂያ ቪዲዮዎች",
            "የመግቢያ እና መውጫ አኒሜሽን (Intro/Outro)"
          ]
        }
      ]
    },
    portfolio: {
      badge: "የተመረጡ ስራዎች",
      heading: "የዲዛይን ስራዎቻችን ማህደር",
      subheading: "በቅርቡ የሰራናቸው የብራንዲንግ፣ የግራፊክ ዲዛይን እና የንግድ ሚዲያ ስራዎች ስብስብ።",
      categories: {
        all: "ሁሉም (All)",
        logos: "ሎጎዎች (Logos)",
        branding: "ብራንዲንግ (Branding)",
        socialMedia: "ማህበራዊ ሚዲያ (Social Media)",
        printDesign: "ህትመት (Print)",
        photoEditing: "የፎቶ ኤዲቲንግ (Photo Editing)",
        video: "ቪዲዮ (Video)"
      },
      featuredOnly: "ዋና ዋና ስራዎች",
      viewProject: "ስራውን ይመልከቱ",
      deliverablesLabel: "የተሰሩ ስራዎች",
      clientLabel: "ደንበኛ",
      closeModal: "ዝጋ",
      consultOnProject: "ስለዚህ ስራ ያማክሩን",
      sortLabel: "አመዳደብ:",
      sortFeatured: "የተመረጡ ስራዎች",
      sortNewest: "የቅርብ ጊዜ ስራዎች",
      sortAlphaAsc: "በስም (A–Z)",
      searchPlaceholder: "ስራዎችን፣ ብራንድ ወይም ዲዛይን ይፈልጉ...",
      showingCount: "ከ{total} ስራዎች {count} ታይተዋል",
      clearFilters: "ሁሉንም አጽዳ",
      noProjectsFound: "ምንም አይነት ስራ አልተገኘም",
      noProjectsDesc: "እባክዎ የተለየ ምድብ ይምረጡ ወይም ፍለጋውን ይቀይሩ።"
    },
    whyChooseUs: {
      badge: "ለምን ላሜንቶ",
      heading: "ለምን LAMENTOን ይመርጣሉ?",
      subheading: "ከእኛ ጋር መስራት ማለት ልዩ የፈጠራ ቁርጠኝነት፣ ትክክለኛነት እና አስተማማኝ ርክክብ ማግኘት ነው።",
      cards: [
        {
          id: "creative-ideas",
          title: "የፈጠራ ሀሳቦች",
          description: "ብራንድዎ በገበያው ውስጥ ጎልቶ እንዲወጣ የሚያግዙ ልዩ እና ትርጉም ያላቸው ዲዛይኖችን እንፈጥራለን።"
        },
        {
          id: "professional-quality",
          title: "ሙያዊ ጥራት",
          description: "እያንዳንዱ ስራ ለዝርዝር ጉዳዮች ትኩረት በመስጠት እና በእይታ ጥራት ላይ በማተኮር ይሰራል።"
        },
        {
          id: "client-focused",
          title: "ደንበኛ ተኮር",
          description: "የእርስዎ ግቦች፣ ሀሳቦች እና ፍላጎቶች የፈጠራ ሂደታችንን ይመራሉ ።"
        },
        {
          id: "reliable-service",
          title: "አስተማማኝ አገልግሎት",
          description: "ግልጽ ግንኙነትን፣ ጥራት ያለው ስራን እና በሰዓቱ ማድረስን ከፍ አድርገን እንመለከታለን።"
        }
      ]
    },
    process: {
      badge: "የስራ ሂደታችን",
      heading: "እንዴት እንደምንሰራ",
      subheading: "ከመጀመሪያው ሀሳብ ጀምሮ እስከ መጨረሻው ርክክብ ድረስ ግልጽ እና የተቀናጀ የስራ ሂደት።",
      steps: [
        {
          step: "01",
          title: "ሀሳብዎን ያካፍሉን",
          description: "ራዕይዎን፣ ፍላጎትዎን እና ግቦችዎን ያጋሩናል።"
        },
        {
          step: "02",
          title: "እንፈጥራለን",
          description: "በፍላጎትዎ መሰረት የፈጠራ ዲዛይን ጽንሰ-ሀሳቦችን እናዘጋጃለን።"
        },
        {
          step: "03",
          title: "እንከልሳለን እና እናሻሽላለን",
          description: "አስተያየትዎን ይሰጡናል፣ እኛም ዲዛይኑን አሻሽለን እናቀርባለን።"
        },
        {
          step: "04",
          title: "የመጨረሻ ርክክብ",
          description: "የመጨረሻዎቹን ሙያዊ የዲዛይን ፋይሎች ይረከባሉ።"
        }
      ],
      readyToStart: "ራዕይዎን ወደ እውን ለመቀየር ዝግጁ ኖት?",
      startNowBtn: "ስራዎን ዛሬ ይጀምሩ"
    },
    pricing: {
      badge: "የዋጋ ዝርዝር እና የክፍያ መንገዶች",
      heading: "ግልጽ ዋጋ እና የሀገር ውስጥ የባንክ አማራጮች",
      subheading: "በኢትዮጵያ እና በውጭ ሀገር ላሉ ደንበኞቻችን ተመጣጣኝ ዋጋዎች እና ምቹ የክፍያ አማራጮች።",
      currencyToggleLabel: "የገንዘብ አይነት:",
      currencyEtb: "ETB (የኢትዮጵያ ብር)",
      currencyUsd: "USD (ዶላር)",
      packagesTab: "የዲዛይን ጥቅሎች",
      paymentMethodsTab: "የባንክ እና ቴሌብር ቁጥሮች",
      serviceRatesTab: "የአገልግሎቶች ዋጋ ዝርዝር",
      mostPopular: "በጣም ተመራጭ",
      choosePlan: "ይህንን ጥቅል እዘዝ",
      customQuoteCta: "ልዩ የዋጋ ጥያቄ አለዎት?",
      startingFrom: "የመነሻ ዋጋ",
      paymentBadge: "ትክክለኛ የክፍያ አካውንቶች",
      paymentHeading: "የኢትዮጵያ ባንኮች እና የክፍያ አማራጮች",
      paymentSubheading: "ሁሉንም የኢትዮጵያ ንግድ ባንኮች፣ ቴሌብር፣ ኤም-ፔሳ (M-Pesa) እንዲሁም ለውጭ ሀገር ደንበኞች በPayoneer ክፍያዎችን እንቀበላለን።",
      allFilter: "ሁሉም",
      mobileMoneyFilter: "ቴሌብር እና M-PESA",
      banksFilter: "የኢትዮጵያ ባንኮች",
      internationalFilter: "Payoneer (አለምአቀፍ)",
      accountNumberLabel: "የአካውንት / ስልክ ቁጥር",
      accountHolderLabel: "የአካውንቱ ባለቤት",
      copyBtn: "ቅዳ",
      copiedBtn: "ተቀድቷል!",
      paymentNoteTitle: "የክፍያ ማረጋገጫ ማስታወሻ",
      paymentNoteDesc: "ክፍያውን እንደፈጸሙ የደረሰኙን ፎቶ (screenshot) በWhatsApp ወደ +251 959 215 575 (ተፈሪ ጎንፋ) ይላኩልን፤ ስራዎ ወዲያውኑ ይጀመራል።",
      confirmOnWhatsapp: "ደረሰኝ በWhatsApp ይላኩ"
    },
    testimonials: {
      badge: "የደንበኞች ምስክርነት",
      heading: "በደንበኞቻችን የተመሰከረለት",
      subheading: "የተለያዩ የንግድ ተቋማት እና ደንበኞች ስለ LAMENTO Design Studio የሰጡትን አስተያየት ይመልከቱ።"
    },
    contact: {
      badge: "አብረን እንስራ",
      heading: "አብረን እንስራ",
      subheading: "ራዕይዎን ወደ እውን ለመቀየር ዝግጁ ኖት? ከታች ያለውን ቅጽ ይሙሉ ወይም በቀጥታ በዋትስአፕ ያነጋግሩን።",
      form: {
        name: "ስም",
        namePlaceholder: "ሙሉ ስምዎ",
        email: "ኢሜይል",
        emailPlaceholder: "name@company.com",
        phone: "ስልክ ቁጥር / ዋትስአፕ",
        phonePlaceholder: "+251 91 123 4567 ወይም የዋትስአፕ ቁጥር",
        serviceNeeded: "የሚፈልጉት አገልግሎት",
        projectDetails: "የስራው ዝርዝር",
        projectDetailsPlaceholder: "ስለ ራዕይዎ፣ ስለሚፈልጉት ጊዜ እና ልዩ ሀሳቦች ያብራሩልን...",
        submit: "የስራ ጥያቄውን ይላኩ",
        submitting: "በመላክ ላይ...",
        privacyNote: "መረጃዎ በሚስጥር የተጠበቀ ነው፤ ለዚህ ስራ ውይይት ብቻ ጥቅም ላይ ይውላል።",
        successHeading: "የስራ ጥያቄዎ ደርሶናል!",
        successMessage: "እናመሰግናለን! LAMENTO Design Studio የስራ ዝርዝርዎን ተመልክቶ በ24 ሰዓታት ውስጥ ምላሽ ይሰጣል።",
        sendAnother: "ሌላ ጥያቄ ይላኩ"
      },
      whatsappBox: {
        badge: "ቀጥታ ፈጣን ውይይት",
        title: "በዋትስአፕ ያነጋግሩን",
        desc: "ፈጣን መልእክት ይመርጣሉ? በቀጥታ ከዋና ዲዛይነራችን ጋር በመወያየት ፈጣን የዋጋ ግምት እና የምክር አገልግሎት ያግኙ።",
        button: "ዋትስአፕ ይክፈቱ"
      },
      emailBox: {
        title: "የስቱዲዮው ቀጥታ ኢሜይል"
      },
      socialsTitle: "በማህበራዊ ሚዲያ ይከተሉን"
    },
    quoteModal: {
      title: "የዋጋ ዝርዝር ይጠይቁ",
      subtitle: "ስለ ስራዎ ፍላጎት ይንገሩን፤ እኛም ዝርዝር የዋጋ እና የስራ እቅድ እናቀርብልዎታለን።",
      nameLabel: "ሙሉ ስምዎ",
      namePlaceholder: "ምሳሌ፡ አበበ በቀለ",
      emailLabel: "የኢሜይል አድራሻ",
      emailPlaceholder: "ምሳሌ፡ abebe@example.com",
      phoneLabel: "ስልክ ቁጥር / ዋትስአፕ",
      phonePlaceholder: "ምሳሌ፡ +251 91 123 4567",
      serviceLabel: "የሚፈልጉት አገልግሎት",
      selectServicePlaceholder: "አገልግሎት ይምረጡ...",
      budgetLabel: "የሚገምቱት በጀት (ከተፈለገ)",
      budgetPlaceholder: "ምሳሌ፡ ተለዋዋጭ፣ 15,000 - 30,000 ብር",
      detailsLabel: "የስራው ዝርዝር እና ራዕይ",
      detailsPlaceholder: "ስለ ስራው፣ ስለሚፈልጉት ጊዜ እና ልዩ መስፈርቶች ያብራሩልን...",
      submitBtn: "ጥያቄውን ይላኩ",
      submitting: "በመላክ ላይ...",
      successTitle: "ጥያቄዎ በተሳካ ሁኔታ ተልኳል!",
      successMessage: "እናመሰግናለን! የስራዎን ዝርዝር ተቀብለናል፣ በቅርቡ ምላሽ እንሰጥዎታለን።",
      closeBtn: "ዝጋ",
      whatsappDirectBtn: "በቀጥታ በዋትስአፕ ይላኩ"
    },
    footer: {
      disciplines: "ግራፊክ ዲዛይን | ብራንዲንግ | የፎቶ ኤዲቲንግ | የቪዲዮ ኤዲቲንግ",
      followWork: "ስራዎቻችንን ይከታተሉ",
      rightsReserved: "መብቱ በህግ የተጠበቀ ነው።",
      backToTop: "ወደ ላይ ተመለስ",
      tagline: "ራዕይዎትን በዲዛይን እውን እናደርጋለን።"
    },
    floatingWhatsapp: {
      tooltip: "ከተፈሪ ጎንፋ ጋር የቀጥታ ውይይት",
      badge: "ኦንላይን",
      designerName: "ተፈሪ ጎንፋ (Teferi Gonfa)",
      designerRole: "Lead Graphic Designer & Visual Artist",
      onlineStatus: "ተፈሪ ጎንፋ • ኦንላይን (Chat Live)",
      greeting: "ሰላም! ወደ ላሜንቶ ዲዛይን ስቱዲዮ በደህና መጡ። እኔ ተፈሪ ጎንፋ (Lead Graphic Designer & Visual Artist) ነኝ። የዲዛይን እና የብራንዲንግ ራዕይዎትን እውን ለማድረግ ዛሬ በምን ልርዳዎት?",
      quickMsgPlaceholder: "የስራዎን ሀሳብ ወይም ጥያቄ እዚህ ይጻፉ...",
      sendWhatsapp: "በዋትስአፕ ያነጋግሩን",
      requestQuote: "የዋጋ ዝርዝር ይጠይቁ",
      callDirect: "በቀጥታ ይደውሉ +251 959 215 575"
    }
  }
};
