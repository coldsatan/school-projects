import Container from "../Container";
import SectionTitle from "../SectionTitle";
import { useState } from "react";

export default function HubungiKami() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [kirim, setKirim] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      nama: nama,
      email: email,
      pesan: pesan,
    };
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setNama("");
    setEmail("");
    setPesan("");
    setKirim(true);
    alert("Berhasil kirim pesan");
  };
  return (
    <section id="hubungi-kami" className="bg-pattern py-14 h-full">
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
                    onChange={(e) => setNama(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPesan(e.target.value)}
                  type="text"
                  name="pesan"
                  id="pesan"
                />
              </div>
              <input
                type="submit"
                className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 mt-8 text-gray-50 text-lg rounded-md"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                value="Kirim Pesan"
              />
            </form>
          </div>
        </Container>
      </Container>
    </section>
  );
}
