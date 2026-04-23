import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DPPArrows from '../components/DPPArrows';
import Silk from '../components/backgrounds/Silk';
import DarkVeil from '../components/backgrounds/DarkVeil';
import Plasma from '../components/backgrounds/Plasma';
import Iridescence from '../components/backgrounds/Iridescence';
import LiquidChrome from '../components/backgrounds/LiquidChrome';
import LearnMore from '../components/LearnMore';
import RequestDemo from '../components/RequestDemo';

function FlameBullet({ className = '' }) {
  return (
    <img
      src="/img/solutionLogos/flame.png"
      alt=""
      className={`mt-0.5 h-5 w-5 shrink-0 object-contain md:h-6 md:w-6 ${className}`}
      width={24}
      height={24}
    />
  );
}

function Solutions() {
  // const solutionLinks = [
  //   { label: 'HPR', href: '/solutions/hpr' },
  //   { label: 'SnapREC', href: '/solutions/snaprec' },
  //   { label: 'SnapCAT', href: '/solutions/snapcat' },
  //   { label: 'SnapCOPE', href: '/solutions/snapcope' },
  //   { label: 'SnapIR', href: '/solutions/snapir' },
  //   { label: 'SnapVALUES', href: '/solutions/snapvalues' },
  //   { label: 'Self eAudit', href: '/solutions/self-e-audit' },
  //   { label: 'SnapALERT', href: '/solutions/snapalert' },
  // ];

  return (
    <div className="app relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(100vh,46rem)] overflow-hidden">
      <LiquidChrome
    baseColor={[0.780, 0.702, 0.816]}
    speed={0.25}
    amplitude={0.2}
    interactive={true}
  />
      </div>

      <header className="hero relative z-30" id="services">
        <Navbar />
      </header>

      <section className="relative z-10 flex min-h-[min(85vh,40rem)] w-full flex-col overflow-hidden text-center">
        <div className="relative z-10 flex flex-1 flex-col items-center justify-start px-6 pb-14 pt-12 text-center md:px-16 md:pb-20 md:pt-20 lg:px-20">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Solutions</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary drop-shadow-md md:text-6xl">The SnapRISK Solution</h1>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-primary/95 drop-shadow md:mt-8 md:text-xl">
            For almost two decades, SnapRISK has been redefining how property risks are managed-leading with our
            powerful SnapCAT platform and unmatched HPR property risk engineering solutions. From streamlining data
            capture to delivering high-impact insights, we help clients tackle their toughest risk challenges with
            speed, precision, and confidence.{' '}
            <span className="font-bold">
              Whether you are in need of one, or multiple solutions, you can custom create your digital property
              portfolio.
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-12">
            <LearnMore solution={''}/>
            <RequestDemo solution={''}/>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.65fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-primary/15 bg-white p-4 shadow-sm md:p-6">
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary md:px-4">Click on each solution to learn more</p>
            <div className="mt-4">
              <DPPArrows />
            </div>
          </div>

          <article className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white p-7 shadow-sm md:p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-primary">Digital Property Profile</p>
            <h2 className="relative mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              Create your Digital Property Profile
            </h2>
            <p className="relative mt-5 text-base leading-relaxed text-gray-700">
              One of the distinct ways SnapRISK stands apart from traditional property engineering firms is through
              our <span className="italic">proprietary</span>{' '}
              <span className="font-bold">Digital Property Profile (DPP)</span>-a dynamic, data-rich view of your
              property risk, accessible <span className="font-bold">24/7 by clients</span> through our
              secure app.
            </p>
            <h3 className="relative mt-7 text-xl font-semibold text-gray-900">The Result?</h3>
            <ul className="relative mt-4 space-y-3 text-base text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">1</span>
                <span>Data rich underwriting market reports</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">2</span>
                <span>Reduced manual effort</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">3</span>
                <span>Stronger insurance outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">4</span>
                <span>A measurable return on investment</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* <section className="px-6 pb-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-lg font-medium text-gray-700 italic">Click on each solution to learn more.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutionLinks.map(solution => (
              <Link
                key={solution.href}
                to={solution.href}
                className="group rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">Solution</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{solution.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-secondary px-6 py-14 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
          <div className="min-w-0 flex-1">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Why teams choose SnapRISK</h2>
            <ul className="m-0 mt-6 list-none space-y-4 p-0">
              <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
                <FlameBullet />
                <span>
                  Digital platform that streamlines scheduling, managing, and tracking property inspections across
                  locations.
                </span>
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
                <FlameBullet />
                <span>Standardized, high-quality reporting with clear, actionable recommendations for risk mitigation.</span>
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
                <FlameBullet />
                <span>
                  Global network of engineers supporting insurers, brokers, and corporate risk managers with
                  multi-location portfolios.
                </span>
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
                <FlameBullet />
                <span>Scalable and cost-efficient delivery model compared to traditional property engineering approaches.</span>
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
                <FlameBullet />
                <span>
                  Consistent methodology and documentation providing reliable data and analytics to prioritize risk
                  initiatives.
                </span>
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
                <FlameBullet />
                <span>Proactive risk insights that strengthen protection strategies and help prevent losses before they occur.</span>
              </li>
            </ul>
          </div>
          <div className="shrink-0">
            <img
              src="/img/solutionLogos/snappy_purple.png"
              alt="SnapRISK mascot"
              className="h-auto w-40 md:w-48 lg:w-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
