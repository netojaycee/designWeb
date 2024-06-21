import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
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
        <h2 className="text-[20px] lg:text-[25px] font-bold lg:px-5">
          What Our Happy Customers Say{" "}
        </h2>
        <div className="slider-container p-2">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md max-w-[300px]"
              >
                <img
                  class="img-fluid owl-lazy lazyloaded entered"
                  width="auto"
                  height="auto"
                  data-lazy-src="https://img.youtube.com/vi/dTN3a9ES2f0/mqdefault.jpg"
                  src="https://img.youtube.com/vi/dTN3a9ES2f0/mqdefault.jpg"
                  data-ll-status="loaded"
                />
                {/* <video controls>
                  <source
                    src={item.videoUrl}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video> */}
                <div className="flex gap-2 p-4 h-[200px]">
                  <span className="w-[10%]">
                    <RiDoubleQuotesL className="w-7 h-7" />
                  </span>
                  <div className="w-[90%] flex flex-col gap-4 mt-2">
                    <p className="">{item.message}</p>
                    <div className="text-center">
                      <p className="">{item.name}</p>
                      <p className="">{item.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
