import '../App.css';
import Navbar from '../components/Navbar';
import IndustriesSlide from '../components/IndustriesSlide';
import ProcessBlocks from '../components/ProcessBlocks';
import NextSteps from '../components/NextSteps';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'
import ColorBends from '../components/backgrounds/ColorBends';

const JOURNEY_STEPS = [
  {
    title: 'Discover',
    subtitle: 'Identify risk exposure and data gaps',
    icon: 'fa-solid fa-magnifying-glass',
    bullets: [
      'Portfolio review and initial conversations',
      'Pinpoint missing or outdated COPE, NatCat, and engineering data',
      'Align on goals: underwriting, cost savings, and visibility',
    ],
    img: '/img/home/discover.jpg'
  },
  {
    title: 'Capture',
    subtitle: 'Collect accurate, real-time property data',
    icon: 'fa-solid fa-camera',
    bullets: [
      'Onsite HPR surveys or remote audits',
      'Mobile-first data collection (photos, geolocation, structured inputs)',
      'No paper, no delays',
    ],
    img: '/img/home/capture.jpg'
  },
  {
    title: 'Structure',
    subtitle: 'Turn raw data into standardized digital assets',
    icon: 'fa-solid fa-diagram-project',
    bullets: [
      'Build Digital Property Profiles',
      'Organize data through SnapCOPE, SnapCAT, and other modules',
      'Clean, validated, model-ready datasets',
    ],
    img: '/img/home/structure.jpg'
  },
  {
    title: 'Visualize',
    subtitle: 'Transform data into portfolio-level insight',
    icon: 'fa-solid fa-chart-line',
    bullets: [
      'Map risk across locations',
      'Layer in hazard data (flood, wildfire, earthquake)',
      'Identify trends, concentrations, and blind spots',
    ],
    img: '/img/home/visualize.jpg'
  },
  {
    title: 'Act',
    subtitle: 'Drive risk improvement and engineering action',
    icon: 'fa-solid fa-bolt',
    bullets: [
      'Deliver reports instantly',
      'Track recommendations through SnapREC',
      'Prioritize mitigation efforts with confidence',
    ],
    img: '/img/home/act.jpg'
  },
  {
    title: 'Optimize',
    subtitle: 'Continuously improve and inform decisions',
    icon: 'fa-solid fa-gears',
    bullets: [
      'Maintain living, updateable data',
      'Support underwriting and renewal strategy',
      'Reduce costs and strengthen risk posture',
    ],
    img: '/img/home/optimize.jpg'
  },
];

function Home() {
  return (
    <div className="app relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[100vh] overflow-hidden">
        <ColorBends
          className="h-full w-full"
          colors={['#ff5c7a', '#BE5CF2', '#D16FBC']}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
          autoRotate={0}
        />
      </div>

      <header className="hero relative z-30" id="home">
        <Navbar />
      </header>
      <section
        className="relative z-10 flex h-[min(85vh,50rem)] w-full flex-col overflow-hidden text-center"
      >
        <div className="relative z-10 flex flex-1 flex-col items-center justify-start px-6 pb-14 pt-10 text-center md:px-16 md:pb-20 md:pt-24 lg:px-20">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Welcome</p>
          <h1 className="m-0 text-4xl font-bold tracking-tight text-primary drop-shadow-md md:text-6xl">
            Together in Risk
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary/95 drop-shadow md:mt-8 md:text-xl">
            SnapRISK is a global technology company specializing in risk engineering. We transform
            the complexity of property risk engineering into opportunity by combining technology,
            expertise, and partnership.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="w-fit rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90">
              View Solutions
            </button>
            <button className="w-fit rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="sticky top-0 z-20 mx-auto max-w-6xl border-b border-primary/10 bg-white/95 px-6 py-4 text-center backdrop-blur md:px-10 lg:px-16">
          <p className="m-0 text-xl font-semibold uppercase tracking-[0.25em] text-primary">
            The journey with SnapRISK
          </p>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
            Six stages from first conversation to lasting partnership.
          </p>
        </div>
        <ScrollStack
          useWindowScroll
          className="mt-4"
          itemDistance={52}
          stackPosition="26%"
          scaleEndPosition="14%"
          baseScale={0.82}
          itemScale={0.018}
          itemStackDistance={14}
        >
          {JOURNEY_STEPS.map((step, index) => (
            <ScrollStackItem
              key={step.title}
              itemClassName="mx-auto max-w-4xl border border-primary/15 bg-white text-left shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
            >
              <div className="relative pr-20 md:pr-48 lg:pr-60">
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
                  <img
                    src={step.img}
                    alt={`${step.title} step`}
                    className="h-14 w-14 rounded-lg object-cover shadow-sm md:h-48 md:w-48 lg:h-60 lg:w-60"
                    loading="lazy"
                  />
                </div>
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Stop {index + 1} of {JOURNEY_STEPS.length}
                </p>
                <p className="mt-2 text-sm font-medium italic text-gray-500 md:text-base">{step.subtitle}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">{step.title}</h3>
                <ul className="mt-3 space-y-2 pl-5 text-base leading-relaxed text-gray-600">
                  {step.bullets.map((item) => (
                    <li key={item} className="list-none">
                      <span className="mr-2 text-primary">➢</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      <section className='text-center bg-secondary py-16'>
        <p className="m-0 text-xl font-semibold uppercase tracking-[0.25em] text-primary">INDUSTRIES</p>
        <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">We bring deep expertise across a broad range of industries, enabling us to deliver tailored solutions regardless of sector.</p>
        <div className='mx-16 mt-10'>
          <IndustriesSlide />
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 text-center">
      <p className="m-0 text-xl font-semibold uppercase tracking-[0.25em] text-primary">READY TO DIG A LITTLE DEEPER?</p>
      <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">Take a deeper look into our company.</p>
        <div className="mx-auto max-w-6xl mt-6">
          <ProcessBlocks />
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 pb-20 pt-10 text-center md:px-10 lg:px-16"
        style={{
          backgroundImage: "url('/img/home/nextsteps.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/35"/>
        <div className="relative z-10">
          <p className="m-0 text-xl font-semibold uppercase tracking-[0.25em] text-white mx-96 border-b-2 pb-8">NEXT STEPS</p>
          <NextSteps />
        </div>
      </section>
    </div>
  );
}

export default Home;
