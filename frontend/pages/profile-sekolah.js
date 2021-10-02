import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";

export default function ProfileSekolah() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Profile Sekolah</title>
      </Head>
      <Header />
      <main>
        <section className="py-14">
          <SectionTitle title="Sejarah Singkat" />
          <div className="mt-8">
            <img src="gedung-sekolah.png" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at orci ac quam dignissim dignissim. In hac habita ssep late adict
              Nulla nec arcu a lectus pharetra vestibulum vitae eu nulla.
              Maecenas elit ex, dictum eget est semper, scelerisque finibus
              lorem. Sed pulvinar malesuada fringilla. Aliquam sed ante mattis,
              vestibulum magna tempus, consectetur turpis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at orci ac quam dignissim dignissim. In hac habita ssep late adict
              Nulla nec arcu a lectus pharetra vestibulum vitae eu nulla.
              Maecenas elit ex, dictum eget est semper, scelerisque finibus
              lorem. Sed pulvinar malesuada fringilla. Aliquam sed ante mattis,
              vestibulum magna tempus, consectetur turpis.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
