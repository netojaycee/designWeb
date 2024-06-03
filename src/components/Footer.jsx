import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="p-2 bg-gray-900 w-full">
        <div className="flex lg:flex-row  flex-col justify-between w-[90%] mx-auto">
          <p className="text-white text-center">
            © 2023 G S E-Commerce Pvt Ltd. Privacy Policy | Terms of Use
          </p>
          <div className="flex gap-1">
            <TbBrandFacebook className="w-5 h-5 text-white" />
            <FaWhatsapp className="w-5 h-5 text-white"/>
            <FaInstagram className="w-5 h-5 text-white"/>
          </div>
        </div>
      </div>
    </>
  );
}
