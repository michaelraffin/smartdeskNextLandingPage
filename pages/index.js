import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { NextSeo } from "next-seo";
// import Script from "next/script";
export default function Home() {
  React.useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="SmartDeskPH - Home"
        description="Welcome to SmartDeskPH."
        canonical="https://www.smartdeskph.com/"
        // openGraph={{
          // url: "https://www.smartdeskph.com/",
        // }}
        openGraph={{
          type: 'article',
          article: {
            content:'Michael Raffin Maculba , Oh you are here to stalk me',
              authors: [
                  'https://www.linkedin.com/in/michael-raffin-paculba-580761b8/'
                  
              ],
              tags: ['Autonomous', 'Smart Desk', 'Standing Desk','Automatic Standing Desk','Computer Desk','Computer Gaming Desk','Computer Desk','SmartDeskPh','SmartDesk Ph'],
          },
          url: "https://www.smartdeskph.com/",
          images: {
              url: 'https://localflowershop.sgp1.digitaloceanspaces.com/product/1667119587371-white-smart-desk.jpg',
              width: 850,
              height: 650,
              alt: 'Photo of text',
          },
          site_name: 'Next Blog'
      }}
      />
      <Head>
        <title>SmartDeskPH - Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      <FAQ/>
      <Footer />
    </div>
  );
}
