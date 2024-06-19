import React from "react";
import Logo from "./Logo";
import { Collapse, IconButton, Typography } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 mx-5 lg:mx-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/projects"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Recent Projects
        </Link>
      </Typography>
      <hr className="border-primary lg:hidden" />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/contact"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact Us
        </Link>
      </Typography>
      <hr className="border-primary lg:hidden" />

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/interior-design"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Design Gallery
        </Link>
      </Typography>
      <hr className="border-primary lg:hidden" />

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/about"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About Us
        </Link>
      </Typography>

      <div className="hidden lg:block">
        <FaWhatsapp />
      </div>
      <button className="bg-primary p-2">Get Free Estimate</button>
    </ul>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <div className="px-5 py-2 flex justify-between items-center">
        <Logo />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </>
  );
}
