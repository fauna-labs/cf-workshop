import Script from 'next/script'
export default {
  github: 'https://github.com/fauna-labs/aws-workshop',
  docsRepositoryBase: 'https://github.com/fauna-labs/aws-workshop',
  titleSuffix: 'Fauna',
  logo: (
    <>
      <img style={{ width: '100px' }} className="mr-2 font-extrabold hidden md:inline" src="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg" alt="Nextra" />
      <span className="text-gray-600 font-normal hidden md:inline" style={{ marginTop: '10px' }}>
        AWS Fauna Workshop
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Fauna-AWS Workshop" />
      <meta name="og:description" content="Fauna-AWS Workshop" />
      <meta name="twitter:card" content="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg" />
      <meta name="twitter:image" content="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg" />
      <meta name="twitter:site:domain" content="fauna.com" />
      <meta name="twitter:url" content="https://fauna.com" />
      <meta name="og:title" content="Fauna-AWS Workshop" />
      <meta name="og:image" content="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg" />
      <meta name="apple-mobile-web-app-title" content="Fauna-AWS Workshop" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  unstable_flexsearch: true,
  feedbackLabels: "Learn More @",
  feedbackLink: () => {
    return (
      <>
        <a style={{ fontSize: '16px', color: 'rgb(58,26,182)' }} href="https://github.com/fauna-labs" target="_blank">🧪 Fauna Labs</a>
        <br />
        <a style={{ fontSize: '16px', color: 'rgb(58,26,182)' }} href="https://docs.fauna.com/fauna/current/" target="_blank">📗 Docs</a>
        <br />
        <a style={{ fontSize: '16px', color: 'rgb(58,26,182)' }} href="https://nextra.vercel.app/feedback" target="_blank">🤖 Sampe Apps</a>
      </>
    );
  },
  footer: false,
  footerEditLink: '',
  footerText: <>MIT-0 {new Date().getFullYear()} © Fauna Inc.</>,
  unstable_faviconGlyph: '',
}
