import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SambutanKepalaSection from "../components/SambutanKepalaSection";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Beranda</title>
      </Head>
      <Header />
      <main>
        <HeroSection />
        <SambutanKepalaSection />
        <section className="py-14">
          <Container>
            <SectionTitle title="Artikel Terbaru" />
            <div></div>
          </Container>
        </section>
      </main>
    </>
  );
}
