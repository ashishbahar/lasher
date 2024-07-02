import React from "react";
import spiral from "../assets/images/png/spiral.png";
import { SolutionData } from "./Helper";
const Solution = () => {
  return (
    <div className=" solution_bg relative">
      <div className="absolute left-[50%]  translate-x-[-50%] top-[-5%]">
        <img
          className=" circle max-[1024px]:hidden "
          width={60}
          height={60}
          src={spiral}
          alt="spiral"
        />
      </div>
      <div
        className="max-w-[1240px] pt-[20px] md:py-[80px] pb-[30px] mx-auto
        px-[12px]"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2  sm:pe-[40px] xl:pe-[80px] text-center lg:text-end">
            <p className=" leading-10 text-[30px] mt-4 sm:mt-0 sm:text-[45px] mb-[20px]">
              We make our practice your solution.
            </p>
            <p className=" mb-[25px]">
              Whether you have personal or business legal needs, our team
              responds quickly and acts decisively.
            </p>
            <button className="  hover:bg-[#000000b4] duration-500 text-[16px]  bg-[#857a22] px-[38px] mt-4 sm:text-[20px] text-white py-[7px] ff_play">
              About Our Practice Areas
            </button>
          </div>
          <div className=" lg:w-1/2">
            <div className="flex flex-wrap lg:ps-[40px] flex-row justify-between">
              {SolutionData.map((obj, i) => {
                return (
                  <div className="text-center sm:w-1/3 w-1/2  mt-[50px] ">
                    <img className="w-[75px] mx-auto" src={obj.img} alt="img" />
                    <p className=" text-white spacing ff_play text-[14px] mt-2 font-[600]">
                      {obj.pera}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
