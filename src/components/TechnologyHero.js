import Navbar from './Navbar';
import RequestDemo from './RequestDemo';

export default function TechnologyHero({
  pageId,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  solution,
  extraParagraph,
}) {
  return (
    <>
      <header className="hero relative z-30" id={pageId}>
        <Navbar />
      </header>
      <section className="px-4 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-4 md:px-10 lg:px-16 lg:py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:gap-10 lg:grid-cols-[1.12fr_1fr] lg:items-center">
          <div className="order-1 lg:order-2">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:tracking-[0.2em]">
              Technology
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-lg font-medium leading-snug text-primary sm:text-xl md:text-2xl">
                {subtitle}
              </p>
            )}
            <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:mt-6 sm:text-base md:text-lg">
              {description}
            </p>
            {extraParagraph && (
              <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
                {extraParagraph}
              </p>
            )}
            <div className="mt-6 sm:mt-8">
              <RequestDemo solution={solution} />
            </div>
          </div>

          <div className="order-2 w-full lg:order-1">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:w-[80%] lg:max-w-none">
              <div className="absolute -bottom-5 -right-5 h-20 w-20 bg-primary sm:-bottom-8 sm:-right-8 sm:h-32 sm:w-32 lg:-bottom-10 lg:-right-10 lg:h-40 lg:w-40" />
              <img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
