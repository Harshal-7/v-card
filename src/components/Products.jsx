import React, { useState, useEffect } from "react";
import pfp from "../assets/pfp.jpg";
import logo from "../assets/logo.jpg";
import phone from "../assets/telephone.png";
import whatsapp from "../assets/whatsapp.png";
import gmail from "../assets/gmail.svg";
import can from "../assets/can.jpg";
import { Route, Router, Routes, Link } from "react-router-dom";
import Footer from "./Footer";
import location from "../assets/location1.png";

function Products() {
  const products = [
    { name: "Product - 1", img: can },
    { name: "Product - 2", img: can },
    { name: "Product - 3", img: can },
    { name: "Product - 4", img: can },
    { name: "Product - 5", img: can },
    { name: "Product - 6", img: can },
  ];

  return (
    <div className="flex flex-col flex-wrap justify-center items-center p-2">
      <div className="text-3xl text-[#077bff] font-bold mb-2">Products</div>
      <div className="p-4 text-black">
        {products.map((val, index) => (
          <div key={index} className="mb-4 bg-gray-100 rounded-lg">
            <div className="py-4 text-center text-xl">{val.name}</div>
            <div className="">
              <img src={val.img} alt="" />
            </div>
            <div className="flex flex-col gap-4 py-4 px-10">
              <button
                type="button"
                className=" self-center w-1/2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 "
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
