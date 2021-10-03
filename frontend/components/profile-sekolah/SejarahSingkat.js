import { getStrapiMedia } from "../../lib/media";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function SejarahSingkat({ data }) {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle title="Sejarah Singkat" />
        <div className="flex flex-col md:flex-row md:space-x-8 items-center mt-8">
          <img
            src={getStrapiMedia(data.image)}
            className="rounded-md h-80 w-full md:w-auto"
          />
          <div className="font-light italic px-4 md:px-0 text-sm md:text-base">
            <p className="my-4 leading-loose">{data.history}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
