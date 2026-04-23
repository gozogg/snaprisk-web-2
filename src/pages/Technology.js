import '../App.css';
import Navbar from '../components/Navbar';
import PixelBlast from '../components/backgrounds/PixelBlast';
import Beams from '../components/backgrounds/Beams';
import FloatingLines from '../components/backgrounds/FloatingLines';
import LiquidChrome from '../components/backgrounds/LiquidChrome';

const SHARED_CAPABILITIES = [
  'View all your locations in one place',
  'Easily downloadable reports for stakeholders',
  'Track scheduling of surveys',
  'Portfolio visibility across teams and workflows',
];

const MODULES = [
  {
    label: 'Platform Core',
    title: 'Dashboard',
    description: 'Bring your risk data together in one operating view so teams can monitor, prioritize, and execute faster.',
    bullets: [
      'Portfolio-wide location view with filters and drill-down',
      'Downloadable reporting for underwriting and leadership',
      'Survey scheduling and status tracking in one place',
      'Integrated SnapREC and SnapCAT insights to guide action',
    ],
  },
  {
    label: 'Operations + Response',
    title: 'IR Dashboard',
    description: 'Track impairment and incident response progress from one command center.',
    bullets: [
      'Portfolio-level location visibility with response status',
      'Downloadable status and progress reports',
      'Survey scheduling and completion tracking',
      'SnapREC recommendation response management',
      'View damaged equipment and monitor repair progress',
    ],
  },
  // {
  //   label: 'Recommendations',
  //   title: 'SnapREC',
  //   description: 'Manage recommendation response workflows and analyze open risk improvement activity.',
  //   bullets: [
  //     'Recommendation intake, assignment, and ownership',
  //     'Response and closure tracking by location or portfolio',
  //     'Analysis of current recommendations by status and priority',
  //   ],
  // },
  // {
  //   label: 'Catastrophe Data',
  //   title: 'SnapCAT',
  //   description: 'View all catastrophe exposure data in one place and compare hazard patterns across your portfolio.',
  //   bullets: [
  //     'Centralized NatCat data at site and portfolio level',
  //     'Hazard views for flood, quake, hail, wind, and hurricane',
  //     'Consistent data foundation for risk and underwriting decisions',
  //   ],
  // },
];

function Technology() {
  return (
    <div className="app relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(100vh,46rem)] overflow-hidden">
      <LiquidChrome
    baseColor={[0.780, 0.702, 0.816]}
    speed={0.25}
    amplitude={0.2}
    interactive={true}
  />
      </div>
      <header className="hero relative z-30" id="technology">
        <Navbar />
      </header>

      <section className="relative z-10 flex min-h-[min(85vh,40rem)] w-full flex-col overflow-hidden text-center">
        <div className="relative z-10 flex flex-1 flex-col items-center justify-start px-6 pb-14 pt-12 text-center md:px-16 md:pb-20 md:pt-20 lg:px-20">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Technology</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary drop-shadow-md md:text-6xl">
            You&apos;ve got the data, <br></br>now it&apos;s time to put it to work
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-primary/95 drop-shadow md:mt-8 md:text-xl">
            SnapRISK technology converts risk engineering data into action-ready insight for underwriting, operations,
            and resilience planning. Build one connected workflow from survey scheduling through recommendation response.
          </p>
        </div>
      </section>

      <main className="relative z-10 px-6 pb-16 md:px-10 md:pb-20 lg:px-16">

        <section className="mx-auto max-w-6xl rounded-3xl border border-primary/20 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Shared Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            One platform. Consistent visibility.
          </h2>
          <ul className="mt-6 grid gap-3 text-gray-700 md:grid-cols-2">
            {SHARED_CAPABILITIES.map(item => (
              <li key={item} className="flex items-start gap-2 rounded-xl border border-gray-200 bg-secondary px-4 py-3 text-base">
                <span className="text-primary">➢</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-8 max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2">
            {MODULES.map(module => (
              <article key={module.title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{module.label}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">{module.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-700">{module.description}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {module.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start gap-2 text-sm leading-relaxed md:text-base">
                      <span className="text-primary">➢</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-6xl grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Risk Controls</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">Hot Work</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-700">
              Hot Work focuses on managing the risks from tasks that generate heat, sparks, or flames to help prevent
              fires and explosions.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start gap-2 text-sm leading-relaxed md:text-base">
                <span className="text-primary">➢</span>
                <span>Work that creates hot flames</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-relaxed md:text-base">
                <span className="text-primary">➢</span>
                <span>Tasks and conditions that can start a fire</span>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Protection Status</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">Impairments</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-700">
              Impairments focus on identifying and managing situations where fire protection systems or safety
              conditions are reduced or not fully working, helping maintain protection and minimize risk.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start gap-2 text-sm leading-relaxed md:text-base">
                <span className="text-primary">➢</span>
                <span>Protection is not currently in place</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-relaxed md:text-base">
                <span className="text-primary">➢</span>
                <span>Conditions where controls cannot stop a fire effectively</span>
              </li>
            </ul>
          </article>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-3xl bg-gray-900 p-8 text-center md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How It Works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Capture - Visualize - Prioritize - Act
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">
            From survey data collection to recommendation closure, SnapRISK helps teams execute risk improvement with
            clarity, speed, and measurable outcomes.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Technology;
