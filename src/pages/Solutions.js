import '../App.css';
import Navbar from '../components/Navbar';
import DPPArrows from '../components/DPPArrows';
import CircularGallery from '../components/CircularGallery';

function FlameBullet({ className = '' }) {
  return (
    <img
      src="/img/solutionLogos/flame.png"
      alt=""
      className={`mt-0.5 h-5 w-5 shrink-0 object-contain md:h-6 md:w-6 ${className}`}
      width={24}
      height={24}
    />
  );
}

function Solutions() {
  return (
    <div className="app">
      <header className="hero" id="services">
        <Navbar />
      </header>

      <main className="flex flex-col mt-8">
        <h1 className="text-4xl font-bold text-center">The SnapRISK Solution</h1>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-gray-600 md:text-lg">For almost two decades, SnapRISK has been redefining how property risks are managed—leading with our powerful SnapCAT platform and unmatched HPR 
          property risk engineering solutions. From streamlining data capture to delivering high-impact insights, we help clients tackle their toughest risk challenges with speed, precision, and confidence. <span className="font-bold">Whether you're in need of one, or multiple solutions, you can custom create your digital property portfolio.</span></p>
      </main>

      {/* <div style={{ height: '600px', position: 'relative' }} className="mt-0">
        <CircularGallery bend={3} textColor="" borderRadius={0.05} scrollEase={0.02}
            scrollSpeed={2} imageFit='cover'
          />
      </div> */}

      <section className="flex flex-row w-full justify-center px-4 md:px-8  items-center">
        <div className="w-full max-w-[720px] sm:max-w-[820px] md:max-w-[960px] lg:max-w-[1100px] xl:max-w-[1200px] w-2/3">
          <DPPArrows />
        </div>
        <div class="bg-white rounded-2xl p-8 shadow-[0_4px_20px_#c026d3] mx-auto max-w-screen-xl w-1/3">
                <div class="flex flex-col md:flex-row items-center">
                  
                  <div class="w-full px-4">
                    <div class="grid  mx-auto">
                      <div class="col-span-12 2xl:col-span-7 z-40">
                        <h1 class="text-md font-bold text-fuchsia-500 mb-2">Digital Property Profile®</h1>
                        <h1 class="text-5xl inter font-extrabold text-gray-800">Create your Digital Property Profile</h1>
                        <p class="inter text-600 pt-10">One of the distinct ways SnapRISK stands apart from traditional property engineering firms is through our 
                          <span class="italics"> proprietary </span><span class="font-bold">Digital Property Profile® (DPP)</span>—a dynamic, data-rich view of your property’s risk, accessible  
                          <span class="font-bold"> 24/7 by both clients and brokers</span> through our secure app.</p>
                        <h1 class="text-2xl inter font-extrabold text-gray-800 pb-6 text-left pt-8">The Result?</h1>
                        <div class="space-y-4">
                          <p class="inter text-md text-gray-600"><i class="fa-solid fa-circle pr-2" ></i>Data rich underwriting market reports</p>
                          <p class="inter text-md text-gray-600"><i class="fa-solid fa-circle pr-2" ></i>Reduced manual effort</p>
                          <p class="inter text-md text-gray-600"><i class="fa-solid fa-circle pr-2" ></i>Stronger insurance outcomes</p>
                          <p class="inter text-md text-gray-600"><i class="fa-solid fa-circle pr-2" ></i>A measurable return on investment</p>
                        </div>
                        <p className="mx-auto mt-10 max-w-4xl text-center text-gray-600 md:text-lg italic">Click on each solution to learn more!</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
      </section>

      <section className="mx-auto flex w-full flex-col items-center gap-8 px-6 md:flex-row md:items-start md:gap-10 lg:px-48 py-8 bg-secondary">
        <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold text-gray-900">The SnapRISK Solution</h2>
        <ul className="m-0 mt-6 list-none space-y-4 p-0">
          <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
            <FlameBullet />
            <span>Digital platform that streamlines scheduling, managing, and tracking property inspections across locations</span>
          </li>
          <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
            <FlameBullet />
            <span>Standardized, high-quality reporting with clear, actionable recommendations for risk mitigation</span>
          </li>
          <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
            <FlameBullet />
            <span>
              Global network of engineers supporting insurers, brokers, and corporate risk managers with multi-location
              portfolios.
            </span>
          </li>
          <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
            <FlameBullet />
            <span>Scalable and cost-efficient delivery model compared to traditional property engineering approaches.</span>
          </li>
          <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
            <FlameBullet />
            <span>
              Consistent methodology and documentation providing reliable data and analytics to prioritize risk initiatives.
            </span>
          </li>
          <li className="flex gap-3 text-base leading-relaxed text-gray-700 md:text-lg">
            <FlameBullet />
            <span>Proactive risk insights that strengthen protection strategies and help prevent losses before they occur.</span>
          </li>
        </ul>
        </div>
        <div className="">
          <img
          src="/img/solutionLogos/snappy_purple.png"
          alt=""
          className="h-auto w-40 shrink-0 md:w-48 lg:w-96"
          />
        </div>
      </section>

    </div>
  );
}

export default Solutions;
