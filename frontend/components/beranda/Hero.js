import Container from "../Container";
import Link from "next/link";
import { getStrapiMedia } from "../../lib/media";

export default function Hero({ hero }) {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <section className="md:w-6/12 my-auto">
        <Container property="p-8 md:pl-20 xl:pl-28">
          <h2 className="text-3xl md:text-5xl xl:text-6xl">
            Selamat Datang di{" "}
            <span className="font-bold text-yellow-300">SMKN 11 GARUT</span>
          </h2>
          <p className="font-light leading-relaxed md:leading-loose my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            at orci ac quam dignissim dignissim. In hac habitasse platea
            dictumst. Phasellus ut rhoncus ligula, vestibulum lacinia arcu.
            Phasellus ut rhoncus ligula, vestibulum lacinia arcu.
          </p>
          <button className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md">
            <Link href="/profile-sekolah">Lihat Selengkapnya ...</Link>
          </button>
        </Container>
      </section>
      <img src={getStrapiMedia(hero)} className="w-full md:w-6/12 " />
    </div>
  );
}
