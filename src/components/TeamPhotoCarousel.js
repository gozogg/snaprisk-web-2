import { useEffect, useMemo, useState } from 'react';

const TEAM_PHOTO_FILES = [
  'Ingmar_chris_holland.jpg',
  'team_new.png',
  'Pump Testing 1 .jpg',
  'terry_ir_2.jpg',
  'terry_ir.jpg',
  'jeff_chris_atlanta.jpg',
  'TransformerClass .jpg',
  'snaprisk_at_cubbies.jpg',
  'Fire Pump testing 3 .jpg',
  'alisha_field.jpeg',
  'Terry IR Work .jpg',
  'theo_field.jpg',
  'olivia_greg_alisha_chris.jpg'
];

function formatCaption(filename) {
  return filename.replace(/\.[^/.]+$/, '').replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

export default function TeamPhotoCarousel() {
  const photos = useMemo(
    () =>
      TEAM_PHOTO_FILES.map((name) => ({
        src: `/img/team_pics/${encodeURIComponent(name)}`,
        alt: `SnapRISK team: ${formatCaption(name)}`,
        caption: formatCaption(name),
      })),
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [photos.length]);

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 pb-20 md:px-8">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-900/55 p-5 shadow-2xl shadow-primary/10 md:p-8">
        <div className="mb-5 text-center md:mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Team In Action</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Around The World With SnapRISK</h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            className="h-[260px] w-full bg-black/40 object-contain transition-opacity duration-500 sm:h-[340px] md:h-[460px]"
          />

          <button
            type="button"
            onClick={showPrev}
            aria-label="Show previous team photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 px-3 py-2 text-white transition hover:bg-black/65"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Show next team photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 px-3 py-2 text-white transition hover:bg-black/65"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-8 text-sm text-slate-200">
            {photos[activeIndex].caption}
          </div> */}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:mt-6">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to photo ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-white/35 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
