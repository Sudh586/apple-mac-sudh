import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Mac = () => {
  const[slide , setSlide]=useState(1);
  const[color , setColor]=useState("bg-[#eaeaea]")
  const[color2 , setColor2]=useState("bg-[#dddddf]")
  const righter=()=>{
    if(slide === 1){
      setSlide(0)
      setColor("bg-[#dddddf]")
    }
    if(slide === 0){
      setSlide(-1)
      setColor2("bg-[#eaeaea]")
    }
  }
  const lefter=()=>{
    if(slide === -1){
      setSlide(0)
      setColor2("bg-[#dddddf]")
    }
    if(slide === 0){
      setSlide(1)
      setColor("bg-[#eaeaea]")
    }
  }
  const gallery = [
    {
      image: "/images/gallery_1.jpg",
      tittle: "Setup is a breeze.",
      des: " Easily move files, apps and more from your old PC or Mac with Migration Assistant. And if you need any help, Apple Support is always just an online chat, phone call or in‑store appointment away.",
    },
    {
      image: "/images/gallery_2.jpg",
      tittle: "Access files anywhere with iCloud.",
      des: "iCloud lets you store all your photos, contacts and documents so they’re available on all your devices. Start a to‑do list on your iPhone and check off items on your MacBook Air — and so much more.",
    },
    {
      image: "/images/gallery_3.jpg",
      tittle: "Packed with powerful apps.",
      des: "Mac comes with apps like FaceTime, Freeform and Keynote that let you get to work creating and collaborating on your next big idea.",
    },
    {
      image: "/images/gallery_4.jpg",
      tittle: "Mac is built to last.",
      des: " Made with durable recycled aluminium enclosures, Mac laptops are ready for just about anything. And free macOS software updates help your Mac work reliably and securely for years to come.",
    },
    {
      image: "/images/gallery_5.jpg",
      tittle: "Never used a Mac?",
      des: " No problem. Switching to Mac from PC is quick and easy.",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center mt-30 bg-[#fbfbfb]">
        <div className="w-[1000px] mx-auto flex flex-wrap">
          <h1
            className="poppins text-left w-full min-w-[600px] font-bold text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-[#042842] to-[#78b4e1] mt-15"
            data-aos="fade-up"
          >
            New to Mac?
          </h1>
        </div>
        <div className="w-full flex justify-center items-baseline mt-10 gap-10 overflow-hidden shrink-0">
          {gallery.length > 0
            ? gallery.map((each, index) => {
                return (
                  <>
                    {" "}
                    <div
                      key={index}
                      className="w-[300px] flex flex-wrap duration-300"
                      style={{ transform: `translate(${slide*100}%)` }}
                    >
                      <img src={each.image} alt="" className="w-full" />
                      <p className="text-gray-500 text-[19px] poppins font-semibold mt-5">
                        <span className="text-black">{each.tittle}</span>{" "}
                        {each.des}
                      </p>
                    </div>
                    
                  </>
                );
              })
            : "data loading ..."}
           
        </div>
         <div className="w-[80%] mx-auto flex justify-end items-center">
          <div className={`w-[40px] h-[40px] rounded-full ${color} mx-5 flex justify-center items-center text-[22px]`} onClick={lefter}><IoIosArrowBack/></div>
          <div className={`w-[40px] h-[40px] rounded-full ${color2} mx-5 flex justify-center items-center text-[22px]`} onClick={righter}><IoIosArrowForward/></div>
         </div>
      </div>
    </>
  );
};

export default Mac;
