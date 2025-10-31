# Style Guide - advice.ai Marketing Website

*Design system and standards for the UHNW marketing site*

---

## Color Palette

### Brand Colors

#### Accent (Burgundy/Wine)
Primary brand accent for CTAs, highlights, and emphasis.

```css
accent-50:  #fdf4f5  /* Lightest tint */
accent-100: #fbe8ea
accent-200: #f9d4da
accent-300: #f4b3bd
accent-400: #ec8a9a
accent-500: #df5f77  /* Mid-tone */
accent-600: #c9425f  /* Primary */
accent-700: #a9314d  /* Primary dark */
accent-800: #8d2943
accent-900: #78263d
accent-950: #42111e  /* Darkest */
```

**Usage**:
- Primary CTA buttons: `accent-700`
- Hover states: `accent-800`
- Highlights in knowledge graph: `accent-600`
- Link colors: `accent-700`
- Focus rings: `accent-600`

---

#### Neutrals (Grays)
For text, backgrounds, and subtle elements.

```css
neutral-50:  #fafafa  /* Off-white backgrounds */
neutral-100: #f5f5f5  /* Light backgrounds */
neutral-200: #e5e5e5  /* Borders */
neutral-300: #d4d4d4
neutral-400: #a3a3a3
neutral-500: #737373  /* Mid-tone gray */
neutral-600: #525252
neutral-700: #404040  /* Dark text */
neutral-800: #262626
neutral-900: #171717  /* Darkest text */
neutral-950: #0a0a0a
```

**Usage**:
- Body text: `neutral-700`
- Subheadings: `neutral-600`
- Borders: `neutral-200`
- Subtle backgrounds: `neutral-50`, `neutral-100`
- Knowledge graph secondary nodes: `neutral-700`, `neutral-500`

---

### Semantic Colors

```css
background: neutral-50   /* Page background */
foreground: neutral-900  /* Primary text */
```

---

## Typography

### Font Families

#### Headlines (Serif)
**Crimson Pro** - Modern, professional serif for sophistication

```css
font-family: var(--font-crimson), Georgia, serif;
```

**Usage**: H1, H2, H3, stats, emphasis

---

#### Body (Sans-serif)
**Inter** - Clean, readable sans-serif for body text

```css
font-family: var(--font-inter), system-ui, sans-serif;
```

**Usage**: Body copy, UI elements, buttons, labels

---

### Type Scale

```css
/* Headlines */
h1: 3rem / 4.5rem (mobile / desktop)  /* 48px / 72px */
    font-weight: 700
    font-family: serif
    line-height: 1.1

h2: 2rem / 3rem (mobile / desktop)    /* 32px / 48px */
    font-weight: 600
    font-family: serif
    line-height: 1.2

h3: 1.5rem / 2rem (mobile / desktop)  /* 24px / 32px */
    font-weight: 600
    font-family: serif
    line-height: 1.3

/* Body Text */
body-large: 1.25rem / 1.5rem          /* 20px / 24px */
            font-weight: 400
            line-height: 1.6

body: 1rem / 1.125rem                 /* 16px / 18px */
      font-weight: 400
      line-height: 1.7

body-small: 0.875rem                  /* 14px */
            font-weight: 400
            line-height: 1.6

/* UI Text */
button: 1rem
        font-weight: 500
        letter-spacing: 0.01em

label: 0.875rem
       font-weight: 500
       text-transform: uppercase
       letter-spacing: 0.05em
```

---

## Spacing System

Based on 8px grid (Tailwind defaults).

### Spacing Scale
```
0.5 = 4px   (0.125rem)
1   = 8px   (0.25rem)
2   = 16px  (0.5rem)
3   = 24px  (0.75rem)
4   = 32px  (1rem)
6   = 48px  (1.5rem)
8   = 64px  (2rem)
12  = 96px  (3rem)
16  = 128px (4rem)
24  = 192px (6rem)
```

### Component Spacing
```css
/* Sections */
section-padding-y: 6rem (desktop), 3rem (mobile)
section-padding-x: 1rem (mobile), 2rem (tablet+)

/* Containers */
max-width: 1280px (xl)
container-padding: 1rem (mobile), 2rem (desktop)

/* Stacks */
heading-to-body: 1rem - 1.5rem
body-paragraphs: 1rem
section-to-section: 4rem - 6rem

/* UI Elements */
button-padding: 0.75rem 1.5rem (12px 24px)
input-padding: 0.75rem 1rem
card-padding: 2rem
```

---

## Border Radius

```css
sm: 0.375rem  /* 6px - small elements */
md: 0.5rem    /* 8px - buttons, inputs */
lg: 0.75rem   /* 12px - cards */
xl: 1rem      /* 16px - large cards */
2xl: 1.5rem   /* 24px - hero sections */
```

**Usage**:
- Buttons: `rounded-lg` (8px)
- Cards: `rounded-lg` (12px)
- Inputs: `rounded-md` (8px)

---

## Shadows

```css
/* Tailwind defaults */
sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

**Usage**:
- Cards: `shadow-sm` or `shadow-md`
- Floating elements: `shadow-lg`
- Modals: `shadow-xl`

---

## Components

### Buttons

#### Primary Button
```tsx
<Button variant="primary" size="lg">
  Schedule a Consultation
