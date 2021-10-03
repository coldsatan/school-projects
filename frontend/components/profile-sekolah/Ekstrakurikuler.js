import { getStrapiMedia } from "../../lib/media";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function Ekstrakurikuler({ data }) {
  return (
    <section className="py-14 bg-gray-50">
      <Container>
        <SectionTitle title="Ekstrakurikuler" />
        <ul className="flex items-center space-y-8 md:space-y-0 text-center md:space-x-8 flex-col md:flex-row p-8 md:px-0">
          {data.map((element, i) => {
            return (
              <li key={i} className="w-6/12 md:w-auto">
                <a href="">
                  <img
                    src={getStrapiMedia(element.image)}
                    className="md:h-32 md:object-cover"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
