import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Ekstrakurikuler from "../components/profile-sekolah/Ekstrakurikuler";
import FasilitasSekolah from "../components/profile-sekolah/FasilitasSekolah";
import PrestasiSekolah from "../components/profile-sekolah/PrestasiSekolah";
import SejarahSingkat from "../components/profile-sekolah/SejarahSingkat";
import StrukturOrganisasi from "../components/profile-sekolah/StrukturOrganisasi";
import VisiMisi from "../components/profile-sekolah/VisiMisi";

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
        <PrestasiSekolah />
        <FasilitasSekolah />
        <Ekstrakurikuler />
      </main>
      <Footer />
    </>
  );
}
