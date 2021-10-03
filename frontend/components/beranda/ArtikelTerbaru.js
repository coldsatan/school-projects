import Container from "../Container";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import { getStrapiMedia } from "../../lib/media";
import moment from "moment";

export default function ArtikelTerbaru({ data }) {
  const featuredArticle = data.filter((article) => {
    return article.featured === true;
  })[0];
  const articles = data.filter((article) => {
    return article.featured === false;
  });

  return (
    <section className="py-14">
      <Container>
        <SectionTitle title="Artikel Terbaru" />
        <div className="flex items-start md:space-x-4 py-12">
          <div className="w-8/12 hidden md:block">
            <Link
              as={`/article/${featuredArticle.slug}`}
              href={`/article/[id]`}
            >
              <img
                src={getStrapiMedia(featuredArticle.thumbnail)}
                className="h-80 w-full object-center object-cover rounded-md cursor-pointer"
              />
            </Link>
            <Container property="px-4">
              <div className="flex justify-between items-center my-4 text-sm">
                <p className="font-light">
                  {moment(featuredArticle.published_at).format("llll")}
                </p>
                <h2 className="font-bold">{featuredArticle.author.name}</h2>
              </div>
              <h3 className="font-bold text-lg">{featuredArticle.title}</h3>
              <p className="text-sm leading-loose my-2">
                {featuredArticle.headline}
              </p>
              <button className="inline-block my-8 px-8 bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md">
                <Link href="/artikel">Lebih Banyak</Link>
              </button>
            </Container>
          </div>
          <div className="w-full md:w-4/12 flex flex-col space-y-8">
            {articles.map((article, i) => {
              console.log(article);
              return (
                <div key={i}>
                  <Link as={`/article/${article.slug}`} href={`/article/[id]`}>
                    <img
                      src={getStrapiMedia(article.thumbnail)}
                      className="h-52 w-full object-center object-cover rounded-md cursor-pointer"
                    />
                  </Link>
                  <Container property="px-4">
                    <div className="flex justify-between items-center my-4 text-xs md:text-sm">
                      <p className="font-light">
                        {moment(article.published_at).format("llll")}
                      </p>
                      <h2 className="font-bold">{article.author.name}</h2>
                    </div>
                    <h3 className="font-bold text-base">{article.title}</h3>
                    <p className="text-xs leading-loose my-2">
                      {article.headline}
                    </p>
                  </Container>
                </div>
              );
            })}
            <button className="md:hidden block mx-4 my-8 px-8 bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md">
              <Link href="/artikel">Lebih Banyak</Link>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
