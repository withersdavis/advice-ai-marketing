/**
 * Shared TypeScript types and interfaces
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}
