import React from "react";
import { Route, Router, Routes, Link } from "react-router-dom";
import phone from "../assets/call1.png";
import whatsapp from "../assets/whatsapp.png";
import gmail from "../assets/gmail.svg";
import location from "../assets/map.png";
import homebtn from "../assets/home1.png";

function Footer() {
  const handleGmail = () => {
    const gmailAddress = "vimal.entpr@gmail.com";
    const mailtoLink = `mailto:${gmailAddress}?subject=Contact%20Me`;
    window.location.href = mailtoLink;
  };

  const handleCall = () => {
    window.location.href = "tel:+919146203040";
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-0 w-full bg-[#181717] text-[#f9ffff]">
      <div className="px-2 py-3 flex justify-around sm:justify-center sm:gap-24 border-t border-[#313030]">
        <button
          onClick={handleCall}
          target="_blank"
          className="flex items-center transition-all duration-100 hover:scale-110"
        >
          <img src={phone} className="h-10" alt="phoneno" />
        </button>

        <Link
          to="https://wa.me/+919146203040"
          target="_blank"
          className="flex items-center transition-all duration-100 hover:scale-110"
        >
          <img src={whatsapp} className="h-10" alt="whatsapp" />
        </Link>

        <button
          onClick={scrollToTop}
          className="flex items-center transition-all duration-100 hover:scale-110"
        >
          <img src={homebtn} className="h-10" alt="home" />
        </button>

        <button
          onClick={handleGmail}
          target="_blank"
          className="flex items-center transition-all duration-100 hover:scale-110"
        >
          <img src={gmail} className="h-10" alt="gmail" />
          {/* change the handlegmail also */}
        </button>

        <Link
          to="https://www.google.com/maps/place/Vinox+Technologies/@17.9798707,73.8874571,17z/data=!4m14!1m7!3m6!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!2sVinox+Technologies!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl!3m5!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl?entry=ttu"
          target="_blank"
          className="flex items-center transition-all duration-100 hover:scale-110"
        >
          <img src={location} className="h-10" alt="location" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
