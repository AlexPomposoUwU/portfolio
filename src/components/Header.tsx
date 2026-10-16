import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DoodleSpikyStar, PunkStarCutout } from './ZineGraphics';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#111111]/95 backdrop-blur-md border-b-2 border-[#C51E1E]'
          : 'bg-[#111111] border-b-2 border-[#F0EBDD]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-6">
          {/* Zone 1: Distinctive Wordmark with Zine Stamp */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-decoration-none"
          >
            <div className="w-8 h-8 bg-[#C51E1E] text-[#FFFFFF] flex items-center justify-center -rotate-3 group-hover:rotate-6 transition-transform shadow-xs">
              <PunkStarCutout className="w-5 h-5" color="#FFFFFF" />
            </div>
            <span className="font-display text-xl sm:text-2xl tracking-normal text-[#FFFFFF] group-hover:text-[#C51E1E] transition-colors">
              {SITE_CONFIG.name.toUpperCase()}
            </span>
          </a>

          {/* Zone 2: 6 concise single-line text navigation links with Typewriter / Zine Style */}
          <nav
            className="hidden md:flex items-center gap-7 text-xs font-typewriter tracking-widest text-[#F0EBDD]/80"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`relative py-1 whitespace-nowrap shrink-0 uppercase transition-all ${
                    isActive
                      ? 'text-[#FFFFFF] font-bold bg-[#C51E1E] px-2 py-0.5 -rotate-1 shadow-xs'
                      : 'text-[#89847E] hover:text-[#FFFFFF] hover:-translate-y-0.5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action button with cut-out sticker attitude */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 font-display text-xs tracking-wider text-[#FFFFFF] bg-[#C51E1E] hover:bg-[#FFFFFF] hover:text-[#111111] transition-all whitespace-nowrap shrink-0 border-2 border-[#FFFFFF] rotate-1 hover:rotate-0 shadow-[3px_3px_0px_0px_#FFFFFF]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-[#1A1A1A] border border-[#C51E1E] text-[#F0EBDD] hover:text-[#FFFFFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C51E1E]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#111111] border-b-4 border-[#C51E1E] px-5 pt-4 pb-8 space-y-4">
          <nav className="flex flex-col space-y-3 font-typewriter text-sm tracking-widest" aria-label="Mobile Navigation">
            {navLinks.map((item, idx) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              const rotation = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center justify-between p-2.5 border-b border-[#F0EBDD]/15 transition-transform ${
                    isActive
                      ? `bg-[#C51E1E] text-[#FFFFFF] font-bold ${rotation}`
                      : 'text-[#F0EBDD] hover:bg-[#1A1A1A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <DoodleSpikyStar className="w-4 h-4 text-[#FFFFFF]" />}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 font-display text-sm tracking-wider text-[#FFFFFF] bg-[#C51E1E] hover:bg-[#FFFFFF] hover:text-[#111111] border-2 border-[#FFFFFF] shadow-[3px_3px_0px_0px_#FFFFFF]"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
