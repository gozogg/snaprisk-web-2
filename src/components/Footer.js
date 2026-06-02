import { Link } from 'react-router-dom';

const FOOTER_WAVES_SRC = `${process.env.PUBLIC_URL}/img/waves_blue.png`;

const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/solutions' },
  { label: 'Careers', to: '/about/careers' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
];

const CONTACT_ITEMS = [
  {
    icon: 'fa-solid fa-user-plus',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/snaprisk',
    external: true,
  },
  {
    icon: 'fa-solid fa-envelope',
    label: 'contact@snaprisk.com',
    href: 'mailto:contact@snaprisk.com',
  },
  {
    icon: 'fa-solid fa-phone',
    label: '(817) 608-7818',
    href: 'tel:+18176087818',
  },
];

const footerLinkClass = 'text-gray-400 transition-colors hover:text-white hover:underline';

function FooterLink({ item }) {
  if (item.to) {
    return (
      <Link to={item.to} className={footerLinkClass}>
        {item.label}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      className={footerLinkClass}
      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {item.label}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-900">
      <img
        src={FOOTER_WAVES_SRC}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden w-full select-none lg:block opacity-40"
      />

      <div className="relative z-10 bg-slate-900 lg:bg-transparent">
        <div className="container mx-auto w-full p-4 sm:p-6">
          <div className="md:flex md:justify-between">
            <div className="flex md:w-1/2">
              <div className="mb-6 md:mb-0">
                <Link to="/" className="flex items-center">
                  <img
                    src="/img/solutionLogos/flame.png"
                    className="mr-3 h-10 w-auto"
                    alt=""
                  />
                  <span className="mt-1 self-center whitespace-nowrap text-3xl font-medium snaprisk-font text-white">
                    SnapRISK
                  </span>
                </Link>
                <div>
                  <p className="mt-4 text-sm font-semibold text-gray-400">*Our new mailing address:</p>
                  <p className="text-sm font-semibold text-gray-400">3304 W. 5th Street</p>
                  <p className="mb-6 text-sm font-semibold text-gray-400">Fort Worth, TX 76107</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
              <div className="md:pl-10">
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Quick Links</h2>
                <ul className="m-0 list-none p-0">
                  {QUICK_LINKS.map(link => (
                    <li key={link.to} className="mb-4 last:mb-0">
                      <FooterLink item={link} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                <ul className="m-0 list-none p-0">
                  {LEGAL_LINKS.map(link => (
                    <li key={link.label} className="mb-4 last:mb-0">
                      <FooterLink item={link} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contact us</h2>
                <ul className="m-0 list-none p-0 text-gray-400">
                  {CONTACT_ITEMS.map(item => (
                    <li key={item.href} className="mb-4 last:mb-0">
                      <div className="flex flex-row items-center">
                        <i className={`${item.icon} mr-2`} aria-hidden="true" />
                        <FooterLink item={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-gray-400 sm:text-center">
              © {year}{' '}
              <a href="https://snaprisk.com/" className="hover:underline">
                SnapRISK
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
