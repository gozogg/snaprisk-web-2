import { Link } from 'react-router-dom';

function Navbar() {
  const linkClass =
    'text-primary no-underline transition-colors hover:text-slate-300 font-semibold';

  const dropdownLinkClass =
    'block px-4 py-2 text-sm text-white no-underline transition-colors hover:bg-black/20';

  const solutionItems = [
    { to: '/solutions/hpr', label: 'HPR' },
    { to: '/solutions/snaprec', label: 'SnapREC®' },
    { to: '/solutions/snapcat', label: 'SnapCAT®' },
    { to: '/solutions/snapcope', label: 'SnapCOPE®' },
    { to: '/solutions/snapir', label: 'SnapIR' },
    { to: '/solutions/snapvalues', label: 'SnapVALUES™' },
    { to: '/solutions/self-e-audit', label: 'Self E-Audit®' },
    { to: '/solutions/snapalert', label: 'SnapALERT®' },
  ];

  const technologyItems = [
    { to: '/technology/dashboard', label: 'Dashboard' },
    { to: '/technology/ir-dashboard', label: 'IR Dashboard' },
    { to: '/technology/impairments', label: 'Impairments' },
    { to: '/technology/hotwork', label: 'Hot Work' },
    { to: '/technology/platform', label: 'Platform' },
  ]

  const aboutItems = [
    { to: '/about/case-studies', label: 'Case Studies' },
    { to: '/about/team', label: 'Our Team' },
    { to: '/about/careers', label: 'Careers' }, 
    // { to: '/about/resources', label: 'Resources' }
  ]

  return (
    <nav
      className="w-full px-6 py-4 text-white"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr] max-sm:justify-items-center">
        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-6 max-sm:order-2 sm:justify-self-start">
          <li className="relative group">
            <Link
              to="/solutions"
              className={`${linkClass} inline-flex items-center gap-1`}
              aria-haspopup="true"
            >
              SOLUTIONS
            </Link>
            {/* pt-1 bridges hover gap between trigger and menu */}
            <div className="absolute left-0 top-full z-50 hidden min-w-[14rem] pt-1 group-hover:block group-focus-within:block">
              <ul
                className="m-0 list-none rounded-md border border-white/15 bg-primary py-2 shadow-lg"
                role="menu"
                aria-label="Solutions"
              >
                {solutionItems.map((item) => (
                  <li key={item.to} role="none">
                    <Link to={item.to} className={dropdownLinkClass} role="menuitem">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="relative group">
            <Link
              to="/technology"
              className={`${linkClass} inline-flex items-center gap-1`}
              aria-haspopup="true"
            >
              TECHNOLOGY
            </Link>
            {/* pt-1 bridges hover gap between trigger and menu */}
            <div className="absolute left-0 top-full z-50 hidden min-w-[14rem] pt-1 group-hover:block group-focus-within:block">
              <ul
                className="m-0 list-none rounded-md border border-white/15 bg-primary py-2 shadow-lg"
                role="menu"
                aria-label="Technology"
              >
                {technologyItems.map((item) => (
                  <li key={item.to} role="none">
                    <Link to={item.to} className={dropdownLinkClass} role="menuitem">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <Link
          to="/"
          className="flex items-center justify-center max-sm:order-1 sm:justify-self-center"
        >
          <img
            src="/img/snaprisk_logo.png"
            alt="SnapRisk"
            className="block h-24 w-auto"
          />
        </Link>

        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-6 max-sm:order-3 sm:justify-self-end">
        <li className="relative group">
            <Link
              to="/about"
              className={`${linkClass} inline-flex items-center gap-1`}
              aria-haspopup="true"
            >
              ABOUT
            </Link>
            {/* pt-1 bridges hover gap between trigger and menu */}
            <div className="absolute left-0 top-full z-50 hidden min-w-[14rem] pt-1 group-hover:block group-focus-within:block">
              <ul
                className="m-0 list-none rounded-md border border-white/15 bg-primary py-2 shadow-lg"
                role="menu"
                aria-label="About"
              >
                {aboutItems.map((item) => (
                  <li key={item.to} role="none">
                    <Link to={item.to} className={dropdownLinkClass} role="menuitem">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <button className="bg-primary text-white px-4 py-2 rounded-md text-white">
              <Link to="/contact">CONTACT</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
