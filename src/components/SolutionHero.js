import Navbar from './Navbar';
import LearnMore from './LearnMore';
import RequestDemo from './RequestDemo';
import HeroStagger, { HeroStaggerItem } from './HeroStagger';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '../motion/variants';

function HeroImage({ imageSrc, imageAlt }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="order-2 w-full lg:order-1 lg:w-1/2"
      variants={fadeUp}
      initial={reducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:w-[88%] lg:max-w-none">
        <div className="absolute -bottom-5 -left-5 h-20 w-20 bg-primary sm:-bottom-8 sm:-left-8 sm:h-32 sm:w-32 lg:-bottom-10 lg:-left-10 lg:h-40 lg:w-40" />
        <img
          src={imageSrc}
          alt={imageAlt}
          className="relative z-10 w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </motion.div>
  );
}

export default function SolutionHero({
  pageId,
  imageSrc,
  imageAlt,
  title,
  description,
  solution,
  showLearnMore = true,
}) {
  return (
    <>
      <header className="hero" id={pageId}>
        <Navbar />
      </header>
      <section className="px-4 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-4 md:px-10 lg:px-16 lg:py-12" data-no-reveal>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-10 lg:flex-row lg:items-center">
          <HeroImage imageSrc={imageSrc} imageAlt={imageAlt} />

          <HeroStagger className="order-1 flex w-full flex-col justify-start space-y-3 sm:space-y-4 lg:order-2 lg:w-1/2 lg:justify-center lg:space-y-5">
            <HeroStaggerItem>
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:tracking-[0.2em]">
                Solutions
              </p>
            </HeroStaggerItem>
            <HeroStaggerItem>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                {title}
              </h1>
            </HeroStaggerItem>
            <HeroStaggerItem>
              <p className="max-w-xl text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed lg:text-lg">
                {description}
              </p>
            </HeroStaggerItem>
            <HeroStaggerItem>
              <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
                {showLearnMore && <LearnMore solution={solution} />}
                <RequestDemo solution={solution} />
              </div>
            </HeroStaggerItem>
          </HeroStagger>
        </div>
      </section>
    </>
  );
}
