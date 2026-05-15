import '../../App.css';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

// Add each testimonial: quote, name, company, title
const CLIENT_TESTIMONIALS = [
  {
    quote_1:
      `For years I struggled with management of property loss control recommendations for my global clients and spent far too much time requesting responses and updating spreadsheets. SnapRISK and the SnapREC® app was the solution I needed. Uploading recommendations (and COPE information) is now quick and straightforward, and my clients find it easy to respond. I can automate follow-ups or personally follow up on higher-priority risks when needed.`,
    quote_2: `The quick reference metrics let me know where each client stands, and all the data is accessible for further analysis if needed. Responses are documented in real-time, allowing me to present an up-to-date and accurate story of risk improvements at renewals. I appreciate that SnapRISK invited input and incorporated my suggestions to make the system work even better for my clients. I had to advocate internally to adopt the system, and it’s proven to be a great decision.`,
    name: 'Mary Marley',
    company: 'Oswald',
    title: 'Vice President',
    title_2: 'Senior Property Loss Control Consultant',
    logo: '/img/oswald.png'
  },
];

const IMPACT_METRICS = [
  { label: 'Average Reporting Speed Improvement', value: '35%' },
  { label: 'Typical Data Completeness Increase', value: '2.3x' },
  { label: 'Portfolio Visibility Across Programs', value: 'End-to-end' },
];

function CaseStudies() {
  return (
    <div className="app">
      <header className="hero" id="case-studies">
        <Navbar />
      </header>

      <main className="px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:mt-12 md:p-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Case Studies</p>
          <h1 className="mt-3 text-center text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Our Clients Say
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
            Hear from risk and engineering leaders who use SnapRISK to strengthen property programs, improve data
            quality, and drive measurable outcomes across their portfolios.
          </p>
        </section>

        {/* <section className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-3">
          {IMPACT_METRICS.map(metric => (
            <article key={metric.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Portfolio Impact</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">{metric.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{metric.label}</p>
            </article>
          ))}
        </section> */}

        <section className="mx-auto mt-12 max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Client Testimonials</p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Trusted by Risk Leaders Worldwide
          </h2>

          <div className="mt-8 space-y-6">
            {CLIENT_TESTIMONIALS.map(testimonial => (
              <article
                key={`${testimonial.name}-${testimonial.company}`}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
              >
                <blockquote className="border-l-2 border-primary/70 pl-5 md:pl-6">
                  <p className="text-base leading-8 text-gray-700 md:text-lg">{testimonial.quote_1}</p>
                  <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">{testimonial.quote_2}</p>
                </blockquote>

                <footer className="mt-6 flex items-center justify-between gap-6 border-t border-primary/10 pt-6">
                  <div className="min-w-0 flex-1">
                    <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="mt-1 text-sm font-medium text-primary">{testimonial.title}</p>
                    {testimonial.title_2 && (
                      <p className="mt-1 text-sm font-medium text-primary">{testimonial.title_2}</p>
                    )}
                    <p className="mt-0.5 text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                  {testimonial.logo && (
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      className="h-12 w-auto max-w-[140px] shrink-0 object-contain object-right md:h-14 md:max-w-[180px]"
                    />
                  )}
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-6xl rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:p-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Next Conversation</p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Want Similar Results Across Your Portfolio?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-700">
            We can map your current process, identify high-impact improvements, and design a rollout that fits your team.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact?type=demo"
              className="rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
            >
              Request a Demo
            </Link>
            <Link
              to="/solutions"
              className="rounded-md border border-primary/40 bg-white px-5 py-2.5 font-medium text-primary transition-colors hover:bg-primary/5"
            >
              Explore Solutions
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CaseStudies;
