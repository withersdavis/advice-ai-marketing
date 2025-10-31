'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  id?: string;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  id,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 40, opacity: 0 };
      case 'down':
        return { y: -40, opacity: 0 };
      case 'left':
        return { x: -40, opacity: 0 };
      case 'right':
        return { x: 40, opacity: 0 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { y: 40, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref as any}
      className={className}
      initial={getInitialPosition()}
      animate={isVisible ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Sophisticated easing curve
      }}
    >
      {children}
    </motion.section>
  );
}
