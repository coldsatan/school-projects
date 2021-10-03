import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/beranda/Hero";
import SambutanKepala from "../components/beranda/SambutanKepala";
import HubungiKami from "../components/beranda/HubungiKami";
import ArtikelTerbaru from "../components/beranda/ArtikelTerbaru";
import { fetchAPI } from "../lib/api";
import { useContext } from "react";
import { GlobalContext } from "./_app";

export default function Home() {
  const { sitename } = useContext(GlobalContext);
  return (
    <>
      <Head>
        <title>{sitename} - Beranda</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <SambutanKepala />
        <ArtikelTerbaru />
        <HubungiKami />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles] = await Promise.all([fetchAPI("/articles")]);

  return {
    props: { articles },
    revalidate: 1,
  };
}
