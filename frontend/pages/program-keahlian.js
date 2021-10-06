import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProgramKeahlian from "../components/program-keahlian/ProgramKeahlian";
import { fetchAPI } from "../lib/api";

export default function ProgramKeahlianPage({ major, goals, skills }) {
  return (
    <>
      <Head>
        <title>SMKN 11 Garut - Program Keahlian</title>
      </Head>
      <Header />
      <main>
        <ProgramKeahlian
          dataMajor={major}
          dataGoals={goals}
          dataSkills={skills}
        />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [major, goals, skills] = await Promise.all([
    fetchAPI("/majors"),
    fetchAPI("/goals"),
    fetchAPI("/skills"),
  ]);

  return {
    props: {
      major,
      goals,
      skills,
    },
    revalidate: 1,
  };
}
