import { getStrapiMedia } from "../../lib/media";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function FasilitasSekolah({ data }) {
  return (
    <section className="py-14">
      <Container property="mb-8">
        <SectionTitle title="Fasilitas Sekolah" />
      </Container>
      <div className="grid md:grid-cols-4 md:grid-rows-2 md:h-96 gap-2">
        <div className="h-48 md:h-auto md:col-start-1 md:col-span-1 md:row-span-2 bg-yellow-300">
          <img
            src={getStrapiMedia(data[0].image)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-48 md:col-start-2 md:col-span-1 md:row-span-1 bg-yellow-300/80">
          <img
            src={getStrapiMedia(data[1].image)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-48 md:col-start-2 md:col-span-1 md:row-span-1 bg-yellow-300/70">
          <img
            src={getStrapiMedia(data[2].image)}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-48 md:row-start-1 md:col-start-3 md:col-span-2 md:row-span-1 bg-yellow-300/40">
          <img
            src={getStrapiMedia(data[3].image)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-48 md:row-start-2 md:col-start-3 md:col-span-1 md:row-span-1 bg-yellow-300/60">
          <img
            src={getStrapiMedia(data[4].image)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-48 md:row-start-2 md:col-start-4 md:col-span-1 md:row-span-1 bg-yellow-300/50">
          <img
            src={getStrapiMedia(data[5].image)}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
