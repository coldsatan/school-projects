import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Beranda</title>
      </Head>
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
