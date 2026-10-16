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

            {activeSocials.length > 0 && (
              <div className="pt-6 border-t border-[#F0EBDD]/20 flex items-center gap-4">
                <span className="font-typewriter text-xs text-[#89847E] uppercase">CHANNELS:</span>
                {activeSocials.map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xs text-[#FFFFFF] hover:text-[#C51E1E] uppercase"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
