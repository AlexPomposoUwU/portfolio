import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import {
  PunkStarCutout,
  WavyRibbonSnake,
  DoodleSun,
  DoodleSquareSpiral,
  DoodleSpikyStar,
  MaskingTape,
  BarcodeStrip,
} from './ZineGraphics';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${SITE_CONFIG.contactEmail}?subject=Website%20Project%20Inquiry`;

  const activeSocials = Object.entries(SITE_CONFIG.socials).filter(
    ([, url]) => url !== null && url.trim() !== ''
  );

  return (
    <section
      id="contact"
      className="relative bg-[#111111] text-[#F0EBDD] py-20 sm:py-32 border-b-4 border-[#111111] overflow-hidden"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 zine-halftone-light opacity-25 pointer-events-none" aria-hidden="true" />

      {/* Wavy Ribbon Snake from Image 4 flowing in the background */}
      <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-20 z-0" aria-hidden="true">
        <WavyRibbonSnake className="w-56 sm:w-72 h-[550px] text-[#C51E1E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-[#F0EBDD]/25 pb-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-[#C51E1E] text-[#FFFFFF] px-2 py-0.5 font-typewriter text-xs font-bold uppercase tracking-widest -rotate-1">
              SECTION 07
            </span>
            <span className="font-typewriter text-xs text-[#89847E] tracking-widest uppercase">
              INQUIRIES & BOOKING
            </span>
          </div>
          <span className="font-hand text-2xl text-[#C51E1E] rotate-2 hidden sm:inline">
            Direct communication · Worldwide clients
          </span>
        </div>

        {/* Poster Frame inspired by Reference 6 ("Let's work TOGETHER") */}
        <div className="relative bg-[#1A1A1A] border-4 border-[#FFFFFF] p-8 sm:p-14 shadow-[10px_10px_0px_0px_#C51E1E] max-w-4xl mx-auto -rotate-0.5">
          <MaskingTape className="w-28 h-7 -top-3.5 left-10" angle="-rotate-4" />
          <MaskingTape className="w-28 h-7 -top-3.5 right-10" angle="rotate-4" />

          {/* Top Stamp */}
          <div className="flex items-center justify-between border-b-2 border-[#F0EBDD]/20 pb-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-[#C51E1E] text-[#FFFFFF] px-3 py-1 font-typewriter text-xs font-bold uppercase -rotate-1">
              <PunkStarCutout className="w-3.5 h-3.5" color="#FFFFFF" />
              <span>DIRECT INBOX</span>
            </div>
            <div className="flex items-center gap-2">
              <DoodleSpikyStar className="w-5 h-5 text-[#FFFFFF]" />
              <span className="font-typewriter text-xs text-[#89847E] uppercase">
                BRAZIL · WORLDWIDE
              </span>
            </div>
          </div>

          <div className="space-y-8">
            {/* Title Lockup (Reference 6 Style: script "Let's work" + massive "TOGETHER.") */}
            <div>
              <div className="font-hand text-4xl sm:text-6xl text-[#C51E1E] -rotate-3 mb-1">
                Let's work
              </div>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#FFFFFF] uppercase leading-[0.9]">
                TOGETHER.
              </h2>
            </div>

            {/* Exact Supporting Text in Typewriter Font */}
            <p className="font-typewriter text-base sm:text-xl text-[#F0EBDD] max-w-2xl leading-relaxed">
              Have a website idea in mind? Tell me about your business and what you're looking for. I'd be happy to discuss your project.
            </p>

            {/* Main Email Action Box */}
            <div className="bg-[#111111] border-3 border-[#C51E1E] p-6 sm:p-8 space-y-4 shadow-[6px_6px_0px_0px_#FFFFFF] rotate-0.5">
              <div className="flex items-center justify-between border-b border-[#F0EBDD]/15 pb-2">
                <span className="font-typewriter text-xs font-bold tracking-widest uppercase text-[#C51E1E] flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>EMAIL</span>
                </span>
                <span className="font-typewriter text-[11px] text-[#89847E] uppercase">
                  DIRECT CONTACT
                </span>
              </div>

              {/* Selectable Email in Giant Punchy Dela / Typewriter Font */}
              <div className="py-2">
                <a
                  href={mailtoUrl}
                  className="font-display text-xl sm:text-3xl lg:text-4xl text-[#FFFFFF] hover:text-[#C51E1E] transition-colors break-all select-all block tracking-wide"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>

              {/* Action Buttons: Punk Cutout Style */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={mailtoUrl}
                  className="px-8 py-4 bg-[#C51E1E] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:text-[#111111] font-display text-xs sm:text-sm tracking-wider uppercase transition-all inline-flex items-center gap-2 border-2 border-[#FFFFFF] -rotate-1 hover:rotate-0 shadow-[4px_4px_0px_0px_#FFFFFF]"
                >
                  <span>EMAIL ME</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-6 py-4 bg-[#1A1A1A] hover:bg-[#222222] border-2 border-[#F0EBDD]/40 text-[#F0EBDD] font-display text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2 cursor-pointer rotate-1 hover:rotate-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#C51E1E]" />
                      <span>EMAIL COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Zine Note */}
            <div className="pt-2 flex items-center justify-between font-typewriter text-xs text-[#89847E]">
              <span>Direct personal response · No bot auto-responders</span>
              <BarcodeStrip className="w-20 h-5 text-white/40" />
            </div>

            {/* Verified Social Media Channels: Instagram & Facebook */}
            <div className="pt-6 border-t border-[#F0EBDD]/20 space-y-3">
              <span className="font-typewriter text-xs text-[#89847E] uppercase block">
                VERIFIED SOCIAL MEDIA CHANNELS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Instagram Picture Link */}
                {SITE_CONFIG.socials.instagram && (
                  <a
                    href={SITE_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 bg-[#111111] hover:bg-[#C51E1E] p-4 border-2 border-[#FFFFFF] -rotate-1 hover:rotate-0 transition-all shadow-[4px_4px_0px_0px_#FFFFFF] cursor-pointer"
                    aria-label="Visit Alex Pomposo on Instagram (@aleaquiszho)"
                  >
                    {/* Instagram Picture Mark */}
                    <div className="w-11 h-11 bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] rounded-lg p-0.5 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <div className="w-full h-full bg-[#111111] rounded-md flex items-center justify-center text-white">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="font-display text-sm text-white group-hover:text-white uppercase flex items-center gap-1">
                        <span>INSTAGRAM</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <div className="font-typewriter text-xs text-[#89847E] group-hover:text-white/90 truncate">
                        @aleaquiszho
                      </div>
                    </div>
                  </a>
                )}

                {/* Facebook Picture Link */}
                {SITE_CONFIG.socials.facebook && (
                  <a
                    href={SITE_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 bg-[#111111] hover:bg-[#C51E1E] p-4 border-2 border-[#FFFFFF] rotate-1 hover:rotate-0 transition-all shadow-[4px_4px_0px_0px_#FFFFFF] cursor-pointer"
                    aria-label="Visit Alex Pomposo on Facebook"
                  >
                    {/* Facebook Picture Mark */}
                    <div className="w-11 h-11 bg-[#1877F2] rounded-lg p-0.5 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <div className="w-full h-full bg-[#1877F2] rounded-md flex items-center justify-center text-white">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="font-display text-sm text-white group-hover:text-white uppercase flex items-center gap-1">
                        <span>FACEBOOK</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <div className="font-typewriter text-xs text-[#89847E] group-hover:text-white/90 truncate">
                        Alex Pomposo
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
