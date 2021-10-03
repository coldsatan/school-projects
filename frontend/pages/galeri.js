import Head from "next/head";
import Footer from "../components/Footer";
import Galeri from "../components/galeri/Galeri";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Galeri</title>
      </Head>
      <Header />
      <main>
        <Galeri />
      </main>
      <Footer />
    </>
  );
}
