import '../../App.css';
import Navbar from '../../components/Navbar';
import LearnMore from '../../components/LearnMore';
import RequestDemo from '../../components/RequestDemo';

function SnapIR() {
  return (
    <div className="app">
      <header className="hero" id="infrared">
        <Navbar />
      </header>
      <section className="flex items-center gap-8 px-10 py-12 lg:px-16">
        <div className="w-1/2 p-4 ml-4">
          <div className="relative mx-auto w-[88%]">
            <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-primary" />
            <img
              src="/img/solutions/snapir.png"
              alt="SnapIR"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900">SnapIR</h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-700">
          Infrared thermographic inspections detect hidden risks, like overheating electrical components, failing mechanical systems, or moisture intrusion—before they cause breakdowns, 
          fires, unplanned shutdowns (business interruption), or costly damage. 
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <LearnMore solution={'snapir'}/>
            <RequestDemo solution={'snapir'}/>
          </div>
        </div>
      </section>
      <section className="px-10 pb-20 pt-4 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:p-10">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/15" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Who It Is For</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Why IR Inspections Matter</h2>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">1</span>
                <span>70%+ of property fires in the insurance market stem from electrical failures. Our advanced imaging technology identifies thermal anomalies in your medium-voltage 

substations and electrical systems, allowing you to act and avoid unexpected failures. </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">2</span>
                <span>Insurers and regulators are tightening standards. NFPA 70B, ISO, and insurance providers now emphasize preventive tools like IR scans. </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">3</span>
                <span>Budgets are tightening, but risks are not. IR testing helps avoid major repair or replacement costs.  </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">4</span>
                <span>Preventive maintenance is far more cost-effective than emergency repairs. Protect critical infrastructure, ensure the safety and longevity of your assets. </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 01</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">What you can’t see can hurt you</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Our non-invasive scans are quick, data-driven, and actionable. You’ll gain visual insights to strengthen your maintenance program, reduce liability, and prove your proactive approach to risk.  
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 02</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Real Expertise, Real Results </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
              Our team follows international best practices and recognized industry standards to deliver consistent, high-quality results. All our inspections are conducted by 
              Certified Thermographers with hands-on electrical and mechanical expertise. With our team, you get more than a report- you get reliable insight you can act on. 
              </p>
            </article>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-10 text-center">
            <div className="rounded-full bg-primary/35 blur-2xl" />
            <p className="relative text-2xl font-medium leading-relaxed text-white text-center">
            See the Unseen. Stop Problems Before They Start. Protect Your People, Property, and Profits. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SnapIR;
