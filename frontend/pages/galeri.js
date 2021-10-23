import Head from "next/head";
import Footer from "../components/Footer";
import Galeri from "../components/galeri/Galeri";
import Header from "../components/Header";
import { fetchAPI } from "../lib/api";

export default function GaleriPage({ photos, videos }) {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Galeri</title>
      </Head>
      <Header />
      <main>
        <Galeri photos={photos} videos={videos} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const [photos, videos] = await Promise.all([
    fetchAPI("/photos"),
    fetchAPI("/videos"),
  ]);

  return {
    props: {
      photos,
      videos,
    },
    revalidate: 1,
  };
}
