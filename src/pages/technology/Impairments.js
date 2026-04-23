import '../../App.css';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import RequestDemo from '../../components/RequestDemo';

function Impairments() {
  return (
    <div className="app bg-white">
      <header className="hero relative z-30" id="dashboard">
        <Navbar />
      </header>

      <main className="px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <section className="mx-auto mt-10 grid max-w-6xl gap-8 md:mt-12 lg:grid-cols-[1.12fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Overview</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">Impairment Tracking</h1>
            <p className="mt-3 text-xl font-medium text-primary md:text-2xl">Manage System Downtime with Visibility and Control </p>
            <p className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg">
            When fire protection systems are impaired, planned or unplanned, risk exposure increases significantly. 
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
            SnapRISK provides a centralized solution to track, manage, and document impairments, ensuring proper safeguards are in place and risks are minimized. 
            </p>
            <div className='mt-6'>
              <RequestDemo solution={'impairments'}></RequestDemo>
            </div>
          </div>

          <div className="relative mx-auto w-[80%]">
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-primary" />
            <img
              src="/img/technology/impairments.png"
              alt="SnapIR"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-primary/20 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Key Capabilities</p>
          <ul className="mt-6 grid gap-3 text-gray-700 md:grid-cols-2">
            {[
              'Centralized logging of all impairments across locations',
              'Real-time status tracking and notifications',
              'Approval workflows and escalation processes',
              'Duration tracking and prioritization by risk level',
              'Complete documentation for compliance and reporting',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 rounded-xl border border-gray-200 bg-secondary px-4 py-3 text-base">
                <span className="text-primary">➢</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">What It Solves</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                'Lack of visibility into system outages',
                'Delayed response to critical impairments',
                'Inconsistent processes across locations',
                'Gaps in documentation and compliance',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed md:text-base">
                  <span className="text-primary">➢</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Value Delivered</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                'Reduced exposure during system downtime',
                'Improved response and communication',
                'Consistent, standardized workflows',
                'Full audit trail for insurance and regulatory needs',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed md:text-base">
                  <span className="text-primary">➢</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The SnapRISK Advantage</p>
          <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
          A proactive approach to impairment management, giving you the visibility and control needed to protect your assets at all times.
          </p>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-3xl bg-gray-900 p-8 text-center md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Call To Action</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Stay ahead of risk during system outages.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">
          Track, manage, and respond with confidence.
          </p>
          <div className="mt-6">
            <RequestDemo solution='impairments'></RequestDemo>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Impairments;
