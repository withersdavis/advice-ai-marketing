import { Header } from '@/components/sections/header';
import Link from 'next/link';

export default function TermsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
              <p className="text-neutral-600">Last updated: January 2025</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
                <p className="text-neutral-700 leading-relaxed">
                  By accessing or using the advice.ai website and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Description of Services</h2>
                <p className="text-neutral-700 leading-relaxed">
                  advice.ai provides an AI-powered wealth planning platform designed for ultra-high-net-worth (UHNW) multi-generational families and the professionals who serve them. Our platform offers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Integrated family wealth ecosystem mapping</li>
                  <li>Knowledge graph visualizations</li>
                  <li>AI-powered insights and analysis</li>
                  <li>Multi-generational wealth planning tools</li>
                  <li>Collaborative features for advisory teams</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">User Accounts and Registration</h2>
                <h3 className="text-xl font-semibold">Account Creation</h3>
                <p className="text-neutral-700 leading-relaxed">
                  To access certain features of our Services, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information as needed</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Eligibility</h3>
                <p className="text-neutral-700 leading-relaxed">
                  You must be at least 18 years old and have the legal capacity to enter into contracts to use our Services. By using our Services, you represent and warrant that you meet these requirements.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Acceptable Use</h2>
                <p className="text-neutral-700 leading-relaxed">
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful code, viruses, or malicious software</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Services</li>
                  <li>Use automated systems to access the Services without permission</li>
                  <li>Impersonate others or misrepresent your affiliation</li>
                  <li>Collect or harvest information from other users</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold">Our Content</h3>
                <p className="text-neutral-700 leading-relaxed">
                  The Services, including all content, features, and functionality, are owned by advice.ai and are protected by copyright, trademark, and other intellectual property laws. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Copy, modify, or create derivative works of our content</li>
                  <li>Distribute, sell, or lease any part of the Services</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Remove or alter any proprietary notices</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Your Content</h3>
                <p className="text-neutral-700 leading-relaxed">
                  You retain ownership of any content you submit to our Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and process your content solely for the purpose of providing and improving our Services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Professional Services Disclaimer</h2>
                <p className="text-neutral-700 leading-relaxed">
                  The Services are designed to assist wealth planning professionals and do not constitute:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Legal advice or legal services</li>
                  <li>Financial advice or investment recommendations</li>
                  <li>Tax advice or tax preparation services</li>
                  <li>Insurance advice or insurance services</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Users should consult with qualified professionals before making any financial, legal, or tax decisions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Data Security and Privacy</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We implement reasonable security measures to protect your data. However, no system is completely secure. You acknowledge that you use our Services at your own risk. For more information about how we handle your data, please review our Privacy Policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Payment and Subscription Terms</h2>
                <p className="text-neutral-700 leading-relaxed">
                  If you purchase a subscription to our Services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>You agree to pay all applicable fees</li>
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Fees are non-refundable except as required by law</li>
                  <li>We may change pricing with advance notice</li>
                  <li>You are responsible for all taxes associated with your purchase</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Disclaimers and Limitations of Liability</h2>
                <h3 className="text-xl font-semibold">Disclaimer of Warranties</h3>
                <p className="text-neutral-700 leading-relaxed">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Limitation of Liability</h3>
                <p className="text-neutral-700 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ADVICE.AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Indemnification</h2>
                <p className="text-neutral-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless advice.ai and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or related to your use of the Services or violation of these Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Termination</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We may terminate or suspend your access to the Services immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Your right to use the Services will immediately cease</li>
                  <li>We may delete your account and data</li>
                  <li>Provisions that should survive termination will remain in effect</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Governing Law and Dispute Resolution</h2>
                <p className="text-neutral-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising from these Terms or the Services shall be resolved through binding arbitration, except where prohibited by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Changes to Terms</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of the Services after such changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Severability</h2>
                <p className="text-neutral-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Entire Agreement</h2>
                <p className="text-neutral-700 leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and advice.ai regarding the Services and supersede all prior agreements and understandings.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact Information</h2>
                <p className="text-neutral-700 leading-relaxed">
                  If you have questions about these Terms, please contact us at:
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Email: legal@advice.ai<br />
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
