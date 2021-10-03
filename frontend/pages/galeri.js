import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Galeri</title>
      </Head>
      <Header />
      <main>
        <section className="py-14">
          <Container>
            <SectionTitle title="Foto" />
            <div className="grid grid-cols-3"></div>
          </Container>
        </section>
        <section className="py-14">
          <Container>
            <SectionTitle title="Video" />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
