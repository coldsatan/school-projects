import Link from "next/link";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function TenagaPendidik() {
  return (
    <>
      <section className="py-14">
        <Container>
          <SectionTitle title="Tenaga Pendidik" />
          <div className="mx-4 md:mx-14 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 py-8">
            <button
              disabled={true}
              className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md disabled:bg-yellow-300/50"
            >
              <Link href="/profile-sekolah">Staff Administrasi</Link>
            </button>
            <button className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md">
              <Link href="/profile-sekolah">Staff Pengajar</Link>
            </button>
          </div>
        </Container>
      </section>
      <section className="py-14 bg-gray-100 text-center">
        <Container>
          <h2 className="text-xl font-bold">Staff Administrasi</h2>
          <div className="grid md:grid-cols-4 gap-8 py-14 px-8 xl:px-48 md:px-24 font-bold">
            <div>
              <h3 className="text-xl py-4">Kasubag</h3>
              <img
                src="alexander-krivitskiy-awXBjFhh7iw-unsplash.jpg"
                className="h-80 w-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-xl py-4">Staff TU</h3>
              <img
                src="alexander-krivitskiy-awXBjFhh7iw-unsplash.jpg"
                className="h-80 w-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-xl py-4">Staff TU</h3>
              <img
                src="alexander-krivitskiy-awXBjFhh7iw-unsplash.jpg"
                className="h-80 w-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-xl py-4">Staff TU</h3>
              <img
                src="alexander-krivitskiy-awXBjFhh7iw-unsplash.jpg"
                className="h-80 w-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-xl py-4">Kasubag</h3>
              <img
                src="alexander-krivitskiy-awXBjFhh7iw-unsplash.jpg"
                className="h-80 w-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-xl py-4">Staff TU</h3>
              <img
                src="alexander-krivitskiy-awXBjFhh7iw-unsplash.jpg"
                className="h-80 w-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-xl py-4">Staff TU</h3>
              <img
                src="alexander-krivitskiy-awXBjFhh7iw-unsplash.jpg"
                className="h-80 w-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-xl py-4">Staff TU</h3>
              <img
                src="alexander-krivitskiy-awXBjFhh7iw-unsplash.jpg"
                className="h-80 w-full object-cover rounded-md"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
