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

            {/* Verified Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              {SITE_CONFIG.socials.instagram && (
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-[#111111] text-white hover:bg-[#C51E1E] transition-colors border border-[#111111] text-xs font-typewriter -rotate-1"
                  aria-label="Instagram profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              )}
              {SITE_CONFIG.socials.facebook && (
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1877F2] text-white hover:bg-[#111111] transition-colors border border-[#1877F2] text-xs font-typewriter rotate-1"
                  aria-label="Facebook profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              )}
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
