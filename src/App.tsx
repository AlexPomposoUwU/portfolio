import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal, LegalDocType } from './components/LegalModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [legalModalType, setLegalModalType] = useState<LegalDocType>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      const sections = ['home', 'about', 'work', 'services', 'process', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-[#F0EBDD] font-body selection:bg-[#C51E1E] selection:text-[#FFFFFF] relative">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#C51E1E] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Primary Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <SelectedWork />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Privacy Policy & Website Terms Modal View */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
