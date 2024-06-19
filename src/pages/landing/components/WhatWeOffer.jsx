import Bedroom from "../../../assets/images/bedroom1.jpg";
import QualityWork from "../../../assets/images/quality-work-img-1.png";

export default function WhatWeOffer() {
  return (
    <>
      <div className="bg-gray-800 pb-16">
        <div className="text-white pt-10 text-center">
          <p className="text-sm">OUR PRODUCTS</p>
          <h2 className="text-4xl italic font-[Nicky] font-bold ">
            What We Offer
          </h2>
          <div className="flex justify-center items-center space-x-3">
            <hr className="border-2 border-brown-500 w-1/12" />
            <hr className="border-2 border-white w-[1%] " />
          </div>
        </div>

        <div className="w-3/4 mx-auto mt-16">
          <img src={Bedroom} alt="" className="h-96 " />
          <p className="text-center bg-white py-7 text-black">SS Decoratives</p>
        </div>
      </div>

      <div className="px-4 py-5">
        <div>
          <img src={QualityWork} alt="" className="w-5/6 mx-auto" />
          <p className="text-brown-500 font-semibold mt-10">
            INTERIOR DESIGNING
          </p>
          <h2 className="font-extrabold text-3xl italic font-[Playfair_SC]">
            Quality Work That Meets Your Expectations
          </h2>
        </div>
        <div className="flex justify-start space-x-3 mt-2 ">
          <hr className="border-[1.5px] border-brown-500 w-1/12" />
          <hr className="border-[1.5px] border-black w-[1%] " />
        </div>
        <div className="mt-8">
          <p className="text-brown-500 text-lg italic">
            We make these products from premium quality material, so that
            customers would not face any problem due to bad quality products.
            Products offered by us are widely demanded because of their high
            standards of quality .
          </p>
        </div>
      </div>
    </>
  );
}
