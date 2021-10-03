import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function ProgramKeahlian() {
  return (
    <section className="pt-14">
      <Container>
        <SectionTitle title="Program Keahlian" />
        <div className="mx-14 py-14 flex flex-col md:flex-row md:space-x-4 space-y-8 md:space-y-0 justify-center text-center items-center">
          <div>
            <img src="/logo-tav.png" />
            <h3 className="font-extrabold text-2xl mt-4">TAV</h3>
            <p className="text-lg mt-2">Teknik Audio Video</p>
          </div>
          <div>
            <img src="/logo-tkj.png" />
            <h3 className="font-extrabold text-2xl mt-4">TKJ</h3>
            <p className="text-lg mt-2">Teknik Komputer Jaringan</p>
          </div>
          <div>
            <img src="/logo-otkp.png" />
            <h3 className="font-extrabold text-2xl mt-4">OTKP</h3>
            <p className="text-lg mt-2">Otomatisasi Tata Kelola Perkantoran</p>
          </div>
          <div>
            <img src="/logo-tbsm.png" />
            <h3 className="font-extrabold text-2xl mt-4">TBSM</h3>
            <p className="text-lg mt-2">Teknik Bengkel Sepeda Motor</p>
          </div>
        </div>
      </Container>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/12 flex justify-center items-center p-8 md:p-0 shadow-lg md:shadow-none">
          <h3 className="text-7xl font-extrabold italic">TAV</h3>
        </div>
        <div className="w-full md:w-9/12 bg-gray-50 md:p-14 py-14 px-8">
          <h3 className="text-xl font-semibold">Tujuan Program Keahlian</h3>
          <ul className="font-light italic leading-relaxed py-4">
            <li className="my-2">
              Peserta didik memiliki keahlian dan ketrampilan dalam program
              keahlian teknik audio video sehingga dapat bekerja secara mandiri
              atau mengisi lowongan pekerjaan yang ada di dunia usaha dan dunia
              industri sebagai tenaga kerja tingkat menengah.
            </li>
            <li className="my-2">
              Peserta didik mampu memilih karir, berkompetisi, dan mengembangkan
              sikap profesional dalam program keahlian teknik audio video.
            </li>
            <li className="my-2">
              Kompetensi keahlian Teknik Audio Video bertujuan mencetak tenaga
              terampil di bidang Elektronika khususnya audio video
            </li>
          </ul>
          <h3 className="text-xl font-semibold">Kompetensi Keahlian</h3>
          <ul className="font-light italic leading-relaxed py-4">
            <li className="my-2">
              Menerapkan keselamatan dan kesehatan kerja.{" "}
            </li>
            <li className="my-2">
              Menerapkan dasar-dasar kelistrikan, elektronika dan digital.
            </li>
            <li className="my-2">Melakukan instalasi sound system.</li>
            <li className="my-2">
              Melakukan perawatan, instalasi, dan reparasi sistem Player CD
              maupun DVD.
            </li>
            <li className="my-2">
              Melakukan instalasi, perawatan dan perbaikan peralatan audio video
              rumah tangga.
            </li>
            <li className="my-2">
              Melakukan instalasi sistem audio video CCTV.
            </li>
            <li className="my-2">Membuat dokumentasi video.</li>
            <li className="my-2">Memperbaiki pesawat penerima TV.</li>
            <li className="my-2">
              Melakukan instalasi dan perawatan video game.
            </li>
            <li className="my-2">
              Menjelaskan dasar dasar sinyal audio dan video.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
