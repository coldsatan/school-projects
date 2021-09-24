import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons/lib";

export default function Navbar() {
  const menu = [
    { title: "Beranda", path: "/" },
    { title: "Profile Sekolah", path: "/profile-sekolah" },
    { title: "Program Keahlian", path: "/program-keahlian" },
    { title: "Tenaga Pendidik", path: "/tenaga-pendidik" },
    { title: "Galeri", path: "/galeri" },
    { title: "Artikel", path: "/artikel" },
  ];

  const router = useRouter();
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-5000 shadow-lg">
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
          </div>
          <ul className="hidden md:flex items-center space-x-10 justify-end text-light text-sm">
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <a
                      className={`${
                        router.pathname === item.path
                          ? "font-bold text-gray-900"
                          : "hover:text-gray-900"
                      }`}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="block p-4 md:hidden cursor-pointer">
            <IconContext.Provider value={{ className: "hover:text-gray-800" }}>
              <FiAlignRight size={48} />
            </IconContext.Provider>
          </div>
          <div className="position z-10 text-gray-900 absolute top-4 right-4 block p-4 transition-all md:hidden cursor-pointer">
            <IconContext.Provider value={{ className: "hover:text-gray-800" }}>
              <IoIosClose size={48} />
            </IconContext.Provider>
          </div>
          <div className="blcok md:hidden absolute top-0 right-0 bottom-0 w-9/12 bg-gray-50/95 rounded-l-lg drop-shadow-lg">
            <ul className="md:hidden flex flex-col ml-8 space-y-12 justify-center items-start h-full text-light text-base">
              {menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.path}>
                      <a
                        className={`${
                          router.pathname === item.path
                            ? "font-bold text-gray-900"
                            : "hover:text-gray-900"
                        }`}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
