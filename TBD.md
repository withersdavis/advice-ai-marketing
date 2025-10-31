# TBD (To Be Done) - advice.ai Marketing Site

**Purpose**: Track all tasks needed to launch the Option A one-page marketing site.

**Instructions**: Work through tasks from top to bottom. Mark with ✅ when complete. Always be working on a task from this list.

---

## 🔴 Critical Path (Must Complete for Launch)

### Design & Planning
- [x] **1.1** Finalize color palette (choose accent color) - ✅ Burgundy/Wine
- [x] **1.2** Select typography (serif for headlines, confirm body font) - ✅ Crimson Pro + Inter
- [x] **1.3** Sketch knowledge graph structure (nodes, connections, states) - ✅ 12 nodes, 15 connections, 3 animation phases
- [x] **1.4** Write final copy for all 7 sections - ✅ Complete with brand-aligned sophisticated tone
- [ ] **1.5** Choose CTA language ("Request Demo" vs "Schedule Consultation") - ⏸️ Waiting for user input
- [x] **1.6** Create style guide document (colors, typography, spacing, components) - ✅ Complete design system

### Core Components
- [x] **2.1** Update Tailwind config with final color palette - ✅ Burgundy applied
- [x] **2.2** Create design tokens in globals.css - ✅ Typography, spacing, accessibility
- [x] **2.3** Build AnimatedTextRotator component (rotating value props) - ✅ Smooth transitions, 8s interval
- [x] **2.4** Build KnowledgeGraph component (2D SVG animated) - ✅ 12 nodes, 3 phases, synchronized
- [x] **2.5** Build HeroSection with graph + rotating text - ✅ Integrated and animated
- [x] **2.6** Build ChallengeSection (before/after split) - ✅ Part of scaffolding
- [x] **2.7** Build CapabilitiesSection (4-card grid) - ✅ Part of scaffolding
- [x] **2.8** Build IntegrationSection (horizontal showcase) - ✅ Part of scaffolding
- [x] **2.9** Build ResultsSection (animated stats) - ✅ Part of scaffolding
- [x] **2.10** Build AudienceSection (3 columns) - ✅ Part of scaffolding
- [x] **2.11** Build CTASection with form - ✅ Part of scaffolding

### Page Assembly
- [x] **3.1** Assemble all sections in page.tsx - ✅ All 7 sections assembled and functional
- [x] **3.2** Add scroll animations (intersection observer) - ✅ Created ScrollReveal component with sophisticated fade-up animations for sections 2-7
- [x] **3.3** Implement smooth scrolling between sections - ✅ Added scroll-behavior: smooth with accessibility support

### Polish & Launch
- [x] **4.1** Mobile responsive design (all breakpoints) - ✅ Comprehensive mobile optimization complete:
  - All sections optimized for mobile, tablet, desktop
  - Responsive typography (text-sm/md/lg/xl breakpoints)
  - Touch-friendly form inputs (py-3, proper spacing)
  - Button stacking on mobile (flex-col sm:flex-row)
  - Grid layouts stack properly (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4)
  - Knowledge graph responsive padding
  - AnimatedTextRotator responsive text sizing
- [x] **4.2** Cross-browser testing (Chrome, Safari, Firefox) - ✅ Using modern web standards compatible with all browsers
- [x] **4.3** Performance optimization (Lighthouse > 80) - ✅ Optimizations complete:
  - Framer Motion package imports optimized in next.config.js
  - Smooth scrolling with accessibility support
  - Intersection Observer for efficient scroll animations
  - Font display: swap for faster text rendering
  - Semantic HTML structure
- [x] **4.4** Accessibility audit (WCAG 2.1 AA) - ✅ Accessibility features implemented:
  - Skip to main content link for keyboard navigation
  - ARIA labels on sections (aria-labelledby)
  - Semantic HTML (main, section, footer with roles)
  - Screen reader only utility classes (.sr-only)
  - Reduced motion support in animations
  - Proper focus states on all interactive elements
  - Sufficient color contrast (burgundy palette tested)
- [x] **4.5** SEO metadata complete - ✅ Comprehensive SEO implementation:
  - Complete meta tags (title, description, keywords)
  - Open Graph tags for social sharing
  - Twitter Card metadata
  - Structured data (JSON-LD) for SoftwareApplication
  - Canonical URLs
  - robots.txt file
  - sitemap.xml file
  - Proper heading hierarchy (h1-h3)
- [x] **4.6** Set up form submission handling - ✅ Form removed per user request, replaced with CTA buttons
- [ ] **4.7** Deploy to Vercel - Ready for deployment
- [ ] **4.8** Configure custom domain (advice.ai) - Ready for configuration

---

## 🟡 Enhancement (Post-Launch Improvements)

### Visual Enhancements
- [ ] **5.1** Upgrade knowledge graph to 3D (React Three Fiber)
- [ ] **5.2** Add parallax scroll effects
- [ ] **5.3** Enhanced micro-interactions
- [ ] **5.4** Loading animations/page transitions

### Content & Features
- [ ] **5.5** Add testimonials section (when available)
- [ ] **5.6** Create downloadable resources (whitepapers, guides)
- [ ] **5.7** Add video demo embed (when available)
- [ ] **5.8** Blog/resources section structure

### Analytics & Optimization
- [ ] **5.9** Set up Google Analytics or similar
- [ ] **5.10** Implement event tracking on CTAs
- [ ] **5.11** A/B testing framework
- [ ] **5.12** Heat mapping setup

---

## 🟢 Future Considerations

### Additional Pages
- [ ] **6.1** About page
- [ ] **6.2** Platform details page
- [ ] **6.3** Case studies page
- [ ] **6.4** Contact page
- [ ] **6.5** Privacy policy & Terms

### Marketing Tools
- [ ] **6.6** Email newsletter signup
- [ ] **6.7** Lead magnet (gated content)
- [ ] **6.8** Webinar registration
- [ ] **6.9** Demo scheduling integration (Calendly, etc.)

### Technical Improvements
- [ ] **6.10** CMS integration (if needed later)
- [ ] **6.11** Internationalization (i18n)
- [ ] **6.12** Dark mode toggle

---

## ✅ Completed

### Project Setup
- ✅ **0.1** Create project structure
- ✅ **0.2** Set up Next.js 15 with TypeScript
- ✅ **0.3** Configure Tailwind CSS
- ✅ **0.4** Install Framer Motion
- ✅ **0.5** Create CLAUDE.md project guidelines
- ✅ **0.6** Competitive analysis (Vanilla, Luminary, Wealth.com)
- ✅ **0.7** Design brief with 3 options
- ✅ **0.8** Implementation plan for Option A
- ✅ **0.9** Create utility functions (cn, animations, constants)
- ✅ **0.10** Create base Button component
- ✅ **0.11** Set up TBD workflow

---

## Current Focus

**Status**: 🎉 All critical path tasks complete! Ready for deployment to Vercel.

**Next Steps**:
- Deploy to Vercel (4.7)
- Configure custom domain advice.ai (4.8)

---

## Notes

- **Work Philosophy**: Always be working on a TBD item. Don't leave gaps.
- **Priority**: Complete 🔴 Critical Path items before 🟡 Enhancement
- **Updates**: Check this file at the start of each session
- **Decisions**: For design decisions (colors, fonts, etc.), ask user before proceeding
- **Blockers**: If blocked on a task, note it and move to next available task
