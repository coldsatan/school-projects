import { getStrapiMedia } from "../../lib/media";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function StrukturOrganisasi({ data }) {
  const kepalaSekolah = data.filter((element) => {
    return element.job === "Kepala Sekolah";
  })[0];

  const wakilKepalaSekolah = data.filter((element) => {
    return element.job !== "Kepala Sekolah";
  });
  return (
    <section className="py-14">
      <Container>
        <SectionTitle title="Struktur Organisasi" />
        <div className="text-xl flex flex-col items-center text-center py-14 px-14">
          <div className="w-10/12 xl:w-2/12 md:w-3/12 mb-8">
            <h3 className="font-bold mb-4">{kepalaSekolah.job}</h3>
            <img
              src={getStrapiMedia(kepalaSekolah.avatar)}
              className="h-80 w-full object-cover rounded-md"
            />
          </div>
          <div className="w-full md:w-9/12 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-14 font-semibold my-4">
            {wakilKepalaSekolah.map((element, i) => {
              return (
                <div key={i} className="w-10/12 md:w-3/12">
                  <h3 className="mb-4">{element.job}</h3>
                  <img
                    src={getStrapiMedia(element.avatar)}
                    className="h-80 w-full object-cover rounded-md"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
