import React, { useState, useEffect } from "react";
import can from "../assets/can.jpg";

function Products() {
  const products = [
    { name: "Product - 1", img: can },
    { name: "Product - 2", img: can },
    { name: "Product - 3", img: can },
    { name: "Product - 4", img: can },
  ];

  return (
    <div className="flex flex-col flex-wrap justify-center items-center p-2">
      <div className="text-3xl text-[#077bff] font-bold mb-2">Products</div>
      <div className="px-8 py-4 text-black">
        {products.map((val, index) => (
          <div
            key={index}
            className="mb-4 bg-gray-300 rounded-lg hover:shadow-[6px_6px_12px_0px_#4a5568]"
          >
            <div className="py-4 text-center text-2xl">{val.name}</div>
            <div className="">
              <img src={val.img} alt="" />
            </div>
            <div className="flex flex-col gap-4 py-4 px-10">
              <button
                type="button"
                className="self-center w-1/2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-white bg-blue-700 hover:scale-105 "
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
