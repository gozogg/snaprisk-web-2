import { useEffect, useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

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
    <div className="app">
      <header className="hero" id="about">
        <Navbar />
      </header>

      <main className="content px-4 pb-16 md:px-8 md:pb-20">
        <section className="mx-auto mt-10 max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-700/85 to-slate-700/70 p-8 shadow-2xl shadow-primary/10 backdrop-blur-sm md:mt-14 md:p-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            About SnapRISK
          </p>
          <h1 className="mt-3 text-center text-4xl font-bold leading-tight text-white md:text-5xl">
            Who Is SnapRISK?
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-8 text-slate-200 md:text-lg">
            SnapRISK is a global technology company specializing in risk engineering. We transform the
            complexity of property risk engineering into opportunity by combining technology, expertise,
            and partnership. Our consultants are some of the best in the business and our global network
            has conducted tens of thousands of property surveys across nearly every industry. Together,
            we deliver property risk engineering solutions that simplify decisions, strengthen resilience,
            and create lasting value for our clients.
          </p>

          <h1 className="mt-8 text-center text-4xl font-bold leading-tight text-white md:text-5xl">
            What Separates Us from the Competition?
          </h1>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary/80">Cutting-Edge Technology</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
              User-friendly platform enhances accessibility and streamlines data analytics for diverse clients with a geospatial view of your portfolio.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary/80">Full-Service HPR Consultancy</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
              Global risk engineering for companies of any size and in any industry.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary/80">Powerful Combination</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
              We are the only HPR engineering company with homegrown technology, and the only property risk platform that is also a full-service consultancy.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-6xl">
          <h1 className="text-center text-4xl font-bold leading-tight md:text-5xl">
            SnapRISK in Action
          </h1>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <p className="text-4xl font-bold text-primary">
                <CountUp end={2000} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-semibold text-white">Surveys Completed</p>
              <p className="mt-2 text-sm text-slate-300">
                Our team has years of experience to lead you to success.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <p className="text-4xl font-bold text-primary">
                <CountUp end={6} />
              </p>
              <p className="mt-2 text-sm font-semibold text-white">Continents Serviced</p>
              <p className="mt-2 text-sm text-slate-300">Wherever you are, we&apos;re here to help.</p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <p className="text-4xl font-bold text-primary">
                <CountUp end={35} />
              </p>
              <p className="mt-2 text-sm font-semibold text-white">Employees</p>
              <p className="mt-2 text-sm text-slate-300">
                So your needs are always our top priority.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <p className="text-4xl font-bold text-primary">
                <CountUp end={24} />
              </p>
              <p className="mt-2 text-sm font-semibold text-white">Industries Served</p>
              <p className="mt-2 text-sm text-slate-300">
                No matter the sector, we have the power.
              </p>
            </article>
          </div>
        </section>
        
        <section className="mx-auto mt-14 max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-8 shadow-2xl shadow-black/30 md:mt-20 md:p-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
            Founder Spotlight
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold leading-tight text-white md:text-4xl">
            Meet Our Founder
          </h2>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-[220px_1fr]">
            <div className="mx-auto h-56 w-56 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-slate-700/70 to-slate-900/80">
              <img
                src="/img/portraits/kristen.jpg"
                alt="Portrait of Kristen Carrington, founder of SnapRISK"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-base leading-8 text-slate-200 md:text-lg">
              SnapRISK was born from Kristin's belief that risk engineering needed better technology. Her vision set the direction: 
              build a platform that structures field data, removes variability, and scales expert insight through software. Thank you 
              for the groundbreaking, award-winning technology, product vision, and leadership that made SnapRISK possible.
              </p>
              <p className="mt-5 border-l-2 border-primary/70 pl-4 text-sm italic leading-7 text-slate-300 md:text-base">
                &quot;Build tools that simplify complexity, and never lose sight of the people you serve.&quot;
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                Kristin Carrington, Founder
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
