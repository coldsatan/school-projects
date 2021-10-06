import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TenagaPendidik from "../components/tenaga-pendidik/TenagaPendidik";

export default function TenagaPendidikPage() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Tenaga Pendidik</title>
      </Head>
      <Header />
      <main>
        <TenagaPendidik />
      </main>
      <Footer />
    </>
  );
}
