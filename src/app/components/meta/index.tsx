import Head from 'next/head';

interface MetaProps {
  siteUrl: string;
  pageTitle: string;
  siteLanguage: string;
  pageDescription: string;
  pageImage: string;
}

const Meta = ({ siteUrl, pageTitle, siteLanguage, pageDescription, pageImage }: MetaProps) => (
  <>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content={pageImage} />
    <meta property="og:locale" content={siteLanguage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={pageImage} />
  </>
);

export default Meta;