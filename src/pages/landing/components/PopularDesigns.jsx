import React, { useState } from "react";
import popular1 from "@/assets/images/popular1.jpg";
import popular2 from "@/assets/images/popular2.jpg";
import popular3 from "@/assets/images/popular3.jpg";
import popular4 from "@/assets/images/popular4.jpg";
import popular5 from "@/assets/images/popular5.jpg";
import popular6 from "@/assets/images/popular6.jpg";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import { RiArrowRightUpLine } from "react-icons/ri";

export default function PopularDesigns() {
  const [myValue, setMyValue] = useState("");
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      image: popular1,
      title: "2 BHK Interior Designs",
    },
    {
      image: popular2,
      title: "3 BHK Interior Designs",
    },
    {
      image: popular3,
      title: "Modular Kitchen Designs",
    },
    {
      image: popular4,
      title: "Home Office Designs",
    },
    {
      image: popular5,
      title: "Bedroom Designs",
    },
    {
      image: popular6,
      title: "Living Room Designs",
    },
  ];

  let myData = [
    {
      image: popular1,
      title: "2 BHK Interior Designs",
    },
    {
      image: popular2,
      title: "3 BHK Interior Designs",
    },
    {
      image: popular3,
      title: "Modular Kitchen Designs",
    },
    {
      image: popular4,
      title: "Home Office Designs",
    },
    {
      image: popular5,
      title: "Bedroom Designs",
    },
    {
      image: popular6,
      title: "Living Room Designs",
    },
  ];

  if (myValue === "Home Office Designs")
    myData = myData.filter((item) => item.title === "Home Office Designs");

  if (myValue === "Bedroom Designs")
    myData = myData.filter((item) => item.title === "Bedroom Designs");

  if (myValue === "Living Room Designs")
    myData = myData.filter((item) => item.title === "Living Room Designs");

  if (myValue === "3 BHK Interior Designs")
    myData = myData.filter((item) => item.title === "3 BHK Interior Designs");

  if (myValue === "Modular Kitchen Designs")
    myData = myData.filter((item) => item.title === "Modular Kitchen Designs");

  if (myValue === "all") myData = myData;

  return (
    <>
      <div className="p-10 flex flex-col lg:gap-10 gap-5 bg-secondary">
        <h2 className="text-[20px] lg:text-[25px] font-bold lg:px-5">
          Browse Our Popular Designs
        </h2>
        <div className="slider-container p-2">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div className="p-2" key={index}>
                <img src={item.image} alt="" className="" />
                <p className="text-[12px] md:text-[14px] lg:text-[20px]">
                  {item.title}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex items-center justify-center">
          <button className="underline bg-transparent text-primary text-[14px] lg:text-[20px]">
            View All Designs{">"}
          </button>
        </div>

        <div>
          <div className="md:flex md:justify-between">
            <div className="w-[30%]">
              <div className="flex space-x-3 items-center">
                <div className="bg-brown-200 w-2 h-4 rounded-l-full"></div>
                <p className="text-sm text-brown-200 ">PROCESS</p>
              </div>
              <h2 className="text-2xl font-semibold lg:text-4xl md:w-[50%]">
                Our Latest Project
              </h2>
            </div>
            <div className="lg:w-[70%] grid grid-cols-3 mt-4 place-items-center md:grid-cols-6  lg:mt-24">
              <div
                value={myValue}
                onClick={() => setMyValue("all")}
                className="flex space-x-1 cursor-pointer "
              >
                <p
                  className={
                    myValue === "all"
                      ? "text-brown-600 font-semibold font-[Roboto]"
                      : " text-black font-semibold font-[Roboto] hover:text-brown-600"
                  }
                >
                  All
                </p>
                <span className="text-brown-600 -mt-1 text-xs">01</span>
              </div>
              <div
                value={myValue}
                onClick={() => setMyValue("Home Office Designs")}
                className="flex space-x-1 cursor-pointer"
              >
                <p
                  className={
                    myValue === "Home Office Designs"
                      ? "text-brown-600 font-semibold font-[Roboto]"
                      : " text-black font-semibold font-[Roboto] hover:text-brown-600"
                  }
                >
                  Architecture
                </p>
                <span className="text-brown-600 -mt-1 text-xs">02</span>
              </div>
              <div
                value={myValue}
                onClick={() => setMyValue("Bedroom Designs")}
                className="flex space-x-1 cursor-pointer"
              >
                <p
                  className={
                    myValue === "Bedroom Designs"
                      ? "text-brown-600 font-semibold font-[Roboto]"
                      : " text-black font-semibold font-[Roboto] hover:text-brown-600"
                  }
                >
                  Bedroom
                </p>
                <span className="text-brown-600 -mt-1 text-xs">03</span>
              </div>
              <div
                value={myValue}
                onClick={() => setMyValue("Living Room Designs")}
                className="flex space-x-1 cursor-pointer"
              >
                <p
                  className={
                    myValue === "Living Room Designs"
                      ? "text-brown-600 font-semibold font-[Roboto]"
                      : " text-black font-semibold font-[Roboto] hover:text-brown-600"
                  }
                >
                  Furniture
                </p>
                <span className="text-brown-600 -mt-1 text-xs">04</span>
              </div>
              <div
                value={myValue}
                onClick={() => setMyValue("3 BHK Interior Designs")}
                className="flex space-x-1 cursor-pointer"
              >
                <p
                  className={
                    myValue === "3 BHK Interior Designs"
                      ? "text-brown-600 font-semibold font-[Roboto]"
                      : " text-black font-semibold font-[Roboto] hover:text-brown-600"
                  }
                >
                  Interior
                </p>
                <span className="text-brown-600 -mt-1 text-xs">05</span>
              </div>
              <div
                value={myValue}
                onClick={() => setMyValue("Modular Kitchen Designs")}
                className="flex space-x-1 cursor-pointer"
              >
                <p
                  className={
                    myValue === "Modular Kitchen Designs"
                      ? "text-brown-600 font-semibold font-[Roboto]"
                      : " text-black font-semibold font-[Roboto] hover:text-brown-600"
                  }
                >
                  Kitchen
                </p>
                <span className="text-brown-600 -mt-1 text-xs">06</span>
              </div>
            </div>
          </div>

          <div className="grid place-items-center md:grid md:grid-cols-3 md:gap-5">
            {myData?.map((item, index) => (
              <div key={index} className="mt-8 group">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[400px] h-[370px] md:h-[240px] lg:h-[370px]   rounded-3xl scale-100 group-hover:scale-125 transition-all duration-200 "
                  />
                  <div className="absolute w-full h-full bg-black/60 rounded-3xl bottom-0 opacity-0  group-hover:opacity-100   transition-all duration-500">
                    <div className="absolute right-4 top-4">
                      <RiArrowRightUpLine className="size-10 text-white" />
                    </div>
                    <div className="text-white absolute bottom-3 left-8 ">
                      <h2 className="text-sm">Bedroom</h2>
                      <p className="text-2xl">Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