</Button>
```

**Styles**:
```css
background: accent-700
color: white
padding: 0.875rem 2rem
border-radius: 0.5rem
font-weight: 500
transition: all 200ms

hover: accent-800
focus: ring-2 ring-accent-600 ring-offset-2
```

---

#### Outline Button
```tsx
<Button variant="outline" size="lg">
  Learn More
</Button>
```

**Styles**:
```css
border: 2px solid accent-700
color: accent-700
background: transparent
padding: 0.875rem 2rem

hover: background accent-50
focus: ring-2 ring-accent-600 ring-offset-2
```

---

### Cards

```tsx
<div className="bg-white p-8 rounded-lg shadow-sm">
  {/* Card content */}
</div>
```

**Specifications**:
- Background: `white` or `neutral-50`
- Padding: `2rem` (32px)
- Border radius: `0.75rem` (12px)
- Shadow: `shadow-sm`
- Hover: `hover:shadow-md` transition

---

### Form Inputs

```tsx
<input
  type="text"
  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg
             focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
/>
```

**Specifications**:
- Padding: `0.75rem 1rem`
- Border: `2px solid neutral-200`
- Border radius: `0.5rem`
- Focus: `border-accent-600` + `ring-accent-600`

---

## Animations

### Principles
1. **Purposeful**: Every animation serves a function
2. **Subtle**: No flashy effects, sophisticated motion
3. **Performant**: 60fps minimum
4. **Accessible**: Respect `prefers-reduced-motion`

### Timing Functions
```css
ease-out: cubic-bezier(0, 0, 0.2, 1)  /* Default */
ease-in: cubic-bezier(0.4, 0, 1, 1)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Duration
```css
fast: 150ms      /* Micro-interactions */
normal: 200ms    /* Buttons, hovers */
slow: 300ms      /* Section entrances */
slower: 500ms    /* Complex animations */
```

### Common Animations

#### Fade In Up
```tsx
import { fadeInUp } from '@/lib/animations';

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

#### Fade In
```tsx
import { fadeIn } from '@/lib/animations';

<motion.div variants={fadeIn} initial="hidden" animate="visible">
  Content
</motion.div>
```

---

## Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Responsive Approach
**Mobile-first**: Design for mobile, enhance for desktop

```tsx
<div className="text-2xl lg:text-4xl">
  {/* 32px on mobile, 56px on desktop */}
</div>
```

---

## Layout Patterns

### Container
```tsx
<div className="container mx-auto px-4 max-w-7xl">
  {/* Constrained content */}
</div>
```

### Section
```tsx
<section className="py-16 lg:py-24">
  <div className="container mx-auto px-4">
    {/* Section content */}
  </div>
</section>
```

### Grid (Capabilities, Audience)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Grid items */}
</div>
```

---

## Accessibility

### Color Contrast
- Body text (neutral-700) on white: **10.57:1** ✅ AAA
- Accent-700 on white: **4.87:1** ✅ AA
- White on accent-700: **4.87:1** ✅ AA

### Focus States
All interactive elements must have visible focus states:
```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-accent-600
focus-visible:ring-offset-2
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;

  /* Fonts */
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-crimson: 'Crimson Pro', Georgia, serif;

  /* Spacing */
  --section-padding-y: 6rem;
  --container-max-width: 1280px;
}

@media (max-width: 768px) {
  :root {
    --section-padding-y: 3rem;
  }
}
```

---

## Utilities

### Tailwind Utility Classes

#### Text Styling
```tsx
className="font-serif text-4xl font-bold text-neutral-900"
```

#### Spacing
```tsx
className="py-16 px-4 space-y-6"
```

#### Responsive
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

#### Animations
```tsx
className="transition-all duration-200 hover:scale-105"
```

---

## Brand Guidelines Reference

### Voice & Tone
- Sophisticated without being academic
- Practical without being simplistic
- Collaborative rather than prescriptive
- Confident without arrogance

### Messaging Principles
1. Avoid commodity claims (no "save time")
2. Lead with sophistication
3. Use collaborative language
4. Complexity is our specialty
5. UHNW exclusive focus

### Visual Principles
- High-end aesthetic
- Not generic SaaS
- Purposeful animations
- Data visualization emphasis

---

## File Organization

```
src/
├── app/
│   ├── globals.css          # Tailwind + custom styles
│   └── layout.tsx            # Font configuration
├── components/
│   ├── ui/                   # Design system components
│   ├── sections/             # Page sections
│   └── animations/           # Animated components
├── lib/
│   ├── utils.ts              # cn() helper
│   ├── animations.ts         # Motion variants
│   └── constants.ts          # Design tokens
└── types/
    └── index.ts              # TypeScript types
```

---

## Quick Reference

### Common Patterns

**Hero Headline**:
```tsx
<h1 className="font-serif text-5xl lg:text-7xl font-bold text-neutral-900">
  Headline
</h1>
```

**Section Headline**:
```tsx
<h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 text-center mb-12">
  Section Headline
</h2>
```

**Body Text**:
```tsx
<p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
  Body copy
</p>
```

**Primary CTA**:
```tsx
<Button variant="primary" size="lg">
  Schedule a Consultation
</Button>
```

**Card**:
```tsx
<div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  {/* Content */}
</div>
```

---

*This style guide should be referenced for all design and development decisions. Consistency is key to maintaining the sophisticated UHNW brand experience.*
