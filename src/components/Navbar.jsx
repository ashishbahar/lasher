import React, { useState } from "react";
import pagelogo from "../assets/images/png/pagelogo.png";
import { NavbarData, NavbarData2, NavbarData3 } from "./Helper";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className={` ${isOpen ? "bg-white" : ""}`}>
      <div className="container ">
        <div className="flex justify-between items-center">
          <img
            className=" xl:w-[250px] sm:w-[180px] w-[158px]  pt-3 ps-1"
            src={pagelogo}
            alt="pagelogo"
          />
          <div className="pe-5">
            <div
              className={`sm:h-[60px] h-[50px] rounded-full sm:w-[60px] w-[50px] flex items-center justify-center bg-[#847a22] ${
                isOpen ? "open" : ""
              }`}
              onClick={toggleMenu}
            >
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className={`ps-5 ${isOpen ? "d-block" : "hidden"}`}>
          <div className=" flex justify-between sm:flex-row flex-col ">
            <div className=" lg:block hidden">
              {" "}
              <p className=" text-[24px] sm:text-[30px] text-black font-[500]">
                Our Attorneys
              </p>
              <div className="flex justify-between">
                <ul className=" pb-[50px]">
                  {NavbarData.map((obj, i) => {
                    return (
                      <li className=" mt-1">
                        <a className=" text-[#857a22] text-[16px] xl:text-[20px]  cursor-pointer hover:text-[#625914]">
                          {obj.Name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <ul className=" pb-[50px] ps-[20px] xl:ps-[80px]">
                  {NavbarData2.map((obj, i) => {
                    return (
                      <li className=" mt-1">
                        <a className=" text-[#857a22] text-[16px] xl:text-[20px]  cursor-pointer hover:text-[#625914]">
                          {obj.Name}
                        </a>
                      </li>
                    );
                  })}
                </ul>{" "}
                <ul className=" pb-[50px] ps-[20px] xl:ps-[80px]">
                  {NavbarData.map((obj, i) => {
                    return (
                      <li className=" mt-1">
                        <a className=" text-[#857a22] text-[16px] xl:text-[20px]  cursor-pointer hover:text-[#625914]">
                          {obj.Name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <p className=" text-[24px] sm:text-[30px] text-black font-[500]">
                Practice Areas
              </p>
              <ul className=" sm:pb-[50px]">
                {NavbarData3.map((obj, i) => {
                  return (
                    <li className=" mt-1">
                      <a className=" text-[#52a1a6] text-[16px] xl:text-[20px]  cursor-pointer hover:text-[#2a6a6f]">
                        {obj.Name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pe-5">
              <p className=" text-[24px] sm:text-[30px] text-black font-[500]">About Us</p>
              <ul>
                <li className="text-[#a35a27] cursor-pointer">Community</li>
                <li className="text-[#a35a27] cursor-pointer">
                  Inclusion, Diversity, Equity, &#038; Access – IDEA
                </li>
                <li className="text-[#a35a27] cursor-pointer">Testimonials</li>
              </ul>
              <p className=" text-[24px] sm:text-[30px] mt-4 text-black font-[500]">News</p>
              <ul>
                <li className="text-[#a35a27] cursor-pointer">Blog</li>
              </ul>{" "}
              <p className=" text-[24px] sm:text-[30px] mt-4 text-black font-[500]">
                Contact Us
              </p>
              <ul>
                <li className="text-[#a35a27] cursor-pointer">
                  Attorney Publications
                </li>{" "}
                <li className="text-[#a35a27] cursor-pointer">
                  Press Releases
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
