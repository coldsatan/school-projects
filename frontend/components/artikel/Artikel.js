import moment from "moment";
import classnames from "classnames";
import { useEffect, useState } from "react";
import { getStrapiMedia } from "../../lib/media";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import { fetchAPI } from "../../lib/api";

export default function Artikel({ categories, articles }) {
  const [kategori, setKategori] = useState("ALL");
  const [judul, setJudul] = useState("");
  const [article, setArticle] = useState(articles);

  useEffect(async () => {
    let listArticles;
    if (kategori === "ALL") {
      listArticles = await fetchAPI(`/articles`);
    } else {
      listArticles = await fetchAPI(
        `/articles?_where[categories.name]=${kategori}`
      );
    }

    if (judul.length > 0) {
      listArticles = await fetchAPI(
        `/articles?_where[title_contains]=${judul}`
      );
    }
    setArticle(listArticles);
  }, [kategori, judul]);
  return (
    <>
      <section className="py-14 bg-gray-100">
        <Container>
          <h3 className="font-semibold text-2xl text-center md:text-left">
            Kategori
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <ul className="flex items-center justify-center md:justify-start text-sm md:text-lg space-x-4 md:space-x-14 py-8 cursor-pointer">
              {categories.map((element, i) => {
                return (
                  <li
                    className={classnames(
                      "capitalize",
                      element.name === kategori ? "font-semibold" : ""
                    )}
                    key={i}
                    onClick={() => setKategori(element.name)}
                  >
                    {element.name}
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col items-center md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Masukkan Judul Artikel"
                className="py-4 px-8 rounded-md focus:outline-none shadow-lg md:mb-0 mb-4"
                onChange={(e) => setJudul(e.target.value)}
              />
              <button className="py-4 px-8 w-full md:w-auto bg-yellow-300 rounded-md shadow-lg text-gray-50">
                Cari
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-14">
        <Container>
          <SectionTitle title="Daftar Artikel" />
          <div className="grid md:grid-cols-3 gap-8 py-8">
            {article.map((element, i) => {
              return (
                <div key={i}>
                  <div className="h-80">
                    <Link
                      href={`/article/${element.slug}`}
                      as={`/article/${element.slug}`}
                    >
                      <img
                        src={getStrapiMedia(element.thumbnail)}
                        className="h-full object-cover w-full rounded-md cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex justify-between items-center my-4 md:mx-0 mx-4 text-sm">
                    <p className="font-light">
                      {moment(element.published_at).format("llll")}
                    </p>
                    <h2 className="font-bold">{element.author.name}</h2>
                  </div>
                  <h3 className="font-bold mx-4 md:mx-0 text-lg">
                    {element.title}
                  </h3>
                  <p className="text-sm leading-loose my-2 mx-4 md:mx-0">
                    {element.headline}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
