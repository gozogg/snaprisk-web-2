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
    logo: '/img/testimonials/oswald.png'
  },
  {
    quote_1:
      `A national restaurant group launched a strategic data improvement initiative to strengthen its property insurance program. SnapCAT® Natural Catastrophe Risk Assessments were deployed across Florida locations, resulting in $1M in premium savings at renewal. Encouraged by the outcome, the client then expanded the program to California, achieving an additional $800K in savings. `,
    quote_2: `This early success led to continued assessments across Gulf Coast properties in year three and a sustained, year-over-year expansion. They continued engaging SnapCAT® for surveys for 10 years, and eventually, the client also adopted Self E-Audit® to scale internal visibility and maintain underwriting confidence.`,
    name: 'National Restaurant Group',
    title: 'Industry: Multi- brand casual dining',
    logo: '/img/testimonials/casual-dining.jpeg'
  },
  {
    quote_1:
      `A national retail REIT engaged SnapRISK® for COPE data consulting. They launched a two-year initiative using SnapCAT® Natural Catastrophe Risk Assessments to support a layered insurance program—starting with Florida and California properties.`,
    quote_2: `The impact was immediate: SnapCAT® enabled geospatial visibility and RMS-modeled insights that reshaped renewal conversations. The client saved $3.8M in premium over two years, directly attributed to the initiative, against a $386K spend— delivering a 9.8x ROI. 

Following this success, the REIT embedded its “data improvement story” into renewal marketing, earning top-tier positioning with underwriters and avoiding steep rate increases during the hard market. The engagement expanded to Gulf Coast properties, completing a full portfolio transformation.`,
    name: 'National Retail Real Estate Portfolio',
    title: 'Industry- Retail Real Estate Investment Trust',
    logo: '/img/testimonials/real-estate.jpeg'
  },
  {
    quote_1:
      `A national department store chain launched a targeted initiative to improve natural catastrophe data quality and drive differentiated outcomes in a tightening insurance market. The journey began with SnapCAT®assessments in Florida (Year 1) and California (Year 2), resulting in $1.8M in premium savings over two years—delivering a 4.5x ROI on a $384,600 investment. To scale the initiative, SnapRISK® consultants conducted high- value surveys and trained local personnel for virtual assessments. In Year 3, the program expanded to Gulf Coast stores.`,
    quote_2: `Within 5 years, the client transitioned all HPR engineering work to SnapRISK® for their distribution centers, citing improved renewal outcomes. This engagement remains active today, with the client continuing to invest in risk visibility and portfolio-wide data improvement.`,
    name: 'National Department Store Chain',
    title: 'Industry- National Retail Chain',
    logo: '/img/testimonials/retail.jpeg'
  },
];

// const IMPACT_METRICS = [
//   { label: 'Average Reporting Speed Improvement', value: '35%' },
//   { label: 'Typical Data Completeness Increase', value: '2.3x' },
//   { label: 'Portfolio Visibility Across Programs', value: 'End-to-end' },
// ];

function CaseStudies() {
  return (
    <div className="app">
      <title>SnapRISK | Case Studies</title>
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
