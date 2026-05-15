import { useEffect, useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Threads from '../components/backgrounds/Threads';
import DotGrid from '../components/backgrounds/DotGrid';
import LiquidChrome from '../components/backgrounds/LiquidChrome';
import RequestDemo from '../components/RequestDemo';
import { Link } from 'react-router-dom';

function CountUp({ end, duration = 1200, suffix = '' }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return (
    <span>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

function About() {
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

      <header className="hero relative z-30" id="about">
        <Navbar />
      </header>

      <section className="relative z-10 flex min-h-[min(85vh,40rem)] w-full flex-col overflow-hidden text-center">
        <div className="relative z-10 flex flex-1 flex-col items-center justify-start px-6 pb-14 pt-12 text-center md:px-16 md:pb-20 md:pt-20 lg:px-20">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
            About SnapRISK
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-primary drop-shadow-md md:text-6xl">
            Who Is SnapRISK?
          </h1>
          <p className="mx-auto mt-6 max-w-5xl text-base leading-8 text-primary/95 drop-shadow md:mt-8 md:text-xl">
            SnapRISK is a global technology company specializing in risk engineering. We transform the
            complexity of property risk engineering into opportunity by combining technology, expertise,
            and partnership. Our consultants are some of the best in the business and our global network
            has conducted tens of thousands of property surveys across nearly every industry. Together,
            we deliver property risk engineering solutions that simplify decisions, strengthen resilience,
            and create lasting value for our clients.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-12">
            <RequestDemo solution={''}/>
            <Link to='/contact?type=careers'className="w-fit rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90">Join our Team</Link>
          </div>
        </div>
      </section>

      <main className="relative z-10 px-6 pb-16 md:px-10 md:pb-20 lg:px-16">

      <section className="mx-auto mt-12 max-w-6xl pb-12">
          <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl">
            SnapRISK in Action
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">
                <CountUp end={2000} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">Surveys Completed</p>
              <p className="mt-2 text-sm text-gray-600">
                Our team has years of experience to lead you to success.
              </p>
            </article>

            {/* <article className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">
                <CountUp end={6} />
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">Continents Serviced</p>
              <p className="mt-2 text-sm text-gray-600">Wherever you are, we&apos;re here to help.</p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">
                <CountUp end={35} />
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">Employees</p>
              <p className="mt-2 text-sm text-gray-600">
                So your needs are always our top priority.
              </p>
            </article> */}

            <article className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-primary">
                <CountUp end={24} />
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">Industries Served</p>
              <p className="mt-2 text-sm text-gray-600">
                No matter the sector, we have the power.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:p-12">
          <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl">
            What Separates Us from the Competition?
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Cutting-Edge Technology</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                User-friendly platform enhances accessibility and streamlines data analytics for diverse clients with a
                geospatial view of your portfolio.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Full-Service HPR Consultancy</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Global risk engineering for companies of any size and in any industry.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Powerful Combination</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                We are the only HPR engineering company with homegrown technology, and the only property risk platform
                that is also a full-service consultancy.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-primary/20 bg-white p-8 shadow-sm md:mt-16 md:p-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Founder Spotlight
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-4xl">
            Meet Our Founder
          </h2>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-[220px_1fr]">
            <div className="mx-auto h-56 w-56 overflow-hidden rounded-2xl border border-primary/20 bg-secondary">
              <img
                src="/img/portraits/kristenCarrington.jpg"
                alt="Portrait of Kristen Carrington, founder of SnapRISK"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-base leading-8 text-gray-700 md:text-lg">
                SnapRISK was born from Kristin&apos;s belief that risk engineering needed better technology. Her vision
                set the direction: build a platform that structures field data, removes variability, and scales expert
                insight through software. Thank you for the groundbreaking, award-winning technology, product vision,
                and leadership that made SnapRISK possible.
              </p>
              <p className="mt-5 border-l-2 border-primary/70 pl-4 text-sm italic leading-7 text-gray-600 md:text-base">
                &quot;Build tools that simplify complexity, and never lose sight of the people you serve.&quot;
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                Kristin Carrington, Founder
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-6xl pb-6 md:mt-16">
          <div className="rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:p-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary">Global Reach</p>
            <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              One Global Team. One Platform.
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
              This is more than a tagline - it is how we work. One vision. One process. One source of truth. Because
              when we operate as One Global Team on One Platform, your goals become our mission, and your success
              becomes our shared achievement.
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
            <div className="h-[500px] overflow-hidden rounded-2xl border border-gray-200 md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1i0pWlsAbQWo4SVOTL2K7Wc8qj6DTclk&output=embed"
                className="-mt-20 h-[calc(100%+5rem)] w-full"
                loading="lazy"
                title="SnapRISK and partner locations map"
              />
            </div>
            <div className="mx-auto mt-4 flex w-full max-w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-primary/15 bg-secondary px-4 py-2.5 sm:w-1/2 sm:max-w-none">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Legend</span>
              <div className="flex items-center gap-2 text-primary">
                <i className="fa-solid fa-location-dot text-sm" aria-hidden="true"></i>
                <span className="text-sm font-medium text-gray-700">SnapRISK</span>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <i className="fa-solid fa-location-dot text-sm" aria-hidden="true"></i>
                <span className="text-sm font-medium text-gray-700">Partners</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
