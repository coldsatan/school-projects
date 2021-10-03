import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function Ekstrakurikuler() {
  return (
    <section className="py-14 bg-gray-50">
      <Container>
        <SectionTitle title="Ekstrakurikuler" />
        <ul className="flex items-center space-y-8 md:space-y-0 text-center md:space-x-8 flex-col md:flex-row p-8 md:px-0">
          <li className="w-6/12 md:w-auto">
            <a href="">
              <img
                src="/logo-pramuka.png"
                className="md:h-32 md:object-cover"
              />
            </a>
          </li>
          <li className="w-6/12 md:w-auto">
            <a href="">
              <img src="/logo-pmr.png" className="md:h-32 md:object-cover" />
            </a>
          </li>
          <li className="w-6/12 md:w-auto">
            <a href="">
              <img
                src="/logo-paskibraka.png"
                className="md:h-32 md:object-cover"
              />
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
