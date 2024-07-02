import React from "react";
import spiral from "../assets/images/png/spiral.png";
const Footer = () => {
  return (
    <footer className=" footer_bg relative">
      <div className="absolute left-[50%]  translate-x-[-50%] top-[-7%]">
        <img
          className=" circle max-[1024px]:hidden "
          width={60}
          height={60}
          src={spiral}
          alt="spiral"
        />
      </div>
      <div className="px-[24px] py-[40px] sm:py-[60px]">
        <div className="text-center">
          <p className=" mb-[20px] spacing2 ff_play text-[18px] text-white">
            Lasher Holzapfel Sperry & Ebberson PLLC
          </p>
          <p className=" text-[12px] text-white cursor-pointer">
            601 Union St., Suite 2600
          </p>
          <p className=" text-[12px] text-white cursor-pointer">
            Seattle, WA 98101-4000
          </p>
          <p className=" text-[12px] text-white cursor-pointer">
            Phone: (206) 624-1230
          </p>
          <p className=" text-[12px] text-white cursor-pointer">
            Fax: (206) 340-2563
          </p>
          <div className="flex py-[40px] justify-center">
            <a className=" text-[#857a22] duration-300 hover:text-white cursor-pointer px-1">
              Contact Us{" "}
            </a>{" "}
            <span className=" h-[20px] w-[1px] bg-white"></span>
            <a className=" text-[#857a22] duration-300 hover:text-white cursor-pointer px-1">
              Legal Disclaimer
            </a>
            <span className=" h-[20px] w-[1px] bg-white"></span>
            <a className=" text-[#857a22] duration-300 hover:text-white cursor-pointer px-1">
              日本語
            </a>
          </div>
          <p className=" text-white text-[12px]">
            © 2024 Lasher Holzapfel Sperry & Ebberson PLLC. All Rights Reserved.
            A Professional Limited Liability Company (including professional
            corporations)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
