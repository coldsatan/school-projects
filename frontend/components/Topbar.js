import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

export default function Topbar() {
  const { facebookLink, linkedinLink, twitterLink, youtubeLink, address } =
    useContext(GlobalContext);
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
          <div className="w-6/12 cursor-default flex items-center justify-center space-x-2">
            <FaMapMarkerAlt />
            <p>{address}</p>
          </div>
          <ul className="w-3/12 flex justify-end cursor-pointer">
            <li className="py-4 px-4 hover:bg-gray-50 hover:text-gray-900 text-base">
              <a href={facebookLink}>
                <IoLogoFacebook />
              </a>
            </li>
            <li className="py-4 px-4 hover:bg-gray-50 hover:text-gray-900 text-base">
              <a href={linkedinLink}>
                <IoLogoLinkedin />
              </a>
            </li>
            <li className="py-4 px-4 hover:bg-gray-50 hover:text-gray-900 text-base">
              <a href={twitterLink}>
                <IoLogoTwitter />
              </a>
            </li>
            <li className="py-4 px-4 hover:bg-gray-50 hover:text-gray-900 text-base">
              <a href={youtubeLink}>
                <IoLogoYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
