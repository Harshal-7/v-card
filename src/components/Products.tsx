"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Products = () => {
  const products = [
    { name: "Glass Cleaner", img: "/glass-cleaner.jpg" },
    { name: "Tulsi Handwash", img: "/tulsi-handwash.jpg" },
    { name: "Floor Cleaner", img: "/floor-cleaner.jpg" },
    { name: "Toilet Cleaner", img: "/toilet-cleaner.jpg" },
    { name: "Bathroom Cleaner", img: "/bathroom-cleaner.jpg" },
  ];

  return (
    <div className="flex flex-col flex-wrap justify-center items-center px-8">
      <div className="text-3xl text-[#077bff] font-bold mb-2">Products</div>
      <div className="px-6 py-2 text-black mt-2">
        {products.map((val, index) => (
          <div
            key={index}
            className="mb-10 bg-white rounded-lg transition-all duration-500 hover:scale-105 ease-in-out "
          >
            <div className="p-4 text-center text-2xl font-bold">{val.name}</div>
            <div className="">
              <Image src={val.img} alt="" height={250} width={250} />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 py-4 px-10">
              <Button className="font-medium rounded-md mb-2 text-white bg-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-800">
                <Link href="https://www.vinoxtechnologies.com/contact">
                  Enquiry
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
