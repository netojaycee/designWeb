import who from "../../../assets/images/bedroom2.jpg";
import img2 from "../../../assets/images/bedroom3.jpg";
import {
  HiBriefcase,
  HiCheckCircle,
  HiTranslate,
  HiViewList,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { RocketLaunchIcon } from "@heroicons/react/16/solid";

export default function MyAbout({ banner }) {
  return (
    <div>
      {!banner && (
        <div className="py-40 bg-neutral-400 w-full h-60 relative text-white">
          <img
            src={who}
            alt=""
            className="w-full h-72 md:h-[300px] absolute top-0 lg:h-[400px]"
          />
          <p className="text-center absolute top-1/4 right-0 left-0 font-bold md:top-[40%] lg:top-1/2 flex justify-center items-center space-x-5">
            <span>HOME</span> <span>/</span>
            <span> ABOUT US</span>
          </p>
          <h2 className="text-center font-extrabold font-sans text-5xl fonts-nicky absolute top-10 md:top-[24%] lg:top-1/3 mt-20 left-0 right-0">
            About Us
          </h2>
        </div>
      )}
      <div className="mx-auto w-full mt-10 mb-5 md:w-2/3 lg:w-[95%] text-center md:text-left lg:mt-48">
        <div className="lg:flex lg:space-x-14">
          <div className="lg:w-[50%]">
            <div className="px-10">
              <p className="text-primary text-lg">ABOUT GLOBAL CREATION</p>
              <h2 className="text-3xl font-bold font-sans">
                We're Providing Best Quality Decorative Wall Application
              </h2>
              <p className="text-brown-600 mt-6 text-left">
                30+ Years of Experience
              </p>

              <div className="w-4/5 mt-5">
                <div className="border-2 border-l-4 px-6 py-5 flex items-center space-x-2 font-semibold border-brown-600  rounded-r-full cursor-pointer hover:animate-pulse hover:bg-brown-600 hover:text-white">
                  <HiTranslate className="size-10" />
                  <p>Smart & Unique Wall Work</p>
                </div>
                <div className="mt-5 border-2 border-l-4 px-6 py-5 flex items-center space-x-2 font-semibold border-brown-600 rounded-r-full cursor-pointer hover:animate-pulse hover:bg-brown-600 hover:text-white">
                  <HiBriefcase className="size-10" />
                  <p>The Best Quality Standards</p>
                </div>
              </div>
            </div>
            <div className="px-10 mt-12 ">
              <p className={banner && "text-left text-lg text-brown-600"}>
                We are offering our range of services which are designer Laser
                Cut Application for MS/SS walls, dividers, ceilings, exteriors
                and columns etc. We have a team which is dedicated to provide
                premium quality of products and services to our clients.
              </p>
              {banner && (
                <button className="px-6 py-4 flex justify-start mt-10 bg-brown-900 text-white font-sans font-bold border-l-4 border-l-brown-300 hover:bg-brown-300">
                  Read More About
                </button>
              )}
            </div>

            <div className={banner ? "hidden" : "md:flex "}>
              <div className="px-10 mt-8 text-center md:text-left w-3/4 mx-auto">
                <h2 className="font-bold text-lg flex justify-center items-center md:justify-start space-x-2">
                  {" "}
                  <HiCheckCircle className="size-7" /> Quality Material
                </h2>
                <p className="mt-4">
                  Our clients like the quality of our services and have helped
                  us to grow by providing recurring orders.
                </p>
              </div>

              <div className="px-10 mt-8 text-center md:text-left w-3/4 mx-auto">
                <h2 className="font-bold text-lg flex justify-center items-center md:justify-start space-x-2">
                  <HiCheckCircle className="size-7" />
                  Professional Team
                </h2>
                <p className="mt-4">
                  We have a team which is dedicated to providing the best to our
                  clients
                </p>
              </div>
            </div>
          </div>

          {!banner ? (
            <div className="lg:w-[50%]">
              <motion.div className="py-10 md:relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1, x: "0%" }}
                  animate={{ x: "60%" }}
                  transition={{
                    type: "string",
                    stiffness: 250,
                    damping: 200,
                    duration: 1.5,
                  }}
                  className="md:flex md:flex-row-reverse md:justify-center md:items-center"
                >
                  <img
                    src={who}
                    alt=""
                    className="size-96 mx-auto rounded-r-[120px] rounded-bl-[120px] rounded-tl-none md:size-[550px] lg:size-[450px] lg:rounded-r-[90px]"
                  />
                  <img
                    src={img2}
                    alt=""
                    className="size-56 rounded-l-[90px] rounded-tr-[90px] hidden md:flex md:absolute md:-left-20 md:size-72 lg:size-[450px] lg:top-40"
                  />
                </motion.div>
              </motion.div>
            </div>
          ) : (
            <div>
              <motion.div className="py-10 md:relative mt-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1, x: "0%" }}
                  animate={{ x: "60%" }}
                  transition={{
                    type: "string",
                    stiffness: 250,
                    damping: 200,
                    duration: 1.5,
                  }}
                  className="md:flex md:flex-row-reverse md:justify-center md:items-center"
                >
                  <div className="size-64 animate-bounce bg-brown-50 rounded-[57px] absolute -z-50 -top-10 -left-20 lg:rounded-tl-none lg:left-24"></div>
                  <img
                    src={img2}
                    alt=""
                    className="w-[95%] h-[550px] lg:w-[60%] lg:h-[680px] rounded-tr-[48px] rounded-bl-[48px] mx-auto lg:mx-0"
                  />
                  <img
                    src={who}
                    alt=""
                    className=" hidden lg:flex lg:w-[300px] lg:h-[300px] lg:absolute lg:-right-7 lg:top-20 lg:-z-50"
                  />
                  <div>
                    <div className="absolute bg-brown-400 rounded-[48px] rounded-tl-none right-3 -bottom-20">
                      <div className="text-white flex justify-center py-7 h-fit flex-col items-center">
                        <HiViewList className="size-28" />
                        <p className="text-6xl font-bold font-sans">690</p>
                        <p className="text-lg text-center w-[90%]">
                          Successfully project delivered
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>

        {!banner && (
          <div className="text-center w-[95%] md:w-[96%] lg:mt-40  mx-auto -mb-28 z-2 relative text-white bg-brown-400 py-10 lg:py-5   rounded-r-[78px] rounded-bl-[78px] rounded-tl-none md:flex md:flex-col md:justify-center  md:items-center">
            <h2 className=" text-2xl font-bold font-sans">
              Join Our Newsletter
            </h2>
            <p className="w-3/4 mx-auto mt-4">
              Signup to our Newsletter to get the latest updates.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              className="py-3 px-2 mt-8 w-4/5"
            />
            <button className="bg-black text-white py-2 px-4 font-sans text-sm mt-5">
              Subscribe
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
