import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import {
  PunkStarCutout,
  DoodleSun,
  DoodleDiamond,
  DoodleSpikyStar,
  MaskingTape,
} from './ZineGraphics';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tilt: string;
}

export const Faq: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What do I need to provide?',
      answer:
        'Your business name, contact information, logo or brand assets if available, and the text and images you want included. We can discuss the best way to organize everything.',
      tilt: '-rotate-0.5',
    },
    {
      id: 'faq-2',
      question: 'How long does a website take?',
      answer:
        "The schedule depends on the agreed scope and the materials available. I'll confirm the delivery plan with you before work begins.",
      tilt: 'rotate-0.5',
    },
    {
      id: 'faq-3',
      question: 'Is the domain included?',
      answer:
        'Domain registration and hosting are separate from the design fee. I can help you understand the setup and prepare your website for compatible hosting.',
      tilt: '-rotate-1',
    },
    {
      id: 'faq-4',
      question: 'Can I request changes?',
      answer:
        'Yes. The standard package includes one round of revisions. Additional requests can be discussed separately.',
      tilt: 'rotate-0.5',
    },
    {
      id: 'faq-5',
      question: 'Will my website work on mobile?',
      answer:
        'Yes. Responsive layouts for phones, tablets, and desktop screens are included.',
      tilt: '-rotate-0.5',
    },
    {
      id: 'faq-6',
      question: 'Can you update my website later?',
      answer:
        'Future updates can be discussed separately. Ongoing maintenance is not included in the initial website price.',
      tilt: 'rotate-1',
    },
    {
      id: 'faq-7',
      question: 'Can you add online ordering or reservations?',
      answer:
        'Those features are not included in the standard package. If your project needs advanced integrations, we can discuss a separate scope.',
      tilt: '-rotate-0.5',
    },
  ];

  return (
    <section
      id="faq"
      className="relative bg-[#F0EBDD] text-[#111111] py-20 sm:py-32 border-b-4 border-[#111111] overflow-hidden"
    >
      {/* Halftone texture */}
      <div className="absolute inset-0 zine-halftone opacity-35 pointer-events-none" aria-hidden="true" />

      {/* Decorative Canva Doodles from Image 3 */}
      <div className="absolute top-14 left-8 text-[#C51E1E] opacity-30 pointer-events-none rotate-12 hidden lg:block">
        <DoodleSun className="w-18 h-18" />
      </div>
      <div className="absolute bottom-12 right-8 text-[#111111] opacity-25 pointer-events-none -rotate-12 hidden lg:block">
        <DoodleDiamond className="w-16 h-16" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-4 border-[#111111] pb-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-[#111111] text-[#FFFFFF] px-2 py-0.5 font-typewriter text-xs font-bold uppercase tracking-widest">
              SECTION 06
            </span>
            <span className="font-typewriter text-xs text-[#89847E] tracking-widest uppercase">
              FREQUENT QUESTIONS
            </span>
          </div>
          <span className="font-hand text-2xl text-[#C51E1E] rotate-2 hidden sm:inline">
            Direct & clear expectations
          </span>
        </div>

        {/* Layout: Title Left, Tilted Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Title (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#C51E1E] text-[#FFFFFF] px-3 py-1 font-typewriter text-xs font-bold uppercase -rotate-2">
                <PunkStarCutout className="w-3.5 h-3.5" color="#FFFFFF" />
                <span>Q&A ARCHIVE</span>
              </div>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#111111] uppercase leading-[0.9]">
                FREQUENT<br />
                <span className="inline-block bg-[#111111] text-[#F0EBDD] px-3 py-1 mt-1 rotate-1 shadow-[4px_4px_0px_0px_#C51E1E]">
                  QUESTIONS
                </span>
              </h2>
            </div>

            <p className="font-typewriter text-sm sm:text-base text-[#111111] leading-relaxed">
              Straightforward answers about process, scope, and working together. Everything is confirmed in writing before code begins.
            </p>

            <div className="pt-2 hidden lg:block">
              <div className="bg-[#FFFFFF] border-3 border-[#111111] p-4 rotate-2 shadow-[4px_4px_0px_0px_#111111] relative">
                <MaskingTape className="w-16 h-5 -top-2.5 left-4" angle="-rotate-3" />
                <span className="font-typewriter text-xs text-[#C51E1E] font-bold block mb-1">
                  ★ DIRECT CLIENT FOCUS
                </span>
                <p className="font-typewriter text-xs text-[#111111]">
                  Have a specific inquiry not listed here? Email directly anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Zine Accordion (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`bg-[#FFFFFF] border-3 border-[#111111] ${faq.tilt} shadow-[5px_5px_0px_0px_#111111] transition-transform`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-content`}
                    id={`${faq.id}-header`}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C51E1E]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-7 h-7 bg-[#C51E1E] text-[#FFFFFF] font-typewriter text-xs font-bold flex items-center justify-center shrink-0">
                        0{index + 1}
                      </span>
                      <span className="font-display text-base sm:text-xl text-[#111111] tracking-wide uppercase">
                        {faq.question}
                      </span>
                    </div>

                    <div className="w-8 h-8 bg-[#111111] text-[#FFFFFF] flex items-center justify-center shrink-0 border border-[#111111]">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[3]" aria-hidden="true" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[3]" aria-hidden="true" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`${faq.id}-content`}
                      role="region"
                      aria-labelledby={`${faq.id}-header`}
                      className="px-5 sm:px-6 pb-6 pt-2 border-t-2 border-[#111111]/20 font-typewriter text-sm sm:text-base text-[#111111] leading-relaxed bg-[#FAF7F0]"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
