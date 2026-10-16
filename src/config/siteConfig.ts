/**
 * Central configuration for Alex Pomposo portfolio.
 * Edit this file to update contact details, portfolio demo URLs, and social profiles.
 */

export interface SiteConfig {
  name: string;
  professionalTitle: string;
  location: string;
  serviceRegion: string;
  domain: string;
  contactEmail: string;
  packagePriceUsd: number;
  midnightBiteDemoUrl: string;
  socials: {
    instagram: string | null;
    behance: string | null;
    linkedin: string | null;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Alex Pomposo",
  professionalTitle: "Independent Web Designer",
  location: "Brazil",
  serviceRegion: "Working Worldwide",
  domain: "https://alexpomposo.online",
  contactEmail: "alequitoss09@gmail.com",
  packagePriceUsd: 300,

  /**
   * Current demo URL for the Midnight Bite concept.
   * Can be replaced with "https://midnightbite.alexpomposo.online/" once published.
   */
  midnightBiteDemoUrl: "https://casestudyreference.ai.studio/",

  /**
   * Social profiles are prepared here.
   * Kept null so no links are activated until real URLs are supplied.
   */
  socials: {
    instagram: null,
    behance: null,
    linkedin: null,
  },
};
