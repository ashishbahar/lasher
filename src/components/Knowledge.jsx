import React from "react";
import spiral from "../assets/images/png/spiral.png";
const Knowledge = () => {
  return (
    <div className="relative">
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
        <h2 className=" md:text-[40px] text-[23px] lg:text-[45px] text-center">
          We make our knowledge public.
        </h2>
        <h3 className=" sm:text-[24px] text-[18px] text-center">
          Featured News & Information
        </h3>
        <div className="flex max-[768px]:flex-wrap items-center flex-col md:flex-row justify-center pb-[20px] sm:pb-[50px]">
          <div className="lg:w-3/4 sm:w-1/2 px-[12px] text-center  xl:px-[42px]">
            <p className=" cursor-pointer text-[#857a22] hover:text-[#373318] duration-300  mt-[30px] sm:mt-[50px] mb-[15px] lg:mb-[30px] ">
              Lasher Holzapfel Sperry & Ebberson Adds New Lawyers to Estate
              Planning Practice Group
            </p>
            <p>
              Seattle – March 28, 2024 – Lasher Holzapfel Sperry & Ebberson is
              pleased to announce that Teresa Tallarita and Patrick Carter have
              joined the firm’s Estate Planning Practice Group. Teresa
              Tallarita’s practice focuses on comprehensive estate planning as
              well as estate/probate administration. She is also experienced in
              commercial/residential real estate and business transactions. In
              addition,...
            </p>
            <a className="text-[#857a22] hover:text-[#373318] cursor-pointer duration-300 linear">
              Read More
            </a>
          </div>
          <div className="lg:w-3/4 sm:w-1/2 px-[12px] text-center xl:px-[42px]">
            <p className=" cursor-pointer text-[#857a22] hover:text-[#373318] duration-300 mt-[50px] mb-[15px] lg:mb-[30px] ">
              Lasher Holzapfel Sperry & Ebberson Adds New Lawyers to Estate
              Planning Practice Group
            </p>
            <p>
              A few years ago, Congress passed the Corporate Transparency Act,
              31 U.S.C. 5336 (“CTA”), which established certain required
              information filings with the U.S. Treasury Financial Crimes
              Enforcement Network (“FinCEN”). The purpose of the CTA is to
              create a national database of companies in the U.S. that
              identifies the people behind the companies both owners and...
            </p>
            <a className="text-[#857a22] hover:text-[#373318] cursor-pointer duration-300 linear">
              Read More
            </a>
          </div>
          <div className="lg:w-3/4 sm:w-1/2 px-[12px] text-center xl:px-[42px]">
            <p className=" cursor-pointer text-[#857a22] hover:text-[#373318] duration-300 mt-[50px] mb-[15px] lg:mb-[30px] ">
              Lasher Holzapfel Sperry & Ebberson Adds New Lawyers to Estate
              Planning Practice Group
            </p>
            <p>
              Lasher Holzapfel Sperry & Ebberson is proud to announce that,
              effective January 1, 2024, Julie M. Pendleton has been elevated to
              Principal in the Firm, where she serves a wide variety of clients
              in commercial litigation, real estate litigation and trust &
              estates litigation. Lasher Managing Principal Mario Bianchi added,
              “We are delighted to announce...
            </p>
            <a className="text-[#857a22] hover:text-[#373318] cursor-pointer duration-300 linear">
              Read More
            </a>
          </div>
        </div>
        <div className=" text-center sm:pb-[80px]">
          <button className="  hover:bg-[#000000b4] duration-500  bg-[#857a22] px-[38px] mt-4 text-[20px] text-white py-[7px] ff_play">
        View More Post 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
