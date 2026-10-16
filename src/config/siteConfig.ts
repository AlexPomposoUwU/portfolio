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
    facebook: string | null;
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
   * Social profiles:
   * Instagram and Facebook configured with user's verified URLs.
   * Behance and LinkedIn remain disabled (null) until supplied.
   */
  socials: {
    instagram: "https://www.instagram.com/aleaquiszho?psln=Ynh1NTJ0aGR1dXEw&utm_source=qr",
    facebook: "https://www.facebook.com/people/Alex-Pomposo/pfbid0LSuJKLDbL5DRHvoncQThz8v9cXnSc6HNdgNF5jBapxH8nNkAgcp1XUVpWXtPmPzzl/",
    behance: null,
    linkedin: null,
  },
};
