import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
];

const aboutItems = [
  { to: '/about/case-studies', label: 'Case Studies' },
  { to: '/about/team', label: 'Our Team' },
  { to: '/about/careers', label: 'Careers' },
];

function DesktopDropdown({ label, to, items, linkClass, dropdownLinkClass }) {
  return (
    <li className="group relative">
      <Link to={to} className={`${linkClass} inline-flex items-center gap-1`} aria-haspopup="true">
        {label}
      </Link>
      <div className="absolute left-0 top-full z-50 hidden min-w-[14rem] pt-1 group-hover:block group-focus-within:block">
        <ul
          className="m-0 list-none rounded-md border border-white/15 bg-primary py-2 shadow-lg"
          role="menu"
          aria-label={label}
        >
          {items.map(item => (
            <li key={item.to} role="none">
              <Link to={item.to} className={dropdownLinkClass} role="menuitem">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobileNavSection({ title, to, items, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-primary/10">
      <div className="flex items-center justify-between">
        <Link
          to={to}
          onClick={onNavigate}
          className="flex-1 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary no-underline ml-5"
        >
          {title}
        </Link>
        <button
          type="button"
          className="px-4 py-3 text-primary"
          aria-expanded={open}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${title} menu`}
          onClick={() => setOpen(prev => !prev)}
        >
          <i className={`fa-solid ${open ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true" />
        </button>
      </div>
      {open && (
        <ul className="m-0 list-none bg-secondary/40 pb-2">
          {items.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onNavigate}
                className="block px-4 py-2.5 text-sm text-gray-700 no-underline transition-colors hover:bg-white/80"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass =
    'text-primary no-underline transition-colors hover:text-slate-300 font-semibold';

  const dropdownLinkClass =
    'block px-4 py-2 text-sm text-white no-underline transition-colors hover:bg-black/20';

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav className="relative z-40 w-full px-4 py-3 md:px-6 md:py-4">
      <div className="mx-auto max-w-6xl">
        {/* Mobile + tablet bar: logo left, menu right */}
        <div className="flex items-center justify-between md:hidden">
          <Link to="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <img src="/img/snaprisk_logo.png" alt="SnapRISK" className="block h-14 w-auto" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary/25 text-primary transition-colors hover:bg-primary/10"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <i className={`fa-solid text-xl ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-nav-menu"
          className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="mt-3 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-xl border border-primary/15 bg-white/95 shadow-lg backdrop-blur-sm">
            <MobileNavSection
              title="Solutions"
              to="/solutions"
              items={solutionItems}
              onNavigate={closeMenu}
            />
            <MobileNavSection
              title="Technology"
              to="/technology"
              items={technologyItems}
              onNavigate={closeMenu}
            />
            <MobileNavSection title="About" to="/about" items={aboutItems} onNavigate={closeMenu} />
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block bg-primary px-4 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white no-underline transition-opacity hover:opacity-90"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:grid md:w-full md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
          <ul className="m-0 flex list-none flex-wrap items-center justify-start gap-6">
            <DesktopDropdown
              label="SOLUTIONS"
              to="/solutions"
              items={solutionItems}
              linkClass={linkClass}
              dropdownLinkClass={dropdownLinkClass}
            />
            <DesktopDropdown
              label="TECHNOLOGY"
              to="/technology"
              items={technologyItems}
              linkClass={linkClass}
              dropdownLinkClass={dropdownLinkClass}
            />
          </ul>

          <Link to="/" className="flex items-center justify-center justify-self-center">
            <img src="/img/snaprisk_logo.png" alt="SnapRISK" className="block h-24 w-auto" />
          </Link>

          <ul className="m-0 flex list-none flex-wrap items-center justify-end gap-6 justify-self-end">
            <DesktopDropdown
              label="ABOUT"
              to="/about"
              items={aboutItems}
              linkClass={linkClass}
              dropdownLinkClass={dropdownLinkClass}
            />
            <li>
              <Link
                to="/contact"
                className="rounded-md bg-primary px-4 py-2.5 font-semibold text-white no-underline transition-opacity hover:opacity-90"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
