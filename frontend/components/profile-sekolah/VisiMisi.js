import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function VisiMisi() {
  return (
    <section className="py-14 bg-pattern">
      <Container>
        <SectionTitle title="Visi Misi" />
        <div className="flex flex-col md:flex-row md:px-24 px-0  md:space-x-8 text-sm md:text:lg">
          <div className="w-full md:w-6/12 bg-yellow-300 py-20 px-14 rounded-lg shadow-lg flex flex-col justify-between items-start my-4 md:my-8">
            <p className="font-light italic leading-loose">
              SMKN 11 Garut tumbuh dan berkembang mengikuti tuntutan jaman
              unggul dalam prestasi untuk dapat meraih pasar kerja menghasilkan
              SDM yang berbudaya serta dilandasi IMTAQ
            </p>

            <h3 className="font-bold italic mt-8">Visi</h3>
          </div>
          <div className="w-full md:w-6/12 bg-yellow-300 py-20 px-14 rounded-lg shadow-lg flex flex-col justify-between items-start my-4 md:my-8">
            <ul className="font-light italic leading-loose">
              <li>
                1. Melaksanakan proses pendidikan dan pelatihan melalui
                pembelajaran yang berkualitas dan berorientasi kepada pencapaian
                kompetensi dengan mempertimbangkan potensi yang dimiliki serta
                dilandasi IMTAQ
              </li>
              <li className="mt-4">
                2. Meningkatkan mutu pendidikan dan pelatihan sejalan dengan
                perkembangan iptek dan tuntutan pasar kerja
              </li>
              <li className="mt-4">
                3. Menyelenggarakan program pendidikan dan pelatihan bagi
                masyarakat untuk berbagai bidang keahlian sebagai usaha peran
                serta dalam membangun SDM yang mengarah kepada pembentukan SDM
                yang cerdas, terampil, mandiri, serta beriman dan Takwa Kepada
                Tuhan YME
              </li>
            </ul>

            <h3 className="font-bold italic mt-8">Misi</h3>
          </div>
        </div>
      </Container>
    </section>
  );
}
