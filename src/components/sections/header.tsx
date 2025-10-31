'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Platform', id: 'challenge' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'Results', id: 'results' },
    { label: 'Who We Serve', id: 'audience' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-serif font-bold text-neutral-900 hover:text-accent-700 transition-colors"
          >
            advice.ai
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-neutral-700 hover:text-accent-700 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('cta')}
              className="text-sm font-medium text-neutral-700 hover:text-accent-700 transition-colors"
            >
              Login
            </button>
            <Button
              size="sm"
              onClick={() => scrollToSection('cta')}
            >
              Get a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-accent-700 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-base font-medium text-neutral-700 hover:text-accent-700 hover:bg-neutral-50 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2 space-y-2">
              <button
                onClick={() => scrollToSection('cta')}
                className="block w-full text-left py-2 text-base font-medium text-neutral-700 hover:text-accent-700 transition-colors"
              >
                Login
              </button>
              <Button
                size="sm"
                onClick={() => scrollToSection('cta')}
                className="w-full"
              >
                Get a Demo
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
