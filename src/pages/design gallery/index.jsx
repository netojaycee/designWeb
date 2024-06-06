import { ListItemPrefix } from "@material-tailwind/react";
import Kitchen1 from "../../assets/images/kitchen1.jpg";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

export default function DesignGallery() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="pt-6 px-5">
        <select
          name=""
          id=""
          className="outline-black  p-3 w-full border-4 text-lg border-secondary mt-4"
        >
          <option value="">Select Category</option>
          <option value="">Modular Kitchen</option>
          <option value="">Modular Kitchen</option>
          <option value="">Modular Kitchen</option>
          <option value="">Modular Kitchen</option>
          <option value="">Modular Kitchen</option>
        </select>
        <h2 className="text-2xl font-semibold mt-5">Home Interior Designs</h2>
      </div>

      <div className="px-5 pt-10">
        <div>
          <p className="font-semibold">Modular Kitchen Designs</p>
          <div className="mt-10">
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
                <div className="w-2/3 mx-auto">
                  <img
                    src={Kitchen1}
                    alt=""
                    className="w-full size-56 md:h-96"
                  />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> A Bold Navy Blue and White Modular Kitchen Design</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-2/3 mx-auto">
                  <img
                    src={Kitchen1}
                    alt=""
                    className="w-full size-56 md:h-96"
                  />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> A Bold Navy Blue and White Modular Kitchen Design</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
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
                // className="absolute"
              >
                {/* Mobile Images */}
                <div>
                  <img src={Kitchen1} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> A Bold Navy Blue and White Modular Kitchen Design</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={Kitchen1} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> A Bold Navy Blue and White Modular Kitchen Design</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </Carousel>
            )}
          </div>
          <div className="py-10 mx-auto w-">
            <p className="text-center  font-semibold text-primary flex justify-center">
              View More Kitchen Designs{" "}
              <span>
                <ChevronRightIcon className="size-4 mt-1" />
              </span>
            </p>
          </div>
        </div>

        <div className="pt-10">
          <p className="font-semibold">Living Room Designs </p>
          <div className="mt-10">
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
                <div className="w-2/3 mx-auto">
                  <img
                    src={Kitchen1}
                    alt=""
                    className="w-full size-56 md:h-96"
                  />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> A Bold Navy Blue and White Modular Kitchen Design</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-2/3 mx-auto">
                  <img
                    src={Kitchen1}
                    alt=""
                    className="w-full size-56 md:h-96"
                  />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> A Bold Navy Blue and White Modular Kitchen Design</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
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
                // className="absolute"
              >
                {/* Mobile Images */}
                <div>
                  <img src={Kitchen1} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> A Bold Navy Blue and White Modular Kitchen Design</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={Kitchen1} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> A Bold Navy Blue and White Modular Kitchen Design</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </Carousel>
            )}
          </div>
          <div className="py-10 mx-auto w-">
            <p className="text-center  font-semibold text-primary flex justify-center">
              View More Living Room Designs{" "}
              <span>
                <ChevronRightIcon className="size-4 mt-1" />
              </span>
            </p>
          </div>
        </div>

        <div className="pt-10">
          <p className="font-semibold">Bedroom Designs </p>
          <div className="mt-10">
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
                <div className="w-2/3 mx-auto">
                  <img
                    src={Kitchen1}
                    alt=""
                    className="w-full size-56 md:h-96"
                  />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> Modern Bedroom with Brick Wall Cladding</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-2/3 mx-auto">
                  <img
                    src={Kitchen1}
                    alt=""
                    className="w-full size-56 md:h-96"
                  />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p>Modern Bedroom with Brick Wall Cladding</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
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
                // className="absolute"
              >
                {/* Mobile Images */}
                <div>
                  <img src={Kitchen1} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p>Modern Bedroom with Brick Wall Cladding</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={Kitchen1} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p>Modern Bedroom with Brick Wall Cladding</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="text-white font-semibold bg-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </Carousel>
            )}
          </div>
          <div className="py-10 mx-auto w-">
            <p className="text-center  font-semibold text-primary flex justify-center">
              View More Bedroom Designs{" "}
              <span>
                <ChevronRightIcon className="size-4 mt-1" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-5  ">
        <p className="text-xs w-2/3 mx-auto text-center">
          Disclaimer: The images on our site are for reference only. Pleae
          contact us to discuss your specific needs and to tailor a unique
          design for you.
        </p>
      </div>
    </div>
  );
}
