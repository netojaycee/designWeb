import React, { useState, useEffect } from "react";
import hero1 from "@/assets/images/hero1.jpg";
import hero2 from "@/assets/images/hero2.jpg";
import hero3 from "@/assets/images/hero3.jpg";
import hero1mobile from "@/assets/images/hero1mobile.jpg";
import hero2mobile from "@/assets/images/hero2mobile.jpg";
import hero3mobile from "@/assets/images/hero3mobile.jpg";
import { Carousel } from "react-responsive-carousel";
import { BookingModal } from "../../../components/BookingModal";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <Carousel
          autoPlay
          swipeable={true}
          emulateTouch={true}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {/* Desktop Images */}
          <div onClick={handleOpen} className="cursor-pointer hidden lg:block">
            <img src={hero1} />
          </div>
          <div onClick={handleOpen} className="cursor-pointer hidden lg:block">
            <img src={hero2} />
          </div>
          <div onClick={handleOpen} className="cursor-pointer hidden lg:block">
            <img src={hero3} />
          </div>
        </Carousel>
      ) : (
        <Carousel
          autoPlay
          swipeable={true}
          emulateTouch={true}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {/* Mobile Images */}
          <div onClick={handleOpen} className="cursor-pointer lg:hidden">
            <img src={hero1mobile} />
          </div>
          <div onClick={handleOpen} className="cursor-pointer lg:hidden">
            <img src={hero2mobile} />
          </div>
          <div onClick={handleOpen} className="cursor-pointer lg:hidden">
            <img src={hero3mobile} />
          </div>
        </Carousel>
      )}
      <BookingModal open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  );
}
