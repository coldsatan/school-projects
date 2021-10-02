import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function SejarahSingkat() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle title="Sejarah Singkat" />
        <div className="flex flex-col md:flex-row md:space-x-8 items-center mt-8">
          <img
            src="/gedung-sekolah.png"
            className="rounded-md h-80 w-full md:w-auto"
          />
          <div className="font-light italic leading-loose px-4 md:px-0 text-sm md:text-base">
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at orci ac quam dignissim dignissim. In hac habita ssep late adict
              Nulla nec arcu a lectus pharetra vestibulum vitae eu nulla.
              Maecenas elit ex, dictum eget est semper, scelerisque finibus
              lorem. Sed pulvinar malesuada fringilla. Aliquam sed ante mattis,
              vestibulum magna tempus, consectetur turpis.
            </p>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at orci ac quam dignissim dignissim. In hac habita ssep late adict
              Nulla nec arcu a lectus pharetra vestibulum vitae eu nulla.
              Maecenas elit ex, dictum eget est semper, scelerisque finibus
              lorem. Sed pulvinar malesuada fringilla. Aliquam sed ante mattis,
              vestibulum magna tempus, consectetur turpis.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
