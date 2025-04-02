import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { GoXCircleFill } from "react-icons/go";
import { BsFillXCircleFill } from "react-icons/bs";

const Dream = () => {
  const [show, setShow] = useState(true);
  const [icon, setIcon] = useState(
    <BsFillPlusCircleFill className="text-[40px]" />
  );
  const shower = () => {
    if (show === true) {
      setIcon(<BsFillXCircleFill className="text-[40px]" />);
      setShow(false);
    } else {
      setIcon(<BsFillPlusCircleFill className="text-[40px]" />);
      setShow(true);
    }
  };
  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center mt-30">
        <div className="w-[1000px] mx-auto flex flex-wrap">
          <h3 className="uppercase text-left w-full font-semibold text-[20px]">
            Mac + iPhone
          </h3>
          <h1
            className="poppins text-left w-full min-w-[600px] font-bold text-[4vw] bg-clip-text text-transparent bg-gradient-to-r from-[#042842] to-[#507fa3] "
            data-aos="fade-up"
          >
            Dream team.
          </h1>
        </div>
      </div>
      <div className="w-full  flex flex-wrap justify-center items-center mt-10 ">
        <div className="w-[1000px] h-[620px] mx-auto flex flex-wrap bg-[#fbfbfb] relative">
          {show ? (
            <img
              src="/images/dream_1.jpg"
              alt="dream image"
              className="w-full h-full px-30 py-15 "
            />
          ) : (
            <div className="w-full flex justify-between items-baseline py-30 px-15">
              <div className="w-[250px] items-start flex flex-wrap">
                <img
                  src="/images/dream_2.png"
                  alt=""
                  className="w-full pr-45"
                />
                <p className="text-[17px] font-semibold poppins pt-5 text-gray-500">
                  <span className="text-black">iPhone Mirroring.</span> See and
                  use your iPhone apps from your Mac without having to reach for
                  your iPhone. Easily drag and drop files between devices. All
                  while your iPhone stays locked — so no one else can access it
                  or see what you’re doing.23
                </p>
              </div>
              <div className="w-[250px] items-start flex flex-wrap">
                <img
                  src="/images/dream_3.png"
                  alt=""
                  className="w-full pr-45"
                />
                <p className="text-[17px] font-semibold poppins pt-5 text-gray-500">
                  <span className="text-black">Answer calls and texts.</span>
                  Your calls and texts come right to your laptop, so there’s no
                  need to switch devices when you’re in the zone.24
                </p>
              </div>
              <div className="w-[250px] items-start flex flex-wrap">
                <img
                  src="/images/dream_4.png"
                  alt=""
                  className="w-[90%] pr-45"
                />
                <p className="text-[17px] font-semibold poppins pt-5 text-gray-500">
                  <span className="text-black">Scan documents.</span> Use your
                  iPhone to take a picture or scan a document and have it
                  automatically appear on your MacBook Air.
                </p>
              </div>
            </div>
          )}
          <div className="absolute top-[90%] right-10" onClick={shower}>
            {icon}
          </div>
        </div>
        <div className="w-[1000px] mx-auto">
            <p className="text-[19px] font-semibold poppins mt-10 text-gray-500">If you love iPhone, you’ll love Mac. Mac is designed to be just as easy to learn as iPhone. Whether you’re using iPhone Mirroring to view and control your iPhone from your Mac,23 copying text on your iPhone to paste on your Mac or locating devices with Find My — when you use Mac with iPhone, they work together like magic.</p>
        </div>
      </div>
    </>
  );
};

export default Dream;
