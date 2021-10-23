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

export default function Home({ articles, homepage }) {
  const { sitename } = useContext(GlobalContext);
  return (
    <>
      <Head>
        <title>{sitename} - Beranda</title>
      </Head>
      <Header />
      <main>
        <Hero hero={homepage.hero} />
        <SambutanKepala text={homepage} />
        <ArtikelTerbaru data={articles} />
        <HubungiKami />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const [articles, homepage] = await Promise.all([
    fetchAPI("/articles?_limit=4"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, homepage },
    revalidate: 1,
  };
}
