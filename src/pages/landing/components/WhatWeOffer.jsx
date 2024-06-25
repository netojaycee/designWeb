import { ListBulletIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import { HiOutlineLightBulb, HiUserCircle } from "react-icons/hi";
import { RiPriceTagLine, RiVipCrownLine } from "react-icons/ri";
import Bedroom from "../../../assets/images/bedroom1.jpg";
import QualityWork from "../../../assets/images/quality-work-img-1.png";

export default function WhatWeOffer() {
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
      <div className="bg-gray-800 pb-16 -mt-20 lg:h-[560px]">
        <div className="text-white pt-32 text-center ">
          <p className="text-sm">OUR PRODUCTS</p>
          <h2 className="text-4xl italic font-[Nicky] font-bold ">
            What We Offer
          </h2>
          <div className="flex justify-center items-center space-x-3 mt-1">
            <hr className="border-2 border-brown-500 w-1/12" />
            <hr className="border-2 border-white w-[1%] " />
          </div>
        </div>

        <div className="lg:flex lg:space-x-10 lg:px-10 lg:relative ">
          <div className="w-[95%] md:w-3/4 mx-auto mt-16 ">
            <img
              src={Bedroom}
              alt=""
              className="h-[480px] hover:opacity-5 hover:transition-opacity hover:ease-in-out  hover:duration-1000 md:h-[420px] md:w-1/2  lg:w-full"
            />
            <p className="text-center bg-white py-7 text-black">
              SS Decoratives
            </p>
          </div>

          <div className="w-[95%] md:w-3/4 mx-auto mt-16">
            <img
              src={Bedroom}
              alt=""
              className="h-[480px] hover:opacity-5 hover:transition-opacity hover:ease-in-out  hover:duration-1000 md:h-[420px] md:w-1/2 lg:w-full"
            />
            <p className="text-center bg-white py-7 text-black">
              Laser Cutting SS Wall
            </p>
          </div>

          <div className="w-[95%] md:w-3/4 mx-auto mt-16">
            <img
              src={Bedroom}
              alt=""
              className="h-[480px] hover:opacity-5 hover:transition-opacity hover:ease-in-out  hover:duration-1000 md:h-[420px] md:w-1/2 lg:w-full"
            />
            <p className="text-center bg-white py-7 text-black">
              Laser Cut MS Ceiling
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 md:w-2/3 md:mx-auto lg:bg-brown-50 lg:w-full lg:flex lg:pt-72">
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
      </div>
    </>
  );
}
