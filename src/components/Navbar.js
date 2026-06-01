import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import ReactiveHeaderHideOnDrag from './ReactiveHeader';

const solutionItems = [
  { to: '/solutions/hpr', label: 'HPR', description: ' Reduce High-Property Risks', icon: 'fa-solid fa-clipboard-check' },
  { to: '/solutions/snaprec', label: 'SnapREC®', description: 'Simplify Recommendation Tracking', icon: 'fa-solid fa-clipboard-list' },
  { to: '/solutions/snapcat', label: 'SnapCAT®', description: 'Organize Critical Asset Data', icon: 'fa-solid fa-cloud-bolt' },
  { to: '/solutions/snapcope', label: 'SnapCOPE®', description: 'Centralize Operational Insights', icon: 'fa-solid fa-magnifying-glass' },
  { to: '/solutions/snapir', label: 'SnapIR', description: 'Identify Thermal Issues Early', icon: 'fa-solid fa-temperature-full' },
  { to: '/solutions/snapvalues', label: 'SnapVALUES™', description: 'Measure Risk And Performance', icon: 'fa-solid fa-coins' },
  { to: '/solutions/self-e-audit', label: 'Self E-Audit®', description: 'Self-Guided Risk Assessment', icon: 'fa-solid fa-gears' },
  { to: '/solutions/snapalert', label: 'SnapALERT®', description: 'Platform-driven insights ', icon: 'fa-solid fa-triangle-exclamation' },
];

const technologyItems = [
  {
    to: '/technology/dashboard',
    label: 'Dashboard',
    description: 'Analyze and Track your Property Data',
    icon: 'fa-solid fa-chart-line',
  },
  {
    to: '/technology/ir-dashboard',
    label: 'IR Dashboard',
    description: 'Analyze and Track your IR Data',
    icon: 'fa-solid fa-chart-pie',
  },
  {
    to: '/technology/impairments',
    label: 'Impairments',
    description: 'Manage System Downtime with Visibility and Control',
    icon: 'fa-solid fa-triangle-exclamation',
  },
  {
    to: '/technology/hotwork',
    label: 'Hot Work',
    description: 'Prevent Loss Before It Happens',
    icon: 'fa-solid fa-fire',
  },
];

const aboutItems = [
  {
    to: '/about',
    label: 'About',
    description: 'View our Story',
    icon: 'fa-solid fa-circle-info',
  },
  {
    to: '/about/case-studies',
    label: 'Case Studies',
    description: 'See What Our Clients Are Saying',
    icon: 'fa-solid fa-book-open',
  },
  {
    to: '/about/team',
    label: 'Our Team',
    description: 'Take a Look at Our Team',
    icon: 'fa-solid fa-users',
  },
  {
    to: '/about/careers',
    label: 'Careers',
    description: 'Join our Professional Team',
    icon: 'fa-solid fa-briefcase',
  },
];

export function useHideOnScroll() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible;
}

function MegaMenuItem({ item }) {
  return (
    <Link
      to={item.to}
      role="menuitem"
      className="group/item flex gap-3 rounded-lg px-3 py-2.5 no-underline transition-colors hover:bg-primary/5 border m-1 hover:border-primary"
    >
      {item.icon && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm text-primary">
          <i className={item.icon} aria-hidden="true" />
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-snug text-gray-900 group-hover/item:text-primary">
          {item.label}
        </span>
        {item.description && (
          <span className="mt-0.5 block text-xs leading-snug text-gray-500">{item.description}</span>
        )}
      </span>
    </Link>
  );
}

function DesktopDropdown({ label, to, items, linkClass, columns = 2, align = 'left', viewAllLabel }) {
  const panelWidth = columns === 2 ? 'w-[34rem] max-w-[min(34rem,calc(100vw-2rem))]' : 'w-[18rem] max-w-[min(18rem,calc(100vw-2rem))]';
  const footerText = viewAllLabel ?? `View all ${label.toLowerCase()}`;

  return (
    <Popover className="group relative">
      <PopoverButton
        className={`${linkClass} inline-flex items-center gap-1.5 snaprisk-font popover-element`}
        aria-haspopup="true"
      >
        {label}
        <i
          className="fa-solid fa-chevron-down text-[0.55rem] opacity-60 transition-transform duration-200"
          aria-hidden="true"
        />
      </PopoverButton>
      <div
        className={`absolute top-full z-50 hidden pt-2 group-hover:block group-focus-within:block ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
      >
        <PopoverPanel
          role="menu"
          aria-label={label}
          className={`${panelWidth} overflow-hidden rounded-xl border border-primary/15 bg-white p-2 shadow-[0_16px_40px_rgba(15,23,42,0.12)]`}
        >
          <div className={columns === 2 ? 'grid grid-cols-2 gap-0.5' : 'flex flex-col gap-0.5'}>
            {items.map(item => (
              <MegaMenuItem key={item.to} item={item} />
            ))}
          </div>
          {label != "ABOUT" && (
            <div className="mt-1 border-t border-primary/10 px-3 py-2.5">
            <Link
              to={to}
              role="menuitem"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary no-underline transition-colors hover:text-primary/80"
            >
              {footerText}
              <i className="fa-solid fa-arrow-right text-[0.6rem]" aria-hidden="true" />
            </Link>
          </div>
          )}
        </PopoverPanel>
      </div>
    </Popover>
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
          <i className={`fa-solid ${open ? 'fa-chevron-up' : 'fa-chevron-down'} text-primary`} aria-hidden="true" />
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
  const visible = useHideOnScroll();

  const linkClass =
    'text-primary no-underline transition-colors hover:underline font-semibold';

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
    // <ReactiveHeaderHideOnDrag>
    <nav className="relative z-40 w-full px-4 py-3 md:px-6 md:py-4" style={{
      transform: visible ? "translateY(0)" : "translateY(-100%)",
      transition: "transform 0.3s ease",
    }}>
      <div className="mx-auto max-w-6xl">
        {/* Mobile + tablet bar: logo left, menu right */}
        <div className="flex items-center justify-between md:hidden">
          <Link to="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <img src="/img/snaprisk_logo.png" alt="SnapRISK" className="block h-14 w-auto" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary text-primary transition-colors hover:bg-primary/10"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <i
              className={`fa-solid text-xl text-primary ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}
              aria-hidden="true"
            />
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
            />
            <DesktopDropdown
              label="TECHNOLOGY"
              to="/technology"
              items={technologyItems}
              linkClass={linkClass}
              columns={1}
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
              columns={1}
              align="right"
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
    // </ReactiveHeaderHideOnDrag>
  );
}

export default Navbar;
