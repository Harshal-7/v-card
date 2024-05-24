import Link from "next/link";
import { Button } from "./ui/button";
import { FaHome, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-0 w-full bg-blue-800 text-[#f9ffff] max-w-screen-sm">
      <div className="flex justify-evenly sm:justify-center sm:gap-16 py-3 px-2 border-t border-[#313030]">
        <Button variant="link">
          <Link
            href="tel:+919850754652"
            target="_blank"
            className="flex items-center transition-all duration-500 hover:scale-110"
          >
            <FaPhoneAlt className="h-6 w-6 sm:h-8 sm:w-8" />
          </Link>
        </Button>

        <Button variant="link">
          <Link
            href="https://wa.me/+919146203040"
            target="_blank"
            className="flex items-center transition-all duration-500 hover:scale-110"
          >
            <FaWhatsapp className="h-7 w-7 sm:h-10 sm:w-10" />
          </Link>
        </Button>

        <Button variant="link" onClick={scrollToTop}>
          <FaHome className="h-7 w-7 sm:h-10 sm:w-10" />
        </Button>

        <Button variant="link">
          <Link
            href="mailto:customercare@vinoxtechnologies.com"
            target="_blank"
            className="flex items-center transition-all duration-500 hover:scale-110"
          >
            <BiLogoGmail className="h-7 w-7 sm:h-10 sm:w-10" />
          </Link>
        </Button>

        <Button variant="link">
          <Link
            href="https://vinoxtechnologies.com"
            target="_blank"
            className="flex items-center transition-all duration-500 hover:scale-110"
          >
            <Image src="/Logo.png" alt="" width={60} height={60} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
