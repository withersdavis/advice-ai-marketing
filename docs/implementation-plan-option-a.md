# Implementation Plan: Option A - "The Ontology"
*One-Page Marketing Website for advice.ai*

---

## Overview

Building a one-page marketing site with animated knowledge graph as the hero signature element. This plan breaks down development into phases, prioritizing MVP launch while building toward full vision.

---

## Phase 1: MVP (Week 1-2)
*Goal: Launchable one-page site with simplified animations*

### 1.1 Content Development

**Copy & Messaging** (Priority: HIGH)
- [ ] Hero section
  - 3 rotating value propositions
  - Main headline
  - Subheadline
  - CTA button text
- [ ] Challenge section (Before/After)
  - Problem statement copy
  - Solution statement copy
- [ ] Platform capabilities (4 cards)
  - Family Ontology description
  - Knowledge Maps description
  - Semantic Reasoning description
  - AI-Powered Intelligence description
- [ ] Integration showcase
  - 8-10 integration points with short descriptions
- [ ] Results/Stats section
  - Context copy for each stat
- [ ] Who We Serve (3 audiences)
  - Family Offices description
  - UHNW Teams & CPAs description
  - Advisory Teams description
- [ ] Final CTA
  - Headline
  - Supporting copy

**Visual Planning**
- [ ] Sketch knowledge graph structure (nodes and connections)
- [ ] Define color palette (refined from Tailwind config)
- [ ] Select or create icons for capabilities
- [ ] Plan diagram for Challenge section

### 1.2 Knowledge Graph - Simplified Version

**Design Approach** (MVP)
Instead of full 3D animation, start with 2D animated SVG:
- Nodes representing key elements (Family, Entities, Strategies, Advisors, Assets)
- Animated connections between nodes
- Subtle pulsing/highlighting effects
- Rotation of which nodes are emphasized

**Technical Stack**
- Framer Motion for orchestration
- SVG for the graph structure
- CSS animations for subtle effects
- Can upgrade to Three.js/React Three Fiber in Phase 2

**Implementation**
- [ ] Create SVG graph structure
- [ ] Define node types and relationships
- [ ] Implement Framer Motion variants
- [ ] Sync with rotating text
- [ ] Add hover interactions
- [ ] Ensure 60fps performance

### 1.3 Core Components to Build

**Layout Components**
```
src/components/sections/
├── hero.tsx                    # Hero with knowledge graph
├── challenge-section.tsx       # Problem/Solution split
├── capabilities-section.tsx    # 4-card grid
├── integration-section.tsx     # Horizontal carousel
├── results-section.tsx         # Stats with animations
├── audience-section.tsx        # Who we serve
└── cta-section.tsx            # Final call to action
```

**UI Components**
```
src/components/ui/
├── animated-text-rotator.tsx   # Rotating value props
├── capability-card.tsx         # Expandable cards
├── stat-counter.tsx           # Animated number counter
└── form-input.tsx             # Form elements
```

**Animation Components**
```
src/components/animations/
├── knowledge-graph.tsx         # Main hero animation
└── integration-diagram.tsx     # Integration visualization
```

### 1.4 Development Order

**Day 1-2: Foundation**
1. Finalize content/copy
2. Set up color palette and design tokens
3. Create reusable UI components (Button already done)

**Day 3-4: Hero Section**
4. Build knowledge graph SVG structure
5. Implement animated text rotator
6. Connect animations together
7. Add CTAs

**Day 5-6: Core Sections**
8. Challenge section (split layout)
9. Capabilities section (card grid)
10. Results section (animated stats)

**Day 7-8: Remaining Sections**
11. Integration showcase (carousel)
12. Audience section
13. Final CTA with form

**Day 9-10: Polish & Deploy**
14. Mobile responsiveness
15. Performance optimization
16. SEO metadata
17. Deploy to Vercel

---

## Phase 2: Enhancement (Week 3-4)
*Goal: Add polish and advanced features*

### 2.1 Advanced Knowledge Graph

**Upgrade to 3D** (Optional)
- Implement React Three Fiber
- Create 3D node structure
- Add rotation and depth
- Maintain performance

**Advanced Interactions**
- Click nodes to highlight connections
- Hover to see details
- Smooth transitions between states

### 2.2 Enhanced Animations

**Scroll-Triggered Animations**
- Add intersection observer
- Animate sections on scroll into view
- Parallax effects (subtle)
- Progressive disclosure

**Micro-Interactions**
- Button hover states
- Card expansion animations
- Form input focus states
- Loading states

