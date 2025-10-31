# Components

This directory contains all React components for the advice.ai marketing website.

## Structure

### `/ui`
Reusable UI primitives that serve as building blocks:
- Buttons, inputs, cards, badges, etc.
- Small, focused, highly reusable
- Accept `className` prop for customization
- Fully typed with TypeScript

Example:
```tsx
<Button variant="primary" size="lg">
  Get Started
</Button>
```

### `/sections`
Larger page sections composed from UI components:
- Hero, Features, Pricing, Testimonials, etc.
- Self-contained with their own data and logic
- Use Framer Motion for scroll animations
- Can be reused across different pages

Example:
```tsx
<HeroSection
  title="Transform Multi-Generational Wealth Planning"
  subtitle="AI-powered platform for UHNW families"
/>
```

### `/animations`
Specialized animated components:
- Complex animations (Rubik's cube style)
- Rotating text displays
- Interactive visualizations
- Built with Framer Motion

Example:
```tsx
<RotatingText phrases={['Family Offices', 'UHNW Teams', 'CPAs']} />
```

## Best Practices

1. **Component Props**: Always type props interfaces
2. **Composition**: Prefer composition over configuration
3. **Styling**: Use Tailwind utilities with `cn()` helper
4. **Animations**: Import variants from `@/lib/animations`
5. **Accessibility**: Include ARIA labels where needed
6. **Performance**: Use React.memo for expensive components
