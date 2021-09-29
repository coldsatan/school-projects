import classnames from "classnames";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Container from "./Container";
import Nav from "./Nav";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 bg-gray-50 text-gray-900 shadow-lg">
      <Container property="px-8 md:px-0">
        <nav className="flex justify-between items-center">
          <Logo />
          <ul className="hidden md:flex items-center space-x-10 justify-end">
            <Nav scheme="light" dir="horizontal" />
          </ul>
          <div
            className={classnames(
              "md:hidden cursor-pointer",
              offCanvas ? "hidden" : "block"
            )}
            onClick={() => setOffCanvas(true)}
          >
            <FaBars size={32} />
          </div>
        </nav>
      </Container>

      <div
        className={classnames(
          "fixed bg-gray-50 top-0 h-full w-11/12 md:hidden transition-all",
          offCanvas ? "right-0" : "-right-full"
        )}
        onClick={() => setOffCanvas(false)}
      >
        <div className="absolute top-8 right-8 cursor-pointer">
          <FaTimes size={32} />
        </div>
        <Nav scheme="light" dir="vertical" />
      </div>
    </div>
  );
}
