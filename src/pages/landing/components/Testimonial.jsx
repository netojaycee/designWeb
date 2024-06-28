import React from "react";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Avatar from "../../../assets/images/brand1.png";

export default function Testimonial() {
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
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "John Doe",
      address: "New York, USA",
      videoUrl: "https://www.example.com/video1.mp4",
    },
    {
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Smith",
      address: "Los Angeles, USA",
      videoUrl: "https://www.example.com/video2.mp4",
    },
    {
      message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Alice Johnson",
      address: "Chicago, USA",
      videoUrl: "https://www.example.com/video3.mp4",
    },
    {
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "Michael Brown",
      address: "Houston, USA",
      videoUrl: "https://www.example.com/video4.mp4",
    },
    {
      message:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Emily Wilson",
      address: "Miami, USA",
      videoUrl: "https://www.youtube.com/watch?v=dTN3a9ES2f0&cc_load_policy=1",
    },
  ];

  return (
    <>
      <div className="p-10 flex flex-col lg:gap-10 gap-5 bg-secondary">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-[20%]">
            <div className="flex space-x-3 items-center">
              <div className="bg-brown-500 w-2 h-4 rounded-l-full"></div>
              <p className="text-sm text-brown-500 ">CLIENT FEEDBACK</p>
            </div>
            <h2 className="text-2xl font-bold lg:px-5 lg:text-4xl lg:mt-2">
              Hear from clients.{" "}
            </h2>
          </div>
          <div className="lg:w-[75%]">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="slider-container   bg-white rounded-3xl  p-6 size-80 "
                >
                  <div className="flex flex-col space-y-28">
                    <div className="h-24">
                      <p className="mt-4">{item.message}</p>
                    </div>
                    <div className=" flex justify-between items-center">
                      <div>
                        <h2 className="text-brown-300 font-sans font-semibold text-xl">
                          {item.name}
                        </h2>
                        <p>{item.address}</p>
                      </div>
                      <div>
                        <img
                          src={Avatar}
                          alt=""
                          className="size-10 rounded-full border-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-5xl text-brown-900">4.82</h2>
        </div>
      </div>
    </>
  );
}
