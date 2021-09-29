export default function Logo() {
  return (
    <div className="flex items-center py-4 px-0 md:px-4 space-x-4">
      <img src="/logo-smkn-11-garut.png" className="h-16 md:h-20" />
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">SMKN 11 Garut</h1>
        <p className="text-xs font-light italic">Kreatif, Inovatif, Kritis</p>
      </div>
    </div>
  );
}
