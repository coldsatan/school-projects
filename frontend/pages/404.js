import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

export default function NotFound({ notfound }) {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Not Found</title>
      </Head>
      <Header />
      <main className="flex justify-center items-center py-32">
        <Container property="flex flex-col items-center justify-center px-4 md:px-0">
          <section className="w-full md:w-6/12 flex items-center justify-center mx-auto">
            <img src={getStrapiMedia(notfound.image)} className="w-full" />
          </section>
          <h2 className="text-xl md:text-2xl text-center font-semibold my-8">
            Oopss.. Halaman yang kamu cari tidak dapat ditemukan
          </h2>
          <button className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md">
            <Link href="/">Kembali ke Home</Link>
          </button>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [notfound] = await Promise.all([fetchAPI("/not-found")]);

  return {
    props: {
      notfound,
    },
    revalidate: 1,
  };
}
