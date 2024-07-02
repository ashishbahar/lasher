import React from "react";
import spiral from "../assets/images/png/spiral.png";
const News = () => {
  return (
    <div className=" bg_news relative">
      <div className="absolute left-[50%]  translate-x-[-50%] top-[-5%]">
        <img
          className=" circle max-[1024px]:hidden "
          width={60}
          height={60}
          src={spiral}
          alt="spiral"
        />
      </div>
      <div className="max-w-[1140px] pt-[20px] md:pt-[80px] pb-[30px] mx-auto px-[12px]">
        <div className="flex sm:flex-row flex-col  items-center">
          <div className="sm:w-1/2  text-center  ">
            <div className=" max-w-[380px] mx-auto">
              <p className=" text-[36px] opacity-[.8]  text-black py-[30px] ">
                News & Events
              </p>
              <p className="ff_play spacing text-[14px] cursor-pointer text-white font-[600]">
                {" "}
                Lasher Holzapfel Sperry & Ebberson PLLC Celebrating 50 Years
              </p>{" "}
              <p className=" ff_play text-[14px] mt-[30px] cursor-pointer text-white font-[600]">
                Lasher Holzapfel Sperry & Ebberson Adds New Lawyers to Estate
                Planning Practice Group
              </p>
            </div>
          </div>{" "}
          <div className="sm:w-1/2 text-center  ">
            <div className=" max-w-[380px] mx-auto">
              <p className=" leading-10 opacity-[.8] text-[36px]  text-black py-[30px] ">
                Press Releases & Publications
              </p>
              <p className="ff_play spacing text-[14px] text-white cursor-pointer font-[600]">
                {" "}
                Lasher Holzapfel Sperry & Ebberson PLLC Celebrating 50 Years
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="lg:py-[80px]"></div>
        <div className="md:py-[20px]"></div>
      </div>
    </div>
  );
};

export default News;
