import React from 'react';
import {
  PunkStarCutout,
  DoodleDiamond,
  DoodleSquareSpiral,
  DoodleOrganicStar,
  DoodleHorseshoe,
  MaskingTape,
  BarcodeStrip,
} from './ZineGraphics';

export const About: React.FC = () => {
  const capabilities = [
    { label: 'VISUAL DIRECTION', tilt: '-rotate-2' },
    { label: 'RESPONSIVE DESIGN', tilt: 'rotate-2' },
    { label: 'INTERACTIVE LAYOUTS', tilt: '-rotate-1' },
    { label: 'CLEAR COMMUNICATION', tilt: 'rotate-3' },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#F0EBDD] text-[#111111] py-20 sm:py-32 border-b-4 border-[#111111] overflow-hidden"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 zine-halftone opacity-35 pointer-events-none" aria-hidden="true" />

      {/* Decorative Canva Doodles from Image 3 */}
      <div className="absolute top-10 right-10 text-[#C51E1E] opacity-30 pointer-events-none hidden sm:block rotate-12">
        <DoodleDiamond className="w-16 h-16" />
      </div>
      <div className="absolute bottom-8 left-6 text-[#111111] opacity-25 pointer-events-none rotate-45">
        <DoodleHorseshoe className="w-14 h-14" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Constructivist Magazine Top Strip */}
        <div className="flex items-center justify-between border-b-4 border-[#111111] pb-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-[#111111] text-[#FFFFFF] px-2 py-0.5 font-typewriter text-xs font-bold uppercase tracking-widest">
              SECTION 02
            </span>
            <span className="font-typewriter text-xs text-[#89847E] tracking-widest uppercase">
              BIOGRAPHY & BACKGROUND
            </span>
          </div>
          <span className="font-hand text-2xl text-[#C51E1E] rotate-2 hidden sm:inline">
            Direct freelance practice · No agency bloat
          </span>
        </div>

        {/* Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Tilted Title, Tape Accents, and Zine Card (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#C51E1E] text-[#FFFFFF] px-3 py-1 font-typewriter text-xs font-bold uppercase -rotate-2">
                <PunkStarCutout className="w-3.5 h-3.5" color="#FFFFFF" />
                <span>PROFILE BIO</span>
              </div>

              {/* Title with Cut-Out Attitude */}
              <div className="space-y-2">
                <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase leading-[0.9]">
                  ABOUT<br />
                  <span className="inline-block bg-[#111111] text-[#F0EBDD] px-3 py-1 mt-1 -rotate-2 shadow-[4px_4px_0px_0px_#C51E1E]">
                    ME.
                  </span>
                </h2>
              </div>
            </div>

            {/* Vintage Zine Cutout Profile Note */}
            <div className="relative bg-[#FFFFFF] border-4 border-[#111111] p-6 sm:p-8 rotate-1 shadow-[6px_6px_0px_0px_#111111] space-y-4">
              <MaskingTape className="w-24 h-6 -top-3 left-6" angle="-rotate-3" />
              <MaskingTape className="w-24 h-6 -bottom-3 right-6" angle="rotate-4" />

              <div className="flex items-center justify-between border-b-2 border-[#111111] pb-3">
                <span className="font-typewriter text-xs font-bold tracking-widest uppercase text-[#C51E1E]">
                  ORIGIN & SCOPE
                </span>
                <DoodleSquareSpiral className="w-6 h-6 text-[#111111]" />
              </div>

              <div className="space-y-1 font-typewriter text-xs uppercase tracking-wider">
                <div className="text-sm font-bold text-[#111111]">ALEX POMPOSO</div>
                <div className="text-[#89847E]">INDEPENDENT WEB DESIGNER</div>
                <div className="text-[#C51E1E] font-bold">BASED IN BRAZIL · WORKING WORLDWIDE</div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <BarcodeStrip className="w-24 h-6 text-[#111111]" />
                <span className="font-hand text-xl text-[#C51E1E] -rotate-3 font-bold">
                  ★ Authentic Craft
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Copy & Tilted Stickers (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Exact Copy from Brief in Distinctive Typewriter Typography */}
            <div className="bg-[#FFFFFF]/90 border-3 border-[#111111] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#C51E1E] space-y-5 text-[#111111]">
              <p className="font-typewriter text-lg sm:text-xl font-bold text-[#111111] border-b-2 border-[#111111] pb-3 leading-snug">
                I'm Alex Pomposo, an independent web designer based in Brazil.
              </p>

              <p className="font-typewriter text-sm sm:text-base leading-relaxed text-[#111111]/90">
                I create visually distinctive, responsive websites for independent businesses, with a particular interest in restaurants, cafes, and brands with strong personalities.
              </p>

              <p className="font-typewriter text-sm sm:text-base leading-relaxed text-[#111111]/90">
                My background combines digital art, visual design, game development, and technology education. I bring that mix of creative and technical thinking into each project.
              </p>

              <p className="font-typewriter text-sm sm:text-base leading-relaxed text-[#111111]/90">
                I work directly with clients, from understanding their ideas to designing, building, refining, and preparing their websites for launch.
              </p>

              <div className="bg-[#111111] text-[#F0EBDD] p-4 -rotate-0.5 border-2 border-[#C51E1E]">
                <p className="font-typewriter text-sm sm:text-base font-bold italic leading-relaxed text-[#FFFFFF]">
                  "My goal is to create a website that looks intentional, communicates clearly, and reflects the business behind it."
                </p>
              </div>
            </div>

            {/* Subheading: WHAT I BRING TO A PROJECT */}
            <div className="pt-4 space-y-6">
              <div className="flex items-center gap-3">
                <DoodleOrganicStar className="w-6 h-6 text-[#C51E1E]" />
                <h3 className="font-display text-xl sm:text-2xl tracking-wider text-[#111111] uppercase">
                  WHAT I BRING TO A PROJECT
                </h3>
              </div>

              {/* 4 Staggered Tilted Cut-Out Sticker Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                {capabilities.map((item, idx) => (
                  <div
                    key={item.label}
                    className={`bg-[#FFFFFF] border-3 border-[#111111] p-4 flex items-center justify-between ${item.tilt} shadow-[4px_4px_0px_0px_#111111] hover:scale-105 transition-transform`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-[#C51E1E] text-[#FFFFFF] font-typewriter text-xs font-bold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <span className="font-display text-xs sm:text-sm tracking-wider text-[#111111]">
                        {item.label}
                      </span>
                    </div>
                    <PunkStarCutout className="w-4 h-4" color="#111111" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
