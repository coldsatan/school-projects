export default function SectionTitle({ title }) {
  return (
    <h2 className="text-lg md:text-2xl px-8 md:ml-auto font-semibold py-4 border-b-8 border-yellow-300 block md:inline-block">
      {title}
    </h2>
  );
}
