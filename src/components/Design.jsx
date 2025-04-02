import React from "react";

const Design = () => {
  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center mt-30">
        <div className="w-[50%] mx-auto flex flex-wrap">
          <h3 className="uppercase text-left w-full font-semibold text-[20px]">
            design
          </h3>
          <h1
            className="poppins text-left w-full min-w-[600px] font-bold text-[4vw] bg-clip-text text-transparent bg-gradient-to-r from-[#042842] to-[#507fa3] "
            data-aos="fade-up"
          >
            Built to go places.
          </h1>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <video
          src="/images/large (1).mp4"
          autoPlay
          muted
          className="w-full h-auto"
        ></video>
      </div>
      <div className="w-[50%] mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full font-bold text-2xl poppins mt-15 text-gray-500">
          <h1>
            <span className="text-black">
              {" "}
              Remarkably light and just over a centimetre thin
            </span>
            , MacBook Air fits easily into your on-the-go lifestyle — and your
            bag. MacBook Air with M4 is made with over 50% recycled materials
            and has a durable recycled aluminium enclosure.
          </h1>
        </div>
        <div className="w-full h-[80vh] bg-[url('/images/image_1.jpg')] mt-15 flex justify-center items-center">
          <h1 className="text-black text-4xl font-bold text-left poppins mx-20">
            34.46 cm (13.6″)<br></br> display
          </h1>
          <h1 className="text-black text-4xl font-bold text-left poppins mx-20">
            38.91 cm (15.3″)<br></br>
            display
          </h1>
        </div>
        <div className="w-full font-bold text-2xl poppins mt-15 text-gray-500">
          <h1>
            <span className="text-black"> Two perfectly portable sizes.</span>
            The 13″ MacBook Air is the ultimate on-the-go laptop, and the 15″
            MacBook Air gives you even more space onscreen for multitasking.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Design;
