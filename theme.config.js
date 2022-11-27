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


      <title>Fauna AWS Workshop ~ Building an event-driven app with AWS services and Fauna</title>
      <meta name="title" content="Fauna AWS Workshop ~ Building an event-driven app with AWS services and Fauna"/>
      <meta name="description" content="This hands-on guide walks you through building a real-world event-driven serverless application using AWS services (i.e., AWS Lambda, Step Functions, API Gateway) and Fauna.

      In this workshop, you build a vacation booking application (Similar to Kayak). "/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://fauna.com"/>
      <meta property="og:title" content="Fauna AWS Workshop ~ Building an event-driven app with AWS services and Fauna"/>
      <meta property="og:description" content="This hands-on guide walks you through building a real-world event-driven serverless application using AWS services (i.e., AWS Lambda, Step Functions, API Gateway) and Fauna.

      In this workshop, you build a vacation booking application (Similar to Kayak). "/>
      <meta property="og:image" content="https://workshop-shadid.s3.amazonaws.com/aws-workshop-cover.png"/>

      <meta name="twitter:site" content="@fauna" />
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://fauna.com"/>
      <meta property="twitter:title" content="Fauna AWS Workshop ~ Building an event-driven app with AWS services and Fauna"/>
      <meta property="twitter:description" content="This hands-on guide walks you through building a real-world event-driven serverless application using AWS services (i.e., AWS Lambda, Step Functions, API Gateway) and Fauna.

      In this workshop, you build a vacation booking application (Similar to Kayak). "/>
      <meta property="twitter:image" content="https://workshop-shadid.s3.amazonaws.com/aws-workshop-cover.png"/>




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
