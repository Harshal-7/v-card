"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { LuExternalLink } from "react-icons/lu";
import Products from "@/components/Products";
import { MapPinIcon } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  const handleMap = () => {
    const mapLink =
      "https://www.google.com/maps/place/Vinox+Technologies/@17.9798707,73.8874571,17z/data=!4m14!1m7!3m6!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!2sVinox+Technologies!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl!3m5!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl?entry=ttu";
    window.location.href = mapLink;
  };

  return (
    <div className="max-w-screen-sm m-auto flex flex-col bg-[#181717] text-white items-center relative">
      {/* header logo + company name */}
      <div className="w-full text-center bg-gradient-to-r from-blue-800 to-blue-950 flex relative justify-center items-center">
        <div className="pb-16 flex flex-col gap-4 justify-center items-center">
          {/* <p className="text-white drop-shadow-lg font-bold text-3xl sm:text-4xl text-center">
            Vinox Technologies
          </p> */}
          <img className="w-80 sm:w-96" src="/Logo.png" alt="" />
        </div>
      </div>
      {/* pfp + information about owner */}
      <img
        className="w-36 sm:w-40 h-36 sm:h-40 object-cover rounded-full border-2 border-white absolute top-44 sm:top-52 transition-all duration-700 hover:scale-105"
        src="/pfp.jpeg"
        alt="img"
      />
      <div className="mt-24 text-center space-y-2">
        <p className="font-bold text-3xl text-[#077bff]">Ganesh Daund</p>
        <p className="">Vinox Technologies</p>
        <p className="">Owner</p>
      </div>
      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-6" />
      {/* contactus  */}
      <div className="flex flex-col flex-wrap w-96 gap-3 justify-center items-center p-2 mb-4">
        <Button variant="link">
          <Link
            href="https://wa.me/+919146203040"
            target="_blank"
            className="flex items-center transition-all duration-500 hover:scale-110"
          >
            <FaWhatsapp className="h-6 w-6 mr-4 sm:h-7 sm:w-7" /> WhatsApp
          </Link>
        </Button>

        <Button variant="link">
          <Link
            href="tel:+919850754652"
            target="_blank"
            className="flex items-center transition-all duration-500 hover:scale-110"
          >
            <FaPhoneAlt className="h-6 w-6 mr-4 sm:h-6 sm:w-6" /> +919850754652
          </Link>
        </Button>

        <Button variant="link">
          <Link
            href="mailto:customercare@vinoxtechnologies.com"
            target="_blank"
            className="flex items-center transition-all duration-500 hover:scale-110"
          >
            <BiLogoGmail className="h-6 w-6 mr-4 sm:h-7 sm:w-7" />{" "}
            customercare@vinoxtechnologies.com
          </Link>
        </Button>

        <Button variant="link">
          <Link
            href="https://vinoxtechnologies.com"
            target="_blank"
            className="flex items-center transition-all duration-500 hover:scale-110"
          >
            <LuExternalLink className="h-6 w-6 mr-4 sm:h-7 sm:w-7" />{" "}
            vinoxtechnologies.com
          </Link>
        </Button>
      </div>
      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-4" />

      {/* About us  */}
      <div className="flex flex-col flex-wrap justify-center items-center text-center p-2 ">
        <div className="flex flex-col gap-5">
          {/* Introduction  */}
          <div className="flex flex-col px-5 py-2 ">
            <div>
              <p className="">
                Welcome to{" "}
                <span className="text-[#077bff] font-semibold">
                  Vinox Technologies
                </span>
                , a trusted name in the manufacturing of specialty chemicals for
                industrial cleaning since 1999. Operating in the western
                Maharashtra region, we specialize in a range of products
                tailored to meet the unique needs of various industries
                including the HORECA, Dairy & Food, Institutional Cleaning, and
                Hospitality sectors.
              </p>
              <br />
              <p>
                At Vinox Technologies, we are dedicated to upholding stringent
                standards and delivering excellence in every product we offer.
                Our comprehensive lineup includes Industrial Chemicals,
                Housekeeping Chemicals, Laundry Chemicals, and Institutional
                Cleaning Products, crafted to ensure optimum performance and
                effectiveness.
              </p>
              <br />
            </div>
            <div className="mt-2 md:col-span-2">
              <p>
                Driven by a commitment to customer satisfaction, we conduct
                thorough research and development to continuously innovate and
                stay ahead of industry trends. Our dedicated team works
                tirelessly to understand and fulfill our customer&apos;s needs,
                consistently exceeding expectations. Our core values revolve
                around product consistency, exceptional customer service, timely
                deliveries, and competitive pricing. With a focus on knowledge,
                technical innovation, and teamwork, Vinox Technologies strives
                to deliver world-class products that meet and surpass customer
                expectations.
              </p>
            </div>
          </div>

          {/* Vision  */}
          <div className="px-5 py-2 ">
            <div className="text-2xl text-[#077bff] font-bold">Our Vision</div>
            <div className="mt-2">
              At Vinox Technologies, we are committed to achieving the highest
              standards of hygiene through continual upgrades, innovations, and
              inventions. By doing so, we aim to deliver the best possible
              solutions to our customers, ensuring their utmost satisfaction.{" "}
              <br />
              <br />
              <p className="p-2">Our vision includes:</p>
              <ul className="text-center px-2 space-y-3">
                <li>
                  1. Becoming one of the top 10 specialty product manufacturers
                  and suppliers in western Maharashtra.
                </li>
                <li>
                  2. Emerging as a leading manufacturer and distributor of
                  hospitality solutions in western Maharashtra.
                </li>
                <li>
                  3. Sustaining leadership in the hospitality service sector by
                  consistently meeting both the explicit and implicit needs of
                  our customers, and continually expanding our offerings.
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-4" />

      {/* Products  */}
      <Products />
      <Button variant="link">
        <Link
          href="https://www.vinoxtechnologies.com/products/homecare"
          target="_blank"
        >
          More Products
        </Link>
      </Button>
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
          className="flex justify-center items-center gap-2 text-white bg-blue-700 font-medium rounded-xl my-5 text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-500 hover:scale-105"
        >
          <MapPinIcon className="w-5 h-5" />
          <div>Get Direction</div>
        </button>

        {/* maps iframe  */}
        <div className="p-4">
          <iframe
            className="px-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.965111797561!2d73.88751921107037!3d17.980360085380934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc25cfff3c3a357%3A0x871e263619e7bc3c!2sVinox%20Technologies!5e0!3m2!1sen!2sin!4v1705254299474!5m2!1sen!2sin"
            width="400"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <hr className="w-80 h-px bg-gray-700 border-0 rounded mx-auto my-8" />

      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
