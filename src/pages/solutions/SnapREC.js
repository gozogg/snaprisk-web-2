import '../../App.css';
import Navbar from '../../components/Navbar';

function SnapREC() {
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
              src="/img/solutions/snaprec.png"
              alt="SnapCAT"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900">SnapREC®</h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-700">
          SnapREC® allows you to streamline how you track, manage, and act on your property risk improvement opportunities – across your entire portfolio. 
          </p>
          <button className="w-fit bg-primary text-white px-5 py-2.5 rounded-md font-medium transition-opacity hover:opacity-90">
            Learn More
          </button>
        </div>
      </section>

      <section className="px-10 pb-20 pt-4 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:p-10">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/15" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What is it?</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">SnapREC® allows you to...</h2>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">1</span>
                <span>Facilitate property risk control surveys by using only your smart phone to make recs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">2</span>
                <span>Deliver recommendation reports by email or text within minutes of completing the survey.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">3</span>
                <span>Include photos or video, make notes by voice recognition, and pin recommendations to specific buildings by GPS coordinates.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 01</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Centralized Risk Management</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              All property data, recommendations, and updates organized in one accessible system at any time.  
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 02</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Real-Time Tracking & Prioritization</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Monitor progress, due dates, and responsible parties while filtering by risk severity, cost, or location to focus efforts where they matter most.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 03</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Collaborative Workflow</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Enable risk, facilities, engineering, operations, and leadership to work together within one unified platform.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 04</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Reporting & Compliance</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Generate carrier-ready reports and analytics to support underwriting and demonstrate continuous risk improvement.  
              </p>
            </article>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-10 text-center">
            <div className="rounded-full bg-primary/35 blur-2xl" />
            <p className="relative text-2xl font-medium leading-relaxed text-white text-center">
            Recommendations are turned into tangible results – giving you visibility, accountability, and control across your entire property risk portfolio! 
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SnapREC;
