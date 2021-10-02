import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function HubungiKami() {
  return (
    <section className="bg-pattern py-14 h-full">
      <Container>
        <SectionTitle title="Hubungi Kami" />
        <Container property="px-8 md:px-32">
          <div className="flex justify-between items-center">
            <form className="py-16 w-full">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-6/12 flex flex-col">
                  <label className="font-semibold my-2" htmlFor="nama">
                    Nama
                  </label>
                  <input
                    className="rounded-md p-4 md:mr-2 mr-0 bg-gray-50/70 shadow-lg"
                    type="text"
                    name="nama"
                    id="nama"
                  />
                </div>
                <div className="w-full md:w-6/12 flex flex-col">
                  <label className="font-semibold my-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="rounded-md p-4 md:ml-2 ml-0 bg-gray-50/70 shadow-lg"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <label className="font-semibold my-2" htmlFor="pesan">
                  Pesan
                </label>
                <textarea
                  className="rounded-md p-4 h-40 bg-gray-50/70 shadow-lg"
                  type="text"
                  name="pesan"
                  id="pesan"
                />
              </div>
              <button className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 mt-8 text-gray-50 text-lg rounded-md">
                Kirim Pesan
              </button>
            </form>
          </div>
        </Container>
      </Container>
    </section>
  );
}
