import '../../App.css';
import Navbar from '../../components/Navbar';
import TeamBlock from '../../components/TeamBlocks';
import TeamPhotoCarousel from '../../components/TeamPhotoCarousel';


const leadership = [
  {
    img: '/img/portraits/ellenMichael.jpeg',
    firstName: 'Ellen',
    lastName: 'Michael',
    linkedin: 'https://www.linkedin.com/in/ellenmariemichael/',
    shortDescription: `As President of SnapRISK, Ellen Marie Michael leads with over 30 years of experience in HPR account management, 
                  sales, and executive leadership.`,
    longDescription: `As President of SnapRISK, Ellen Marie Michael leads with over 30 years of experience in HPR account management, sales, and executive leadership. 
                  A former risk manager and seasoned industry executive, Ellen understands the challenges risk professionals face and turns that insight into practical, strategic 
                  guidance for clients and teams alike. Known for her passion for solving problems and elevating client service, Ellen combines deep technical knowledge with a 
                  results-driven mindset. Her leadership reflects the core of SnapRISK’s mission—to transform the complexity of property risk engineering into opportunity through 
                  technology, expertise, and partnership. Ellen’s energy, authenticity, and commitment to excellence inspire those around her, driving both client success and team 
                  growth.`,
    title: 'President',
    location: 'Phoenix, AZ'
  }, 
  {
    img: '/img/portraits/gregLindsley.jpg',
    firstName: 'Greg',
    lastName: 'Lindsley',
    linkedin: 'https://www.linkedin.com/in/greg-lindsley-5a12785/',
    shortDescription: `Gregory Lindsley is a Partner at SnapRISK, overseeing company growth and services provided to our clients.`,
    longDescription: `Gregory Lindsley is a Partner at SnapRISK, overseeing company growth and services provided to our clients. The procurement of 
                  new client relationships is an important part of our growth, while acting as a point for comprehensive information regarding services provided 
                  not only by SnapRISK but other partners as well as ours. Prior to joining SnapRISK, Mr. Lindsley was responsible for property loss control services 
                  at both Global Risk Consultants and Aon Risk Services of Minnesota. Most recently he served as EVP at First Onsite Restoration where he learned 
                  invaluable experiences with property mitigation/restoration services and processes in natural disaster area wide events.`,
    title: 'Partner',
    location: 'Phoenix, AZ'
  }, 
]

