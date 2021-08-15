import Layout from './components/Layout'
import '../styles/globals.css'
import Script from "next/script";

function MyApp({ Component, pageProps }) {


  return (
      <>
      <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=UA-163174935-1`}
      />

      <Script
          strategy="lazyOnload"
      >
          {`
                window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-163174935-1', {
      page_path: window.location.pathname,}
      );
          `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
  )
}

export default MyApp
