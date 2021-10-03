import { useState } from "react";
import Container from "../Container";

export default function Artikel() {
  const [kategori, setKategori] = useState("");
  const [judul, setJudul] = useState("");
  return (
    <>
      <section className="py-14 bg-gray-100">
        <Container>
          <h3 className="font-semibold text-2xl text-center md:text-left">
            Kategori
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <ul className="flex items-center justify-center md:justify-start text-sm md:text-lg space-x-4 md:space-x-14 py-8 cursor-pointer">
              <li onClick={() => setKategori("olahraga")}>Olahraga</li>
              <li onClick={() => setKategori("teknologi")}>Teknologi</li>
              <li onClick={() => setKategori("kesehatan")}>Kesehatan</li>
              <li onClick={() => setKategori("berita")}>Berita</li>
              <li onClick={() => setKategori("info")}>Info</li>
            </ul>
            <div className="flex flex-col items-center md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Masukkan Judul Artikel"
                className="py-4 px-8 rounded-md focus:outline-none shadow-lg md:mb-0 mb-4"
                onChange={(e) => setJudul(e.target.value)}
              />
              <button className="py-4 px-8 w-full md:w-auto bg-yellow-300 rounded-md shadow-lg text-gray-50">
                Cari
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-14">
        <Container>
          <SectionTitle title="Daftar Artikel" />

          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div>
              <div className="h-80">
                <img
                  src="/gedung-sekolah.png"
                  className="h-full object-cover w-full rounded-md"
                />
              </div>
              <div className="flex justify-between items-center my-4 md:mx-0 mx-4 text-sm">
                <p className="font-light">Sabtu, 12 September 2021</p>
                <h2 className="font-bold">Jane Doe</h2>
              </div>
              <h3 className="font-bold mx-4 md:mx-0 text-lg">
                Tutorial membuat blog menggunakan Strapi JS dan NextJS
              </h3>
              <p className="text-sm leading-loose my-2 mx-4 md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at orci ac quam dignissim dignissim. In hac habitasse
                platea dictumst. Phasellus ut rhoncus ligula, vestibulum lacinia
                arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at orci ac quam dignissim dignissim. In hac habitasse
                platea dictumst. Phasellus ut rhoncus ligula, vestibulum lacinia
                arcu.
              </p>
            </div>
            <div>
              <div className="h-80">
                <img
                  src="/gedung-sekolah.png"
                  className="h-full object-cover w-full rounded-md"
                />
              </div>
              <div className="flex justify-between items-center my-4 md:mx-0 mx-4 text-sm">
                <p className="font-light">Sabtu, 12 September 2021</p>
                <h2 className="font-bold">Jane Doe</h2>
              </div>
              <h3 className="font-bold text-lg mx-4 md:mx-0">
                Tutorial membuat blog menggunakan Strapi JS dan NextJS
              </h3>
              <p className="text-sm leading-loose my-2 mx-4 md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at orci ac quam dignissim dignissim. In hac habitasse
                platea dictumst. Phasellus ut rhoncus ligula, vestibulum lacinia
                arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at orci ac quam dignissim dignissim. In hac habitasse
                platea dictumst. Phasellus ut rhoncus ligula, vestibulum lacinia
                arcu.
              </p>
            </div>
            <div>
              <div className="h-80">
                <img
                  src="/gedung-sekolah.png"
                  className="h-full object-cover w-full rounded-md"
                />
              </div>
              <div className="flex justify-between items-center my-4 mx-4 md:mx-0 text-sm">
                <p className="font-light">Sabtu, 12 September 2021</p>
                <h2 className="font-bold">Jane Doe</h2>
              </div>
              <h3 className="font-bold text-lg mx-4 md:mx-0">
                Tutorial membuat blog menggunakan Strapi JS dan NextJS
              </h3>
              <p className="text-sm leading-loose my-2 mx-4 md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at orci ac quam dignissim dignissim. In hac habitasse
                platea dictumst. Phasellus ut rhoncus ligula, vestibulum lacinia
                arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at orci ac quam dignissim dignissim. In hac habitasse
                platea dictumst. Phasellus ut rhoncus ligula, vestibulum lacinia
                arcu.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
