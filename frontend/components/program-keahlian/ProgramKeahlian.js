import { useEffect, useState } from "react";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function ProgramKeahlian({ dataMajor, dataGoals, dataSkills }) {
  const [major, setMajor] = useState("TAV");
  const filteredGoals = dataGoals.filter((goals) => {
    return goals.major === major;
  });
  const filteredSkills = dataSkills.filter((skills) => {
    return skills.major === major;
  });
  const [goals, setGoals] = useState(filteredGoals);
  const [skills, setSkills] = useState(filteredSkills);
  useEffect(async () => {
    const fetchGoals = await fetchAPI(`/goals?_where[major.kode]=${major}`);
    const fetchSkills = await fetchAPI(`/skills?_where[major.kode]=${major}`);

    setGoals(fetchGoals);
    setSkills(fetchSkills);
  }, [major]);
  return (
    <section className="pt-14">
      <Container>
        <SectionTitle title="Program Keahlian" />
        <div className="mx-14 py-14 flex flex-col md:flex-row md:space-x-4 space-y-8 md:space-y-0 justify-center text-center items-center">
          {dataMajor.map((major, i) => {
            return (
              <div key={i} onClick={() => setMajor(major.kode)}>
                <img src={getStrapiMedia(major.logo)} />
                <h3 className="font-extrabold text-2xl mt-4">{major.kode}</h3>
                <p className="text-lg mt-2">{major.name}</p>
              </div>
            );
          })}
        </div>
      </Container>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/12 flex justify-center items-center p-8 md:p-0 shadow-lg md:shadow-none">
          <h3 className="text-7xl font-extrabold italic">{major}</h3>
        </div>
        <div className="w-full md:w-9/12 bg-gray-50 md:p-14 py-14 px-8">
          <h3 className="text-xl font-semibold">Tujuan Program Keahlian</h3>
          <ul className="font-light italic leading-relaxed py-4">
            {goals.map((goal, i) => {
              return (
                <li key={i} className="my-2">
                  {goal.name}
                </li>
              );
            })}
          </ul>
          <h3 className="text-xl font-semibold">Kompetensi Keahlian</h3>
          <ul className="font-light italic leading-relaxed py-4">
            {skills.map((skill, i) => {
              return (
                <li key={i} className="my-2">
                  {skill.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
