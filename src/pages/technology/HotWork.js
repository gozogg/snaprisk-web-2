import '../../App.css';
import Navbar from '../../components/Navbar';
import RequestDemo from '../../components/RequestDemo';

function HotWork() {
  return (
    <div className="app bg-white">
      <header className="hero relative z-30" id="dashboard">
        <Navbar />
      </header>

      <main className="px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <section className="mx-auto mt-10 grid max-w-6xl gap-8 md:mt-12 lg:grid-cols-[1.12fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Overview</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">Hot Work Management</h1>
            <p className="mt-3 text-xl font-medium text-primary md:text-2xl">Control High-Risk Work. Prevent Loss Before It Happens </p>
            <p className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg">
            Hot work introduce significant fire risk if not properly managed. 
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
            SnapRISK digitizes the entire hot work process, transforming manual permits into standardized, trackable workflows that improve safety, compliance, and accountability.
            </p>
            <div className='mt-6'>
              <RequestDemo solution={'hotwork'}></RequestDemo>
            </div>
          </div>

          <div className="relative mx-auto w-[80%]">
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-primary" />
            <img
              src="/img/technology/hotwork.png"
              alt="SnapIR"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-primary/20 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Key Capabilities</p>
          <ul className="mt-6 grid gap-3 text-gray-700 md:grid-cols-2">
            {[
              'Digital hot work permits with structured workflows',
              'Pre-job hazard identification and approval processes',
              'Fire watch and post-work monitoring tracking ',
              'Real-time updates and field-level data capture ',
              'Photo documentation and complete audit trails ',
              'Automated alerts and notifications',
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
                'Paper-based or inconsistent permit processes ',
                'Lack of visibility into active hot work',
                'Missed safety steps or approvals',
                'Limited documentation for audits',
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
                'Reduced fire and loss exposure',
                'Consistent safety protocols across all locations',
                'Real-time visibility into active work',
                'Audit-ready documentation for compliance',
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
          Built for real-world environments, ensuring every hot work activity is tracked, documented, and controlled from start to finish.
          </p>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-3xl bg-gray-900 p-8 text-center md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Call To Action</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Take control of hot work risk.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">
          Standardize processes. Improve safety. Prevent losses.
          </p>
          <div className="mt-6">
            <RequestDemo solution='hotwork'></RequestDemo>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HotWork;
