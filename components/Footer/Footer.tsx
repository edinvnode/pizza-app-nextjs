import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: FC = () => {
  return (
    <footer
      className="bg-gray-800 text-white text-center p-4 mt-auto"
    >
      <div className="flex flex-col md:flex-row flex-wrap justify-center text-xl gap-10 items-center">
        <span>© {new Date().getFullYear()} Torte od papira Mery</span>
        <div className="flex gap-6">
          <Link
            href="https://www.facebook.com/Merisatorte"
            className="text-white hover:text-gray-600 transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" bounce />
          </Link>
          <Link
            href="https://www.facebook.com/TorteodpapiraMery"
            className="text-white hover:text-gray-600 transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSquareFacebook} size="lg" bounce />
          </Link>
          <Link
            href="https://www.instagram.com/pokloni_mery/?igsh=MTVyamtzemMyNnhvYw%3D%3D"
            className="text-white hover:text-gray-600 transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" bounce />
          </Link>
          <Link
            href="mailto:meeriisaa@live.com"
            className="text-white hover:text-gray-600 transition-colors flex items-center"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" bounce />
          </Link>
        </div>
        <span>Sva prava pridržana.</span>
      </div>
    </footer>
  );
};

export default Footer;
