import React, { useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PunkStarCutout, MaskingTape } from './ZineGraphics';

export type LegalDocType = 'privacy' | 'terms' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111111]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F0EBDD] text-[#111111] border-4 border-[#111111] shadow-[10px_10px_0px_0px_#C51E1E] p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto -rotate-0.5"
        onClick={(e) => e.stopPropagation()}
      >
        <MaskingTape className="w-24 h-6 -top-3 left-8" angle="-rotate-3" />
        <MaskingTape className="w-24 h-6 -top-3 right-8" angle="rotate-4" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#111111] text-[#FFFFFF] hover:bg-[#C51E1E] transition-colors cursor-pointer border-2 border-[#111111]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Draft Notice Banner */}
        <div className="bg-[#C51E1E] text-[#FFFFFF] px-4 py-2 font-typewriter text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2 -rotate-1 border-2 border-[#111111]">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>PRE-PUBLICATION DRAFT — PENDING FORMAL DATA & LEGAL REVIEW</span>
        </div>

        {type === 'privacy' ? (
          /* Privacy Policy Content */
          <div className="space-y-6 font-typewriter text-sm text-[#111111]">
            <div className="border-b-4 border-[#111111] pb-4">
              <span className="font-typewriter text-xs text-[#C51E1E] font-bold uppercase tracking-widest block mb-1">
                LEGAL NOTICE // DRAFT
              </span>
              <h2 id="legal-dialog-title" className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
                PRIVACY POLICY (DRAFT)
              </h2>
              <p className="font-typewriter text-xs text-[#89847E] mt-1">
                Last Updated: October 2026 · Operator: {SITE_CONFIG.name}
              </p>
            </div>

            <div className="bg-[#FFFFFF] border-2 border-[#111111] p-4 text-xs text-[#89847E] space-y-1">
              <p className="font-bold text-[#111111] uppercase">NOTICE REGARDING THIS DOCUMENT:</p>
              <p>
                This draft reflects only established factual architecture for this website. It does not assert complete statutory certification and must be reviewed against actual hosting and operational data practices prior to final launch.
              </p>
            </div>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                1. Website Operator & Inquiries
              </h3>
              <p>
                This website ({SITE_CONFIG.domain}) is operated independently by <strong>{SITE_CONFIG.name}</strong>, based in Brazil ({SITE_CONFIG.serviceRegion}).
              </p>
              <p>
                Direct contact and inquiry email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-[#C51E1E] underline font-bold">{SITE_CONFIG.contactEmail}</a>.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                2. Information Collection & Communication Channels
              </h3>
              <p>
                This portfolio website does not contain user account registration, payment gateways, or automated contact submission forms.
              </p>
              <p>
                Initial inquiries occur exclusively through direct user-initiated email links (<code>mailto:</code>), which open the visitor's default email client. Information provided in those messages (such as your name, business name, project details, and email address) is received directly via email for the purpose of discussing potential design projects.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                3. Hosting Infrastructure & Server Logs
              </h3>
              <p>
                This website is hosted on <strong>Hostinger Single Web Hosting</strong>. Like standard web servers, hosting infrastructure may automatically generate server access logs that record IP addresses, browser user agents, timestamps, and requested resources for technical performance and network security purposes.
              </p>
              <p>
                No claim is made that server logs, DNS records, or technical headers never exist, as these are managed at the hosting infrastructure level.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                4. Analytics & Advertising Trackers
              </h3>
              <p>
                No third-party analytics trackers, social tracking pixels, behavioral advertising networks, or marketing cookies have been intentionally added to this portfolio project codebase.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                5. Items Identified for Pre-Publication Review
              </h3>
              <p>
                Before public commercial launch, the operator will review:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Hostinger server log retention and regional datacenter location policies.</li>
                <li>Applicable international and regional personal data handling obligations (e.g. LGPD, GDPR).</li>
                <li>Finalized email transmission and mailbox storage security protocols.</li>
              </ul>
            </section>
          </div>
        ) : (
          /* Website Terms Content */
          <div className="space-y-6 font-typewriter text-sm text-[#111111]">
            <div className="border-b-4 border-[#111111] pb-4">
              <span className="font-typewriter text-xs text-[#C51E1E] font-bold uppercase tracking-widest block mb-1">
                LEGAL NOTICE // DRAFT
              </span>
              <h2 id="legal-dialog-title" className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
                WEBSITE TERMS OF USE (DRAFT)
              </h2>
              <p className="font-typewriter text-xs text-[#89847E] mt-1">
                Last Updated: October 2026 · Operator: {SITE_CONFIG.name}
              </p>
            </div>

            <div className="bg-[#FFFFFF] border-2 border-[#111111] p-4 text-xs text-[#89847E] space-y-1">
              <p className="font-bold text-[#111111] uppercase">NOTICE REGARDING THIS DOCUMENT:</p>
              <p>
                This document governs only public browsing of this informational portfolio website. A client Service Agreement is a separate document and is NOT constituted by these website Terms of Use.
              </p>
            </div>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                1. Informational Purpose
              </h3>
              <p>
                This portfolio website is provided solely for informational and presentation purposes, showcasing design concepts, technical approaches, and general freelance service scope offered by {SITE_CONFIG.name}.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                2. No Client Relationship Formed by Browsing
              </h3>
              <p>
                Accessing, reviewing, or exploring this website, or transmitting an introductory inquiry via email, does not create a binding client contract, retainer, or commercial design engagement.
              </p>
              <p>
                All paid freelance design engagements require a separate written agreement confirming project scope, deliverables, payment terms, and timelines signed or agreed prior to project commencement.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                3. Fictional Nature of Midnight Bite Concept
              </h3>
              <p>
                The "Midnight Bite Burger & Spirits" project shown in the portfolio is an entirely fictional, self-initiated creative concept study. It does not represent an existing commercial restaurant or a paying client. Menu items, prices, and branding in that showcase are conceptual demonstrations.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                4. Intellectual Property
              </h3>
              <p>
                All graphic design compositions, site layouts, vector artworks, zine illustrations, code, and text authored by {SITE_CONFIG.name} remain the intellectual property of Alex Pomposo, unless otherwise agreed in writing.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-display text-base uppercase text-[#111111] border-b border-[#111111]/20 pb-1">
                5. Accuracy & Updates to Information
              </h3>
              <p>
                While information on this website is maintained carefully, service offerings, starting rates, and portfolio presentations may be updated or modified at any time without prior notice.
              </p>
              <p>
                For questions regarding these terms, contact <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-[#C51E1E] underline font-bold">{SITE_CONFIG.contactEmail}</a>.
              </p>
            </section>
          </div>
        )}

        {/* Modal Bottom Actions */}
        <div className="mt-8 pt-4 border-t-4 border-[#111111] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#111111] text-[#FFFFFF] font-display text-xs uppercase tracking-wider hover:bg-[#C51E1E] transition-colors cursor-pointer border-2 border-[#111111]"
          >
            CLOSE WINDOW
          </button>
        </div>
      </div>
    </div>
  );
};
