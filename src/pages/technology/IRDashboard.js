import '../../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import RequestDemo from '../../components/RequestDemo';

function IRDashboard() {
  return (
    <div className="app bg-white">
      <header className="hero relative z-30" id="dashboard">
        <Navbar />
      </header>

      <main className="px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <section className="mx-auto mt-10 grid max-w-6xl gap-8 md:mt-12 lg:grid-cols-[1.12fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Overview</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">SnapRISK IR Dashboard</h1>
            <p className="mt-3 text-xl font-medium text-primary md:text-2xl">Thermal Data. Visualized. Actionable. Preventative.</p>
            <p className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg">
            The Infrared (IR) Dashboard transforms thermal inspection data into clear, real-time insights, helping you identify hidden risks before they lead to equipment failure or loss. 
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
            By centralizing infrared findings across all locations, SnapRISK provides a single, intuitive view of asset health, enabling proactive maintenance and smarter decision-making. 
            </p>
            <div className='mt-6'>
              <RequestDemo solution={'ir-dashboard'}></RequestDemo>
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
              'Centralized view of all infrared inspection results',
              'Real-time dashboards highlighting thermal anomalies',
              'Severity-based prioritization of findings',
              'Integration with assets, locations, and risk data',
              'Exportable reports for engineering, maintenance, and underwriting ',
              'Response management to handle repairs in a timely manner'
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
                'Disconnected or hard-to-interpret inspection reports',
                'Delays in identifying critical equipment issues',
                'Lack of visibility across facilities',
                'Reactive maintenance approaches',
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
                'Early detection of electrical and mechanical issues',
                'Prioritized action based on severity and risk',
                'Improved asset reliability and uptime',
                'Reduced risk of fire, failure, and unplanned downtime',
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
          Built with input from risk engineers, the IR Dashboard turns complex thermal data into actionable insight, bridging the gap between inspection and execution. 
          </p>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-3xl bg-gray-900 p-8 text-center md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Call To Action</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Turn thermal data into prevention.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">
            Detect issues early. Act faster. Protect your assets.
          </p>
          <div className="mt-6">
            <RequestDemo solution={'ir-dashboard'}></RequestDemo>
          </div>
        </section>
      </main>
    </div>
  );
}

export default IRDashboard;
