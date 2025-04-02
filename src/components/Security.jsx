import React from "react";

const Security = () => {
  return (
    <>
      <div className="w-[1000px] mx-auto flex flex-wrap justify-center items-center">
      <img src="/images/security-og.jpg" alt="apple-security" className="w-[500px] mx-auto"/>
      <h1 className="text-[50px]  poppins font-extrabold  w-[40vw] min-w-[600px] mx-auto text-center pt-20 justify-center text-black">
      Great powers come<br></br>with great
          <span className=" bg-gradient-to-r from-[#0095ff] via-[#f310ff] to-[#ff190d] text-transparent bg-clip-text"> privacy.</span>
        </h1>
        <div className="w-full flex justify-between mt-15">
            <p className="w-[45%] font-semibold text-[19px] poppins text-gray-500">Apple Intelligence is designed to protect your privacy at every step. It’s integrated into the core of your Mac through on-device processing. So it’s aware of your personal information without collecting your personal information.</p>
            <p className="w-[45%] font-semibold text-[19px] poppins text-gray-500">And with groundbreaking Private Cloud Compute, Apple Intelligence can draw on larger server-based models, running on Apple silicon, to handle more complex requests for you while protecting your privacy.</p>
        </div>
      </div>
    </>
  );
};

export default Security;
