import { Header } from '@/components/sections/header';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-16 md:pt-20">
        <article className="section container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <Link
                href="/"
                className="text-sm text-accent-700 hover:text-accent-800 inline-flex items-center gap-2"
              >
                ← Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
              <p className="text-neutral-600">Last updated: January 2025</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Introduction</h2>
                <p className="text-neutral-700 leading-relaxed">
                  advice.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Information We Collect</h2>
                <h3 className="text-xl font-semibold">Personal Information</h3>
                <p className="text-neutral-700 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Request a demo or consultation</li>
                  <li>Register for an account</li>
                  <li>Contact us with inquiries</li>
                  <li>Subscribe to our communications</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Usage Data</h3>
                <p className="text-neutral-700 leading-relaxed">
                  We automatically collect certain information when you visit our website, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Click patterns and navigation paths</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and demo requests</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate about products, services, and events</li>
                  <li>Analyze usage patterns and optimize user experience</li>
                  <li>Protect against fraudulent or illegal activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Information Sharing and Disclosure</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who perform services on our behalf</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Data Security</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Data Retention</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Your Rights and Choices</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  To exercise these rights, please contact us at the information provided below.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Cookies and Tracking Technologies</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, though some features may not function properly if cookies are disabled.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Third-Party Links</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Children's Privacy</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="text-neutral-700 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Email: privacy@advice.ai<br />
                  Website: advice.ai
                </p>
              </section>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-neutral-900 text-neutral-400 py-10 md:py-12 mt-16" role="contentinfo">
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
