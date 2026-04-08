import '../../App.css';
import Navbar from '../../components/Navbar';

function SnapIR() {
  return (
    <div className="app">
      <header className="hero" id="infrared">
        <Navbar />
      </header>
      <section className="flex items-center gap-8 px-10 py-12 lg:px-16">
        <div className="w-1/2 p-4 ml-4">
          <div className="relative mx-auto w-[88%]">
            <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-primary" />
            <img
              src="/img/solutions/IR_camera.png"
              alt="SnapIR"
              className="relative z-10 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900">SnapIR</h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-700">
            Using advanced thermal imaging, IR testing uncovers issues in electrical systems, roofing, mechanical components,
            and more-so you can act before they disrupt your operations. See the Unseen. Stop Problems Before They Start.
          </p>
          <button className="w-fit bg-primary text-white px-5 py-2.5 rounded-md font-medium transition-opacity hover:opacity-90">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default SnapIR;
