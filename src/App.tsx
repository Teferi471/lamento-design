/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { PricingAndPayment } from './components/PricingAndPayment';
import { CtaSection } from './components/CtaSection';
import { Testimonials } from './components/Testimonials';
import { FounderSection } from './components/FounderSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [liveChatOpen, setLiveChatOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Graphic Design');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleViewWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#080808] text-neutral-100 flex flex-col font-sans selection:bg-[#c59b27] selection:text-black">
        {/* Sticky Top Navigation */}
        <Navbar onOpenQuote={() => handleOpenQuote()} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero 
            onOpenQuote={() => handleOpenQuote()} 
            onViewWork={handleViewWork} 
            onStartProject={() => handleScrollToContact()}
            onOpenLiveChat={() => setLiveChatOpen(true)}
          />

          {/* 2. About Section */}
          <About />

          {/* 3. Services Section */}
          <Services 
            onSelectService={(service) => {
              handleOpenQuote(service);
            }} 
          />

          {/* 4. Portfolio Section */}
          <Portfolio 
            onRequestProject={(projectName) => {
              handleScrollToContact(`Similar to ${projectName}`);
            }} 
          />

          {/* 5. Why Choose Us Section */}
          <WhyChooseUs />

          {/* 6. Work Process Section */}
          <Process />

          {/* 7. Pricing & Payment Accounts (Ethiopian Banks, Telebirr, M-Pesa, Payoneer) */}
          <PricingAndPayment 
            onSelectPackage={(packageName) => {
              handleScrollToContact(`Selected Package / Service: ${packageName}`);
            }}
            onOpenQuote={() => handleOpenQuote()}
          />

          {/* 8. Call To Action Section */}
          <CtaSection 
            onStartProject={() => handleScrollToContact()} 
          />

          {/* 9. Testimonials Section */}
          <Testimonials />

          {/* 10. Founder Section */}
          <FounderSection />

          {/* 11. Contact Section */}
          <Contact initialService={selectedService} />
        </main>

        {/* 11. Footer Section */}
        <Footer />

        {/* Persistent Floating WhatsApp Quick-Chat Trigger & Live Chat Window */}
        <FloatingWhatsApp 
          isOpen={liveChatOpen}
          onToggle={() => setLiveChatOpen(!liveChatOpen)}
          onClose={() => setLiveChatOpen(false)}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Interactive Project Scoping & Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          preselectedService={selectedService}
        />
      </div>
    </LanguageProvider>
  );
}
