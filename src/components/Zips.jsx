import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { LuCirclePlus } from "react-icons/lu";

const Zips = () => {
  const perform = [
    {
      up: "upto",
      main: "23X",
      des: "faster than the fastest Intel‑based MacBook Air4",
    },
    {
      up: "upto",
      main: "2X",
      des: "faster than MacBook Air (M1)5",
    },
    {
      up: "upto",
      main: "18hr",
      des: "battery life",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center mt-30">
        <div className="w-[50%] mx-auto flex flex-wrap">
          <h3 className="uppercase text-left w-full font-semibold text-[20px]">
            Performance and battery life
          </h3>
          <h1
            className="poppins text-left w-full min-w-[600px] font-bold text-[4vw] bg-clip-text text-transparent bg-gradient-to-r from-[#042842] to-[#507fa3] "
            data-aos="fade-up"
          >
            M4. The chip that zips.
          </h1>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <video
          src="/images/large.mp4"
          autoPlay
          muted
          className="w-full h-auto"
        ></video>
      </div>
      <div className="w-[50%] mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full font-bold text-2xl poppins mt-15 text-gray-500">
          <div className="w-full flex justify-between items-center">
            <div className="w-[16%] border-r border-black flex  items-center">
              <img src="/images/image_2.jpg" />
            </div>
            <div className="w-[80%] flex justify-between">
              <div className="w-[30%]">
                <h2 className="text-[18px]">up to</h2>
                <h1 className="text-[4vw] text-transparent bg-clip-text bg-gradient-to-r from-[#042842] to-[#507fa3]">
                  23<span className="text-[3vw]">x</span>
                </h1>
                <h3 className="text-gray-500 text-[19px]">
                  faster than the fastest Intel‑based MacBook Air4
                </h3>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[18px]">up to</h2>
                <h1 className="text-[4vw] text-transparent bg-clip-text bg-gradient-to-r from-[#042842] to-[#507fa3]">
                  2<span className="text-[3vw]">x</span>
                </h1>
                <h3 className="text-gray-500 text-[19px]">
                  faster than MacBook Air (M1)5
                </h3>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[18px]">up to</h2>
                <h1 className="text-[4vw] text-transparent bg-clip-text bg-gradient-to-r from-[#18732a] to-[#11b01c]">
                  18<span className="text-[3vw]">hr</span>
                </h1>
                <h3 className="text-gray-500 text-[19px]">battery life</h3>
              </div>
            </div>
          </div>
          <h1 className="mt-15">
            <span className="text-black"> Multitasker. Multifaster.</span>
            MacBook Air with M4 brings even more speed and fluidity to
            everything you do, like working between loads of apps and tabs,
            editing videos or playing games like Sid Meier’s Civilization® VII.
            All with a silent, fanless design.
          </h1>
          <h1 className="mt-15">
            <span className="text-black">
              {" "}
              Neural Engine. Blazing fast for AI.
            </span>
            Thanks to the faster Neural Engine in the M4 chip, MacBook Air has
            even more powerful AI capabilities to enhance everything you do.
            From automatic camera frame centring to AI image upscaling to
            running the latest large language models, you’ll be more productive
            and creative than ever.
          </h1>
          <h1 className="mt-15">
            <span className="text-black"> Live a full battery life.</span>
            MacBook Air has up to 18 hours of battery life. And it supports fast
            charge, getting up to 50% in just 30 minutes.6 So you can power
            through anything you’re working on without worrying about your
            battery.
          </h1>
        </div>
      </div>
      <div className="w-[50%] mx-auto mt-15 ">
        <div className="w-[20%] border-3 rounded-full p-3 flex items-center font-bold justify-center hover:bg-black hover:text-white transition-all">Go inside M4 <LuCirclePlus className="inline font-bold ml-2 text-[20px]"/></div>
      </div>
    </>
  );
};

export default Zips;
