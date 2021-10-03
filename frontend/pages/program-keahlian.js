import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProgramKeahlian from "../components/program-keahlian/ProgramKeahlian";

export default function Home() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Program Keahlian</title>
      </Head>
      <Header />
      <main>
        <ProgramKeahlian />
      </main>
      <Footer />
    </>
  );
}
