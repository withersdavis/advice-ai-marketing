# Knowledge Graph Design - advice.ai Hero Animation

## Overview

The knowledge graph is the signature visual element of the advice.ai website. It represents the interconnected nature of UHNW wealth planning and demonstrates our unique Family Ontology approach.

## Visual Concept

A 2D animated SVG showing the ecosystem of a multi-generational family's wealth structure, with nodes representing key elements and connections showing relationships.

## Node Structure (12 nodes)

### Core Family Nodes (3)
1. **Generation 1** (Grandparents)
   - Type: `family`
   - Color: Accent-600
   - Size: Large
   - Position: Top-center

2. **Generation 2** (Parents)
   - Type: `family`
   - Color: Accent-600
   - Size: Large
   - Position: Middle-left

3. **Generation 3** (Children/Heirs)
   - Type: `family`
   - Color: Accent-600
   - Size: Medium
   - Position: Bottom-center

### Entity Nodes (3)
4. **Trust Structures**
   - Type: `entity`
   - Color: Neutral-700
   - Size: Medium
   - Position: Middle-right

5. **Family Office**
   - Type: `entity`
   - Color: Neutral-700
   - Size: Medium
   - Position: Top-right

6. **Operating Companies**
   - Type: `entity`
   - Color: Neutral-700
   - Size: Medium
   - Position: Bottom-right

### Strategy Nodes (3)
7. **Estate Planning**
   - Type: `strategy`
   - Color: Accent-500
   - Size: Small
   - Position: Upper-left

8. **Tax Optimization**
   - Type: `strategy`
   - Color: Accent-500
   - Size: Small
   - Position: Left-middle

9. **Insurance Strategies**
   - Type: `strategy`
   - Color: Accent-500
   - Size: Small
   - Position: Lower-left

### Advisor Nodes (3)
10. **Estate Attorney**
    - Type: `advisor`
    - Color: Neutral-500
    - Size: Small
    - Position: Upper-right-outer

11. **CPA/Tax Advisor**
    - Type: `advisor`
    - Color: Neutral-500
    - Size: Small
    - Position: Right-middle-outer

12. **Insurance Advisor**
    - Type: `advisor`
    - Color: Neutral-500
    - Size: Small
    - Position: Lower-right-outer

## Connection Structure (15 connections)

### Family Connections (3)
- Generation 1 → Generation 2 (inheritance)
- Generation 2 → Generation 3 (inheritance)
- Generation 1 → Generation 3 (skip-generation planning)

### Ownership Connections (4)
- Generation 1 → Trust Structures (owns)
- Generation 2 → Family Office (manages)
- Trust Structures → Operating Companies (controls)
- Family Office → Operating Companies (oversees)

### Strategy Connections (5)
- Estate Planning → Trust Structures (implements)
- Tax Optimization → Family Office (applies)
- Insurance Strategies → Generation 1 (protects)
- Estate Planning → Generation 1 (serves)
- Tax Optimization → Operating Companies (optimizes)

### Advisory Connections (3)
- Estate Attorney → Estate Planning (advises)
- CPA/Tax Advisor → Tax Optimization (advises)
- Insurance Advisor → Insurance Strategies (advises)

## Animation States (3 phases, 8 seconds each)

### Phase 1: "See the ontology of the family" (0-8s)
**Focus**: Family nodes and generational connections
- Highlight: Generation 1, 2, 3 nodes
- Emphasize: Family connection lines
- Pulse: Family nodes
- Dim: Other nodes (30% opacity)

### Phase 2: "Connect estate, tax, and insurance strategies" (8-16s)
**Focus**: Strategy nodes and their connections
- Highlight: Estate Planning, Tax Optimization, Insurance Strategies
- Emphasize: Strategy connection lines to entities
- Pulse: Strategy nodes
- Show: How strategies interconnect with entities
- Dim: Family and Advisor nodes (30% opacity)

### Phase 3: "Transform complexity into clarity" (16-24s)
**Focus**: Full network view
- Highlight: All nodes
- Emphasize: All connections
- Show: Complete ecosystem
- Pulse: Network as a whole (breathing effect)
- Full opacity on all elements

### Loop: Return to Phase 1

