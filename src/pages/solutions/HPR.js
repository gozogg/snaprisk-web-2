import '../../App.css';
import Navbar from '../../components/Navbar';
import LearnMore from '../../components/LearnMore';
import RequestDemo from '../../components/RequestDemo';

function HPR() {
  return (
    <div className="app">
      <header className="hero" id="snapcat">
        <Navbar />
      </header>
      <section className="flex items-center gap-8 px-10 py-12 lg:px-16">
        <div className="w-1/2 p-4 ml-4">
          <div className="relative mx-auto w-[88%]">
            <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-primary" />
            <img
              src="/img/solutions/HPR.png"
              alt="SnapCAT"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900">HPR Risk Engineering</h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-700">
          SnapRISK delivers modern, tech-powered HPR property risk engineering for complex, high-value facilities. We go beyond traditional inspections—providing deeper 
          risk insight that supports stronger coverage and better client outcomes. We combine deep HPR engineering expertise with mobile-first technology to make risk data work harder, 
          faster, and smarter—for brokers, carriers, and insureds alike.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <LearnMore solution={'hpr'}/>
            <RequestDemo solution={'hpr'}/>
          </div>
        </div>
      </section>

      <section className="px-10 pb-20 pt-4 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:p-10">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/15" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What's Included</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">HPR Surveys contain...</h2>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">1</span>
                <span>Geospatial Locating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">2</span>
                <span>SnapCOPE</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">3</span>
                <span>SnapCAT</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">3</span>
                <span>SnapREC</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">3</span>
                <span>Hazards and Processes??</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 01</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Mobile-First Data Capture</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                Purpose-built HPR tools streamline data collection and verification. Engineers document risks digitally on-site—no clipboards—improving accuracy and efficiency.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 02</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Real-Time Insights & Reporting</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Delivers instant insights while engineers are still on-site, with reports available in hours or days—not weeks. Accelerates underwriting and risk mitigation decisions.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 03</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">GIS Mapping & Visual Verification</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Combines timestamped photos with geospatial accuracy to validate risk conditions—especially critical for large-scale industrial and remote HPR sites.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 04</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Dynamic Risk Profiles Built by Experts</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Live, updatable Digital Property Profile® ensures risk data evolves with the facility, while solutions are designed by HPR experts to address real-world challenges and improve risk awareness.
              </p>
            </article>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-10 text-center">
            <div className="rounded-full bg-primary/35 blur-2xl" />
            <p className="relative text-2xl font-medium leading-relaxed text-white text-center">
            SnapRISK makes HPR risk engineering faster, clearer, and more valuable – for everyone in the insurance ecosystem.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HPR;
