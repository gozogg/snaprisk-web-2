import '../App.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function TermsConditions() {
  return (
    <div className="app">
      <title>SnapRISK | Terms and Conditions</title>
      <header className="hero" id="terms">
        <Navbar />
      </header>

      <main className="px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <section className="mx-auto mt-10 max-w-3xl rounded-3xl border border-primary/20 bg-white p-8 shadow-sm md:mt-12 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">Terms &amp; Conditions</h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-700">
            <p>
              Welcome to the SnapRISK website! These terms and conditions govern your use of our website. By using our
              website, you agree to be bound by these terms and conditions. If you do not agree with these terms and
              conditions, please do not use our website.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Intellectual Property
              </h2>
              <p className="mt-3">
                All content on our website, including text, graphics, logos, images, and software, is the property of
                SnapRISK or its content suppliers and is protected by United States and international copyright laws. You
                may not reproduce, modify, distribute, or display any of our website&apos;s content without our prior
                written consent.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Website Use
              </h2>
              <p className="mt-3">
                You may use our website only for lawful purposes and in accordance with these terms and conditions. You
                may not use our website:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 pl-1">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                <li>
                  To transmit, or procure the sending of, any advertising or promotional material without our prior
                  written consent.
                </li>
                <li>
                  To impersonate or attempt to impersonate SnapRISK, a SnapRISK employee, another user, or any other
                  person or entity.
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the
                  website, or which, as determined by us, may harm SnapRISK or users of the website or expose them to
                  liability.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Disclaimer of Warranties
              </h2>
              <p className="mt-3">
                We make no representations or warranties of any kind, express or implied, as to the operation of our
                website or the information, content, materials, or products included on our website. You expressly agree
                that your use of our website is at your sole risk.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                About Us
              </h2>
              <p className="mt-3">
              Carrington Risk Consulting LLC, doing business as SnapRISK, is proud to be a woman-founded,
            female-run business. We support and align with the mission of the Women&apos;s Business Enterprise
            National Council (WBENC), the nation&apos;s largest certifier of women-owned businesses. We are also
            a certified Small Business Enterprise with the Florida State Minority Supplier Development Council.
            We recognize the importance of supplier diversity embraced by today&apos;s leading corporations and
            government agencies—and we are ready to help strengthen your supply chain through inclusive
            partnerships.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Changes to Terms and Conditions
              </h2>
              <p className="mt-3">
                We reserve the right to modify or amend these terms and conditions at any time. Any changes we make will
                be posted on this page.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Changes to Terms and Conditions
              </h2>
              <p className="mt-3">
                We reserve the right to modify or amend these terms and conditions at any time. Any changes we make will
                be posted on this page.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Contact Us
              </h2>
              <p className="mt-3">
                If you have any questions or concerns about these terms and conditions, please contact us at{' '}
                <a href="mailto:contact@snaprisk.com" className="font-medium text-primary hover:underline">
                  contact@snaprisk.com
                </a>{' '}
                or visit our{' '}
                <Link to="/contact" className="font-medium text-primary hover:underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
