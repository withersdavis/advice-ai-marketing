# advice.ai Marketing Website

A sophisticated marketing website for advice.ai - an AI-powered wealth planning platform for ultra-high-net-worth multi-generational families.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # UI primitives (Button, etc)
│   ├── sections/          # Page sections (Hero, Features, etc)
│   └── animations/        # Animated components
├── lib/                   # Utilities and helpers
└── types/                 # TypeScript types

docs/                      # Brand guidelines
public/                    # Static assets
```

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## Design Philosophy

This website embodies the advice.ai brand:
- **Sophisticated**: Professional, high-end aesthetic for UHNW clients
- **Purpose-built**: Focused on complexity, not simplicity
- **Collaborative**: Empowering language that partners with users
- **Results-focused**: Emphasizes capabilities and outcomes

See [CLAUDE.md](./CLAUDE.md) for detailed development guidelines and [docs/Brand Guideline](./docs/Brand%20Guideline%20282850ebeea08030a6fddfd0770ac151.md) for brand positioning.

## Next Steps

Ready to build! Some suggested sections to implement:
1. **Hero with Animation** - Inspired by Resend's Rubik's cube
2. **Feature Sections** - Showcase platform capabilities
3. **Comparison Table** - vs. competitors/manual processes
4. **ROI Calculator** - Interactive value demonstration
5. **Testimonials** - Social proof from UHNW advisors
6. **CTA Sections** - Request demo, contact sales

## Deployment

Optimized for Vercel:
```bash
vercel
```

Or deploy to any hosting platform that supports Next.js.

## License

Proprietary - advice.ai
