import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function SambutanKepalaSection() {
  return (
    <section className="bg-gray-100 py-14">
      <Container>
        <SectionTitle title="Sambutan Kepala Sekolah" />
        <section className="bg-gray-900 text-gray-50 md:py-12 md:px-24 px-8 py-8 rounded-lg my-8">
          <p className="font-light italic text-lg leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            at orci ac quam dignissim dignissim. In hac habita ssep late adict
            Nulla nec arcu a lectus pharetra vestibulum vitae eu nulla. Maecenas
            elit ex, dictum eget est semper, scelerisque finibus lorem. Sed
            pulvinar malesuada fringilla. Aliquam sed ante mattis, vestibulum
            magna tempus, consectetur turpis.
          </p>
          <div className="flex space-x-4 items-center mt-8">
            <img
              src="/avatar.jpg"
              className="h-16 w-16 rounded-full object-cover object-center"
            />
            <div className="flex flex-col justify-center items-start">
              <h3 className="font-bold text-yellow-300">John Doe S.T M.T</h3>
              <p className="font-light text-xs">Kepala Sekolah SMKN 11 Garut</p>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
