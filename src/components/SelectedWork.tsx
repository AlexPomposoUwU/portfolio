import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ExternalLink, Monitor, Smartphone, ChevronRight } from 'lucide-react';
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
  const [desktopTab, setDesktopTab] = useState<'favorites' | 'menu' | 'atmosphere'>('favorites');
  const [mobileTab, setMobileTab] = useState<'hero' | 'cocktail' | 'sanctum'>('hero');

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

      {/* Decorative Wavy Snake Ribbon from Image 4 */}
      <div className="absolute top-1/4 -left-16 pointer-events-none opacity-20 hidden lg:block" aria-hidden="true">
        <WavyRibbonSnake className="w-56 h-[600px] text-[#111111]" />
      </div>

      {/* Scattered Punk Cutout Stars */}
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

          {/* Grid Layout: Description Left, Genuine Screenshot Showcase Right */}
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
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-typewriter text-xs text-[#89847E] uppercase mr-2">Device View:</span>
                  <button
                    type="button"
                    onClick={() => setDevicePreview('desktop')}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 font-display text-xs tracking-wider transition-all cursor-pointer border-2 border-[#FFFFFF] ${
                      devicePreview === 'desktop'
                        ? 'bg-[#FFFFFF] text-[#111111] -rotate-1 shadow-[2px_2px_0px_0px_#C51E1E]'
                        : 'bg-[#1A1A1A] text-[#89847E] hover:text-[#FFFFFF]'
                    }`}
                    aria-pressed={devicePreview === 'desktop'}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>DESKTOP (3 VIEWS)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDevicePreview('mobile')}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 font-display text-xs tracking-wider transition-all cursor-pointer border-2 border-[#FFFFFF] ${
                      devicePreview === 'mobile'
                        ? 'bg-[#FFFFFF] text-[#111111] rotate-1 shadow-[2px_2px_0px_0px_#C51E1E]'
                        : 'bg-[#1A1A1A] text-[#89847E] hover:text-[#FFFFFF]'
                    }`}
                    aria-pressed={devicePreview === 'mobile'}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>MOBILE (3 VIEWS)</span>
                  </button>
                </div>

                {/* Sub-view switcher for Desktop */}
                {devicePreview === 'desktop' && (
                  <div className="flex flex-wrap gap-2 pt-1 font-typewriter text-xs">
                    <button
                      type="button"
                      onClick={() => setDesktopTab('favorites')}
                      className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                        desktopTab === 'favorites'
                          ? 'bg-[#C51E1E] text-white border-white font-bold'
                          : 'bg-[#111111] text-[#89847E] border-white/20 hover:text-white'
                      }`}
                    >
                      1. SIGNATURE FAVORITES
                    </button>
                    <button
                      type="button"
                      onClick={() => setDesktopTab('menu')}
                      className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                        desktopTab === 'menu'
                          ? 'bg-[#C51E1E] text-white border-white font-bold'
                          : 'bg-[#111111] text-[#89847E] border-white/20 hover:text-white'
                      }`}
                    >
                      2. FULL MENU GRID
                    </button>
                    <button
                      type="button"
                      onClick={() => setDesktopTab('atmosphere')}
                      className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                        desktopTab === 'atmosphere'
                          ? 'bg-[#C51E1E] text-white border-white font-bold'
                          : 'bg-[#111111] text-[#89847E] border-white/20 hover:text-white'
                      }`}
                    >
                      3. THE ATMOSPHERE
                    </button>
                  </div>
                )}

                {/* Sub-view switcher for Mobile */}
                {devicePreview === 'mobile' && (
                  <div className="flex flex-wrap gap-2 pt-1 font-typewriter text-xs">
                    <button
                      type="button"
                      onClick={() => setMobileTab('hero')}
                      className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                        mobileTab === 'hero'
                          ? 'bg-[#C51E1E] text-white border-white font-bold'
                          : 'bg-[#111111] text-[#89847E] border-white/20 hover:text-white'
                      }`}
                    >
                      1. HERO VIEW
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileTab('cocktail')}
                      className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                        mobileTab === 'cocktail'
                          ? 'bg-[#C51E1E] text-white border-white font-bold'
                          : 'bg-[#111111] text-[#89847E] border-white/20 hover:text-white'
                      }`}
                    >
                      2. COCKTAILS
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileTab('sanctum')}
                      className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                        mobileTab === 'sanctum'
                          ? 'bg-[#C51E1E] text-white border-white font-bold'
                          : 'bg-[#111111] text-[#89847E] border-white/20 hover:text-white'
                      }`}
                    >
                      3. ATMOSPHERE
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Genuine Midnight Bite Showcase (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#090909] border-3 border-[#FFFFFF] p-4 sm:p-6 relative rotate-0.5 shadow-[6px_6px_0px_0px_#C51E1E]">
                {/* Header Strip with Canva Starburst */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F0EBDD]/20 text-[10px] font-typewriter text-[#89847E] tracking-widest uppercase">
                  <span>GENUINE MIDNIGHT BITE CASE STUDY SCREENSHOTS</span>
                  <DoodleStarburst className="w-5 h-5 text-[#C51E1E]" />
                </div>

                {devicePreview === 'desktop' ? (
                  /* Desktop Genuine Views */
                  <div className="bg-[#0D0B0C] border-2 border-[#F0EBDD]/30 overflow-hidden text-[#F3EDE3]">
                    {/* Simulated Clean Browser Bar */}
                    <div className="bg-[#181516] px-4 py-2 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8E1F2D]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#5A4E46]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#342D2C]" />
                      </div>
                      <span className="font-typewriter text-[11px] text-[#A89F91]">
                        casestudyreference.ai.studio / midnight-bite
                      </span>
                      <div className="w-4" />
                    </div>

                    {/* View 1: Signature Favorites (From Uploaded Image 4) */}
                    {desktopTab === 'favorites' && (
                      <div className="p-5 sm:p-6 space-y-6">
                        {/* Top Nav Header from Genuine Site */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-3.5 bg-[#8E1F2D]" />
                            <span className="font-serif tracking-widest font-bold text-white uppercase text-sm">
                              MIDNIGHT BITE
                            </span>
                            <span className="text-[10px] text-[#8E1F2D] uppercase tracking-wider hidden sm:inline">
                              AFTER DARK
                            </span>
                          </div>
                          <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#A89F91] tracking-wider uppercase">
                            <span className="text-white font-semibold">HOME</span>
                            <span>THE MENU</span>
                            <span>THE EXPERIENCE</span>
                          </div>
                          <span className="px-3 py-1 bg-[#8E1F2D] text-white text-[11px] uppercase tracking-wider font-semibold">
                            BOOK A TABLE
                          </span>
                        </div>

                        {/* Culinary Pillars & Signature Favorites Headline */}
                        <div className="space-y-1 pt-1">
                          <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-mono">
                            ✦ CULINARY PILLARS
                          </span>
                          <h4 className="font-serif text-2xl sm:text-3xl text-white tracking-wide uppercase">
                            SIGNATURE FAVORITES
                          </h4>
                          <p className="text-xs text-[#A89F91] max-w-md">
                            A curated preview of our most celebrated dishes and spirits, crafted for unforgettable evenings.
                          </p>
                        </div>

                        {/* 3 Genuine Cards with downloaded real assets */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                          {/* Card 1: Graveyard Smash */}
                          <div className="bg-[#151314] border border-white/10 overflow-hidden group">
                            <div className="relative h-28 overflow-hidden bg-black">
                              <img
                                src="/images/midnight-bite/graveyard_smash_burger.webp"
                                alt="The Graveyard Smash Burger"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <span className="absolute top-1.5 left-1.5 bg-black/80 text-[9px] text-[#D4AF37] px-1.5 py-0.5 uppercase tracking-wider border border-white/10">
                                HOUSE SIGNATURE
                              </span>
                              <span className="absolute bottom-1.5 right-1.5 bg-black/90 text-white font-serif text-xs px-1.5 py-0.5">
                                $17
                              </span>
                            </div>
                            <div className="p-2.5 space-y-1">
                              <div className="text-[9px] text-[#A89F91] uppercase tracking-wider">PRIME SMASH BURGER</div>
                              <h5 className="font-serif text-xs font-bold text-white uppercase truncate">THE GRAVEYARD SMASH</h5>
                              <p className="text-[10px] text-[#89847E] line-clamp-2">
                                Double smashed beef patties, aged cheddar, charred onion jam, garlic aioli.
                              </p>
                            </div>
                          </div>

                          {/* Card 2: Crimson Melt */}
                          <div className="bg-[#151314] border border-white/10 overflow-hidden group">
                            <div className="relative h-28 overflow-hidden bg-black">
                              <img
                                src="/images/midnight-bite/crimson_melt_sandwich.webp"
                                alt="The Crimson Melt Sandwich"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <span className="absolute top-1.5 left-1.5 bg-black/80 text-[9px] text-[#8E1F2D] px-1.5 py-0.5 uppercase tracking-wider border border-white/10">
                                CHEF FAVORITE
                              </span>
                              <span className="absolute bottom-1.5 right-1.5 bg-black/90 text-white font-serif text-xs px-1.5 py-0.5">
                                $18
                              </span>
                            </div>
                            <div className="p-2.5 space-y-1">
                              <div className="text-[9px] text-[#A89F91] uppercase tracking-wider">PRIME SMASH BURGER</div>
                              <h5 className="font-serif text-xs font-bold text-white uppercase truncate">THE CRIMSON MELT</h5>
                              <p className="text-[10px] text-[#89847E] line-clamp-2">
                                Crispy buttermilk fried chicken, pepper jack, hot honey glaze, red cabbage slaw.
                              </p>
                            </div>
                          </div>

                          {/* Card 3: Witching Hour Sour */}
                          <div className="bg-[#151314] border border-white/10 overflow-hidden group">
                            <div className="relative h-28 overflow-hidden bg-black">
                              <img
                                src="/images/midnight-bite/witching_hour_sour.webp"
                                alt="Witching Hour Sour Cocktail"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <span className="absolute top-1.5 left-1.5 bg-black/80 text-[9px] text-purple-300 px-1.5 py-0.5 uppercase tracking-wider border border-white/10">
                                VAPOR AURA
                              </span>
                              <span className="absolute bottom-1.5 right-1.5 bg-black/90 text-white font-serif text-xs px-1.5 py-0.5">
                                $14
                              </span>
                            </div>
                            <div className="p-2.5 space-y-1">
                              <div className="text-[9px] text-[#A89F91] uppercase tracking-wider">THEATRICAL SPIRIT</div>
                              <h5 className="font-serif text-xs font-bold text-white uppercase truncate">WITCHING HOUR SOUR</h5>
                              <p className="text-[10px] text-[#89847E] line-clamp-2">
                                Empress botanical gin, wild blackberry syrup, lemon juice, egg white vapor mist.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* View 2: Full Menu Grid (From Uploaded Image 5) */}
                    {desktopTab === 'menu' && (
                      <div className="p-5 sm:p-6 space-y-5">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                          <div>
                            <h4 className="font-serif text-2xl text-white uppercase">MENU</h4>
                            <p className="text-xs text-[#A89F91] italic">Eight signatures. Endless temptation.</p>
                          </div>
                          <div className="flex gap-1 text-[10px] font-mono">
                            <span className="bg-[#8E1F2D] text-white px-2.5 py-1 uppercase font-bold">ALL SIGNATURES (8)</span>
                            <span className="bg-white/10 text-white/80 px-2 py-1 uppercase">BURGERS (4)</span>
                            <span className="bg-white/10 text-white/80 px-2 py-1 uppercase">COCKTAILS (4)</span>
                          </div>
                        </div>

                        {/* 4-column mini grid showing all 8 dishes */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {[
                            { name: 'THE GRAVEYARD SMASH', price: '$17', img: '/images/midnight-bite/graveyard_smash_burger.webp', tag: 'SMASH' },
                            { name: 'THE CRIMSON MELT', price: '$18', img: '/images/midnight-bite/crimson_melt_sandwich.webp', tag: 'CHICKEN' },
                            { name: 'THE MONSTER STACK', price: '$19', img: '/images/midnight-bite/monster_stack_burger.webp', tag: 'DOUBLE' },
                            { name: 'THE PHANTOM GARDEN', price: '$16', img: '/images/midnight-bite/phantom_garden_burger.webp', tag: 'VEG' },
                            { name: 'WITCHING HOUR SOUR', price: '$14', img: '/images/midnight-bite/witching_hour_sour.webp', tag: 'VAPOR' },
                            { name: 'BLOOD MOON OLD FASHIONED', price: '$15', img: '/images/midnight-bite/blood_moon_old_fashioned.webp', tag: 'SMOKE' },
                            { name: 'CEMETERY FOG MARTINI', price: '$15', img: '/images/midnight-bite/cemetery_fog_martini.webp', tag: 'ESPRESSO' },
                            { name: 'GREEN REAPER ELIXIR', price: '$13', img: '/images/midnight-bite/green_reaper_elixir.webp', tag: 'EERIE GLOW' },
                          ].map((item) => (
                            <div key={item.name} className="bg-[#151314] border border-white/10 p-2 space-y-1">
                              <div className="h-16 overflow-hidden bg-black relative">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                <span className="absolute bottom-1 right-1 bg-black/90 text-white font-serif text-[10px] px-1">
                                  {item.price}
                                </span>
                              </div>
                              <div className="font-serif text-[11px] text-white truncate font-semibold">{item.name}</div>
                              <div className="text-[9px] text-[#A89F91] uppercase">{item.tag}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* View 3: The Atmosphere & Dining Vault (From Uploaded Image 6) */}
                    {desktopTab === 'atmosphere' && (
                      <div className="p-5 sm:p-6 space-y-5">
                        <div className="text-center space-y-1 border-b border-white/10 pb-4">
                          <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-mono">
                            THE MIDNIGHT CHRONICLE
                          </span>
                          <h4 className="font-serif text-2xl sm:text-3xl text-white uppercase">
                            AN EXPERIENCE AFTER DARK
                          </h4>
                          <p className="text-xs text-[#A89F91] italic font-serif">
                            "More than a meal. A night with a story."
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                          <div className="sm:col-span-6 space-y-2 text-xs">
                            <span className="text-[10px] text-[#8E1F2D] font-mono uppercase tracking-wider block">
                              CHAPTER I · THE SANCTUM
                            </span>
                            <h5 className="font-serif text-lg text-white uppercase">THE ATMOSPHERE</h5>
                            <p className="text-[#A89F91] leading-relaxed text-[11px]">
                              Step inside and the outside world falls silent. Midnight Bite is built into the historic architecture of downtown Mansfield, where rough-hewn brick alcoves meet hand-carved blackened timber, antique brass sconces, and oxblood leather banquettes.
                            </p>
                            <div className="pt-2 text-[10px] text-[#D4AF37] font-mono">
                              LIGHTING DESIGN · SOUND ARCHITECTURE
                            </div>
                          </div>

                          <div className="sm:col-span-6 overflow-hidden border border-white/20 relative bg-black">
                            <img
                              src="/images/midnight-bite/hero_midnight_lounge.webp"
                              alt="The main dining vault at 214 W 4th Street"
                              className="w-full h-44 object-cover"
                            />
                            <div className="bg-black/80 px-2 py-1 text-[9px] text-[#A89F91] italic text-center border-t border-white/10">
                              The main dining vault at 214 W 4th Street.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Mobile Clean Phone Frame (Extraneous browser margins cropped out per prompt) */
                  <div className="max-w-[310px] mx-auto bg-[#0D0B0C] border-4 border-[#333333] rounded-2xl overflow-hidden shadow-2xl text-[#F3EDE3]">
                    {/* Simulated Phone Ear speaker / Camera Notch */}
                    <div className="bg-[#181516] pt-2 pb-1.5 px-4 flex items-center justify-between border-b border-white/10 text-[10px] text-[#A89F91]">
                      <span className="font-mono text-[9px] text-[#8E1F2D]">MIDNIGHT BITE</span>
                      <div className="w-10 h-1 bg-white/30 rounded-full" />
                      <span className="text-[9px]">AFTER DARK</span>
                    </div>

                    {/* Mobile View 1: Mobile Hero (From Uploaded Image 2) */}
                    {mobileTab === 'hero' && (
                      <div className="relative min-h-[380px] bg-gradient-to-b from-[#22070A] via-[#12080A] to-[#0D0B0C] p-5 flex flex-col justify-between text-center">
                        <div className="flex items-center justify-between text-xs pt-1">
                          <span className="font-serif tracking-widest text-white font-bold text-xs uppercase">
                            MIDNIGHT BITE
                          </span>
                          <span className="text-white text-lg">☰</span>
                        </div>

                        <div className="my-auto space-y-3 py-4">
                          <span className="text-[9px] tracking-widest text-[#D4AF37] uppercase font-mono block">
                            — A DIFFERENT KIND OF MIDNIGHT —
                          </span>
                          <h4 className="font-serif text-2xl text-white font-bold leading-tight uppercase">
                            COME HUNGRY.<br />
                            <span className="text-[#8E1F2D] italic">LEAVE HAUNTED.</span>
                          </h4>
                          <p className="text-[11px] text-[#A89F91] leading-relaxed px-2">
                            Gourmet burgers, theatrical cocktails, and a dining experience that lives long after the lights go out.
                          </p>
                          <div className="space-y-2 pt-2">
                            <span className="block w-full py-2 bg-[#8E1F2D] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                              EXPLORE THE MENU →
                            </span>
                            <span className="block w-full py-2 border border-white/30 text-white font-mono text-[10px] uppercase tracking-wider">
                              DISCOVER THE EXPERIENCE
                            </span>
                          </div>
                        </div>

                        <div className="text-[9px] text-[#89847E] font-mono">
                          SCROLL ↓
                        </div>
                      </div>
                    )}

                    {/* Mobile View 2: Mobile Cocktail Feature (From Uploaded Image 1) */}
                    {mobileTab === 'cocktail' && (
                      <div className="p-4 space-y-3 bg-[#0D0B0C]">
                        <div className="border border-white/10 p-2.5 bg-[#151314] space-y-2">
                          <div className="h-44 overflow-hidden relative bg-black">
                            <img
                              src="/images/midnight-bite/witching_hour_sour.webp"
                              alt="Witching Hour Sour Cocktail"
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-1 right-1 bg-black/90 text-white font-serif text-xs px-1.5 py-0.5">
                              $14
                            </span>
                          </div>
                          <div className="flex gap-1 overflow-x-auto text-[9px] font-mono pb-1">
                            <span className="bg-[#8E1F2D] text-white px-2 py-0.5 whitespace-nowrap font-bold">WITCHING HOUR SOUR</span>
                            <span className="bg-white/10 text-white px-2 py-0.5 whitespace-nowrap">BLOOD MOON</span>
                            <span className="bg-white/10 text-white px-2 py-0.5 whitespace-nowrap">GREEN REAPER</span>
                          </div>
                          <div className="pt-1">
                            <div className="font-serif text-sm font-bold text-white uppercase">WITCHING HOUR SOUR</div>
                            <p className="text-[10px] text-[#A89F91] italic">Profile: Velvety, Botanical & Mysterious</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mobile View 3: Mobile Atmosphere (From Uploaded Image 3) */}
                    {mobileTab === 'sanctum' && (
                      <div className="p-4 space-y-3 bg-[#0D0B0C] text-left text-xs">
                        <span className="text-[9px] text-[#8E1F2D] font-mono uppercase tracking-wider block">
                          CHAPTER I · THE SANCTUM
                        </span>
                        <h5 className="font-serif text-lg text-white font-bold uppercase">THE ATMOSPHERE</h5>
                        <p className="text-[11px] text-[#A89F91] leading-relaxed">
                          Step inside and the outside world falls silent. Midnight Bite is built into the historic architecture of downtown Mansfield, where rough-hewn brick alcoves meet hand-carved blackened timber, antique brass sconces, and oxblood leather banquettes.
                        </p>
                        <div className="border-t border-white/10 pt-2 space-y-1 text-[10px]">
                          <div className="text-white font-semibold">LIGHTING DESIGN</div>
                          <p className="text-[#89847E]">Low-wattage filament bulbs & genuine candle fixtures.</p>
                        </div>
                        <div className="border-t border-white/10 pt-2 space-y-1 text-[10px]">
                          <div className="text-white font-semibold">SOUND ARCHITECTURE</div>
                          <p className="text-[#89847E]">Acoustically tuned booths with vintage turntable audio.</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Caption Bar referencing genuine uploaded screenshots */}
                <div className="mt-4 pt-3 border-t border-[#F0EBDD]/20 flex flex-wrap items-center justify-between text-[10px] font-typewriter text-[#89847E] gap-2">
                  <span>GENUINE MIDNIGHT BITE CONCEPT ARCHIVE · LIVE REFERENCE INTEGRATED</span>
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
