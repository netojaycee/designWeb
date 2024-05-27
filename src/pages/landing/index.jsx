import React from "react";
import Hero from "./components/Hero";
import { BookingModal } from "../../components/BookingModal";
import HomeInterior from "./components/HomeInterior";
import HomesDelivered from "./components/HomesDelivered";

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
      <BookingModal open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  );
}
