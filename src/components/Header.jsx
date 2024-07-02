import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" h-[100vh] bg_img">
      <Navbar />
      <div className="contanier">
        <div className="flex px-[12px]">
          <div className="w-[55%] hidden lg:block"></div>
          <div className=" lg:w-[45%]">
            <h1 className="sm:text-[55px] text-[40px] mt-5 lg:mt-0 text-[#857a22]">
              We Make
            </h1>
            <p className="sm:text-[55px] text-[35px] leading-[1]">
              Law Make Sense®
            </p>
            <p className=" mt-3 max-w-[602px] opacity-[.8] ">
              Lasher Holzapfel Sperry & Ebberson is a full-service law firm that
              understands legal issues can be overwhelming. Our attorneys work
              tirelessly for individuals, families, and businesses alike as your
              dedicated team to ensure you feel understood and respected. we
              make sure you are empowered.
              <span className=" text-[#404040] font-[600]">
                We make law make sense®.
              </span>
            </p>
            <p className="mt-5 max-w-[602px] opacity-[.8]">
              This year we are celebrating 50 years in practice in Seattle. See
              our latest news and updates:
            </p>
            <button className=" hover:bg-[#000000b4] duration-500  bg-[#857a22] px-[38px] mt-4 text-[20px] text-white py-[7px] ff_play">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
