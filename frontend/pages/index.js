import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SambutanKepalaSection from "../components/SambutanKepalaSection";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Beranda</title>
      </Head>
      <Header />
      <main>
        <HeroSection />
        <SambutanKepalaSection />
        <section className="py-14">
          <Container>
            <SectionTitle title="Artikel Terbaru" />
            <div className="flex items-start md:space-x-4 py-12">
              <div className="w-8/12 hidden md:block">
                <img
                  src="/dessy-dimcheva-WX27QxN8coA-unsplash.jpg"
                  className="h-80 w-full object-center object-cover rounded-md"
                />
                <Container property="px-4">
                  <div className="flex justify-between items-center my-4 text-sm">
                    <p className="font-light">Sabtu, 12 September 2021</p>
                    <h2 className="font-bold">Jane Doe</h2>
                  </div>
                  <h3 className="font-bold text-lg">
                    Tutorial membuat blog menggunakan Strapi JS dan NextJS
                  </h3>
                  <p className="text-sm leading-loose my-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur at orci ac quam dignissim dignissim. In hac
                    habitasse platea dictumst. Phasellus ut rhoncus ligula,
                    vestibulum lacinia arcu. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur at orci ac quam
                    dignissim dignissim. In hac habitasse platea dictumst.
                    Phasellus ut rhoncus ligula, vestibulum lacinia arcu.
                  </p>
                  <button className="inline-block my-8 px-8 bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md">
                    <Link href="/artikel">Lebih Banyak</Link>
                  </button>
                </Container>
              </div>
              <div className="w-full md:w-4/12 flex flex-col space-y-8">
                <div>
                  <img
                    src="/dessy-dimcheva-WX27QxN8coA-unsplash.jpg"
                    className="h-52 w-full object-center object-cover rounded-md"
                  />
                  <Container property="px-4">
                    <div className="flex justify-between items-center my-4 text-xs md:text-sm">
                      <p className="font-light">Sabtu, 12 September 2021</p>
                      <h2 className="font-bold">Jane Doe</h2>
                    </div>
                    <h3 className="font-bold text-base">
                      Tutorial membuat blog menggunakan Strapi JS dan NextJS
                    </h3>
                    <p className="text-xs leading-loose my-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur at orci ac quam dignissim dignissim. In hac
                      habitasse platea dictumst. Phasellus ut rhoncus ligula,
                      vestibulum lacinia arcu. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Curabitur at orci ac quam
                      dignissim dignissim. In hac habitasse platea dictumst.
                      Phasellus ut rhoncus ligula, vestibulum lacinia arcu.
                    </p>
                  </Container>
                </div>
                <div>
                  <img
                    src="/dessy-dimcheva-WX27QxN8coA-unsplash.jpg"
                    className="h-52 w-full object-center object-cover rounded-md"
                  />
                  <Container property="px-4">
                    <div className="flex justify-between items-center my-4 text-xs md:text-sm">
                      <p className="font-light">Sabtu, 12 September 2021</p>
                      <h2 className="font-bold">Jane Doe</h2>
                    </div>
                    <h3 className="font-bold text-base">
                      Tutorial membuat blog menggunakan Strapi JS dan NextJS
                    </h3>
                    <p className="text-xs leading-loose my-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur at orci ac quam dignissim dignissim. In hac
                      habitasse platea dictumst. Phasellus ut rhoncus ligula,
                      vestibulum lacinia arcu. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Curabitur at orci ac quam
                      dignissim dignissim. In hac habitasse platea dictumst.
                      Phasellus ut rhoncus ligula, vestibulum lacinia arcu.
                    </p>
                  </Container>
                </div>
                <button className="md:hidden block mx-2 my-8 px-8 bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md">
                  <Link href="/artikel">Lebih Banyak</Link>
                </button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
