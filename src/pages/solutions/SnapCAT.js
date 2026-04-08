import '../../App.css';
import Navbar from '../../components/Navbar';

function SnapCAT() {
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
              src="/img/solutions/snapcat.png"
              alt="SnapCAT"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900">SnapCAT</h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-700">
          SnapCAT focuses on collecting, verifying, and housing natural catastrophe (NatCat) modifier data building-by-building in a cost-effective way – 
          without the need for expensive traditional inspections. We have developed a streamlined process that makes gathering this critical data much 
          more affordable and efficient. 
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Who It Is For</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Clients Needing SnapCAT Have...</h2>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">1</span>
                <span>Large, diverse property portfolios across multiple regions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">2</span>
                <span>Exposure to hurricanes, floods, earthquakes, wildfires, and other severe hazards.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">3</span>
                <span>Inconsistent, outdated, or incomplete NatCat data across sites.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 01</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Visualize Portfolio Risk Mapping</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                SnapCAT gives you a live, interactive map of all your locations with color-coded hazard overlays for flood,
                earthquake, windstorm, wildfire, and more.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 02</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Site-Level and Portfolio-Level Insights</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                Dive into individual properties or zoom out to see trends and risk concentrations across your entire business.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 03</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Real-Time Intelligence for Smarter Decisions</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                Whether you are selecting new sites, reviewing business continuity plans, or negotiating insurance terms,
                SnapCAT delivers the data you need, fast.
              </p>
            </article>

            <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Feature 04</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Customizable and Client-Friendly</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                SnapCAT was built with you in mind: intuitive to use, branded for your business, and backed by SnapRISK expert
                interpretation and guidance.
              </p>
            </article>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-10">
            <div className="absolute -right-10 -bottom-16 h-52 w-52 rounded-full bg-primary/35 blur-2xl" />
            <p className="relative max-w-4xl text-2xl font-medium leading-relaxed text-white">
              SnapCAT empowers better decisions by turning complex risk data into clear, actionable insight so you can protect
              your assets, people, and operations with confidence.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SnapCAT;
