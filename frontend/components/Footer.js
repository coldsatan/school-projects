import Container from "./Container";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

export default function Footer() {
  const {
    facebookLink,
    linkedinLink,
    twitterLink,
    youtubeLink,
    email,
    address,
  } = useContext(GlobalContext);

  return (
    <>
      <footer className="bg-gray-900 text-gray-50 py-14">
        <Container property="flex flex-col md:flex-row items-center justify-between px-8 md:space-x-12">
          <div className="w-full md:w-5/12">
            <h3 className="font-semibold text-2xl md:text-3xl">
              SMKN 11 Garut
            </h3>
            <p className="font-light my-4 text-xs md:text-base">{address}</p>
            <h4 className="font-semibold text-xs md:text-base">
              Punya pertanyaan? silahkan hubungi
            </h4>
            <p className="font-light my-4 text-xs md:text-base">{email}</p>
          </div>
          <div className="w-5/12 justify-center hidden md:flex space-x-16 font-light text-xs md:text-lg py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/">
                  <a>Beranda</a>
                </Link>
              </li>
              <li>
                <Link href="/profile-sekolah">
                  <a>Profile Sekolah</a>
                </Link>
              </li>
              <li>
                <Link href="/program-keahlian">
                  <a>Program Keahlian</a>
                </Link>
              </li>
              <li>
                <Link href="/galeri">
                  <a>Galeri</a>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/hubungi-kami">
                  <a>Hubungi Kami</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/artikel">
                  <a>Artikel</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-2/12">
            <h3 className="hidden md:block text-left md:text-right text-lg font-bold items-start">
              Ikuti Kami di Social Media
            </h3>
            <ul className="flex justify-start md:justify-end cursor-pointer space-x-4 py-0 md:py-4 text-lg">
              <li>
                <a href={facebookLink} target="_blank">
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href={linkedinLink} target="_blank">
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href={twitterLink} target="_blank">
                  <IoLogoTwitter />
                </a>
              </li>
              <li>
                <a href={youtubeLink} target="_blank">
                  <IoLogoYoutube />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
      <div className="py-4 text-center bg-yellow-300 text-gray-900 text-xs md:text-base">
        <p>Copyright 2021 &copy; All Rights Reserved. lucifergotmad</p>
      </div>
    </>
  );
}
