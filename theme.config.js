import Script from 'next/script'
export default {
  github: 'https://github.com/fauna-labs/aws-workshop',
  docsRepositoryBase: 'https://github.com/fauna-labs/aws-workshop',
  titleSuffix: 'Fauna',
  logo: (
    <>
      <img style={{ width: '100px' }} className="mr-2 font-extrabold hidden md:inline" src="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg" alt="Nextra" />
      <span className="text-gray-600 font-normal hidden md:inline" style={{ marginTop: '10px' }}>
        Cloudflare Fauna Workshop
      </span>
    </>
  ),
  head: (
    <>


      <title>Fauna Cloudflare Workshop ~ Build a globally distributed full-stack app using Cloudflare Pages, Next.js and Fauna</title>
      <meta name="title" content="Fauna Cloudflare Workshop ~ Building a globally distributed full stack app with Fauna and Cloudflare Pages Functions"/>
      <meta name="description" content="This hands-on guide walks you through building a globally distributed full-stack application with Cloudflare Pages + Fauna"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://fauna.com"/>
      <meta property="og:title" content="Fauna Cloudflare Workshop ~ Building a globally distributed full stack app with Fauna and Cloudflare Pages Functions"/>
      <meta property="og:description" content="This hands-on guide walks you through building a globally distributed full-stack application with Cloudflare Pages + Fauna"/>
      <meta property="og:image" content=""/>

      <meta name="twitter:site" content="@fauna" />
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://fauna.com"/>
      <meta property="twitter:title" content="Fauna Cloudflare Workshop ~ Building a globally distributed full stack app with Fauna and Cloudflare Pages Functions"/>
      <meta property="twitter:description" content="This hands-on guide walks you through building a globally distributed full-stack application with Cloudflare Pages + Fauna"/>
      <meta property="twitter:image" content=""/>




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
  projectLink: 'https://github.com/fauna-labs/aws-workshop',
  feedbackLink: () => {
    return (
      <>
        <a style={{ fontSize: '16px', color: 'rgb(58,26,182)' }} href="https://github.com/fauna-labs" target="_blank">🧪 Fauna Labs</a>
        <br />
        <a style={{ fontSize: '16px', color: 'rgb(58,26,182)' }} href="https://docs.fauna.com/fauna/current/" target="_blank">📗 Docs</a>
        <br />
        <a style={{ fontSize: '16px', color: 'rgb(58,26,182)' }} href="https://github.com/fauna-labs" target="_blank">🤖 Sampe Apps</a>
      </>
    );
  },
  footer: false,
  footerEditLink: '',
  footerText: <>MIT-0 {new Date().getFullYear()} © Fauna Inc.</>,
  unstable_faviconGlyph: '',
}
