import React from "react";
import hero1 from "@/assets/images/hero1.jpg";
import hero2 from "@/assets/images/hero2.jpg";
import hero3 from "@/assets/images/hero3.jpg";
import { Carousel } from "react-responsive-carousel";
import { BookingModal } from "../../../components/BookingModal";

export default function Hero() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Carousel
        autoPlay
        swipeable={true}
        emulateTouch={true}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div onClick={handleOpen} className="cursor-pointer">
          <img src={hero1} />
        </div>
        <div onClick={handleOpen} className="cursor-pointer">
          <img src={hero2} />
        </div>
        <div onClick={handleOpen} className="cursor-pointer">
          <img src={hero3} />
        </div>
      </Carousel>
      <BookingModal open={open} setOpen={setOpen} handleOpen={handleOpen}/>
    </>
  );
}
