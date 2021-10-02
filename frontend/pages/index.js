import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/beranda/Hero";
import SambutanKepala from "../components/beranda/SambutanKepala";
import HubungiKami from "../components/beranda/HubungiKami";
import ArtikelTerbaru from "../components/beranda/ArtikelTerbaru";

export default function Home() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Beranda</title>
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
