import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function StrukturOrganisasi() {
  return (
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
          <div className="w-full md:w-9/12 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-14 font-semibold my-4">
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
  );
}
