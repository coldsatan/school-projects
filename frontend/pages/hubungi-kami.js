import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HubungiKami from "../components/beranda/HubungiKami";

export default function HubungiKamiPage() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Hubungi Kami</title>
      </Head>
      <Header />
      <main>
        <HubungiKami />
      </main>
      <Footer />
    </>
  );
}
