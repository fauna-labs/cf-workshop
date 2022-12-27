import Script from 'next/script'
import { useEffect } from 'react'

function GA() {

  useEffect(() => {
    console.log('GA Events Enabled')
  }, [])

  return (
    <div className="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-51914115-2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-51914115-2');
        `}
      </Script>
    </div>
  )
}


export default GA
