import Head from "next/head";
import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Ekstrakurikuler from "../components/profile-sekolah/Ekstrakurikuler";
import FasilitasSekolah from "../components/profile-sekolah/FasilitasSekolah";
import PrestasiSekolah from "../components/profile-sekolah/PrestasiSekolah";
import SejarahSingkat from "../components/profile-sekolah/SejarahSingkat";
import StrukturOrganisasi from "../components/profile-sekolah/StrukturOrganisasi";
import VisiMisi from "../components/profile-sekolah/VisiMisi";
import { fetchAPI } from "../lib/api";
import { GlobalContext } from "./_app";

export default function ProfileSekolah({
  profile,
  visi,
  misi,
  structure,
  achievement,
  facility,
  extracurricular,
}) {
  const { sitename } = useContext(GlobalContext);
  return (
    <>
      <Head>
        <title>{sitename} - Profile Sekolah</title>
      </Head>
      <Header />
      <main>
        <SejarahSingkat data={profile} />
        <VisiMisi visi={visi} misi={misi} />
        <StrukturOrganisasi data={structure} />
        <PrestasiSekolah data={achievement} />
        <FasilitasSekolah data={facility} />
        <Ekstrakurikuler data={extracurricular} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    profile,
    visi,
    misi,
    structure,
    achievement,
    facility,
    extracurricular,
  ] = await Promise.all([
    fetchAPI("/profile"),
    fetchAPI("/visis"),
    fetchAPI("/misis"),
    fetchAPI("/structures"),
    fetchAPI("/achievements"),
    fetchAPI("/facilities"),
    fetchAPI("/extracurriculars"),
  ]);

  return {
    props: {
      profile,
      visi,
      misi,
      structure,
      achievement,
      facility,
      extracurricular,
    },
    revalidate: 1,
  };
}
