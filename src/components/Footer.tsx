import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PunkStarCutout, BarcodeStrip, DoodleSpikyStar } from './ZineGraphics';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative bg-[#F0EBDD] text-[#111111] pt-16 pb-14 border-t-4 border-[#111111] overflow-hidden">
      {/* Halftone texture */}
      <div className="absolute inset-0 zine-halftone opacity-35 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer Strip: Brand, Nav & Legal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b-4 border-[#111111]">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C51E1E] flex items-center justify-center -rotate-3">
                <PunkStarCutout className="w-5 h-5" color="#FFFFFF" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-[#111111] uppercase">
                ALEX POMPOSO
              </h2>
            </div>
            <div className="font-typewriter text-xs sm:text-sm text-[#89847E] tracking-wider uppercase leading-relaxed">
              <div>INDEPENDENT WEB DESIGNER</div>
              <div className="text-[#111111] font-bold">BRAZIL · WORKING WORLDWIDE</div>
            </div>
            <div className="pt-1">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}?subject=Website%20Project%20Inquiry`}
                className="font-typewriter text-xs sm:text-sm text-[#C51E1E] hover:text-[#111111] font-bold underline transition-colors"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </div>
          </div>

          {/* Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-typewriter text-xs font-bold tracking-widest uppercase text-[#C51E1E] block">
              PORTFOLIO SECTIONS
            </span>
            <ul className="space-y-2 font-display text-xs sm:text-sm uppercase tracking-wider">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-[#C51E1E] transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links & Barcode (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-typewriter text-xs font-bold tracking-widest uppercase text-[#C51E1E] block">
              LEGAL INFORMATION
            </span>
            <ul className="space-y-2 font-typewriter text-xs uppercase tracking-wider">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#C51E1E] transition-colors cursor-pointer text-left underline underline-offset-4"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#C51E1E] transition-colors cursor-pointer text-left underline underline-offset-4"
                >
                  Website Terms of Use
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <BarcodeStrip className="w-28 h-7 text-[#111111]" />
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Colophon */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-typewriter text-xs text-[#89847E]">
          <p>© 2026 Alex Pomposo. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider">
            <span>HOSTED ON HOSTINGER</span>
            <span aria-hidden="true">·</span>
            <span>STATIC PRODUCTION BUILD</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#C51E1E] font-bold">ALEXPOMPOSO.ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
