import {
  ArrowUpRightIcon,
  ListBulletIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

import { RiPriceTagLine, RiVipCrownLine } from "react-icons/ri";
import Slider from "react-slick";
import Bedroom from "../../../assets/images/bedroom1.jpg";

export default function WhatWeOffer() {
  const [show, setShow] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      title: "Professional Interior",
      message: "The Interior professional workers available in the xinterio",
      image: Bedroom,
    },
    {
      title: "Interior Work Plan",
      message: "The Interior professional workers available in the xinterio",
      image: Bedroom,
    },
    {
      title: "Transforming Rooms",
      message: "The Interior professional workers available in the xinterio",
      image: Bedroom,
    },
    {
      title: "Weaving Dreams",
      message: "The Interior professional workers available in the xinterio",
      image: Bedroom,
    },
    {
      title: "Interior Decorator",
      message: "The Interior professional workers available in the xinterio",
      image: Bedroom,
    },
  ];

  return (
    <>
      <div className="px-3 mt-16 relative">
        <div className="lg:flex lg:w-[90%] lg:mx-auto lg:space-x-[2px]">
          <div className="md:flex lg:w-[50%] lg:mt-4">
            <div className="md:w-[50%] lg:border-none md:border-r-2 border-brown-500 py-4 bg-brown-50 text-brown-700 flex justify-center items-center flex-col space-y-4  text-center hover:bg-brown-700 hover:text-white">
              <RiVipCrownLine className="size-20 " />
              <p>Client Satisfaction</p>
            </div>

            <div className="md:w-[50%] md:mt-0 py-4 bg-brown-50 text-brown-700 mt-4 flex justify-center items-center flex-col space-y-4  text-center hover:bg-brown-700 hover:text-white hover:outline-white">
              <ListBulletIcon className="size-20 " />
              <p>Unique Designs</p>
            </div>
          </div>

          <div className="md:flex lg:w-[50%]">
            <div className="md:w-[50%] lg:border-none  md:border-r-2 border-brown-500 py-4 bg-brown-50 text-brown-700 mt-4 flex justify-center items-center flex-col space-y-4  text-center hover:bg-brown-700 hover:text-white">
              <UserGroupIcon className="size-20 " />
              <p>Skilled Team</p>
            </div>

            <div className=" md:w-[50%] py-4 bg-brown-50 text-brown-700 mt-4 flex justify-center items-center flex-col space-y-4  text-center hover:bg-brown-700 hover:text-white">
              <RiPriceTagLine className="size-20 " />
              <p>Best Pricing Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 pb-16 -mt-20 rounded-3xl">
        <div className="text-white pt-32 text-center ">
          <div className="flex space-x-3 items-center justify-center">
            <div className="bg-brown-200 w-2 h-4 rounded-l-full"></div>
            <p className="text-sm text-brown-200 ">WHAT WE DO</p>
          </div>
          <h2 className="text-3xl  font-bold ">What we offer for you</h2>
          <div className="flex justify-center items-center space-x-3 mt-1">
            <hr className="border-2 border-brown-500 w-1/12" />
            <hr className="border-2 border-white w-[1%] " />
          </div>
        </div>

        <div className=" md:px-10">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setShow((open) => !open)}
                className="w-[82%] md:w-3/4 mx-auto mt-16 relative "
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-[450px] rounded-3xl hover:opacity-5 hover:transition-opacity hover:ease-in-out  hover:duration-1000 md:h-[420px]   lg:w-full"
                />
                <div>
                  <div className="absolute bottom-6 left-2">
                    <p className="text-white text-2xl font-semibold hover:text-brown-500">
                      {item.title}
                    </p>
                    <p
                      className={
                        show
                          ? "w-2/3  text-white block"
                          : "w-2/3  text-white hidden"
                      }
                    >
                      {item.message}{" "}
                    </p>
                  </div>

                  <div className="absolute right-2 bottom-2  bg-white size-14 mx-auto flex justify-center items-center rounded-full hover:bg-brown-400 hover:text-white">
                    <ArrowUpRightIcon className="size-9" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="border w-[93%]  mx-auto py-4 rounded-full mt-8 md:w-2/3 ">
            <p className="text-brown-100 w-5/6 mx-auto text-center md:flex md:justify-center">
              Need more services based on your demand?{" "}
              <span className="text-brown-300  hidden md:flex md:px-3">
                Contact us
              </span>
            </p>
            <p className="text-brown-300 text-center md:hidden">Contact us</p>
          </div>
        </div>
      </div>

      {/* <div className="px-4 py-5 md:w-2/3 md:mx-auto lg:bg-brown-50 lg:w-full lg:flex lg:pt-72">
        <div className="lg:w-[60%] lg:relative">
          <img
            src={Bedroom}
            alt=""
            className="lg:flex hidden absolute size-48 right-36 top-10"
          />
          <img src={QualityWork} alt="" className="w-5/6 mx-auto " />
          <div className="lg:flex hidden size-[400px] bg-brown-800 absolute -bottom-40 -z-40 -left-36 rotate-45"></div>
        </div>
        <div className="lg:w-[40%]">
          <div>
            <p className="text-brown-500 font-semibold mt-10">
              INTERIOR DESIGNING
            </p>
            <h2 className=" text-3xl italic font-[Playfair_SC]">
              Quality Work That Meets Your Expectations
            </h2>
          </div>

          <div className="flex justify-start space-x-3 mt-2 ">
            <hr className="border-[1.5px] border-brown-500 w-1/12" />
            <hr className="border-[1.5px] border-black w-[1%] " />
          </div>
          <div className="mt-8">
            <p className="text-brown-500 text-lg font-semibold italic">
              We make these products from premium quality material, so that
              customers would not face any problem due to bad quality products.
              Products offered by us are widely demanded because of their high
              standards of quality .
            </p>
          </div>
          <div className="lg:flex lg:space-x-3">
            <div className="flex space-x-6  items-center font-medium mt-10">
              <div className="rounded-full bg-brown-600 size-20">
                <HiOutlineLightBulb className="size-14 text-white mx-auto mt-2" />
              </div>
              <div className="flex flex-col space-y-2">
                <p>Innovative</p>
                <p>Latest Technology</p>
              </div>
            </div>

            <div className="flex space-x-6  items-center font-medium mt-6">
              <div className="rounded-full bg-brown-600 size-20">
                <HiUserCircle className="size-14 text-white mx-auto mt-3" />
              </div>
              <div className="flex flex-col space-y-2">
                <p>High Customer</p>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <p className="text-lg  ">
              Our clients like the quality of our services and have helped us to
              grow by providing recurring orders.They also have referred us to
              many of their allies which have enabled us to improve our
              business.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
