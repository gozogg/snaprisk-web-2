import '../App.css';
import Navbar from '../components/Navbar';
import ProcessTimeline from '../components/ProcessTimeline';
import IndustriesSlide from '../components/IndustriesSlide';
import ProcessBlocks from '../components/ProcessBlocks';
import NextSteps from '../components/NextSteps';

function Home() {
  return (
    <div className="app">
      <header className="hero" id="home">
        <Navbar />
      </header>
      <section
        className="relative flex min-h-[min(75vh,48rem)] w-full flex-col overflow-hidden"
      >
        {/* <video
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/img/home/home_video_3.mp4" type="video/mp4" />
        </video> */}
        <img
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          src="img/home/video.gif"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden>
        </img>
        <div className="relative z-10 flex flex-1 flex-col items-start justify-start px-6 pb-14 pt-10 text-left md:px-16 md:pb-20 md:pt-14 lg:px-20">
          <h1 className="m-0 text-4xl font-bold tracking-tight text-primary drop-shadow-md md:text-6xl">
            SnapRISK
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary/95 drop-shadow md:mt-8 md:text-xl">
            SnapRISK is a global technology company specializing in risk engineering. We transform
            the complexity of property risk engineering into opportunity by combining technology,
            expertise, and partnership.
          </p>
          <button className="mt-6 w-fit bg-primary text-white px-5 py-2.5 rounded-md font-medium transition-opacity hover:opacity-90">Learn more</button>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <ProcessTimeline />
        </div>
      </section>

      {/* <section>
        <div className="mx-auto max-w-6xl">
          <ProcessTimelineCircles />
        </div>
      </section> */}

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
