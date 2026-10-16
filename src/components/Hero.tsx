import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import {
  PunkStarCutout,
  WavyRibbonSnake,
  DoodleSun,
  DoodleSnailSpiral,
  DoodleOrganicStar,
  DoodleSquareSpiral,
  DoodleSpikyStar,
  MaskingTape,
  BarcodeStrip,
} from './ZineGraphics';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#111111] text-[#F0EBDD] pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden border-b-4 border-[#111111]"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 zine-halftone-light opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Decorative Wavy Ribbon Snake (From User's Image 4) snaking in from the right */}
      <div
        className="absolute top-8 -right-16 lg:right-10 pointer-events-none opacity-20 lg:opacity-30 z-0"
        aria-hidden="true"
      >
        <WavyRibbonSnake className="w-56 sm:w-80 h-[550px] text-[#C51E1E]" />
      </div>

      {/* Scattered Punk Cutout Stars (From User's Image 2 - Kill Rock Stars) */}
      <div className="absolute top-24 left-6 pointer-events-none opacity-40 z-0 -rotate-12 hidden sm:block">
        <PunkStarCutout className="w-12 h-12" color="#C51E1E" />
      </div>
      <div className="absolute bottom-16 right-1/3 pointer-events-none opacity-25 z-0 rotate-45">
        <PunkStarCutout className="w-16 h-16" color="#FFFFFF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Zine Masthead Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#F0EBDD]/25 pb-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="bg-[#C51E1E] text-[#FFFFFF] px-2.5 py-1 font-typewriter text-xs tracking-wider uppercase font-bold -rotate-1">
              PORTFOLIO / INDEPENDENT WEB DESIGN
            </span>
            <span className="font-typewriter text-xs text-[#89847E] tracking-widest">
              01 / PORTFOLIO
            </span>
          </div>

          <div className="flex items-center gap-4">
            <BarcodeStrip className="w-24 sm:w-32 h-7 text-[#F0EBDD]/60" />
            <span className="font-typewriter text-xs text-[#89847E] tracking-widest uppercase hidden sm:inline">
              EDITION 2026
            </span>
          </div>
        </div>

        {/* Main Grid: Staggered Punk Typography Left, Layered Zine Montage Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Tilted Cut-and-Paste Headlines & Exact Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Identity Badge & Handwritten annotation */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-block bg-[#FFFFFF] text-[#111111] px-4 py-1.5 font-display text-sm tracking-wider uppercase -rotate-2 border-2 border-[#111111] shadow-[3px_3px_0px_0px_#C51E1E]">
                ALEX POMPOSO
              </div>
              <span className="font-hand text-xl sm:text-2xl text-[#C51E1E] rotate-2">
                * hand-crafted websites with physical zine soul *
              </span>
            </div>

            {/* Professional Descriptor in Typewriter Font */}
            <div className="font-typewriter text-xs sm:text-sm tracking-widest text-[#89847E] uppercase space-y-0.5 border-l-2 border-[#C51E1E] pl-3">
              <div>INDEPENDENT WEB DESIGNER</div>
              <div>BASED IN BRAZIL</div>
              <div>WORKING WORLDWIDE</div>
            </div>

            {/* Staggered Cut-and-Paste Typography (Like Reference 2 "RESIST PSYCHIC DEATH") */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block bg-[#C51E1E] text-[#FFFFFF] font-display text-4xl sm:text-6xl lg:text-7xl px-3 py-1 -rotate-2 shadow-[4px_4px_0px_0px_#FFFFFF] uppercase">
                  DISTINCTIVE
                </span>
                <span className="inline-block bg-[#111111] text-[#FFFFFF] border-3 border-[#FFFFFF] font-display text-4xl sm:text-6xl lg:text-7xl px-3 py-1 rotate-1 shadow-[4px_4px_0px_0px_#C51E1E] uppercase">
                  WEBSITES
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#FFFFFF] uppercase tracking-normal leading-[1.05] drop-shadow-sm">
                FOR INDEPENDENT BUSINESSES.
              </h1>
            </div>

            {/* Supporting Text in Typewriter Style */}
            <div className="bg-[#1A1A1A] border-2 border-[#F0EBDD]/30 p-5 -rotate-0.5 relative max-w-xl shadow-[4px_4px_0px_0px_#111111]">
              <MaskingTape className="w-20 h-5 -top-3 left-4" angle="-rotate-3" />
              <p className="font-typewriter text-base sm:text-lg text-[#F0EBDD] leading-relaxed">
                I design responsive, visually distinctive websites for restaurants, cafes, and small businesses that want a stronger online presence.
              </p>
            </div>

            {/* Action Buttons: Punk Cut-out Style */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => scrollTo('work')}
                className="group px-7 py-4 bg-[#C51E1E] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:text-[#111111] font-display text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer border-2 border-[#FFFFFF] -rotate-1 hover:rotate-0 shadow-[4px_4px_0px_0px_#FFFFFF]"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="group px-7 py-4 bg-transparent hover:bg-[#C51E1E] text-[#FFFFFF] font-display text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer border-2 border-[#FFFFFF] rotate-1 hover:rotate-0 shadow-[4px_4px_0px_0px_#C51E1E]"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Layered Punk Zine Artboard with Canva Doodles (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* The Sun Doodle from Image 3 (Canva Sheet) floating at top right */}
            <div className="absolute -top-10 -right-6 pointer-events-none text-[#C51E1E] z-20 rotate-12">
              <DoodleSun className="w-20 h-20" />
            </div>

            {/* Collage Canvas Box */}
            <div className="relative bg-[#1A1A1A] border-4 border-[#F0EBDD] p-6 sm:p-8 rotate-1 shadow-[8px_8px_0px_0px_#C51E1E] overflow-hidden">
              <MaskingTape className="w-24 h-6 -top-3 right-8" angle="rotate-4" />
              <MaskingTape className="w-24 h-6 -bottom-3 left-8" angle="-rotate-3" />

              {/* Header Label inside Collage */}
              <div className="flex items-center justify-between border-b-2 border-[#F0EBDD]/20 pb-3 mb-6">
                <span className="font-typewriter text-xs font-bold text-[#C51E1E] tracking-widest uppercase">
                  ISSUE NO. 01 // BRAZIL
                </span>
                <DoodleSpikyStar className="w-6 h-6 text-[#FFFFFF]" />
              </div>

              {/* Graphic Cutouts Layer */}
              <div className="space-y-4">
                {/* Red Contrast Block with Snail Spiral from Image 3 */}
                <div className="bg-[#C51E1E] text-[#FFFFFF] p-5 -rotate-1 border-2 border-[#FFFFFF] shadow-[4px_4px_0px_0px_#111111] flex items-center justify-between">
                  <div>
                    <div className="font-typewriter text-xs tracking-wider uppercase text-[#FFFFFF]/80">
                      STARTING RATE
                    </div>
                    <div className="font-display text-3xl sm:text-4xl uppercase tracking-tight">
                      USD $300
                    </div>
                  </div>
                  <DoodleSnailSpiral className="w-12 h-12 text-[#FFFFFF]" />
                </div>

                {/* Dark Editorial Box with Concentric Square Spiral & Organic Star from Image 3 */}
                <div className="bg-[#111111] border-2 border-[#F0EBDD]/30 p-5 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-[#FFFFFF] tracking-wider uppercase">
                      STUDIO PRACTICE
                    </span>
                    <DoodleOrganicStar className="w-8 h-8 text-[#C51E1E]" />
                  </div>
                  <p className="font-typewriter text-xs text-[#F0EBDD]/80 leading-relaxed">
                    Combining visual direction, responsive engineering, and tactile editorial spirit for independent brands.
                  </p>
                  <div className="flex items-center justify-end">
                    <DoodleSquareSpiral className="w-10 h-10 text-[#89847E]" />
                  </div>
                </div>
              </div>

              {/* Bottom Stamp */}
              <div className="mt-6 pt-3 border-t-2 border-[#F0EBDD]/20 flex items-center justify-between font-typewriter text-[11px] text-[#89847E]">
                <span>NO SAAS SLOP</span>
                <span className="text-[#C51E1E] font-bold">100% INDIE DESIGN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker / Tape Strip Below Hero */}
        <div className="mt-14 pt-6 border-t-2 border-dashed border-[#F0EBDD]/25 flex flex-wrap items-center justify-between gap-4 font-typewriter text-xs text-[#89847E] tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <DoodleSpikyStar className="w-3.5 h-3.5 text-[#C51E1E]" />
            <span>EDITORIAL GRAPHIC DESIGN</span>
          </div>
          <div className="flex items-center gap-2">
            <DoodleSpikyStar className="w-3.5 h-3.5 text-[#C51E1E]" />
            <span>RESPONSIVE CODE</span>
          </div>
          <div className="flex items-center gap-2">
            <DoodleSpikyStar className="w-3.5 h-3.5 text-[#C51E1E]" />
            <span>RESTAURANTS & LOCAL BRANDS</span>
          </div>
          <div className="flex items-center gap-2">
            <DoodleSpikyStar className="w-3.5 h-3.5 text-[#C51E1E]" />
            <span>WORKING DIRECTLY WITH CLIENTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
