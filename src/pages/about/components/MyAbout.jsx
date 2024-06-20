import who from "../../../assets/images/bedroom2.jpg";
import img2 from "../../../assets/images/bedroom3.jpg";
import { HiBriefcase, HiCheckCircle, HiTranslate } from "react-icons/hi";
import { motion } from "framer-motion";

export default function MyAbout({ banner }) {
  return (
    <div>
      {!banner && (
        <div className="relative text-center">
          <div className=" text-white">
            <img src={who} alt="" className="h-72 w-full relative md:h-96" />
            <p className="absolute left-48 bottom-1/2 text-sm font-semibold md:left-1/2">
              HOME / ABOUT US
            </p>
            <h2 className="absolute left-44 top-1/2 text-4xl font-semibold md:left-[48%]">
              About Us
            </h2>
          </div>
        </div>
      )}
      <div className="mx-auto w-full mt-10 mb-5 md:w-2/3 text-center md:text-left">
        <div className="px-10">
          <p className="text-primary text-lg">GET TO KNOW US</p>
          <h2 className="text-3xl font-bold font-sans">
            We're Providing Best Quality Decorative Wall Application
          </h2>
          <p className="text-brown-600 mt-6 text-left">
            30+ Years of Experience
          </p>

          <div className="w-4/5 mt-5">
            <div className="border-2 border-l-4 px-6 py-5 flex items-center space-x-2 font-semibold border-brown-600 rounded-r-full">
              <HiTranslate className="size-10" />
              <p>Smart & Unique Wall Work</p>
            </div>
            <div className="mt-5 border-2 border-l-4 px-6 py-5 flex items-center space-x-2 font-semibold border-brown-600 rounded-r-full">
              <HiBriefcase className="size-10" />
              <p>The Best Quality Standards</p>
            </div>
          </div>
        </div>

        <div className="px-10 mt-12 ">
          <p>
            We are offering our range of services which are designer Laser Cut
            Application for MS/SS walls, dividers, ceilings, exteriors and
            columns etc. We have a team which is dedicated to provide premium
            quality of products and services to our clients.
          </p>
        </div>

        <div className="md:flex ">
          <div className="px-10 mt-8 text-center md:text-left w-3/4 mx-auto">
            <h2 className="font-bold text-lg flex justify-center items-center md:justify-start space-x-2">
              {" "}
              <HiCheckCircle className="size-7" /> Quality Material
            </h2>
            <p className="mt-4">
              Our clients like the quality of our services and have helped us to
              grow by providing recurring orders.
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
              className="size-96 mx-auto rounded-r-[120px] rounded-bl-[120px] rounded-tl-none"
            />
            <img
              src={img2}
              alt=""
              className="size-56 rounded-l-[90px] rounded-tr-[90px] hidden lg:flex lg:absolute lg:left-14 xl:left-28 "
            />
          </motion.div>
        </motion.div>

        <div className="text-center w-4/5  text-white bg-brown-400 py-10  mx-auto rounded-r-[78px] rounded-bl-[78px] rounded-tl-none md:flex md:flex-col md:w-2/3 md:items-center">
          <h2 className=" text-2xl font-bold font-sans">Join Our Newsletter</h2>
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
      </div>
    </div>
  );
}
