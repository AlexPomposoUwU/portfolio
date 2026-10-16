import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ExternalLink, Monitor, Smartphone } from 'lucide-react';
import {
  PunkStarCutout,
  WavyRibbonSnake,
  DoodleCrossHatch,
  DoodleStarburst,
  DoodleSpikyStar,
  MaskingTape,
  BarcodeStrip,
} from './ZineGraphics';

export const SelectedWork: React.FC = () => {
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');

  const projectFeatures = [
    { label: 'RESPONSIVE DESIGN', tilt: '-rotate-1' },
    { label: 'MENU PRESENTATION', tilt: 'rotate-1' },
    { label: 'VISUAL IDENTITY', tilt: 'rotate-2' },
    { label: 'INTERACTIVE NAVIGATION', tilt: '-rotate-2' },
  ];

  return (
    <section
      id="work"
      className="relative bg-[#C51E1E] text-[#FFFFFF] py-20 sm:py-32 border-b-4 border-[#111111] overflow-hidden"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 zine-halftone opacity-25 pointer-events-none" aria-hidden="true" />

      {/* Decorative Wavy Snake Ribbon from Image 4 snaking down the left */}
      <div className="absolute top-1/4 -left-16 pointer-events-none opacity-20 hidden lg:block" aria-hidden="true">
        <WavyRibbonSnake className="w-56 h-[600px] text-[#111111]" />
      </div>

      {/* Scattered Punk Cutout Stars from Image 2 */}
      <div className="absolute top-12 right-12 pointer-events-none opacity-30 rotate-12">
        <PunkStarCutout className="w-16 h-16" color="#FFFFFF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between border-b-4 border-[#FFFFFF] pb-3 mb-12 sm:mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#111111] text-[#FFFFFF] px-2.5 py-1 font-typewriter text-xs font-bold uppercase tracking-widest -rotate-2">
              SECTION 03
            </span>
            <h2 className="font-display text-lg sm:text-xl tracking-wider text-[#FFFFFF] uppercase">
              SELECTED WORK
            </h2>
          </div>

          <div className="flex items-center gap-3 font-typewriter text-xs tracking-widest uppercase">
            <DoodleSpikyStar className="w-5 h-5 text-[#FFFFFF]" />
            <span>CASE ARCHIVE 01</span>
          </div>
        </div>

        {/* Project 01 Feature Box: Tilted & Layered Noir Collage */}
        <div className="relative bg-[#111111] border-4 border-[#FFFFFF] p-6 sm:p-10 text-[#F0EBDD] shadow-[8px_8px_0px_0px_#111111] -rotate-0.5">
          <MaskingTape className="w-28 h-6 -top-3 left-12" angle="rotate-2" />
          <MaskingTape className="w-28 h-6 -top-3 right-12" angle="-rotate-3" />

          {/* Top Project Label Bar */}
          <div className="flex flex-wrap items-start justify-between gap-6 border-b-2 border-[#F0EBDD]/20 pb-6 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-[#C51E1E] text-[#FFFFFF] font-display text-sm px-3 py-1 -rotate-2 border border-[#FFFFFF] shadow-[2px_2px_0px_0px_#FFFFFF]">
                  01
                </span>
                <span className="font-typewriter text-xs tracking-widest text-[#89847E] uppercase font-bold">
                  FICTIONAL RESTAURANT WEBSITE CONCEPT
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight uppercase">
                MIDNIGHT BITE BURGER & SPIRITS
              </h3>
            </div>

            {/* Live Demo Button with Tilted Punk Badge */}
            <div className="shrink-0 pt-2">
              <a
                href={SITE_CONFIG.midnightBiteDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-4 bg-[#C51E1E] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:text-[#111111] font-display text-xs sm:text-sm tracking-wider uppercase transition-all border-2 border-[#FFFFFF] rotate-1 hover:rotate-0 shadow-[4px_4px_0px_0px_#FFFFFF]"
              >
                <span>VIEW LIVE DEMO</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Grid Layout: Description Left, High-Contrast Mockup Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Exact Description & Specs (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Exact Description in Typewriter Font */}
              <div className="bg-[#1A1A1A] border-2 border-[#F0EBDD]/30 p-5 space-y-3 relative shadow-[4px_4px_0px_0px_#C51E1E]">
                <p className="font-typewriter text-sm sm:text-base leading-relaxed text-[#F0EBDD]">
                  A self-initiated website concept for a fictional horror-themed burger restaurant and cocktail bar.
                </p>
                <p className="font-typewriter text-sm sm:text-base leading-relaxed text-[#F0EBDD]">
                  The design combines a cinematic visual identity, immersive presentation, responsive layouts, interactive menu browsing, and clear navigation.
                </p>
                <p className="font-typewriter text-sm sm:text-base font-bold leading-relaxed text-[#FFFFFF] border-l-2 border-[#C51E1E] pl-3">
                  Created to demonstrate how a distinctive restaurant concept can be translated into a functional digital experience.
                </p>
              </div>

              {/* Fictional Concept Disclaimer */}
              <div className="bg-[#220D0D] border-2 border-[#C51E1E] p-4 text-xs font-typewriter text-[#F0EBDD]/90 space-y-1 -rotate-0.5">
                <div className="text-[#C51E1E] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <DoodleCrossHatch className="w-4 h-4 text-[#C51E1E]" />
                  <span>CONCEPT CLARIFICATION</span>
                </div>
                <p>
                  Self-initiated showcase project, not a commercial client.
                </p>
              </div>

              {/* Project Features as Tilted Cutout Badges */}
              <div className="space-y-3 pt-2">
                <span className="font-typewriter text-xs font-bold tracking-widest uppercase text-[#89847E]">
                  PROJECT FEATURES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectFeatures.map((feat) => (
                    <div
                      key={feat.label}
                      className={`bg-[#FFFFFF] text-[#111111] border-2 border-[#111111] px-3 py-2 font-display text-xs tracking-wider uppercase flex items-center justify-between ${feat.tilt} shadow-[3px_3px_0px_0px_#C51E1E]`}
                    >
                      <span>{feat.label}</span>
                      <PunkStarCutout className="w-3 h-3" color="#C51E1E" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Preview Toggle */}
              <div className="pt-2 flex items-center gap-2">
                <span className="font-typewriter text-xs text-[#89847E] uppercase mr-2">Preview Mode:</span>
                <button
                  type="button"
                  onClick={() => setDevicePreview('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 font-display text-xs tracking-wider transition-all cursor-pointer border-2 border-[#FFFFFF] ${
                    devicePreview === 'desktop'
                      ? 'bg-[#FFFFFF] text-[#111111] -rotate-1 shadow-[2px_2px_0px_0px_#C51E1E]'
                      : 'bg-[#1A1A1A] text-[#89847E] hover:text-[#FFFFFF]'
                  }`}
                  aria-pressed={devicePreview === 'desktop'}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>DESKTOP</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDevicePreview('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 font-display text-xs tracking-wider transition-all cursor-pointer border-2 border-[#FFFFFF] ${
                    devicePreview === 'mobile'
                      ? 'bg-[#FFFFFF] text-[#111111] rotate-1 shadow-[2px_2px_0px_0px_#C51E1E]'
                      : 'bg-[#1A1A1A] text-[#89847E] hover:text-[#FFFFFF]'
                  }`}
                  aria-pressed={devicePreview === 'mobile'}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>MOBILE</span>
                </button>
              </div>
            </div>

            {/* Right Column: Concept Showcase (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#090909] border-3 border-[#FFFFFF] p-4 sm:p-6 relative rotate-0.5 shadow-[6px_6px_0px_0px_#C51E1E]">
                {/* Header Strip with Canva Starburst from Image 3 */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F0EBDD]/20 text-[10px] font-typewriter text-[#89847E] tracking-widest uppercase">
                  <span>EXPLICIT CONCEPT MOCKUP · MIDNIGHT BITE</span>
                  <DoodleStarburst className="w-5 h-5 text-[#C51E1E]" />
                </div>

                {devicePreview === 'desktop' ? (
                  /* Desktop Preview */
                  <div className="bg-[#111111] border-2 border-[#F0EBDD]/30 overflow-hidden">
                    <div className="bg-[#1A1A1A] px-4 py-2 border-b border-[#F0EBDD]/15 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#C51E1E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#89847E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#F0EBDD]/40" />
                      </div>
                      <span className="font-typewriter text-[11px] text-[#89847E]">
                        midnightbite.alexpomposo.online
                      </span>
                      <div className="w-4" />
                    </div>

                    <div className="p-6 bg-[#0B0404] space-y-6">
                      <div className="border-2 border-[#C51E1E] p-6 bg-gradient-to-b from-[#250808] to-[#0E0303] text-center space-y-3 relative">
                        <span className="font-typewriter text-[10px] text-[#C51E1E] tracking-widest uppercase font-bold">
                          ★ HORROR-THEMED CRAFT BURGERS & COCKTAILS ★
                        </span>
                        <h4 className="font-display text-4xl sm:text-5xl text-[#FFFFFF] tracking-tight">
                          MIDNIGHT BITE
                        </h4>
                        <p className="font-typewriter text-xs text-[#F0EBDD]/80 max-w-sm mx-auto">
                          "Devour the dark. Handcrafted patties, smoked ghost-pepper sauces, and nocturnal spirits."
                        </p>
                        <div className="pt-2 flex justify-center gap-3">
                          <span className="px-4 py-1.5 bg-[#C51E1E] text-white font-display text-xs tracking-wider uppercase border border-white">
                            MENU
                          </span>
                          <span className="px-4 py-1.5 border border-white text-white font-display text-xs tracking-wider uppercase">
                            HOURS
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-left">
                        <div className="border border-white/20 p-3 bg-white/5 space-y-1">
                          <div className="flex justify-between font-display text-xs text-[#FFFFFF]">
                            <span>THE NOSFERATU</span>
                            <span className="text-[#C51E1E]">$18</span>
                          </div>
                          <p className="font-typewriter text-[10px] text-[#89847E]">Double smashed beef, black garlic aioli, charred cheddar.</p>
                        </div>
                        <div className="border border-white/20 p-3 bg-white/5 space-y-1">
                          <div className="flex justify-between font-display text-xs text-[#FFFFFF]">
                            <span>BLOOD MOON</span>
                            <span className="text-[#C51E1E]">$16</span>
                          </div>
                          <p className="font-typewriter text-[10px] text-[#89847E]">Rye whiskey, smoked cherry reduction, scorched orange.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Mobile Preview */
                  <div className="max-w-xs mx-auto bg-[#111111] border-4 border-[#FFFFFF] p-2">
                    <div className="bg-[#0B0404] p-4 space-y-4 text-center">
                      <div className="w-10 h-1 bg-white/30 rounded-full mx-auto" />
                      <div className="border-2 border-[#C51E1E] p-4 space-y-2">
                        <span className="font-typewriter text-[9px] text-[#C51E1E] tracking-widest uppercase font-bold">
                          BURGER & SPIRITS
                        </span>
                        <h4 className="font-display text-2xl text-[#FFFFFF]">
                          MIDNIGHT BITE
                        </h4>
                        <span className="px-3 py-1 bg-[#C51E1E] text-white font-display text-[10px] block uppercase mt-2">
                          VIEW MENU
                        </span>
                      </div>
                      <div className="border border-white/20 p-2 text-left space-y-1">
                        <div className="flex justify-between font-display text-[11px] text-white">
                          <span>THE GOTHIC PATTY</span>
                          <span className="text-[#C51E1E]">$17</span>
                        </div>
                        <p className="font-typewriter text-[9px] text-[#89847E]">Crispy shallots, smoked gouda, chipotle honey.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-[#F0EBDD]/20 flex items-center justify-between text-[10px] font-typewriter text-[#89847E]">
                  <span>[EXPLICIT IMAGE PLACEHOLDER · AWAITING FINAL SUBDOMAIN LAUNCH]</span>
                  <BarcodeStrip className="w-16 h-5 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Project Slot: Exact Text in Punk Flyer Style */}
        <div className="mt-10 bg-[#111111] border-4 border-dashed border-[#FFFFFF] p-8 sm:p-12 text-center space-y-3 rotate-0.5 shadow-[6px_6px_0px_0px_#111111]">
          <PunkStarCutout className="w-8 h-8 text-[#FFFFFF] mx-auto" color="#FFFFFF" />
          <h4 className="font-display text-2xl sm:text-4xl tracking-widest text-[#FFFFFF] uppercase">
            MORE PROJECTS COMING SOON.
          </h4>
          <p className="font-typewriter text-xs text-[#89847E] tracking-widest uppercase">
            NEW RESTAURANT & INDEPENDENT BRAND CASE STUDIES IN PROGRESS
          </p>
        </div>
      </div>
    </section>
  );
};
