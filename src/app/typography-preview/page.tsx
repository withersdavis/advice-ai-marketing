import { Playfair_Display, Crimson_Pro, Lora, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const crimson = Crimson_Pro({ subsets: ['latin'], weight: ['400', '600'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '600'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });

export default function TypographyPreview() {
  const headline = 'Purpose-Built for UHNW Multi-Generational Complexity';
  const subhead = 'AI-powered intelligence meets deep UHNW expertise';
  const body = 'Ultra-high-net-worth families don\'t have simple financial details. They have complex ecosystems spanning generations and multiple entities with varying ownership, roles and responsibilities.';

  return (
    <main className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Typography Preview</h1>

        {/* Option A: Playfair Display */}
        <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <div className="mb-4 text-sm font-medium text-accent-700 uppercase tracking-wide">
            Option A: Playfair Display
          </div>
          <h2 className={`${playfair.className} text-5xl font-bold mb-4 text-neutral-900`}>
            {headline}
          </h2>
          <p className={`${playfair.className} text-2xl mb-6 text-neutral-600`}>
            {subhead}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {body}
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-accent-700 text-white px-6 py-3 rounded-lg font-medium">
              Request Demo
            </button>
            <button className="border-2 border-accent-700 text-accent-700 px-6 py-3 rounded-lg font-medium">
              Learn More
            </button>
          </div>
        </section>

        {/* Option B: Crimson Pro */}
        <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <div className="mb-4 text-sm font-medium text-accent-700 uppercase tracking-wide">
            Option B: Crimson Pro
          </div>
          <h2 className={`${crimson.className} text-5xl font-semibold mb-4 text-neutral-900`}>
            {headline}
          </h2>
          <p className={`${crimson.className} text-2xl mb-6 text-neutral-600`}>
            {subhead}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {body}
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-accent-700 text-white px-6 py-3 rounded-lg font-medium">
              Request Demo
            </button>
            <button className="border-2 border-accent-700 text-accent-700 px-6 py-3 rounded-lg font-medium">
              Learn More
            </button>
          </div>
        </section>

        {/* Option C: Lora */}
        <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <div className="mb-4 text-sm font-medium text-accent-700 uppercase tracking-wide">
            Option C: Lora
          </div>
          <h2 className={`${lora.className} text-5xl font-semibold mb-4 text-neutral-900`}>
            {headline}
          </h2>
          <p className={`${lora.className} text-2xl mb-6 text-neutral-600`}>
            {subhead}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {body}
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-accent-700 text-white px-6 py-3 rounded-lg font-medium">
              Request Demo
            </button>
            <button className="border-2 border-accent-700 text-accent-700 px-6 py-3 rounded-lg font-medium">
              Learn More
            </button>
          </div>
        </section>

        {/* Option D: Inter Only */}
        <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <div className="mb-4 text-sm font-medium text-accent-700 uppercase tracking-wide">
            Option D: Inter (Sans-serif Only)
          </div>
          <h2 className={`${inter.className} text-5xl font-bold mb-4 text-neutral-900`}>
            {headline}
          </h2>
          <p className={`${inter.className} text-2xl mb-6 text-neutral-600`}>
            {subhead}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {body}
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-accent-700 text-white px-6 py-3 rounded-lg font-medium">
              Request Demo
            </button>
            <button className="border-2 border-accent-700 text-accent-700 px-6 py-3 rounded-lg font-medium">
              Learn More
            </button>
          </div>
        </section>

        <div className="text-center mt-12 text-neutral-600">
          <p className="text-sm">
            Navigate back to see homepage • This is a preview page for typography selection
          </p>
        </div>
      </div>
    </main>
  );
}
