'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedTextRotatorProps {
  phrases: string[];
  interval?: number; // milliseconds per phrase
  className?: string;
}

export function AnimatedTextRotator({
  phrases,
  interval = 8000,
  className = '',
}: AnimatedTextRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, interval);

    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          className="absolute inset-0 flex items-center"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-neutral-600">
            {phrases[currentIndex]}
          </p>
        </motion.div>
      </AnimatePresence>
      {/* Spacer to maintain height */}
      <p className="invisible text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
        {phrases[0]}
      </p>
    </div>
  );
}
