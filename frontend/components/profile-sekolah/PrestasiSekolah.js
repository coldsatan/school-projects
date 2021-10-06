import { FaTrophy } from "react-icons/fa";
import Link from "next/link";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function PrestasiSekolah({ data }) {
  return (
    <section className="py-14 bg-gray-100">
      <Container>
        <SectionTitle title="Prestasi Sekolah" />
        <div className="px-4 md:px-0">
          <div className="flex flex-wrap py-4">
            {data.map((element, i) => {
              return (
                <div
                  key={i}
                  className="w-full md:w-5/12 mt-2 flex space-x-4 items-center font-semibold bg-gray-900 text-gray-50 p-4 rounded-md md:mr-2"
                >
                  <FaTrophy />
                  <p>{element.name}</p>
                </div>
              );
            })}
          </div>
          <button className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md">
            <Link href="/artikel">Lihat Berita</Link>
          </button>
        </div>
      </Container>
    </section>
  );
}
