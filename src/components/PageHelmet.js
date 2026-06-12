import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://snaprisk.com';

export default function PageHelmet({ title, description, path }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE_URL}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}${path}`} />
    </Helmet>
  );
}
