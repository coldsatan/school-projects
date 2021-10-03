import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function Galeri() {
  return (
    <>
      <section className="py-14">
        <Container>
          <SectionTitle title="Foto" />
          <div className="grid md:grid-cols-3 md:gap-4 py-8">
            <img src="/gedung-sekolah.png" className="rounded-sm" />
            <img src="/gedung-sekolah.png" className="rounded-sm" />
            <img src="/gedung-sekolah.png" className="rounded-sm" />
            <img src="/gedung-sekolah.png" className="rounded-sm" />
            <img src="/gedung-sekolah.png" className="rounded-sm" />
          </div>
        </Container>
      </section>
      <section className="py-14">
        <Container>
          <SectionTitle title="Video" />
          <div className="grid md:grid-cols-2 gap-8 py-8 px-8 md:px-0">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              title="video"
              className="w-full h-80"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              title="video"
              className="w-full h-80"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              title="video"
              className="w-full h-80"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              title="video"
              className="w-full h-80"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              title="video"
              className="w-full h-80"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </>
  );
}
