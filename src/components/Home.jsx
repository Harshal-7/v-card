import React, { useState, useEffect, useRef } from "react";
import { Route, Router, Routes, Link } from "react-router-dom";
import Products from "./Products";
import Footer from "./Footer";
import logo from "../assets/logo.jpg";
import phone from "../assets/call1.png";
import whatsapp from "../assets/whatsapp.png";
import gmail from "../assets/gmail.svg";
import location from "../assets/location1.png";
import pfp from "../assets/pfp.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  const aboutRef = useRef();
  const corevalRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  // animations
  useGSAP(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
      },
      y: 50,
      opacity: 0,
      ease: "power1.out",
      duration: 1,
    });
    gsap.from(corevalRef.current, {
      scrollTrigger: {
        trigger: corevalRef.current,
        toggleActions: "restart none none none",
      },
      x: 50,
      opacity: 0,
      ease: "power1.out",
      duration: 1.5,
    });
  }, {});

  // handling mail, phone & maps
  const handleGmail = () => {
    const gmailAddress = "vimal.entpr@gmail.com";
    const mailtoLink = `mailto:${gmailAddress}?subject=Contact%20Me`;
    window.location.href = mailtoLink;
  };
  const handleCall = () => {
    window.location.href = "tel:+919850754652";
  };
  const handleMap = () => {
    const mapLink =
      "https://www.google.com/maps/place/Vinox+Technologies/@17.9798707,73.8874571,17z/data=!4m14!1m7!3m6!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!2sVinox+Technologies!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl!3m5!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl?entry=ttu";
    window.location.href = mapLink;
  };

  return (
    <div className="max-w-screen-sm m-auto flex flex-col bg-[#181717] text-white items-center relative">
      {/* header logo + company name */}
      <div className="p-2 w-full pb-24 text-center bg-[#077bff] flex relative justify-center items-center">
        <div className="pt-2 flex gap-4 justify-center items-center">
          <img className="w-11 rounded-full" src={logo} alt="" />
          <p className="text-white drop-shadow-lg font-bold text-3xl">
            Vinox Technologies
          </p>
        </div>
      </div>

      {/* pfp + information about owner */}
      <img
        className="w-40 h-40 object-cover rounded-full border-2 border-white absolute top-20 transition-all duration-700 hover:scale-105"
        src={pfp}
        alt="img"
      />
      <div className="mt-24 text-center">
        <p className="font-bold text-3xl text-[#077bff]">Ganesh Daund</p>
        <p className="">Vinox Technologies</p>
        <p className="">Owner</p>
      </div>

      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-6" />

      {/* contactus  */}
      <div className="flex flex-col flex-wrap w-96 gap-5 justify-center items-center p-2 mb-4">
        <Link
          to="https://wa.me/+919146203040"
          target="_blank"
          className="flex items-center transition-all duration-500 hover:scale-110"
        >
          <img src={whatsapp} className="h-7 mr-4 sm:h-8" alt="github" />{" "}
          WhatsApp
        </Link>

        <button
          onClick={handleCall}
          className="flex items-center transition-all duration-500 hover:scale-110"
        >
          <img src={phone} className="h-7 mr-4" alt="github" /> +919146203040
        </button>

        <button
          onClick={handleGmail}
          target="_blank"
          className="flex items-center transition-all duration-500 hover:scale-110"
        >
          <img src={gmail} className="h-7 mr-4" alt="gmail" />{" "}
          vimal.entpr@gmail.com
          {/* change the handlegmail also */}
        </button>
      </div>

      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-4" />

      {/* About us  */}
      <div
        ref={aboutRef}
        className="flex flex-col flex-wrap justify-center items-center text-center p-2 "
      >
        <div className="text-3xl text-[#077bff] font-bold">About Us</div>
        <div className="p-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quam
          commodi unde sed nam eaque maxime debitis sint dolore iste eius,
          dolorem explicabo facilis nemo illo voluptate consequatur enim est
          molestias dolorum repellat vero. Aut recusandae provident corporis
          quas quos illo officiis! Nisi eos eveniet eius dolore ducimus ipsa
          doloribus ab, porro pariatur saepe animi? Nam maxime cumque est
          molestias rem porro corrupti! In, reiciendis? ue maxime debitis sint
          dolore iste eius, dolorem explicabo facilis nemo illo voluptate
          consequatur enim est molestias dolorum repellat ver maxime debitis
          sint dolore iste eius, dolorem explicabo facilis nemo illo voluptate
          consequatur enim est molestias dolorum repellat ver maxime debitis
          sint dolore iste eius, dolorem explicabo facilis nemo illo voluptate
          consequatur enim est molestias dolorum repellat vero. Aut recusandae
          provident corpori
        </div>
      </div>

      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-4" />

      {/* Products  */}
      <Products />

      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-4" />

      {/* Core Values  */}
      <div
        ref={corevalRef}
        className="flex flex-col flex-wrap justify-center items-center text-center px-5 py-2 "
      >
        <div className="text-3xl text-[#077bff] font-bold">Core Values</div>
        <div className="p-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quam
          commodi unde sed nam eaque maxime debitis sint dolore iste eius,
          dolorem explicabo facilis nemo illo voluptate consequatur enim est
          molestias dolorum repellat vero. Aut recusandae provident corporis
          quas quos illo officiis! Nisi eos eveniet eius dolore ducimus ipsa
          doloribus ab, porro pariatur saepe animi? Nam maxime cumque est
          molestias rem porro corrupti! In, reiciendis? ue maxime debitis sint
          dolore iste eius, dolorem explicabo facilis nemo illo voluptate
          consequatur enim est molestias dolorum repellat ver maxime debitis
          sint dolore iste eius, dolorem explicabo facilis nemo illo voluptate
          consequatur enim est molestias dolorum repellat ver maxime debitis
          sint dolore iste eius, dolorem explicabo facilis nemo illo voluptate
          consequatur enim est molestias dolorum repellat vero. Aut recusandae
          provident corpori
        </div>
      </div>

      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-4" />

      {/* maps */}
      <div className="flex flex-col  flex-wrap justify-center items-center text-[#077bff] p-2">
        <div className="text-3xl font-bold">Address</div>
        <div className="text-center pt-5 px-5 font-bold text-white">
          Plot No B-146, Maharshtra Industrial Developement Corporation Lohare,
          Wai, Maharashtra 412803
        </div>

        <button
          onClick={handleMap}
          type="button"
          className="flex justify-center items-center gap-2 text-white bg-blue-700 font-medium rounded-lg my-5 text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-500 hover:scale-105"
        >
          <div>Get Direction</div>
          <img width={20} src={location} alt="" />
        </button>

        {/* maps iframe  */}
        <div className="p-4">
          <iframe
            className="px-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.965111797561!2d73.88751921107037!3d17.980360085380934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc25cfff3c3a357%3A0x871e263619e7bc3c!2sVinox%20Technologies!5e0!3m2!1sen!2sin!4v1705254299474!5m2!1sen!2sin"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-8" />

      <Footer />
    </div>
  );
}

export default Home;
