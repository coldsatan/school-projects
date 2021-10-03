import { getStrapiMedia } from "../../lib/media";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function SambutanKepala({ text }) {
  return (
    <section className="bg-gray-100 py-14">
      <Container>
        <SectionTitle title="Sambutan Kepala Sekolah" />
        <section className="bg-gray-900 text-gray-50 md:py-12 md:px-24 px-8 py-8 rounded-lg my-8">
          <p className="font-light italic text-lg leading-loose">
            {text.speech}
          </p>
          <div className="flex space-x-4 items-center mt-8">
            <img
              src={getStrapiMedia(text.avatar)}
              className="h-16 w-16 rounded-full object-cover object-center"
            />
            <div className="flex flex-col justify-center items-start">
              <h3 className="font-bold text-yellow-300">{text.name}</h3>
              <p className="font-light text-xs">{text.job}</p>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
