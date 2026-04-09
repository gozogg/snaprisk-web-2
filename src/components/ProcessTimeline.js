import { useEffect, useRef, useState } from 'react';

const DEFAULT_STEPS = [
  {
    title: 'Discover',
    journeyHook: 'Identify risk exposure and data gaps',
    description: [
      'Portfolio review and initial conversations',
      'Pinpoint missing or outdated COPE, NatCat, and engineering data',
      'Align on goals: underwriting, cost savings, and visibility',
    ],
  },
  {
    title: 'Capture',
    journeyHook: 'Collect accurate, real-time property data',
    description: [
      'Onsite HPR surveys or remote audits',
      'Mobile-first data collection (photos, geolocation, structured inputs)',
      'No paper, no delays',
    ],
  },
  {
    title: 'Structure',
    journeyHook: 'Turn raw data into standardized digital assets',
    description: [
      'Build Digital Property Profiles®',
      'Organize data through SnapCOPE®, SnapCAT®, etc.',
      'Clean, validated, model-ready datasets',
    ],
  },
  {
    title: 'Visualize',
    journeyHook: 'Transform data into portfolio-level insight',
    description: [
      'Map risk across locations',
      'Layer in hazard data (flood, wildfire, quake)',
      'Identify trends, concentrations, and blind spots',
    ],
  },
  {
    title: 'Act',
    journeyHook: 'Drive risk improvement and engineering action',
    description: [
      'Deliver reports instantly',
      'Track recommendations (SnapREC®)',
      'Prioritize mitigation efforts',
    ],
  },
  {
    title: 'Optimize',
    journeyHook: 'Continuously improve and inform decisions',
    description: [
      'Maintain living, updateable data',
      'Support underwriting + renewal strategy',
      'Reduce costs and strengthen risk posture',
    ],
  },
];

function DescriptionList({ description }) {
  const items = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];
  if (items.length === 0) return null;
  return (
    <ul className="mt-3 list-none space-y-2 pl-5 text-base leading-relaxed text-gray-600 marker:text-primary md:text-[17px]">
      {items.map((item, i) => (
        <li key={i}><BulletArrow/> {item}</li>
      ))}
    </ul>
  );
}

function BulletArrow() {
  return (
    <span className="text-primary">➢</span>
  )
}

function TimelineStep({ step, index, total }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isRight = index % 2 === 1;
  const hiddenState = isRight ? 'translate-x-10 opacity-0' : '-translate-x-10 opacity-0';
  const shownState = 'translate-x-0 opacity-100';

  return (
    <li className={`m-0 list-none p-0 md:col-span-1 ${isRight ? 'md:col-start-2' : 'md:col-start-1'}`}>
      <div ref={ref} className="relative">
        <div
          className={`relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-white to-secondary/25 p-6 shadow-sm transition-all duration-700 ease-out motion-reduce:transition-none md:p-8 ${
            visible ? shownState : hiddenState
          }`}
          style={{ transitionDelay: visible ? `${Math.min(index, 5) * 80}ms` : '0ms' }}
        >
          <div className="relative">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Stop {index + 1} of {total}
            </p>
            {(step.journeyHook || step.subtitle) && (
              <p className="mt-2 text-sm font-medium italic text-gray-500 md:text-base">
                {step.journeyHook || step.subtitle}
              </p>
            )}
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">{step.title}</h3>
            <DescriptionList description={step.description} />
          </div>
        </div>
      </div>
    </li>
  );
}

function ProcessTimeline({ steps = DEFAULT_STEPS }) {
  return (
    <div className="mx-auto mt-14 max-w-2xl md:max-w-6xl">
      <div className="mb-10 text-center">
        <p className="m-0 text-xl font-semibold uppercase tracking-[0.25em] text-primary">The journey with SnapRISK</p>
        <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
          Six stages : from first conversation to a lasting partnership. Scroll to follow the path.
        </p>
      </div>

      {/* Decorative path hint */}
      <div className="mb-8 flex justify-center md:mb-10" aria-hidden>
        <svg className="h-12 w-48 text-primary/20 md:w-64" viewBox="0 0 240 48" fill="none">
          <path
            d="M8 36C40 12 80 8 120 20s72 8 112-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 8"
          />
        </svg>
      </div>

      <ol className="relative m-0 grid list-none grid-cols-1 gap-y-6 p-0 md:grid-cols-2 md:gap-x-12 md:gap-y-8">
        <div
          className="pointer-events-none absolute bottom-2 left-1/2 top-2 hidden w-px -translate-x-1/2 bg-primary/20 md:block"
          aria-hidden
        />
        {steps.map((step, index) => (
          <TimelineStep
            key={step.title}
            step={step}
            index={index}
            total={steps.length}
          />
        ))}
      </ol>
    </div>
  );
}

export default ProcessTimeline;
