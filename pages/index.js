import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { NextSeo } from "next-seo";

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
        title="Home: SmartDeskPH"
        description="Welcome to SmartDeskPH."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
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