const sales = [
  {
    img: '/img/portraits/jerry_new.png',
    firstName: 'Jerry',
    lastName: 'Basta',
    linkedin: 'https://www.linkedin.com/in/jerry-basta-92729a7/',
    shortDescription: `Jerry Basta is an Account Manager and business development professional for SnapRISK.`,
    longDescription: `Jerry Basta is an Account Manager and business development professional for SnapRISK. In his current role he leads the international sales, 
                  marketing, and account management team, as well as managing supplier and partnership relationships. As Account Manager he assumes overall 
                  responsibility for customer satisfaction, service performance, delivery, and quality. He is also responsible for developing new business for
                  SnapRISK and new applications for the SnapRISK® technology platform.
                  Prior to joining SnapRISK, Mr. Basta held leadership roles at Global Risk Consultants, First Onsite Restoration and Willis (now Willis Towers Watson). 
                  His responsibilities included managing a global sales team, global account management and project management of multimillion dollar property claims. 
                  He also acted as project manager for research projects in fire protection technology, including large scale fire testing for the aerosol and consumer products industry.`,
    title: 'Executive Vice President',
    location: 'Ann Arbor, MI'
  }, 
  {
    img: '/img/portraits/paul_new.png',
    firstName: 'Paul',
    lastName: 'Fix',
    linkedin: 'https://www.linkedin.com/in/paul-fix-177bb460/',
    shortDescription: `Paul Fix is an Executive Vice President with SnapRISK and has extensive experience as a sales and account management executive.`,
    longDescription: `Paul Fix is an Executive Vice President with SnapRISK and has extensive experience as a sales and account management executive. 
                  He is well-connected throughout the global risk management and insurance community. His strengths include communication, collaboration, 
                  critical thinking, strategic vision and building relationships that last a lifetime. In his current role he will continue to expand the 
                  SnapRISK brand experience and delivery of innovative risk control services. Prior to joining SnapRISK, Mr. Fix held a variety of leadership 
                  roles in insurance (FM & IRI), brokerage (Aon), property risk control (Global Risk Consultants), restoration (First Onsite) and client servicing 
                  (all of the above). At GRC, he led the global sales team and was responsible for the overall growth, retention and development of risk control 
                  opportunities for his clients. Each of these experiences will be invaluable for him in his role at SnapRISK as we continue to grow and exceed expectations.`,
    title: 'Executive Vice President',
    location: 'Minneapolis, MN'
  }, 
  {
    img: '/img/portraits/jeff_new.png',
    firstName: 'Jeff',
    lastName: 'Nall',
    linkedin: 'https://www.linkedin.com/in/jeff-nall-p-e-a4847313/',
    shortDescription: 'Jeff is responsible for managing the core services delivered to individual clients and oversight of all activity.',
    longDescription: `Jeff is responsible for managing the core services
                  delivered to individual clients and oversight of all activity.
                  As an experienced leader of property risk control consulting services and a registered
                  professional engineer, Jeff is also responsible for marketing the services of SnapRISK® for client consulting
                  relationships. His areas of expertise include corporate program development, property insurance submittals,
                  complex risk consulting, quantitative risk assessment, and problem solving. In working with a major
                  beverage client, he gained extensive experience in innovative protection methods for flammable liquid
                  processing and storage, he also managed the publication of corporate standards.`,
    title: 'Executive Vice President',
    location: 'Atlanta, GA'
  }, 
  {
    img: '/img/portraits/aleacia_new.png',
    firstName: 'Aleacia',
    lastName: 'Perdomo',
    linkedin: 'https://www.linkedin.com/in/aleacia-perdomo-53b13521/',
    shortDescription: `Aleacia Perdomo leads the strategic vision and delivery of 
                    property engineering solutions and technology.`,
    longDescription: `Aleacia Perdomo leads the strategic vision and delivery of 
                    property engineering solutions and technology. She specializes in portfolios with significant natural 
                    catastrophe exposure, advancing the SnapRISK services that empower clients and their trusted advisors 
                    to achieve stronger, data-driven outcomes. Her leadership spans channel distribution, risk consulting, 
                    and client engagement initiatives. Based in Atlanta, Aleacia brings over 30 years of experience across 
                    the full risk ecosystem—including underwriting & distribution management at a leading global carrier, 
                    advisory roles at a premier risk consulting firm, and go-to-market strategy for a risk-tech platform. 
                    This diverse background fuels her commitment to delivering integrated, data-driven solutions for today’s 
                    dynamic risk environment utilizing the 
                    industry-leading SnapRISK® technology.`,
    title: 'Executive Vice President',
    location: 'Atlanta, GA'
  }, 
  {
    img: '/img/portraits/marco.png',
    firstName: 'Marco',
    lastName: 'Sobejano',
    linkedin: 'https://www.linkedin.com/in/marcosobejano/',
    shortDescription: `Marco Sobejano is the Managing Director for EMEA at SnapRISK, leading strategic growth and client engagement across Europe, 
                    the Middle East, and Africa.`,
    longDescription: `Marco Sobejano is the Managing Director for EMEA at SnapRISK, leading strategic growth and client engagement across Europe, 
                    the Middle East, and Africa. With a strong background in risk engineering and global insurance program management, Marco works 
                    closely with clients, brokers, and partners to deliver tailored, unbundled solutions that support long-term risk improvement. 
                    He plays a key role in expanding SnapRISK’s footprint in the region and ensuring that our services align with the evolving needs 
                    of both multinational and regional clients.`,
    title: 'Managing Director EMEA',
    location: 'Netherlands'
  }, 
]

