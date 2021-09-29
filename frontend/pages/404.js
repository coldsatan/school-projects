import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Not Found</title>
      </Head>
      <Header />
      <main className="flex justify-center items-center h-screen">
        <Container>
          <h2 className="text-2xl text-center">
            Oopss.. Halaman yang kamu cari tidak dapat ditemukan
          </h2>
        </Container>
      </main>
    </>
  );
}
