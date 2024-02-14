import React, { useState, useEffect, useRef } from "react";
import can from "../assets/can.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Products() {
  const productsRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(productsRef.current, {
      scrollTrigger: {
        trigger: productsRef.current,
        toggleActions: "restart none none none",
      },
      y: 140,
      opacity: 0,
      ease: "power1.out",
      duration: 1.5,
    });
  }, {});

  const products = [
    { name: "Product - 1", img: can },
    { name: "Product - 2", img: can },
    { name: "Product - 3", img: can },
    { name: "Product - 4", img: can },
  ];

  return (
    <div className="flex flex-col flex-wrap justify-center items-center px-8">
      <div className="text-3xl text-[#077bff] font-bold mb-2">Products</div>
      <div ref={productsRef} className="px-6 py-2 text-black mt-2">
        {products.map((val, index) => (
          <div
            key={index}
            className="mb-10 bg-gray-300 rounded-lg transition-all duration-500 hover:scale-105 ease-in-out box1"
          >
            <div className="py-4 text-center text-2xl">{val.name}</div>
            <div className="">
              <img src={val.img} alt="" />
            </div>
            <div className="flex flex-col gap-4 py-4 px-10">
              <button
                type="button"
                className="self-center font-medium rounded-md px-5 py-2 mb-2 text-white bg-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-800"
              >
                Enquiry
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
