import React, { useState } from "react";

const Intell = () => {
  const [image, setImage] = useState(
    <img
      src="/images/macer.jpg"
      alt=""
      className="w-full h-full object-cover"
    />
  );
  const [text, setText] = useState(
    " bg-gradient-to-r from-[#0095ff] via-[#f310ff] to-[#ff190d] text-transparent bg-clip-text"
  );
  const [text2, setText2] = useState(" text-gray-500");
  const [text3, setText3] = useState("text-gray-500");
  const [para, setPara] = useState(
    "Use Apple Intelligence to proofread your text and rewrite different versions until the tone and wording are just right, and summarise selected text with a click. Or use Compose to tap directly into ChatGPT to create content from scratch."
  );
  const [parasiri, setParasiri] = useState("");
  const tool = () => {
    setImage(
      <img
        src="/images/macer.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    );
    setText2(" text-gray-500 border-none");
    setText3(" text-gray-500 border-none");
    setText(
      " bg-gradient-to-r from-[#0095ff] via-[#f310ff] to-[#ff190d] text-transparent bg-clip-text border-b border-black "
    );
    setPara(
      "Use Apple Intelligence to proofread your text and rewrite different versions until the tone and wording are just right, and summarise selected text with a click. Or use Compose to tap directly into ChatGPT to create content from scratch."
    );
    setParasiri("")
  };
  const imageback = () => {
    setImage(
      <img
        src="/images/playground.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    );
    setText(" text-gray-500 border-none");
    setText3(" text-gray-500 border-none");
    setText2(
      " bg-gradient-to-r from-[#0095ff] via-[#f310ff] to-[#ff190d] text-transparent bg-clip-text border-b border-black"
    );
    setPara(
      "Create fun, original images based on a description, a concept or even a person from your Photos library."
    );
    setParasiri("")
  };
  const siri = () => {
    setImage(
      <img
        src="/images/siri.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    );
    setText(" text-gray-500 border-none");
    setText2(" text-gray-500 border-none");
    setText3(
      " bg-gradient-to-r from-[#0095ff] via-[#f310ff] to-[#ff190d] text-transparent bg-clip-text border-b border-black"
    );
    setPara(
      "Siri can help you like never before, drawing on your personal context by using the information on your device to help find what you’re looking for — like a presentation file shared with you in an email weeks ago.22 Siri can even tap into ChatGPT to bring answers right to you. No account needed."
    );
    setParasiri(
      "Siri’s personal context understanding, onscreen awareness and in-app actions are in development, and will be available with a future software update."
    );
  };
  return (
    <>
      <div className="w-[100%] bg-[#fbfbfb] mt-15">
        <h1 className="text-[3.5vw]  poppins font-extrabold  w-[40vw] min-w-[600px] mx-auto text-center pt-20 justify-center bg-gradient-to-r from-[#0095ff] via-[#f310ff] to-[#ff190d] text-transparent bg-clip-text">
          Apple Intelligence.<br></br>
          <span className="text-black"> Do more. Effort less.</span>
        </h1>
        <h3 className="text-[20px] font-medium flex w-[40vw] mx-auto text-center justify-center">
          Coming in English in early April1
        </h3>
        <p className="text-gray-500 text-[22px] text-center font-semibold poppins w-[50vw] mx-auto mt-15">
          Apple Intelligence is the personal intelligence system that helps you
          write, express yourself and get things done effortlessly. With
          groundbreaking privacy protections, it gives you peace of mind that no
          one else can access your data — not even Apple.1
        </p>
      </div>
      <div className="w-[50vw] mx-auto transition-all mt-15">{image}</div>
      <div className="w-[700px] mx-auto flex justify-between item-center mt-15 border-b border-gray-400/50 my-3 px-5 mb-15">
        <h1
          className={`text-[28px] font-extrabold poppins cursor-pointer  border-b border-black ${text} pb-3`}
          onClick={tool}
        >
          Writing Tools
        </h1>
        <h1
          className={`text-[28px] font-extrabold poppins cursor-pointer text-gray-500 pb-3 ${text2}`}
          onClick={imageback}
        >
          Image Playground
        </h1>
        <h1
          className={`text-[28px] font-extrabold poppins cursor-pointer text-gray-500 pb-3 ${text3}`}
          onClick={siri}
        >
          Siri
        </h1>
      </div>
      <div className="w-[700px] mx-auto flex flex-wrap justify-between item-center mt-15 my-3 px-5 mb-15">
        <p
          className={`text-[19px] text-center font-extrabold poppins cursor-pointer pb-3 text-gray-500 w-full`}
        >
          {para}
        </p>{" "}
        <p className="font-semibold text-center text-gray-500">{parasiri}</p>
      </div>
    </>
  );
};
export default Intell;
