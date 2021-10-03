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
        <title>SMKN 11 Garut - Artikel</title>
      </Head>
      <Header />
      <main>
        <section className="py-14 bg-gray-100">
          <Container>
            <h3 className="font-semibold text-2xl">Kategori</h3>
            <div className="flex items-center justify-between">
              <ul className="flex items-center justify-start text-lg space-x-14 py-8">
                <li>Olahraga</li>
                <li>Teknologi</li>
                <li>Kesehatan</li>
                <li>Berita</li>
                <li>Info</li>
              </ul>
              <input
                type="text"
                placeholder="Masukkan Judul Artikel"
                className="py-4 px-8 rounded-md focus:outline-none shadow-lg"
              />
            </div>
          </Container>
        </section>
        <section className="py-14">
          <Container>
            <SectionTitle title="Daftar Artikel" />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
