const CIRCLE_STEPS = [
  {
    title: 'Discover',
    details: [
      'Portfolio review and initial conversations',
      'Identify missing or outdated risk data',
      'Align on underwriting and visibility goals',
    ],
  },
  {
    title: 'Capture',
    details: [
      'Onsite HPR surveys or remote audits',
      'Mobile-first data capture and validation',
      'Fast collection without manual paperwork',
    ],
  },
  {
    title: 'Structure',
    details: [
      'Build digital property profiles',
      'Standardize COPE and NatCat inputs',
      'Prepare model-ready datasets',
    ],
  },
  {
    title: 'Visualize',
    details: [
      'Map portfolio risk across locations',
      'Overlay hazards and concentrations',
      'Highlight trends and blind spots',
    ],
  },
  {
    title: 'Act',
    details: [
      'Deliver reports instantly',
      'Track recommendations and outcomes',
      'Prioritize the highest-impact actions',
    ],
  },
  {
    title: 'Optimize',
    details: [
      'Keep data updated over time',
      'Support renewal and underwriting strategy',
      'Continuously improve risk posture',
    ],
  },
];

function ProcessTimelineCircles({ steps = CIRCLE_STEPS }) {
  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="mb-10 text-center">
        <p className="m-0 text-xl font-semibold uppercase tracking-[0.25em] text-primary">The journey with SnapRISK</p>
        <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
          Six stages : from first conversation to a lasting partnership.
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
      <div className="flex gap-5 overflow-x-auto px-1 pb-4 pt-2 md:justify-between md:overflow-visible">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center gap-3">
            <div className="group relative shrink-0 md:shrink">
              <button
                type="button"
                className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white p-4 text-center text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 md:h-36 md:w-36 md:text-base"
              >
                <span
                  className="pointer-events-none absolute inset-0 flex items-center justify-center text-6xl font-bold leading-none text-primary/10 md:text-7xl opacity-30"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <span className="relative z-10 uppercase">
                  {step.title}
                </span>
              </button>

              <div className="pointer-events-none absolute left-1/2 top-[105%] z-20 w-64 -translate-x-1/2 rounded-xl border border-primary/20 bg-white p-4 text-left opacity-0 shadow-xl transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <p className="m-0 text-sm font-semibold text-primary">{step.title}</p>
                <ul className="mb-0 mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                  {step.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {index < steps.length - 1 && (
              <svg
                className="h-6 w-6 shrink-0 text-primary/60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M4 12h16M14 7l6 5-6 5" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-sm text-gray-500 md:hidden">
        Swipe horizontally and hover/tap each circle for details.
      </p>
    </div>
  );
}

export default ProcessTimelineCircles;
