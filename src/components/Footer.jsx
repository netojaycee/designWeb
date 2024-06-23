import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className=" py-36 bg-black mt-0">
        <div>
          <div className="text-center text-white md:px-40">
            <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between md:space-x-20">
              <div className=" mb-5 lg:mb-0">
                <h2 className="font-bold text-xl">Innov8 Interiors</h2>
                <p className=" mt-2">38, Narayan Gowda Layout,</p>
                <p className=" mt-1">
                  Vidryaranyapura, Bengaluru, Karnataka 560097, India.
                </p>
                <div className="  my-2 flex  flex-col space-y-2  mx-auto">
                  <a
                    href="tel:+918496847337"
                    className="flex items-center space-x-3"
                  >
                    <HiPhone className="text-2xl p-1 rounded-full bg-white text-black" />
                    <span>+91 84968 47337</span>
                  </a>

                  <a
                    href="mailto:info.innov8@gmail.com"
                    className="flex items-center space-x-3"
                  >
                    <HiMail className="text-2xl p-1 rounded-full bg-white text-black" />
                    <span>info.innov8@gmail.com</span>
                  </a>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-xl mb-2">OPENING HOURS</h2>
                <p className="  ">Monday - Sunday 9:00am - 6:00pm</p>
                <p className=" "> Except Monday 9:30am - 6:00pm</p>
              </div>
              <div className="mt-6 md:mt-0">
                <h2 className="text-xl font-bold">Useful Links</h2>
                <p className="mt-3">
                  <Link to="/">Home</Link>
                </p>
                <p>
                  <Link to="/design">Our Services</Link>
                </p>
                <p>
                  {" "}
                  <Link to="/portfolio">Portfolio</Link>
                </p>
                <p>
                  <Link to="/about">About Us</Link>
                </p>
                <p>
                  <Link to="/contact">Contact Us</Link>{" "}
                </p>
              </div>
            </div>
            <div className="mt-8 ">
              <p>@ 2024 INNOV8 Interiors. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