### 2.3 Additional Features

**Form Enhancement**
- Lead qualification questions
- Progressive form fields
- Email validation
- Integration with email service (if needed)

**Analytics**
- Add analytics tracking
- Event tracking on CTAs
- Scroll depth tracking
- Time on page

---

## Phase 3: Optimization (Ongoing)
*Goal: Refine based on data and feedback*

### 3.1 Performance

- [ ] Lighthouse score optimization (target: 90+)
- [ ] Image optimization
- [ ] Code splitting
- [ ] Lazy loading below fold
- [ ] Animation performance profiling

### 3.2 Content Iteration

- [ ] A/B test headlines
- [ ] Refine copy based on feedback
- [ ] Add testimonials (when available)
- [ ] Update stats as metrics improve

### 3.3 SEO & Conversion

- [ ] SEO audit
- [ ] Add schema markup
- [ ] Conversion rate optimization
- [ ] Heat mapping (optional)

---

## Technical Architecture

### Knowledge Graph Component Structure

```typescript
// src/components/animations/knowledge-graph.tsx

interface Node {
  id: string;
  label: string;
  type: 'family' | 'entity' | 'strategy' | 'advisor' | 'asset';
  position: { x: number; y: number };
}

interface Edge {
  from: string;
  to: string;
  type: 'owns' | 'advises' | 'implements' | 'protects';
}

const KnowledgeGraph: React.FC = () => {
  // State for active nodes
  // Animation orchestration
  // SVG rendering
  // Return animated SVG
}
```

### Animation Timing

**Hero Rotation Cycle** (8 seconds per phase)
1. Emphasize Family nodes (0-8s)
   - Text: "See the ontology of the family"
2. Emphasize Strategy connections (8-16s)
   - Text: "Connect estate, tax, and insurance strategies"
3. Emphasize full network (16-24s)
   - Text: "Transform complexity into clarity"
4. Loop back to 1

### Color Palette (MVP)

Based on competitive analysis (avoid blue/white):

```css
:root {
  /* Primary - Deep Navy/Charcoal */
  --color-primary-900: #1a1f2e;
  --color-primary-800: #2d3748;
  --color-primary-700: #4a5568;

  /* Accent - Warm Gold/Bronze */
  --color-accent-600: #c5975c;
  --color-accent-500: #d4a574;
  --color-accent-400: #e3b48c;

  /* Or Alternative Accent - Deep Teal */
  --color-accent-alt-600: #0d7377;
  --color-accent-alt-500: #14919b;

  /* Neutrals */
  --color-neutral-50: #fafaf9;
  --color-neutral-100: #f5f5f4;
  --color-neutral-900: #1c1917;

  /* Semantic */
  --color-background: #fafaf9;
  --color-foreground: #1c1917;
}
```

---

## Content Strategy

### Rotating Value Propositions (Hero)

**Version 1:**
1. "See the ontology of the family"
2. "Connect estate, tax, and insurance strategies"
3. "Transform complexity into clarity"

**Version 2 (Alternative):**
1. "Holistic intelligence for multi-generational wealth"
2. "Where estate, tax, and insurance strategies converge"
3. "Built exclusively for UHNW complexity"

**Main Headline Options:**
- "Purpose-Built for UHNW Multi-Generational Complexity"
- "Sophisticated Wealth Planning Through Knowledge Intelligence"
- "See the Complete Picture. Deliver Exceptional Advice."

**Subheadline:**
"AI-powered intelligence meets deep UHNW expertise, giving you integrated clarity to deliver exceptional wealth planning"

### Section Headlines

1. **Challenge**: "Ultra-high-net-worth families don't have simple financial details"
2. **Capabilities**: "The Family Ontology: Understanding Through Connections"
3. **Integration**: "One Platform. Complete Visibility."
4. **Results**: "Advisors Move from Data Gatherers to Strategic Architects"
5. **Audience**: "Built for Professionals Who Serve UHNW Families"
6. **CTA**: "Partner with the UHNW Specialists"

---

## Key Design Decisions

### Typography Hierarchy

```css
/* Headings - Sophisticated Serif */
h1: 4rem / 5rem (mobile / desktop), font-weight: 700
h2: 2.5rem / 3.5rem, font-weight: 600
h3: 1.75rem / 2rem, font-weight: 600

/* Body - Clean Sans */
body: 1rem / 1.125rem, font-weight: 400
large: 1.25rem / 1.5rem, font-weight: 400
small: 0.875rem, font-weight: 400
```

### Spacing System

