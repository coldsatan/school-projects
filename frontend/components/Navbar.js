import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center mx-4">
          <div className="flex items-center p-4 space-x-4">
            <img src="/logo-smkn-11-garut.png" className="h-20" />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">SMKN 11 Garut</h1>
              <p className="text-xs font-light italic">
                Kreatif, Inovatif, Krits
              </p>
            </div>
            <div>
              <img src="/icons/menu.svg" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
