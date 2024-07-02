import React from "react";
import spiral from "../assets/images/png/spiral.png";
import scaled from "../assets/images/jpg/latest-lasher-scaled.jpeg";
const OurTeam = () => {
  return (
    <div>
      <div className=" relative">
        <div className="absolute left-[50%]  translate-x-[-50%] top-[-5%]">
          {" "}
          <img
            className=" circle max-[1024px]:hidden "
            width={60}
            height={60}
            src={spiral}
            alt="spiral"
          />
        </div>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className=" lg:w-1/2 w-full min-[1080px]:pe-[80px] pe-[12px] ps-[16px] pb-[40px] lg:pt-[40px] text-center lg:text-end">
            <h2 className="xl:text-[40px] opacity-[.6] mb-3 lg:text-[25px] min-[1400px]:text-[45px] ">
              We make our team your ally.
            </h2>
            <p className=" opacity-[.6] text-[16px]  ms-auto leading-5 lg:max-w-[600px]">
              Our attorneys are uniquely qualified to help you, with our wealth
              of real-world experience and dedication to excellent client
              service. When you work with Lasher Holzapfel Sperry & Ebberson,
              you are working with more than a law firm. You are working with a
              law firm on a mission. A mission to make the legal process more
              clear, more effective, and more efficient for our clients. Our
              attorneys are creative, efficient, and approachable. We strive to
              understand your goals, be a part of your team, and respond with
              clear and effective counsel. We have attorneys and staff who can
              provide these services in multiple languages.
            </p>
            <button className=" hover:bg-[#000000b4] duration-500  bg-[#857a22] px-[38px] mt-4 text-[20px] text-white py-[7px] ff_play">
              Learn More
            </button>
          </div>
          <div className=" lg:w-1/2">
            <img
              className=" ms-auto  lg:w-[800px] p-[30px] lg:p-0"
              src={scaled}
              alt="scaled"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
