import moment from "moment";
import Head from "next/head";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

const Article = ({ article, categories }) => {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - {article.title}</title>
      </Head>
      <Header />
      <main>
        <article className="py-14">
          <Container>
            <img
              src={getStrapiMedia(article.thumbnail)}
              className="w-full h-96 object-cover rounded-md"
            />
            <div className="px-4 md:px-8 flex items-center justify-between">
              <div className="flex items-center space-x-2 md:space-x-4">
                <img
                  src={getStrapiMedia(article.author.avatar)}
                  className="h-8 w-8 md:h-16 md:w-16 rounded-full object-cover object-center"
                />
                <div className="flex flex-col items-start my-8">
                  <h3 className="font-bold text-sm md:text-lg">
                    {article.author.name}
                  </h3>
                  <p className="text-xs">{article.author.job}</p>
                </div>
              </div>
              <p className="text-xs md:text-sm">
                {moment(article.published_at).format("LL")}
              </p>
            </div>
            <div className="px-4 md:px-8 leading-loose">
              <ReactMarkdown children={article.content} />
            </div>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
