import Head from "next/head";
import Artikel from "../components/artikel/Artikel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchAPI } from "../lib/api";

export default function Artikels({ articles, categories }) {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Artikel</title>
      </Head>
      <Header />
      <main>
        <Artikel articles={articles} categories={categories} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const [articles, categories] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
  ]);

  return {
    props: { articles, categories },
    revalidate: 1,
  };
}
