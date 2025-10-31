# advice.ai Marketing Website

## Project Overview

This is the marketing website for advice.ai - an AI-powered wealth planning platform purpose-built for ultra-high-net-worth (UHNW) multi-generational families and the professionals who serve them.

**Domain**: advice.ai
**Purpose**: High-end marketing site to attract family offices, UHNW teams, and CPAs
**Approach**: Vibe-coded, no CMS required

## Task Tracking (TBD List)

**CRITICAL RULE**: Always be working on a task from TBD.md. Never idle between tasks.

@TBD.md

**Workflow**:
1. At the start of each session, check TBD.md for the next task
2. Always work through tasks from top to bottom (🔴 Critical Path first)
3. When completing a task, mark it with ✅ in TBD.md and move it to "Completed" section
4. Immediately move to the next task - don't wait for user to ask
5. If blocked on a task (waiting for user input), note the blocker and move to next available task
6. Update "Current Focus" section in TBD.md to show what you're working on
7. For design decisions (colors, fonts, copy), ask user for input but don't stop working

**Rule**: Always be doing something from the TBD list. Keep momentum.

## Brand Guidelines

@docs/Brand Guideline 282850ebeea08030a6fddfd0770ac151.md

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Designed for Vercel

## Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Quality checks
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with global styles
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global CSS with Tailwind directives
├── components/
│   ├── ui/                # Reusable UI primitives (buttons, inputs, etc)
│   ├── sections/          # Page sections (hero, features, pricing, etc)
│   └── animations/        # Animated components (Rubik's cube style)
├── lib/                   # Utility functions and helpers
└── types/                 # TypeScript type definitions

public/
├── images/                # Static images and logos
└── fonts/                 # Custom fonts if needed
```

## Code Style Guidelines

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings
- **Semicolons**: Required
- **Components**: Functional components with TypeScript
- **File naming**: kebab-case for files, PascalCase for component names
- **CSS**: Use Tailwind utilities, custom classes only when necessary

## Design Principles

Based on our brand positioning for UHNW clients:

### Visual Style
- **Sophisticated**: Clean, professional, high-end aesthetic
- **Not Generic**: Avoid typical SaaS marketing clichés
- **Purposeful Animations**: Inspired by resend.com - subtle, meaningful animations
- **Data Visualization**: Emphasize knowledge maps and visual representations of complexity

### Content Approach
- **Sophistication over Speed**: Focus on capabilities and outcomes, not just "save time"
- **Complexity as Specialty**: Showcase our ability to handle multi-generational wealth complexity
- **Collaborative Language**: Use "let's," "we can," "together" rather than prescriptive
- **Practical Confidence**: Sophisticated without being academic, confident without arrogance

### Key Messaging Elements
- Address ultra-high-net-worth families, family offices, UHNW teams, and CPAs
- Emphasize integrated visibility, AI-powered insights, and sophisticated analysis
- Highlight the transformation from scattered information to integrated clarity
- 40% reduction in advice preparation time
- 3x improvement in family engagement

## Component Guidelines

### UI Components (`src/components/ui/`)
- Small, reusable primitives
- Fully typed with TypeScript
- Accept className prop for Tailwind customization
- Use `cn()` helper from lib/utils.ts for className merging

### Section Components (`src/components/sections/`)
- Larger compositions that make up page sections
- Hero, Features, Comparison, Testimonials, etc.
- Should be self-contained and composable
- Use Framer Motion for scroll-triggered animations

### Animation Components (`src/components/animations/`)
- Specialized animated elements (e.g., Rubik's cube-style animations)
- Rotating text displays
- Interactive data visualizations
- Use Framer Motion for all animations

## Utility Functions

Create helper functions in `src/lib/`:
- `utils.ts` - General utilities, className merger
- `animations.ts` - Reusable animation variants for Framer Motion
- `constants.ts` - Shared constants (colors, breakpoints, etc)

## TypeScript Practices

- Use explicit types for props and function returns
- Create shared types in `src/types/`
- Avoid `any` - use `unknown` when type is truly unknown
- Use type inference where it improves readability

## Tailwind Usage

- Mobile-first responsive design
- Use semantic color names via CSS variables
- Prefer Tailwind utilities over custom CSS
- Use arbitrary values sparingly: `w-[347px]` only when truly necessary
- Group utilities logically: layout → sizing → spacing → colors → typography → effects

## Inspiration References

### Websites We Like
1. **TaxGPT** (taxgpt.com)
   - Value proposition clarity
   - Section variety
   - Comparison tables
   - Interactive calculators

2. **Resend** (resend.com)
   - Rubik's cube animation at top
   - Rotating taglines synchronized with animations
   - Clean, modern aesthetic

## SEO & Performance

- Use Next.js metadata API for SEO
- Optimize images with next/image
- Lazy load below-the-fold content
- Target Core Web Vitals for optimal performance
- Server-side rendering for initial page load

## Deployment

- Optimized for Vercel deployment
- Environment variables in `.env.local` (not committed)
- Production builds should be tested locally before deployment
