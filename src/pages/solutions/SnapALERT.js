import '../../App.css';
import Navbar from '../../components/Navbar';
import LearnMore from '../../components/LearnMore';
import RequestDemo from '../../components/RequestDemo';

function SnapALERT() {
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
              src="/img/solutions/snapalert.png"
              alt="SnapCAT"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900">SnapALERT®</h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-700">
          SnapALERT® is SnapRISK’s real-time alerting system that notifies clients of active risk events – so you can act fast, stay informed, and reduce potential loses. 
          Address threats before they escalate, take initial action to protect your people and assets, enhance your emergency preparedness, and understand your exposures across 
          all locations instantly.  
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <LearnMore solution={'snapalert'}/>
            <RequestDemo solution={'snapalert'}/>
          </div>
        </div>
      </section>

      <section className="px-10 pb-20 pt-4 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:p-10">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/15" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What is it?</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">SnapALERT Allows you to...</h2>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">1</span>
                <span>Discover which locations in your portfolio are at risk from extreme weather events. </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">2</span>
                <span>Create data exports and reports from a live dashboard.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">3</span>
                <span>Geospatially analyze weather risk up to 72 hours in advance with live data feeds and map overlays.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 01</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">24/7 Monitoring & Alerts</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Client access to SnapALERT® to track natural disasters, fires, and severe weather near your properties, with tailored notifications based on risk tolerance and property type.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 02</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Geospatial Intelligence</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Maps events to specific locations in real time, giving precise visibility into risks affecting your properties.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 03</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Actionable Guidance</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Provides recommended next steps to help mitigate exposure and respond effectively to events. 
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 04</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Integrated Reporting & Analysis</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Logs alerts into your SnapRISK® portal for follow-up, tracking, and deeper analysis. 
              </p>
            </article>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-10">
            <div className="absolute -right-10 -bottom-16 h-52 w-52 rounded-full bg-primary/35 blur-2xl" />
            <p className="relative max-w-4xl text-2xl font-medium leading-relaxed text-white">
              With SnapALERT you do not just get alerts – you get answers.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SnapALERT;
