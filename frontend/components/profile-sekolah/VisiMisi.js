import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function VisiMisi({ visi, misi }) {
  return (
    <section className="py-14 bg-pattern">
      <Container>
        <SectionTitle title="Visi Misi" />
        <div className="flex flex-col md:flex-row md:px-24 px-0  md:space-x-8 text-sm md:text:lg">
          <div className="w-full md:w-6/12 bg-yellow-300 py-20 px-14 rounded-lg shadow-lg flex flex-col justify-between items-start my-4 md:my-8">
            {visi.map((element, i) => {
              return (
                <p key={i} className="font-light italic leading-loose">
                  {element.name}
                </p>
              );
            })}
            <h3 className="font-bold italic mt-8">Visi</h3>
          </div>
          <div className="w-full md:w-6/12 bg-yellow-300 py-20 px-14 rounded-lg shadow-lg flex flex-col justify-between items-start my-4 md:my-8">
            <ul className="font-light italic leading-loose">
              {misi.map((element, i) => {
                return (
                  <li className="my-2" key={i}>
                    {element.name}
                  </li>
                );
              })}
            </ul>
            <h3 className="font-bold italic mt-8">Misi</h3>
          </div>
        </div>
      </Container>
    </section>
  );
}
