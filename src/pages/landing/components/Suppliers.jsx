import React from "react";
import brand1 from "@/assets/images/brand1.png";
import brand2 from "@/assets/images/brand2.png";
import brand3 from "@/assets/images/brand3.png";
import brand4 from "@/assets/images/brand4.png";
import brand5 from "@/assets/images/brand5.png";
import brand6 from "@/assets/images/brand6.png";

const data = [
  { image: brand1 },
  { image: brand2 },
  { image: brand3 },
  { image: brand4 },
  { image: brand5 },
  { image: brand6 },
];

export default function Suppliers() {
  return (
    <>
      <div className="p-8 flex flex-col lg:gap-10 gap-5">
        <h2 className="text-[20px] lg:text-[25px] font-bold">
          The Best Trusted Partners
        </h2>
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="w-full lg:w-[40%]">
            <h2 className="bg-black text-white p-10 leading-[33px] text-[12px] md:text-[20px] lg:text[30px] w-full lg:w-[70%]">
              We use carefully screened, reputable suppliers for materials and
              fittings. They must meet our quality standards to be included in a
              DC home.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 flex-grow">
            {data.map(({ image }, index) => (
              <img key={index} src={image} alt="" className="" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
