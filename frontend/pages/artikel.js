import Head from "next/head";
import { useState } from "react";
import Artikel from "../components/artikel/Artikel";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  const [kategori, setKategori] = useState("");
  const [judul, setJudul] = useState("");
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Artikel</title>
      </Head>
      <Header />
      <main>
        <Artikel />
      </main>
      <Footer />
    </>
  );
}
