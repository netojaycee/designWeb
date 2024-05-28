import React from "react";
import { Carousel } from "react-responsive-carousel";
import popular1 from "@/assets/images/popular1.jpg";
import popular2 from "@/assets/images/popular2.jpg";
import popular3 from "@/assets/images/popular3.jpg";
import popular4 from "@/assets/images/popular4.jpg";
import popular5 from "@/assets/images/popular5.jpg";
import popular6 from "@/assets/images/popular6.jpg";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

export default function PopularDesigns() {
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
                  <p className="text-[12px] md:text-[14px] lg:text-[20px]">{item.title}</p>
                </div>
              ))}
          </Slider>
        </div>

        <div className="flex items-center justify-center">
          <button className="underline bg-transparent text-primary text-[14px] lg:text-[20px]">
            View All Designs{">"}
          </button>
        </div>
      </div>
    </>
  );
}
