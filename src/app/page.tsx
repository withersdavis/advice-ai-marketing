import { Button } from '@/components/ui/button';
import { KnowledgeGraph } from '@/components/animations/knowledge-graph';
import { AnimatedTextRotator } from '@/components/animations/animated-text-rotator';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Header } from '@/components/sections/header';
import Link from 'next/link';

export default function HomePage() {
  const rotatingPhrases = [
    'See the complete family ecosystem',
    'Connect estate, tax, and insurance strategies',
    'Transform complexity into clarity',
  ];

  return (
    <>
      <Header />

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-700 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <main id="main-content" className="min-h-screen pt-16 md:pt-20">
        {/* Section 1: Hero */}
        <section id="hero" className="section pt-12 md:pt-16 lg:pt-24" aria-labelledby="hero-heading">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left: Text */}
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  <AnimatedTextRotator phrases={rotatingPhrases} interval={8000} />
                  <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Multi-Generational Wealth Complexity, Simplified Through Intelligence
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
                  AI-powered intelligence meets deep UHNW expertise, giving you the integrated clarity to deliver exceptional wealth planning.
                </p>

                <div className="pt-2 md:pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request a Demo
                  </Button>
                </div>
              </div>

              {/* Right: Knowledge Graph */}
              <div className="relative w-full h-[500px] lg:h-[600px] mt-8 lg:mt-0">
                <KnowledgeGraph />
              </div>
            </div>
          </div>
        </section>

      {/* Section 2: The Challenge */}
      <ScrollReveal id="challenge" className="section-alt">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8 md:mb-12 text-2xl sm:text-3xl lg:text-4xl px-4">
              Ultra-high-net-worth families don&apos;t have simple financial details
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Before */}
              <div className="space-y-4 bg-white p-6 md:p-8 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-900">The Challenge</h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-neutral-600">
                  <li>• Information scattered across systems</li>
                  <li>• Manual effort to piece together</li>
                  <li>• Analysis too time-intensive</li>
                  <li>• Families lack visibility</li>
                  <li>• Advisors working in silos</li>
                </ul>
              </div>

              {/* After */}
              <div className="space-y-4 bg-white p-6 md:p-8 rounded-lg border-2 border-accent-200">
                <h3 className="text-lg md:text-xl font-semibold text-accent-700">Our Platform</h3>
                <p className="text-base md:text-lg font-medium text-neutral-900">
                  Doesn&apos;t just collect data—it connects the dots.
                </p>
                <p className="text-sm md:text-base text-neutral-600">
                  Complex ecosystems spanning generations, entities with varying ownership, customized strategies across estate, tax, insurance, and net worth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Section 3: Platform Capabilities */}
      <ScrollReveal id="capabilities" className="section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl lg:text-4xl px-4">Understanding Through Connections</h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
              Map relationships and properties across your entire family wealth ecosystem
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Family Structure Mapping</h3>
              <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                Transform simple classifications into sophisticated networks
              </p>
              <ul className="text-xs md:text-sm text-neutral-500 space-y-1">
                <li>• Multi-generational structures</li>
                <li>• Entity relationships</li>
                <li>• Roles mapping</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Knowledge Maps</h3>
              <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                Visualize the complete ecosystem
              </p>
              <ul className="text-xs md:text-sm text-neutral-500 space-y-1">
                <li>• Dynamic visualizations</li>
                <li>• Temporal analysis</li>
                <li>• Pattern identification</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Semantic Reasoning</h3>
              <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                Enable nuanced intelligence
              </p>
              <ul className="text-xs md:text-sm text-neutral-500 space-y-1">
                <li>• Context-aware analysis</li>
                <li>• Custom opportunities</li>
                <li>• Intelligent patterns</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">AI-Powered Insights</h3>
              <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                Surface what matters
              </p>
              <ul className="text-xs md:text-sm text-neutral-500 space-y-1">
                <li>• Pattern detection</li>
                <li>• Risk identification</li>
                <li>• Integrated visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Section 4: Integration */}
      <ScrollReveal className="section-alt">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl lg:text-4xl px-4">One Platform. Complete Visibility.</h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
              For the first time, see the entire family financial ecosystem in one view
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {['Multiple Generations', 'Professional Teams', 'Estate & Legal Structures', 'Comprehensive Net Worth',
             'Complex Ownership', 'Insurance Strategies', 'Tax Optimization', 'Transactional Cash Flow'].map((item) => (
              <div key={item} className="bg-white p-4 md:p-5 rounded-lg text-center shadow-sm">
                <p className="font-medium text-sm md:text-base text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Section 5: Results */}
      <ScrollReveal id="results" className="section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl lg:text-4xl px-4">Advisors Move from Data Gatherers to Strategic Architects</h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
              The transformation we enable isn&apos;t about efficiency alone
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-700 mb-3 md:mb-4">40%</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Reduction in prep time</h3>
              <p className="text-sm md:text-base text-neutral-600">
                Free up time through integrated intelligence, not shortcuts
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-700 mb-3 md:mb-4">3x</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Family engagement</h3>
              <p className="text-sm md:text-base text-neutral-600">
                Clarity builds confidence and understanding drives decisions
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-700 mb-3 md:mb-4">100%</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Integrated visibility</h3>
              <p className="text-sm md:text-base text-neutral-600">
                Complete visibility across the entire ecosystem
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Section 6: Who We Serve */}
      <ScrollReveal id="audience" className="section-alt">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl lg:text-4xl px-4">Built for Professionals Who Serve UHNW Families</h2>
            <p className="text-lg md:text-xl text-neutral-600 px-4">
              We exclusively focus on UHNW multi-generational complexity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Family Offices */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Family Offices</h3>
              <p className="text-sm md:text-base text-neutral-600 mb-4 md:mb-6">
                Managing multi-generational wealth requires integrated visibility and analytical power
              </p>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-neutral-600">
                <li>• Clarity across generations</li>
                <li>• Advisor coordination</li>
                <li>• Strategy integration</li>
              </ul>
            </div>

            {/* UHNW Teams */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">UHNW Teams & CPAs</h3>
              <p className="text-sm md:text-base text-neutral-600 mb-4 md:mb-6">
                Specialization and sophistication that matches client complexity
              </p>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-neutral-600">
                <li>• Built for complexity</li>
                <li>• Cross-domain integration</li>
                <li>• Professional-grade tools</li>
              </ul>
            </div>

            {/* Advisory Teams */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">The Advisory Team</h3>
              <p className="text-sm md:text-base text-neutral-600 mb-4 md:mb-6">
                Estate attorneys, insurance advisors, and tax specialists working together
              </p>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-neutral-600">
                <li>• Shared visibility</li>
                <li>• Cross-discipline collaboration</li>
                <li>• Integrated strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Section 7: CTA */}
      <ScrollReveal id="cta" className="section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl px-4">Partner with the UHNW Specialists</h2>

            <p className="text-lg md:text-xl text-neutral-600 px-4 max-w-3xl mx-auto">
              Managing multi-generational family wealth means coordinating estate structures, tax strategies, insurance, net worth, and cash flow across entities and jurisdictions. advice.ai gives you the integrated visibility and analytical power to deliver the sophisticated counsel your clients expect.
            </p>

            <div className="flex justify-center pt-4">
              <Button size="lg" className="w-full sm:w-auto">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-10 md:py-12" role="contentinfo">
        <div className="container mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-xs md:text-sm">© 2025 advice.ai. Purpose-built for UHNW multi-generational complexity.</p>
        </div>
      </footer>
    </main>
    </>
  );
}
