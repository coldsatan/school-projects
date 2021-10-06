import { getStrapiMedia } from "../../lib/media";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function Galeri({ photos, videos }) {
  return (
    <>
      <section className="py-14">
        <Container>
          <SectionTitle title="Foto" />
          <div className="grid md:grid-cols-3 md:gap-4 py-8">
            {photos.length > 0 &&
              photos.map((photo, i) => {
                return (
                  <img
                    key={i}
                    src={getStrapiMedia(photo.photo)}
                    className="rounded-sm my-2"
                  />
                );
              })}
          </div>
        </Container>
      </section>
      <section className="py-14">
        <Container>
          <SectionTitle title="Video" />
          <div className="grid md:grid-cols-2 gap-8 py-8 px-8 md:px-0">
            {videos.length > 0 &&
              videos.map((video, i) => {
                return (
                  <iframe
                    key={i}
                    src={video.link}
                    title="video"
                    className="w-full h-80"
                    allowFullScreen
                  />
                );
              })}
          </div>
        </Container>
      </section>
    </>
  );
}
