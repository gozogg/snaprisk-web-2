import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/solutions' },
  { label: 'Careers', to: '/about/careers' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: 'https://snaprisk.com/privacy.html' },
  { label: 'Terms & Conditions', href: 'https://snaprisk.com/termsandconditions.html' },
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
    <footer className="bg-slate-900">
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
            <div className="sm:ml-auto sm:text-right md:self-center lg:ml-5 lg:self-start">
              <img
                src="/img/SBE_footer_logo.png"
                className="h-20 object-cover md:h-12 lg:h-20"
                alt="Women's Business Enterprise certification"
              />
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
                  <li key={link.href} className="mb-4 last:mb-0">
                    <FooterLink item={{ ...link, external: true }} />
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

        <div className="pt-6">
          <p className="text-sm text-gray-400 sm:text-center">
            Carrington Risk Consulting LLC, doing business as SnapRISK, is proud to be a woman-founded,
            female-run business. We support and align with the mission of the Women&apos;s Business Enterprise
            National Council (WBENC), the nation&apos;s largest certifier of women-owned businesses. We are also
            a certified Small Business Enterprise with the Florida State Minority Supplier Development Council.
            We recognize the importance of supplier diversity embraced by today&apos;s leading corporations and
            government agencies—and we&apos;re ready to help strengthen your supply chain through inclusive
            partnerships.
          </p>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

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
    </footer>
  );
}