const operations = [
  {
    img: '/img/portraits/kevinBeach.jpg',
    firstName: 'Kevin',
    lastName: 'Beach',
    linkedin: 'https://www.linkedin.com/in/kevin-beach-a6a4a9aa/',
    shortDescription: `Kevin attended the University of Illinois at Urbana-Champaign where he studied economics and computer
                  science, and has experience working in both the financial and insurance industries.`,
    longDescription: `Kevin attended the University of Illinois at Urbana-Champaign where he studied economics and computer
                  science, and has experience working in both the financial and insurance industries. Since joining the
                  team, Kevin has been continuously finding ways to integrate new technologies into SnapRISK® in order
                  to make data collection and data analysis more seamless and efficient. His main focuses include data
                  analytics, web development, and product innovation.`,
    title: 'Lead Developer',
    location: 'Phoenix, AZ'
  }, 
  {
    img: '/img/portraits/matthewMaday.jpg',
    firstName: 'Matthew',
    lastName: 'Maday',
    linkedin: 'https://www.linkedin.com/in/matthew-maday-981a46153/',
    shortDescription: `Matthew holds a bachelor’s degree from Oklahoma State University in fire protection and safety
                  engineering technology.`,
    longDescription: `Matthew holds a bachelor’s degree from Oklahoma State University in fire protection and safety
                  engineering technology. He began his career at FM Global as a field engineer and then as a licensed
                  adjuster. Since joining the team, Matthew has applied his practical experience and knowledge to help
                  innovate the way our clients approach property risk management. Matthew is focused on ensuring the
                  SnapRISK team efficiently and effectively meets all of our clients risk management needs.`,
    title: 'Director of Operations',
    location: 'Chicago, IL'
  }, 
  {
    img: '/img/portraits/annieTrapp.jpg',
    firstName: 'Annie',
    lastName: 'Trapp',
    linkedin: 'https://www.linkedin.com/in/annie-trapp/',
    shortDescription: 'Annie joined SnapRISK in 2019, working in client support and data analysis.',
    longDescription: `Annie joined SnapRISK in 2019, working in client support and data analysis. After receiving her
                    bachelor’s degree from Lee University in 2014, she worked in multiple industries throughout the
                    Cincinnati area with a focus in account management and client relations. At SnapRISK, Annie enjoys
                    working with a diverse client base, whether local or international. She is passionate about making
                    SnapRISK meet a client's needs to be helpful and effective.`,
    title: 'Client Success Manager',
    location: 'Cincinnati, OH'
  },
  {
    img: '/img/portraits/chrisPhillips.jpg',
    firstName: 'Chris',
    lastName: 'Phillips',
    linkedin: 'https://www.linkedin.com/in/christopher-l-phillips-2b2a615b/',
    shortDescription: `Christopher Lon Phillips is Director of Engineering at SnapRISK, where he leads risk assessment, 
    mitigation, and client education across a wide range of industries.`,
    longDescription: `Christopher Lon Phillips is Director of Engineering at SnapRISK, where he leads risk assessment, 
    mitigation, and client education across a wide range of industries. He brings extensive experience in fire and equipment 
    hazards, supporting clients with plan reviews, asset management strategies, and property loss prevention. Prior to 
    joining SnapRISK, Mr. Phillips held roles with several global engineering and property insurance firms, where he 
    managed accounts, conducted risk assessments, and led project follow-ups and loss investigations. Most recently, 
    he served as Service Director for an Asset Management and Reliability solution developed during COVID-related 
    supply chain disruptions, helping organizations optimize asset performance and reduce operating costs. `,
    title: 'Director of Engineering',
    location: 'Seattle, WA'
  },
  {
    img: '/img/portraits/terryChavez.jpeg',
    firstName: 'Terry',
    lastName: 'Chavez',
    linkedin: 'https://www.linkedin.com/in/terry-c-b72645319/',
    shortDescription: `Terence (Terry) Chavez is Senior Infrared Thermographer at SnapRISK, bringing over 20 years of experience in electrical safety and thermography.`,
    longDescription: `Terence (Terry) Chavez is Senior Infrared Thermographer at SnapRISK, bringing over 20 years of experience in electrical safety and thermography.
     He specializes in infrared surveys and inspections across industrial, commercial, and manufacturing environments, with deep expertise in electrical 
     power distribution and HVAC systems. A Certified General Electrician and ETR (Electro-Thermal Radiation) Specialist, Terry has supported high-stakes projects 
     globally, consistently prioritizing safety and efficiency. Prior to joining SnapRISK, Terry owned Omen Electrical Safety Consultants LLC, delivering 
     consulting and training services focused on electrical safety. He has also held senior roles at TÜV SÜD Global Risk Consultants and ABM Power LLC, 
     strengthening his experience in safety consulting and code compliance. Most recently, he has been recognized for his expertise in forensic analysis
      of PV power generation and solar array structures, while also serving as an FAA Certified Part 107 Drone Pilot, enhancing aerial inspection capabilities.
 `,
    title: 'Senior IR Thermographer',
    location: 'Virginia'
  }
]


function OurTeam() {
  return (
    <div className="app">
      <header className="hero" id="team">
        <Navbar />
      </header>

      <main className="content px-4 pb-14 md:px-8 md:pb-18">
        <section className="mx-auto mt-10 max-w-5xl rounded-3xl border border-white/10 bg-secondary p-8 shadow-2xl shadow-primary/10 md:mt-14 md:p-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Meet Our Team
          </p>
          <h1 className="mt-3 text-center text-4xl font-bold leading-tight text-primary md:text-5xl">
            A Proven Global Team
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-8 text-slate-100 md:text-lg">
            At SnapRISK, we have the most experienced GLOBAL team of skilled professionals in the
            industry.
          </p>
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-slate-950/40 p-6 md:p-8">
            {/* <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">A Proven Team</h2> */}
            <p className="mt-4 text-center text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              We&apos;re proud of the experience that our team brings to the table, and we&apos;re committed
              to using it to help our clients succeed and grow in their respective industries. Our global
              team consists of HPR consultants with decades of experience under their belt.
            </p>
          </div>
        </section>
      </main>

      <section>
        <h1 className="text-4xl font-bold text-center">Executive Leadership</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 px-24 py-12">
        {leadership.map(person => (
          <TeamBlock key={person.firstName} teammate={person} />
        ))}
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-center">Executive Sales & Account Management</h1>
        <div className="flex flex-wrap justify-center gap-6 px-24 py-12 md:gap-8">
          {sales.map((person) => (
            <div key={person.firstName} className="w-full md:w-[calc(33.333%-1.5rem)] max-w-sm">
              <TeamBlock teammate={person} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-center">Operations & Engineering</h1>
        <div className="flex flex-wrap justify-center gap-6 px-24 py-12 md:gap-8">
        {operations.map(person => (
          <div key= {person.firstName} className="w-full md:w-[calc(33.333%-1.5rem)] max-w-sm">
            <TeamBlock key={person.firstName} teammate={person} />
          </div>
        ))}
        </div>
      </section>

      <TeamPhotoCarousel />
    </div>
  );
}

export default OurTeam;
