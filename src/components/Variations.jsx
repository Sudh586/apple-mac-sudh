import React, { useState } from "react";

const Variations = () => {
  const [image1, setImage1] = useState(
    <img src="/images/mac_1.jpg" alt="" className="w-full m-20 " />
  );
  const [image2, setImage2] = useState(
    <img src="/images/mac_2.jpg" alt="" className="w-full mt-10" />
  );
  const [image3, setImage3] = useState(
    <img src="/images/mac_3.jpg" alt="" className="w-full p-20 " />
  );
  const blue=()=>{
    setImage1( <img src="/images/mac_1.jpg" alt="" className="w-full m-20 " />);
    setImage2( <img src="/images/mac_2.jpg" alt="" className="w-full mt-10" />);
    setImage3(  <img src="/images/mac_3.jpg" alt="" className="w-full p-20 " />);
  }
  const silver=()=>{
    setImage1( <img src="/images/mac_4.jpg" alt="" className="w-full m-20 " />);
    setImage2( <img src="/images/mac_5.jpg" alt="" className="w-full mt-10" />);
    setImage3(  <img src="/images/mac_6.jpg" alt="" className="w-full p-20 " />);
  }
  const gold=()=>{
    setImage1( <img src="/images/mac_7.jpg" alt="" className="w-full m-20 " />);
    setImage2( <img src="/images/mac_8.jpg" alt="" className="w-full mt-10" />);
    setImage3(  <img src="/images/mac_9.jpg" alt="" className="w-full p-20 " />);
  }
  const black=()=>{
    setImage1( <img src="/images/mac_10.jpg" alt="" className="w-full m-20 " />);
    setImage2( <img src="/images/mac_11.jpg" alt="" className="w-full mt-10" />);
    setImage3(  <img src="/images/mac_12.jpg" alt="" className="w-full p-20 " />);
  }
  return (
    <>
      <div className="w-[50%] mx-auto flex justify-between mt-15">
        <div className="w-[49%] flex flex-wrap bg-white">
          <div className="w-[100%] flex flex-wrap bg-[#fbfbfb]">
            {image1}
          </div>
          <div className="w-[100%] flex flex-wrap bg-[#fbfbfb]">{image2}</div>
        </div>
        <div className="w-[49%] flex flex-wrap bg-[#fbfbfb]">
          <div className="w-[100%] flex flex-wrap bg-[#fbfbfb]">
            {image3}
          </div>
          <div className="w-[80%] mx-auto flex justify-center bg-[#fbfbfb]">
            <div className="w-[20%] flex justify-center flex-wrap">
              <div className="w-[40px] h-[40px] rounded-full bg-[#c8d7e0]"onClick={blue}>
                {" "}
              </div>
              <h1 className="w-full text-center capitalize" >sky blue</h1>
            </div>
            <div className="w-[20%] flex justify-center flex-wrap">
              <div className="w-[40px] h-[40px] rounded-full bg-[#b9bbbc]" onClick={silver}>
                {" "}
              </div>
              <h1 className="w-full text-center capitalize">silver</h1>
            </div>
            <div className="w-[20%] flex justify-center flex-wrap">
              <div className="w-[40px] h-[40px] rounded-full bg-[#d6d0c6]" onClick={gold}>
                {" "}
              </div>
              <h1 className="w-full text-center capitalize">gold</h1>
            </div>
            <div className="w-[20%] flex justify-center flex-wrap">
              <div className="w-[40px] h-[40px] rounded-full bg-[#272931]" onClick={black}>
                {" "}
              </div>
              <h1 className="w-full text-center capitalize">black</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variations;
