import React from "react";
import Hero from "./components/Hero";
import { BookingModal } from "../../components/BookingModal";
import HomeInterior from "./components/HomeInterior";
import HomesDelivered from "./components/HomesDelivered";
import PopularDesigns from "./components/PopularDesigns";
// import Banner from "./components/Banner";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Suppliers from "./components/Suppliers";
// import Designers from "./components/Designers";
// import Guides from "./components/Guides";
import myBan from "../../assets/images/bedroom1.jpg";

import WhatWeOffer from "./components/WhatWeOffer";
import MyAbout from "../about/components/MyAbout";
import Logo from "../../assets/images/logo.svg";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import myBan1 from "../../assets/images/bedroom2.jpg";
import myBan2 from "../../assets/images/bedroom3.jpg";
import Slider from "react-slick";

export default function Landing() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    // centerMode: true,
    responsive: [
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
      image: myBan,
    },
    {
      title: "Interior Work Plan",
      message: "The Interior professional workers available in the xinterio",
      image: myBan2,
    },
    {
      title: "Interior Work Plan",
      message: "The Interior professional workers available in the xinterio",
      image: myBan1,
    },
  ];
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  // React.useEffect(() => {
  //   handleOpen();
  // }, []);

  return (
    <>
      <Hero />
      <div className="mt-8">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="relative">
              <img src={item.image} alt="" className="w-full lg:h-[540px]" />
              <div className="absolute -top-4 -left-2 flex justify-center  items-center rounded-2xl bg-white size-32 lg:w-52 lg:h-40 mx-auto text-center">
                <img src={Logo} alt="" className=" w-4/5" />
              </div>
              <div className="absolute left-0 top-[40%] font-semibold text-center right-0">
                <div className="flex justify-center items-center flex-col text-white space-y-5">
                  <p className="text-center">{item.title}</p>
                  <h2 className="text-4xl lg:text-6xl w-4/5">{item.message}</h2>
                  <div className="group">
                    <button className="flex -space-x-2 ">
                      <span className="border-white border-2 text-white rounded-3xl p-3  ">
                        <p className="group-hover:-translate-y-4 active:translate-y-0  ease-in-out duration-300">
                          Appeal to
                        </p>{" "}
                      </span>
                      <span>
                        <ArrowUpRightIcon className="size-[52px] group-hover:rotate-45 group-hover:translate-x-5 transition-all duration-700 text-white rounded-full bg-brown-600 p-3" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="size-20 absolute  border-inverse bg-white top-32 "></div> */}
            </div>
          ))}
        </Slider>
      </div>
      <HomeInterior />
      <HomesDelivered />
      <PopularDesigns />
      <MyAbout banner={Boolean} />
      <WhatWeOffer />
      {/* <Banner /> */}
      <Why />
      {/* <Designers /> */}
      {/* <Guides /> */}
      <Testimonial />
      <Suppliers />
      <BookingModal open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  );
}
