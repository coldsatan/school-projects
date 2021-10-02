import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SejarahSingkat from "../components/profile-sekolah/SejarahSingkat";
import SectionTitle from "../components/SectionTitle";

export default function ProfileSekolah() {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Profile Sekolah</title>
      </Head>
      <Header />
      <main>
        <SejarahSingkat />
        <section className="py-14 bg-pattern">
          <Container>
            <SectionTitle title="Visi Misi" />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
