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

import WhatWeOffer from "./components/WhatWeOffer";
import MyAbout from "../about/components/MyAbout";

export default function Landing() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  React.useEffect(() => {
    handleOpen();
  }, []);

  return (
    <>
      <Hero />
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
