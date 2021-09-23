import Link from "next/link";

export default function Topbar() {
  return (
    <div className="bg-gray-900 text-white text-xs text-center hidden md:block">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <ul className="flex items-center justify-start w-3/12">
            <li className="py-4 px-4 hover:bg-gray-50 hover:text-gray-900 cursor-pointer">
              <Link href="/hubungi-kami">
                <a>Hubungi Kami</a>
              </Link>
            </li>
            <li className="py-4 px-4 hover:bg-gray-50 hover:text-gray-900 cursor-pointer">
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
          <p className="w-6/12 text-center cursor-default">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Jl. Purwabakti No.24 RT 01 / RW 04 Cisewu Kabupaten Garut Jawa
            Barat. Kodepos 44166
          </p>
          <ul className="w-3/12 flex justify-end cursor-pointer">
            <li className="py-3 px-4 hover:bg-gray-50 hover:text-gray-900 text-base">
              <i className="fab fa-facebook-square fa-3xl"></i>
            </li>
            <li className="py-3 px-4 hover:bg-gray-50 hover:text-gray-900 text-base">
              <i className="fab fa-linkedin "></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
