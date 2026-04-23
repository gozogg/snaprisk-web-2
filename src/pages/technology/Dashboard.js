import '../../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import RequestDemo from '../../components/RequestDemo';

function Dashboard() {
  return (
    <div className="app bg-white">
      <header className="hero relative z-30" id="dashboard">
        <Navbar />
      </header>

      <main className="px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <section className="mx-auto mt-10 grid max-w-6xl gap-8 md:mt-12 lg:grid-cols-[1.12fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Overview</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">SnapRISK Dashboard</h1>
            <p className="mt-3 text-xl font-medium text-primary md:text-2xl">Your Risk Data. Visualized. Connected. Actionable.</p>
            <p className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg">
              The SnapRISK Dashboard is the command center for your entire risk portfolio, transforming complex data
              into clear, real-time insights.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
              It consolidates information across all locations and modules into a single, intuitive view, allowing
              teams to monitor performance, identify trends, and take action with confidence.
            </p>
            <div className='mt-6'>
              <RequestDemo solution={'dashboard'}></RequestDemo>
            </div>
          </div>

          <div className="relative mx-auto w-[80%]">
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-primary" />
            <img
              src="/img/technology/dashboard.png"
              alt="SnapIR"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-primary/20 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Key Capabilities</p>
          <ul className="mt-6 grid gap-3 text-gray-700 md:grid-cols-2">
            {[
              'Real-time dashboards with portfolio-wide visibility',
              'Centralized view of all properties, risks, and activities',
              'Customizable views by location, risk type, or priority',
              'Role-based access for teams and stakeholders',
              'Seamless integration across all SnapRISK modules',
              'Exportable reports for underwriting, renewals, and leadership',
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
                'Limited visibility into portfolio-wide risk',
                'Time-consuming, manual reporting processes',
                'Difficulty prioritizing risk across locations',
                'Disconnected data sources',
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
                'Instant visibility into your entire risk landscape',
                'Clear prioritization of critical risks and actions',
                'Faster, data-driven decision-making',
                'Streamlined reporting for internal and external stakeholders',
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
            A powerful, user-friendly interface designed to turn data into insight, so you can focus on what matters
            most: reducing risk and improving outcomes.
          </p>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-3xl bg-gray-900 p-8 text-center md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Call To Action</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            See the full picture of your risk, instantly.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">
            Visualize performance. Prioritize action. Drive results.
          </p>
          <div className="mt-6">
            <RequestDemo solution={'dashboard'}></RequestDemo>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
