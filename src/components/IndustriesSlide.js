const TOP_ITEMS = [
  'Aerospace and Aviation',
  'Food, Farm and Agriculture',
  'Automotive',
  'Construction',
  'Energy',
  'Entertainment',
  'Private Equity',
  'Financial Institutions',
  'Public Sector & K-12'
];

const BOTTOM_ITEMS = [
    'Healthcare',
    'Life Sciences',
    'Manufacturing',
    'Marine',
    'Real Estate and Hospitality',
    'Restaurant',
    'Semiconductor',
    'Senior Living',
    'Transportation and Logistics'
];

function CheckIcon() {
  return (
    <svg
      className="ml-3 h-4 w-4 shrink-0 text-primary/70"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function MarqueeTag({ label }) {
  return (
    <div className="flex shrink-0 items-center rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
      <p className="m-0 whitespace-nowrap text-sm text-gray-600 md:text-base">{label}</p>
      <CheckIcon />
    </div>
  );
}

function MarqueeRow({ items, durationSec, reverse }) {
  const loop = [...items, ...items];
  return (
    <div className={`industries-marquee overflow-hidden py-2 ${reverse ? 'industries-marquee--reverse' : ''}`}>
      <div
        className="industries-marquee-track"
        style={{ '--d': `${durationSec}s` }}
      >
        {loop.map((label, i) => (
          <MarqueeTag key={`${label}-${i}`} label={label} />
        ))}
      </div>
    </div>
  );
}

function IndustriesSlide() {
  return (
    <div className="mx-auto mb-12 w-full max-w-[min(100%,46rem)] px-5 md:max-w-[min(100%,62rem)] lg:max-w-[min(100%,80rem)]">
      <MarqueeRow items={TOP_ITEMS} durationSec={31.802} />
      <MarqueeRow items={BOTTOM_ITEMS} durationSec={37.802} reverse />
    </div>
  );
}

export default IndustriesSlide;
