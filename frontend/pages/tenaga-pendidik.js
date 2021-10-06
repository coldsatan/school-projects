import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TenagaPendidik from "../components/tenaga-pendidik/TenagaPendidik";
import { fetchAPI } from "../lib/api";

export default function TenagaPendidikPage({ employees }) {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Tenaga Pendidik</title>
      </Head>
      <Header />
      <main>
        <TenagaPendidik data={employees} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [employees] = await Promise.all([fetchAPI("/employees")]);

  return {
    props: {
      employees,
    },
    revalidate: 1,
  };
}
