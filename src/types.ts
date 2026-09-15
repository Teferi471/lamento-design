export type Language = 'en' | 'om' | 'am';

export type ServiceCategory = 
  | 'Graphic Design' 
  | 'Logo & Brand Identity'
  | 'Business Cards & Brochures'
  | 'Social Media Design' 
  | 'Photo Retouching'
  | 'Photo Editing'
  | 'Video Editing'
  | 'Branding';

export type PortfolioCategory = 
  | 'All' 
  | 'Logos' 
  | 'Branding' 
  | 'Social Media' 
  | 'Print Design' 
  | 'Photo Editing' 
  | 'Video';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  deliverables: string[];
  icon: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  shortDesc: string;
  fullDesc?: string;
  imageUrl: string;
  client?: string;
  deliverables?: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface ProjectRequestFormData {
  name: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  projectDetails: string;
  budget?: string;
  timeline?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  priceEtb: number;
  priceUsd: number;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface PaymentAccount {
  id: string;
  name: string;
  type: 'mobile_money' | 'bank' | 'international';
  accountNumber: string;
  accountName: string;
  badge: string;
  currency: string;
  instructions: string;
  accentColor?: string;
}



