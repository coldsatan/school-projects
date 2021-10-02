import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SejarahSingkat from "../components/profile-sekolah/SejarahSingkat";
import VisiMisi from "../components/profile-sekolah/VisiMisi";
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
        <VisiMisi />
        <section className="py-14">
          <Container>
            <SectionTitle title="Struktur Organisasi" />
            <div className="text-xl flex flex-col items-center text-center py-14 px-14">
              <div className="w-10/12 xl:w-2/12 md:w-3/12 mb-8">
                <h3 className="font-bold mb-4">Kepala Sekolah</h3>
                <img
                  src="paola-aguilar-LkQHGSVzfsk-unsplash.jpg"
                  className="h-80 w-full object-cover rounded-md"
                />
              </div>
              <div className="w-full md:w-9/12 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 font-semibold my-4">
                <div className="w-10/12 md:w-3/12">
                  <h3 className="mb-4">Wakasek Kurikulum</h3>
                  <img
                    src="alexander-krivitskiy-awXBjFhh7iw-unsplash.jpg"
                    className="h-80 w-full object-cover rounded-md"
                  />
                </div>
                <div className="w-10/12 md:w-3/12">
                  <h3 className="mb-4">Wakasek Kesiswaan</h3>
                  <img
                    src="mateus-campos-felipe-rid_Zs9boQk-unsplash.jpg"
                    className="h-80 w-full object-cover rounded-md"
                  />
                </div>
                <div className="w-10/12 md:w-3/12">
                  <h3 className="mb-4">Wakasek Sarpras</h3>
                  <img
                    src="metin-ozer-iSmTwuKTNDo-unsplash.jpg"
                    className="h-80 w-full object-cover rounded-md"
                  />
                </div>
                <div className="w-10/12 md:w-3/12">
                  <h3 className="mb-4">Wakasek Hubinmas</h3>
                  <img
                    src="ellen-carlson-hanse-BibFuRgcO54-unsplash.jpg"
                    className="h-80 w-full object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
