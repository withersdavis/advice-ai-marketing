/**
 * Shared constants for the application
 */

export const SITE_CONFIG = {
  name: 'advice.ai',
  domain: 'advice.ai',
  title: 'advice.ai - Purpose-Built for UHNW Multi-Generational Wealth Planning',
  description:
    'AI-powered intelligence meets deep UHNW expertise. Integrated clarity for family offices, UHNW teams, and CPAs managing multi-generational wealth complexity across estate, tax, and insurance strategies.',
  tagline: 'Purpose-Built for UHNW Multi-Generational Complexity',
};

export const CONTACT = {
  email: 'hello@advice.ai',
  demo: 'https://advice.ai/demo',
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