Use 8px base grid:
- Section padding: 6rem (desktop), 3rem (mobile)
- Element spacing: 2rem, 3rem, 4rem
- Micro spacing: 0.5rem, 1rem

### Animation Principles

1. **Purposeful**: Every animation serves a function
2. **Subtle**: No flashy effects, sophisticated motion
3. **Performant**: 60fps minimum, optimized for low-end devices
4. **Accessible**: Respect prefers-reduced-motion
5. **Progressive**: Enhance experience, don't break it

---

## Development Checklist

### Pre-Development
- [x] Competitive analysis complete
- [x] Design brief approved
- [x] Project structure set up
- [ ] Content finalized
- [ ] Design tokens defined
- [ ] Component architecture planned

### MVP Development
- [ ] Hero with knowledge graph (2D SVG version)
- [ ] Rotating text synchronized with graph
- [ ] Challenge section (split layout)
- [ ] Capabilities cards (4-grid with hover)
- [ ] Integration showcase (horizontal scroll)
- [ ] Results with animated stats
- [ ] Audience section (3 columns)
- [ ] CTA form
- [ ] Mobile responsive (all sections)
- [ ] Performance optimization (Lighthouse 80+)

### Pre-Launch
- [ ] Content review and editing
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile testing (iOS, Android)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] SEO metadata complete
- [ ] Analytics installed
- [ ] Domain configured
- [ ] SSL certificate
- [ ] Vercel deployment

### Post-Launch (Phase 2)
- [ ] Monitor analytics
- [ ] Collect feedback
- [ ] Iterate on copy
- [ ] Consider 3D graph upgrade
- [ ] Add testimonials (when available)
- [ ] A/B testing setup

---

## Risk Mitigation

### Technical Risks

**Risk**: Knowledge graph animation performance issues
- **Mitigation**: Start with 2D SVG, profile early, optimize before 3D
- **Fallback**: Static graph with CSS animations

**Risk**: Complex animations break on mobile
- **Mitigation**: Test on devices early, simplify mobile version if needed
- **Fallback**: Reduce animation complexity on mobile

**Risk**: Development takes longer than estimated
- **Mitigation**: MVP-first approach, can launch with simplified version
- **Fallback**: Static hero image, add animations post-launch

### Content Risks

**Risk**: Copy doesn't resonate with UHNW audience
- **Mitigation**: Review against brand guidelines, get stakeholder feedback
- **Fallback**: Iterate post-launch based on data

**Risk**: Too abstract/complex messaging
- **Mitigation**: Balance sophistication with clarity, test with users
- **Fallback**: Simplify sections that confuse

---

## Success Metrics

### Launch Metrics (Week 1)
- Deploy live site
- Lighthouse score > 80
- Mobile responsive
- No critical bugs
- Analytics tracking active

### 30-Day Metrics
- Page load time < 2s
- Bounce rate < 60%
- Average time on page > 90s
- Demo requests (baseline)
- Mobile traffic % (monitor)

### 90-Day Metrics
- Conversion rate (demo requests / visitors)
- Engagement with knowledge graph
- Scroll depth (% reaching CTA)
- Organic search traffic (if applicable)
- Qualitative feedback from visitors

---

## Next Immediate Steps

**To start development this week:**

1. **Finalize Content** (Priority 1)
   - Review and approve copy for all sections
   - Decide on headline variations
   - Confirm stats/numbers to use

2. **Design Knowledge Graph** (Priority 2)
   - Sketch node structure on paper/Figma
   - Define which elements to show
   - Plan animation states

3. **Set Design Tokens** (Priority 3)
   - Finalize color palette (gold accent vs teal?)
   - Choose font pairing (serif + sans)
   - Define spacing scale

4. **Build MVP Components** (Priority 4)
   - Start with reusable UI elements
   - Build sections from top to bottom
   - Integrate animations progressively

**Timeline**: Aim for MVP launch in 10-14 days with simplified animations. Can enhance in Phase 2.

---

## Questions to Answer Before Starting

1. **Color Accent**: Warm gold/bronze OR deep teal? (Both work, need to decide)
2. **Font Choice**: Which serif for headlines? (Suggest: Playfair Display, Crimson Pro, or Lora)
3. **Knowledge Graph Complexity**: How many nodes in MVP? (Suggest: 8-12 nodes, 10-15 connections)
4. **CTA Focus**: "Request Demo" or "Schedule Consultation"? (Different tones)
5. **Form Fields**: What info to collect? (Name, Email, Firm, AUM range, Message?)

Ready to start building once these are decided!
