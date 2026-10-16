import React from 'react';
import {
  PunkStarCutout,
  DoodleSun,
  DoodleDiamond,
  DoodleSnailSpiral,
  DoodleCrossHatch,
  DoodleOrganicStar,
  MaskingTape,
} from './ZineGraphics';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVERY',
      desc: 'We discuss your business, goals, and the content you need.',
      tilt: '-rotate-1',
      doodle: <DoodleSun className="w-8 h-8 text-[#C51E1E]" />,
    },
    {
      num: '02',
      title: 'PROPOSAL',
      desc: 'I confirm the project scope, pricing, and payment terms.',
      tilt: 'rotate-2',
      doodle: <DoodleDiamond className="w-8 h-8 text-[#FFFFFF]" />,
    },
    {
      num: '03',
      title: 'DESIGN',
      desc: 'I create a visual direction and build your website.',
      tilt: '-rotate-2',
      doodle: <DoodleSnailSpiral className="w-8 h-8 text-[#C51E1E]" />,
    },
    {
      num: '04',
      title: 'REVIEW',
      desc: 'You provide feedback, and I complete the included revisions.',
      tilt: 'rotate-1',
      doodle: <DoodleCrossHatch className="w-8 h-8 text-[#FFFFFF]" />,
    },
    {
      num: '05',
      title: 'LAUNCH',
      desc: 'I test and prepare the approved website for publication on the agreed hosting setup.',
      tilt: '-rotate-1.5',
      doodle: <DoodleOrganicStar className="w-8 h-8 text-[#C51E1E]" />,
    },
  ];

  return (
    <section
      id="process"
      className="relative bg-[#111111] text-[#F0EBDD] py-20 sm:py-32 border-b-4 border-[#111111] overflow-hidden"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 zine-halftone-light opacity-25 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-[#F0EBDD]/25 pb-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-[#C51E1E] text-[#FFFFFF] px-2 py-0.5 font-typewriter text-xs font-bold uppercase tracking-widest -rotate-1">
              SECTION 05
            </span>
            <span className="font-typewriter text-xs text-[#89847E] tracking-widest uppercase">
              METHODOLOGY
            </span>
          </div>
          <span className="font-hand text-2xl text-[#C51E1E] rotate-2 hidden sm:inline">
            Direct collaboration from idea to launch
          </span>
        </div>

        {/* Title */}
        <div className="mb-14 max-w-3xl space-y-3">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#FFFFFF] uppercase leading-[0.9]">
            HOW I WORK
          </h2>
          <p className="font-typewriter text-base sm:text-lg text-[#F0EBDD]/85">
            Five clear, structured steps without agency red-tape.
          </p>
        </div>

        {/* Staggered Tilted Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`relative bg-[#1A1A1A] border-3 border-[#F0EBDD] p-6 flex flex-col justify-between ${step.tilt} shadow-[6px_6px_0px_0px_#C51E1E] hover:scale-105 transition-all group`}
            >
              <MaskingTape className="w-16 h-5 -top-2.5 left-4" angle={idx % 2 === 0 ? '-rotate-6' : 'rotate-6'} />

              <div className="space-y-4">
                {/* Header: Oversized Dela Gothic One Number + Canva Doodle */}
                <div className="flex items-start justify-between border-b-2 border-[#F0EBDD]/15 pb-3">
                  <span className="font-display text-5xl sm:text-6xl text-[#C51E1E] group-hover:text-[#FFFFFF] transition-colors leading-none">
                    {step.num}
                  </span>
                  <div>{step.doodle}</div>
                </div>

                {/* Step Title */}
                <div>
                  <span className="font-typewriter text-[11px] tracking-widest text-[#89847E] uppercase block mb-1">
                    PHASE {step.num}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#FFFFFF] tracking-wider uppercase">
                    {step.title}
                  </h3>
                </div>

                {/* Compact Exact Description */}
                <p className="font-typewriter text-xs sm:text-sm text-[#F0EBDD]/90 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Stage Indicator */}
              <div className="pt-4 mt-6 border-t border-[#F0EBDD]/15 flex items-center justify-between font-typewriter text-[10px] text-[#89847E]">
                <span>STEP {idx + 1} OF 5</span>
                <PunkStarCutout className="w-3 h-3" color="#C51E1E" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
