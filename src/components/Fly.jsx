import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const Fly = () => {
  useGSAP(() => {
    gsap.from(gsap.utils.toArray(".zoomer"), {
      scale: 0.5,
      duration:2,
      stagger: 0, // Delay each animation slightly
      scrollTrigger: {
        trigger: ".zoomer",
        start: "top 100%",
        end: "top 30%",
      },
    });
  });

  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center mt-30">
        <div className="w-[1000px] mx-auto flex flex-wrap">
          <h3 className="uppercase text-left w-full font-semibold text-[20px]">
            MacOS
          </h3>
          <h1
            className="poppins text-left w-full min-w-[600px] font-bold text-[4vw] bg-clip-text text-transparent bg-gradient-to-r from-[#042842] to-[#507fa3]"
            data-aos="fade-up"
          >
            Let your apps fly.
          </h1>
        </div>
      </div>
      <div className="w-[50%] mx-auto h-[500px] bg-gray-50 my-[60px] overflow-hidden relative">
        <div className="zoomer absolute -top-7 -left-7">
          <img src="/images/7516862-removebg-preview.png" alt="" className="w-[40%]" />
        </div>
        <div className="zoomer absolute -bottom-10 -left-7">
          <img src="/images/7516879-removebg-preview.png" alt="" className="w-[40%]" />
        </div>
        <div className="zoomer absolute top-30 left-35">
          <img src="/images/4602455-removebg-preview.png" alt="" className="w-[30%]" />
        </div>
        <div className="zoomer absolute top-7 left-85">
          <img src="/images/3915181.webp" alt="" className="w-[20%]" />
        </div>
        <div className="zoomer absolute top-15 left-140">
          <img src="/images/7516861-removebg-preview.png" alt="" className="w-[20%]" />
        </div>
        <div className="zoomer absolute top-50 left-180">
          <img
            src="/images/free-visual-studio-code-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microsoft-logo-python-java-c-coding-lang-pack-logos-icons-7578027.webp"
            alt=""
            className="w-[40%]"
          />
        </div>
        <div className="zoomer absolute -top-10 -right-70">
          <img
            src="/images/free-netflix-3d-logo-download-in-png-blend-fbx-gltf-file-formats--social-media-pack-logos-2447898.webp"
            alt=""
            className="w-[50%]"
          />
        </div>
        <div className="zoomer absolute -bottom-15 -right-60">
          <img
            src="/images/excel-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sheet-spreadsheet-extension-microsoft-office-pack-appliances-icons-8500329.webp"
            alt=""
            className="w-[50%]"
          />
        </div>
        <div className="zoomer absolute bottom-25 right-40">
          <img src="/images/9395338.webp" alt="" className="w-[30%]"/>
        </div>
        <div className="zoomer absolute bottom-5 right-10">
          <img src="/images/amazon-prime-logo-free-png.webp" alt="" className="w-[40%]" />
        </div>
        <div className="zoomer absolute bottom-5 left-50">
          <img
            src="/images/ppt-file-3d-illustration-download-in-png-blend-fbx-gltf-formats--type-format-extension-folders-and-files-pack-illustrations-4687429.webp"
            alt=""
            className="w-[20%]"
          />
        </div>
      </div>
      <div className="w-[70%] mx-auto ">
        <p className="text-gray-500 text-[22px] text-center font-semibold poppins w-[50vw] mx-auto mt-15">
        With tens of thousands of apps optimised for Apple silicon, all your favourites run lightning fast in macOS, including Microsoft 365 Copilot, Adobe Creative Cloud and Google Workspace with Gemini. And regular, free macOS software updates keep things running smoothly.
        </p>
      </div>
    </>
  );
};

export default Fly;
