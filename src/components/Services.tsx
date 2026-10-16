import React from 'react';
import { ArrowDown, Check, X } from 'lucide-react';
import {
  PunkStarCutout,
  DoodleDiamond,
  DoodleCrossHatch,
  DoodleSpikyStar,
  MaskingTape,
  BarcodeStrip,
} from './ZineGraphics';

export const Services: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const includedItems = [
    'One custom-designed landing page.',
    'Up to five agreed content sections.',
    'Responsive layouts for desktop, tablet, and mobile.',
    'Visual styling adapted to your business identity.',
    'Presentation of services, products, or menu highlights.',
    'Functional navigation and contact links.',
    'Basic on-page SEO setup.',
    'One round of revisions.',
    'Preparation and deployment assistance for compatible hosting.',
  ];

  const excludedItems = [
    'Domain registration fees.',
    'Hosting subscription fees.',
    'Online ordering or ecommerce systems.',
    'Live reservation or booking integrations.',
    'Payment processing.',
    'Complex third-party integrations.',
    'Ongoing maintenance.',
    'Unlimited revisions.',
    'Advanced SEO campaigns or guaranteed search rankings.',
  ];

  return (
    <section
      id="services"
      className="relative bg-[#F0EBDD] text-[#111111] py-20 sm:py-32 border-b-4 border-[#111111] overflow-hidden"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 zine-halftone opacity-35 pointer-events-none" aria-hidden="true" />

      {/* Canva Doodles from Image 3 as decor */}
      <div className="absolute top-12 left-10 text-[#C51E1E] opacity-25 pointer-events-none -rotate-12">
        <DoodleCrossHatch className="w-16 h-16" />
      </div>
      <div className="absolute bottom-12 right-12 text-[#111111] opacity-20 pointer-events-none rotate-12">
        <DoodleDiamond className="w-20 h-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-4 border-[#111111] pb-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-[#111111] text-[#FFFFFF] px-2 py-0.5 font-typewriter text-xs font-bold uppercase tracking-widest">
              SECTION 04
            </span>
            <span className="font-typewriter text-xs text-[#89847E] tracking-widest uppercase">
              SERVICES & PRICING
            </span>
          </div>
          <span className="font-hand text-2xl text-[#C51E1E] -rotate-2 hidden sm:inline">
            Single transparent tier · Starting at $300
          </span>
        </div>

        {/* Section Title Block: Tilted & High Impact */}
        <div className="mb-14 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase leading-[0.9]">
              WEBSITES WITH<br />
              <span className="inline-block bg-[#C51E1E] text-[#FFFFFF] px-4 py-1 mt-1 -rotate-1 shadow-[5px_5px_0px_0px_#111111]">
                PERSONALITY.
              </span>
            </h2>
          </div>
          <p className="font-typewriter text-lg sm:text-xl text-[#C51E1E] font-bold tracking-wider uppercase pt-2">
            CUSTOM WEBSITES STARTING AT $300
          </p>
        </div>

        {/* Main Package Zine Card (Less square, angled details, tape, constructivist price tag) */}
        <div className="relative bg-[#FFFFFF] border-4 border-[#111111] shadow-[10px_10px_0px_0px_#111111] rotate-0.5">
          <MaskingTape className="w-28 h-7 -top-3.5 left-16" angle="-rotate-4" />
          <MaskingTape className="w-28 h-7 -top-3.5 right-16" angle="rotate-3" />

          {/* Red Header Bar with Big $300 Cutout Price */}
          <div className="bg-[#C51E1E] text-[#FFFFFF] p-6 sm:p-10 border-b-4 border-[#111111] flex flex-wrap items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#111111] text-[#FFFFFF] px-3 py-1 font-typewriter text-xs font-bold uppercase -rotate-1">
                <PunkStarCutout className="w-3.5 h-3.5" color="#FFFFFF" />
                <span>CORE PUBLIC PACKAGE</span>
              </div>
              <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#FFFFFF]">
                CUSTOM SMALL BUSINESS WEBSITE
              </h3>
              <p className="font-typewriter text-sm sm:text-base text-[#FFFFFF] leading-relaxed">
                A responsive, visually tailored website designed to introduce your business, highlight what you offer, and make it easier for customers to get in touch.
              </p>
            </div>

            {/* Giant Constructivist Price Stamp (Image 5 Style) */}
            <div className="bg-[#111111] text-[#FFFFFF] p-6 border-4 border-[#FFFFFF] -rotate-3 shadow-[6px_6px_0px_0px_#FFFFFF] shrink-0 text-center min-w-[210px]">
              <div className="font-typewriter text-xs text-[#89847E] tracking-widest uppercase">
                ONE-TIME DESIGN
              </div>
              <div className="font-display text-5xl sm:text-6xl text-[#FFFFFF] my-1 leading-none tracking-tight">
                $300
              </div>
              <div className="font-typewriter text-xs text-[#C51E1E] font-bold tracking-widest uppercase">
                USD STARTING RATE
              </div>
            </div>
          </div>

          {/* Included vs Excluded in Typewriter / Zine Sheet Columns */}
          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 border-b-4 border-[#111111] bg-[#FAF7F0]">
            {/* What's Included */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b-3 border-[#111111] pb-3">
                <div className="w-7 h-7 bg-[#111111] text-[#FFFFFF] flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <h4 className="font-display text-lg sm:text-xl tracking-wider text-[#111111] uppercase">
                  WHAT'S INCLUDED:
                </h4>
              </div>

              <ul className="space-y-3.5 font-typewriter text-sm sm:text-base text-[#111111]">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-[#111111] text-[#FFFFFF] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included by Default */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b-3 border-[#89847E] pb-3">
                <div className="w-7 h-7 bg-[#89847E] text-[#FFFFFF] flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <h4 className="font-display text-lg sm:text-xl tracking-wider text-[#89847E] uppercase">
                  NOT INCLUDED BY DEFAULT:
                </h4>
              </div>

              <ul className="space-y-3.5 font-typewriter text-sm sm:text-base text-[#89847E]">
                {excludedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-[#89847E]/20 text-[#89847E] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scope Note & Call-to-Action Bar */}
          <div className="p-6 sm:p-8 bg-[#F0EBDD] flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-2xl space-y-1">
              <div className="font-typewriter text-xs text-[#C51E1E] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <DoodleSpikyStar className="w-4 h-4 text-[#C51E1E]" />
                <span>CONFIRMED SCOPE NOTICE</span>
              </div>
              <p className="font-typewriter text-xs sm:text-sm text-[#111111]/90 leading-relaxed">
                Project scope is confirmed before work begins. Domain and hosting costs are separate. Additional functionality may require a custom quote.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#111111] hover:bg-[#C51E1E] text-[#FFFFFF] font-display text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer border-2 border-[#111111] -rotate-1 hover:rotate-0 shadow-[4px_4px_0px_0px_#C51E1E]"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
