import React from "react";
import delivered1 from "@/assets/images/delivered1.jpg";
import delivered2 from "@/assets/images/delivered2.jpg";

export default function HomesDelivered() {
  return (
    <>
      <div className="p-8 flex flex-col lg:gap-10 gap-5">
        <h2 className="text-[20px] lg:text-[25px] font-bold">
          10,000+ Dream Homes Delivered{" "}
        </h2>

        <div className="lg:relative lg:p-5">
          <img src={delivered1} alt="" className="" />
          <p className="lg:absolute lg:p-10 lg:bg-white lg:top-1/2 lg:-right-[60px] lg:text-[25px] lg:w-[40%] text-center text-[12px] md:text-[14px]">
            Shankarnarayan Balakrishna’s 3 BHK Home In Bangalore
          </p>
        </div>

        <div className="lg:relative lg:p-5 flex lg:flex-row flex-col justify-end">
 
  <img src={delivered2} alt="" className="" />
  <p className="z-[9999] lg:absolute lg:p-10 lg:bg-white lg:top-[200px] lg:-left-[60px] lg:text-[25px] lg:w-[40%] text-center text-[12px] md:text-[14px]">
    Karthikeyan And Gauthami’s 2 BHK Home In Mumbai
  </p>
</div>


        <div className="flex items-center gap-10 justify-center">
          <button className="underline bg-transparent text-primary text-[14px] lg:text-[20px]">
            View More Projects{">"}
          </button>
          <button className="bg-primary py-2 px-4 lg:px-6 text-[14px] lg:text-[20px] text-white">
            Start Your Project
          </button>
        </div>
      </div>
    </>
  );
}