## Visual Specifications

### Node Sizes
- Large: 48px diameter
- Medium: 36px diameter
- Small: 28px diameter

### Node Colors
- Family: `accent-600` (#c9425f)
- Entity: `neutral-700` (#404040)
- Strategy: `accent-500` (#df5f77)
- Advisor: `neutral-500` (#737373)

### Connection Lines
- Stroke width: 2px
- Color: `neutral-300` (#d4d4d4)
- Active/highlighted: `accent-400` (#ec8a9a), stroke-width: 3px
- Animation: Pulse along path (subtle)

### Node Structure (SVG)
```svg
<circle
  cx="x"
  cy="y"
  r="radius"
  fill="color"
  opacity="1"
  class="transition-all duration-500"
/>
<text
  x="x"
  y="y+radius+20"
  text-anchor="middle"
  class="text-xs font-medium"
>
  Node Label
</text>
```

### Connection Structure (SVG)
```svg
<path
  d="M x1,y1 Q controlX,controlY x2,y2"
  stroke="color"
  stroke-width="2"
  fill="none"
  class="transition-all duration-500"
/>
```

## Layout Coordinates (ViewBox: 800x600)

### Family Nodes
- Generation 1: (400, 100)
- Generation 2: (200, 300)
- Generation 3: (400, 500)

### Entity Nodes
- Trust Structures: (600, 300)
- Family Office: (650, 150)
- Operating Companies: (650, 450)

### Strategy Nodes
- Estate Planning: (150, 150)
- Tax Optimization: (100, 300)
- Insurance Strategies: (150, 450)

### Advisor Nodes
- Estate Attorney: (750, 100)
- CPA/Tax Advisor: (750, 300)
- Insurance Advisor: (750, 500)

## Responsive Behavior

### Desktop (> 1024px)
- Full graph visible
- Viewbox: 800x600
- All labels visible

### Tablet (768px - 1024px)
- Slightly condensed
- Viewbox: 700x550
- All labels visible

### Mobile (< 768px)
- Simplified version
- Fewer labels (show on tap/hover)
- Viewbox: 400x500
- Vertical orientation
- Consider static version

## Accessibility

- **ARIA labels**: Each node has aria-label describing its role
- **Reduced motion**: Respect `prefers-reduced-motion` - show static version
- **Keyboard navigation**: Allow tabbing through nodes (optional interactive version)
- **Screen readers**: Provide text alternative describing the ecosystem

## Performance Considerations

- Use CSS transforms for animations (GPU accelerated)
- Limit simultaneous animations
- Use `will-change` sparingly
- Target 60fps
- Lazy load on mobile (show after hero text loads)

## Technical Implementation Notes

### SVG Structure
```typescript
<svg viewBox="0 0 800 600" className="w-full h-auto">
  <defs>
    {/* Gradient definitions */}
    {/* Filter definitions for glow effects */}
  </defs>

  <g id="connections">
    {/* All connection paths */}
  </g>

  <g id="nodes">
    {/* All node circles and labels */}
  </g>
</svg>
```

### Framer Motion Integration
```typescript
const variants = {
  phase1: {
    // Animation values for phase 1
  },
  phase2: {
    // Animation values for phase 2
  },
  phase3: {
    // Animation values for phase 3
  }
}
```

### Synchronized Text Rotation
Text rotates in sync with graph phases:
- Phase 1 → "See the ontology of the family"
- Phase 2 → "Connect estate, tax, and insurance strategies"
- Phase 3 → "Transform complexity into clarity"

## Future Enhancements (Post-MVP)

1. **Interactive mode**: Click nodes to highlight connected elements
2. **3D version**: Upgrade to React Three Fiber for depth
3. **Data-driven**: Pull actual family structure from demo data
4. **Custom animations**: Different patterns for different audience segments
5. **Particle effects**: Subtle particles flowing along connections

---

## MVP Simplifications

For initial launch:
- Static SVG with CSS animations (not full Framer Motion complexity)
- No interactivity (pure animation)
- Desktop-optimized (mobile shows simplified or static)
- Pre-rendered connection curves (not dynamic)

Can enhance post-launch based on feedback and performance.
