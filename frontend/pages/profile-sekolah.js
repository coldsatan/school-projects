import Head from "next/head";
import Link from "next/link";
import { FaTrophy } from "react-icons/fa";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SejarahSingkat from "../components/profile-sekolah/SejarahSingkat";
import StrukturOrganisasi from "../components/profile-sekolah/StrukturOrganisasi";
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
        <StrukturOrganisasi />
        <section className="py-14 bg-gray-100">
          <Container>
            <SectionTitle title="Prestasi Sekolah" />
            <div className="px-4 md:px-0">
              <div className="flex flex-wrap py-4">
                <div className="w-full md:w-5/12 mt-2 flex space-x-4 items-center font-semibold bg-gray-900 text-gray-50 p-4 rounded-md md:mr-2">
                  <FaTrophy />
                  <p> Juara 1 Lomba Membaca</p>
                </div>
                <div className="w-full md:w-5/12 mt-2 flex space-x-4 items-center font-semibold bg-gray-900 text-gray-50 p-4 rounded-md md:ml-2">
                  <FaTrophy />
                  <p> Juara 1 Lomba Membaca</p>
                </div>
                <div className="w-full md:w-5/12 mt-2 flex space-x-4 items-center font-semibold bg-gray-900 text-gray-50 p-4 rounded-md md:mr-2">
                  <FaTrophy />
                  <p> Juara 1 Lomba Membaca</p>
                </div>
                <div className="w-full md:w-5/12 mt-2 flex space-x-4 items-center font-semibold bg-gray-900 text-gray-50 p-4 rounded-md md:ml-2">
                  <FaTrophy />
                  <p> Juara 1 Lomba Membaca</p>
                </div>
              </div>
              <button className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md">
                <Link href="/artikel">Lihat Berita</Link>
              </button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
