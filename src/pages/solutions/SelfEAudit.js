import '../../App.css';
import Navbar from '../../components/Navbar';
import LearnMore from '../../components/LearnMore';
import RequestDemo from '../../components/RequestDemo';

function SelfEAudit() {
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
              src="/img/solutions/selfeaudit.png"
              alt="SnapCAT"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900">Self E-AUDIT®</h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-700">
          Self E-AUDIT® is a digital self-assessment tool that empowers clients to evaluate their own property risks quickly, efficiently, and cost-effectively – without waiting for a site visit
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <LearnMore solution={'self-e-audit'}/>
            <RequestDemo solution={'self-e-audit'}/>
          </div>
        </div>
      </section>

      <section className="px-10 pb-20 pt-4 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:p-10">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/15" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">User Friendly Interface</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Intuitive design allows you to complete audits with...</h2>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">1</span>
                <span>Standard COPE/ Natural Hazards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">2</span>
                <span>Standard Property Risk</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">3</span>
                <span>Custom App designed specifically for you </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 01</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Customizable templates</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Tailored to your industry, risk profile and your needs. 
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 02</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Photo Upload & Geotagging</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Visual documentation with precise location data. 
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 03</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Data Integration</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Syncs seamlessly with SnapRISK® analytics and reporting tools. 
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 04</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Risk Insights & Client Empowerment</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                Accelerates risk mitigation timelines and gives a proactive risk ownership.  
              </p>
            </article>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-10 text-center">
            <div className="rounded-full bg-primary/35 blur-2xl" />
            <p className="relative text-2xl font-medium leading-relaxed text-white text-center">
            Revolutionize how you assess and manage property risk – digitally, efficiently, and intelligently. 
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SelfEAudit;
