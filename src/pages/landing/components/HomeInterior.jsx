import React from "react";
import interior1 from "@/assets/images/interior1.jpg";
import interior2 from "@/assets/images/interior2.jpg";
import interior3 from "@/assets/images/interior3.jpg";
import interior4 from "@/assets/images/interior4.webp";
import { Link } from "react-router-dom";

const interiorData = [
  {
    number: "01",
    title: "Book an appointment",
    image: interior1,
  },
  {
    number: "02",
    title: "Meet our designers",
    image: interior2,

  },
  {
    number: "03",
    title: "Personalise your designs",
    image: interior3,

  },
  {
    number: "04",
    title: "Move in",
    image: interior4,

  },
];

export default function HomeInterior() {
  return (
    <>
      <div className="p-10 flex flex-col lg:gap-10 gap-5">
        <h2 className="text-[20px] lg:text-[25px] font-bold lg:px-5">
          Home Interiors Made Easy
        </h2>
        <p className="lg:px-5 text-[14px] lg:text-[18px] lg:leading-8 font-[400] text-[#222]">
          You book a consultation, get guided by one of the 400+ top-notch
          interior designers, and we take care of the rest, from start to
          finish. We have done it for more than 10,000 homes already.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {interiorData.map((item, index) => (
            <div className="flex flex-col">
              <img src={item.image} alt="" className="" />
              <div className="flex items-center gap-2">
                <p className="text-[24px] lg:text-[40px]">{item.number}</p>
                <p className="text-[14px] lg:text-[20px]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-10 justify-center">
            <button className="underline bg-transparent text-primary text-[14px] lg:text-[20px]">Learn more{">"}</button>
            <button className="bg-primary py-2 px-6 text-[14px] lg:text-[20px] text-white">Get Started Now</button>
        </div>
      </div>
    </>
  );
}
