import React from "react";
import spiral from "../assets/images/png/spiral.png";
import textimg from "../assets/images/png/a.png";
const WIldSmith = () => {
  return (
    <div>
      <div className="container">
        <div className=" relative">
          <div className="absolute left-[50%]  translate-x-[-50%] top-[-5%]">
            <img
              className=" circle max-[1024px]:hidden "
              width={60}
              height={60}
              src={spiral}
              alt="spiral"
            />
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className=" lg:w-1/2">
              <img
                className="  w-full img h-full  p-[30px] lg:p-0"
                src={textimg}
                alt="textimg"
              />
            </div>
            <div className=" lg:w-1/2 w-full lg:ps-[80px]  ps-[16px] pb-[40px] lg:pt-[80px] text-center lg:text-start ">
              <p className=" opacity-[.6] text-[16px]   leading-5 lg:max-w-[600px]">
                LHSE is embracing the wisdom of former US secretary of Labor,
                Alexis Herman, as we learn about and implement changes to our
                firm. We understand that inclusion and fairness in the workplace
                is not simply the smart thing to do; it’s the right thing to do.
              </p>{" "}
              <p className=" opacity-[.6] text-[16px] mt-5   leading-5 lg:max-w-[600px]">
                Led by the Chair of our IDEA Committee, Lasher Trusts & Estates
                Litigator, Quentin Wildsmith, we are working to improve employee
                understanding about inclusion, improve workplace culture to
                foster belonging and inclusivity, and ensure advancement
                opportunities for employees from underrepresented groups.
              </p>
              <button className=" hover:bg-[#000000b4] duration-500  bg-[#857a22] px-[38px] mt-5 text-[20px] text-white py-[7px] ff_play">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIldSmith;
