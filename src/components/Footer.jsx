import React from "react";
import { Route, Router, Routes, Link } from "react-router-dom";
import phone from "../assets/call1.png";
import whatsapp from "../assets/whatsapp.png";
import gmail from "../assets/gmail.svg";
import location from "../assets/map.png";
import homebtn from "../assets/home.png";

function Footer() {
  const handleGmail = () => {
    const gmailAddress = "shindeharshal009@gmail.com";
    const mailtoLink = `mailto:${gmailAddress}?subject=Contact%20Me`;
    window.location.href = mailtoLink;
  };

  const handleCall = () => {
    window.location.href = "tel:+919763533588";
  };

  return (
    <div className="fixed bottom-0 w-full bg-[#077bff] text-[#f9ffff]">
      <p className="p-2 flex justify-around sm:justify-center sm:gap-24">
        <button
          onClick={handleCall}
          target="_blank"
          className="flex items-center hover:scale-110"
        >
          <img src={phone} className="h-10" alt="phoneno" />
        </button>

        <Link
          to="https://wa.me/+919763533588"
          target="_blank"
          className="flex items-center hover:scale-110"
        >
          <img src={whatsapp} className="h-10" alt="whatsapp" />
        </Link>

        <Link to="/" className="flex items-center hover:scale-110">
          <img src={homebtn} className="h-10" alt="home" />
        </Link>

        <button
          onClick={handleGmail}
          target="_blank"
          className="flex items-center hover:scale-110"
        >
          <img src={gmail} className="h-10" alt="gmail" />
          {/* change the handlegmail also */}
        </button>

        <Link
          to="https://www.google.com/maps/place/Vinox+Technologies/@17.9798707,73.8874571,17z/data=!4m14!1m7!3m6!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!2sVinox+Technologies!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl!3m5!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl?entry=ttu"
          target="_blank"
          className="flex items-center hover:scale-110"
        >
          <img src={location} className="h-10" alt="location" />
        </Link>
      </p>
    </div>
  );
}

export default Footer;
