import '../App.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import PageHelmet from '../components/PageHelmet';

export default function PrivacyPolicy() {
  return (
    <div className="app">
      <PageHelmet
        title="SnapRISK | Privacy Policy"
        description="Read the SnapRISK privacy policy to understand how we collect, use, and protect your information."
        path="/privacy"
      />
      <header className="hero" id="privacy">
        <Navbar />
      </header>

      <main className="px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <section className="mx-auto mt-10 max-w-3xl rounded-3xl border border-primary/20 bg-white p-8 shadow-sm md:mt-12 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">Privacy Policy</h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-700">
            <p>
              At SnapRISK, we respect your privacy and are committed to protecting any personal information that you
              may provide to us through our website.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Information We Collect
              </h2>
              <p className="mt-3">
                When you visit our website, we do not collect any personal information about you unless you choose to
                provide it to us through our contact form. The information we collect through our contact form may
                include your name, email address, and any other information you choose to provide to us.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information you provide to us through our contact form solely to respond to your inquiries
                and to provide you with information about our services. We do not share your information with third
                parties, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Security
              </h2>
              <p className="mt-3">
                We take the security of your personal information seriously and take reasonable measures to protect it
                from unauthorized access, use, or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Your Choices
              </h2>
              <p className="mt-3">
                You have the right to choose whether or not to provide us with your personal information through our
                contact form. If you choose to provide us with your personal information, you have the right to request
                that we delete it at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Changes to this Privacy Policy
              </h2>
              <p className="mt-3">
                We reserve the right to modify or amend this privacy policy at any time. Any changes we make will be
                posted on this page.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                Contact Us
              </h2>
              <p className="mt-3">
                If you have any questions or concerns about our privacy policy or the information we collect through our
                website, please contact us at{' '}
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
