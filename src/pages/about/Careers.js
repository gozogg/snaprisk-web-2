import '../../App.css';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const JOIN_REASONS = [
  {
    title: 'Growth Opportunities',
    description:
      'Unlock your full potential with our organization, we offer many opportunities for professional growth and development.',
  },
  {
    title: 'Innovative Environment',
    description:
      'Join our team and be part of a dynamic and innovative work culture that encourages creativity and forward thinking.',
  },
  {
    title: 'Work-Life Balance',
    description:
      'We value work-life balance and strive to create a supportive environment where you can excel in your career while maintaining a fulfilling personal life.',
  },
];

function Careers() {
  return (
    <div className="app">
      <header className="hero" id="careers">
        <Navbar />
      </header>

      <main className="px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:mt-12 md:p-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Careers</p>
          <h1 className="mt-3 text-center text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Why join the SnapRISK Team?
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
            Join a team that is transforming the future of risk. At SnapRISK, we are always looking for driven,
            innovative professionals ready to make an impact. Explore our open roles and discover where your next
            illustrious career move begins.
          </p>
        </section>

        <section className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-3">
          {JOIN_REASONS.map(reason => (
            <article key={reason.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Why SnapRISK</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">{reason.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700">{reason.description}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-12 max-w-6xl rounded-3xl border border-primary/20 bg-white p-8 shadow-sm md:p-10">
          <div className="absolute rounded-full bg-primary/10 blur-2xl" />
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Open Roles</p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Come Join our Team
          </h2>
          {/* <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-700">
            Join our team of 
          </p> */}

          <article className="mx-auto mt-8 max-w-4xl rounded-2xl border border-gray-200 bg-secondary p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-3 border-b border-primary/15 pb-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Role</p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">Property Risk Consultant</h3>
                <p className="mt-2 text-sm text-gray-600">Engineering | Remote | Full-time</p>
              </div>
              <Link to={`/contact?type=careers&role=Property%20Risk%20Consultant`}>
                <button className="w-fit rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90">
                  Apply Now
                </button>
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-gray-700">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">About the Role</h4>
                <p className="mt-2 leading-relaxed">
                The SnapRISK Risk Consultant position will assist clients in physically protecting industrial and commercial properties against fire, explosion, collapse, mechanical, electrical, and natural hazards. They will utilize the SnapRISK® app to complete site surveys, develop recommendations, manage projects, and provide reports to help clients mitigate risk at their facilities.
                </p>
              </div>

              {/* <div>
                <h4 className="text-lg font-semibold text-gray-900">What You&apos;ll Do</h4>
                <ul className="mt-2 list-none space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">➢</span>
                    <span>[Responsibility 1]</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">➢</span>
                    <span>[Responsibility 2]</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">➢</span>
                    <span>[Responsibility 3]</span>
                  </li>
                </ul>
              </div> */}
{/* 
              <div>
                <h4 className="text-lg font-semibold text-gray-900">What You Bring</h4>
                <ul className="mt-2 list-none space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">➢</span>
                    <span>[Requirement or qualification 1]</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">➢</span>
                    <span>[Requirement or qualification 2]</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">➢</span>
                    <span>[Requirement or qualification 3]</span>
                  </li>
                </ul>
              </div> */}

              {/* <div>
                <h4 className="text-lg font-semibold text-gray-900">Benefits</h4>
                <p className="mt-2 leading-relaxed">
                  [List compensation range, benefits, flexible work options, and any unique perks.]
                </p>
              </div> */}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Careers;
