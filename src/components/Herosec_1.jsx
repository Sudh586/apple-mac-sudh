import React, { useRef, useEffect } from "react";

const Herosec_1 = () => {
  const videoRef = useRef(null);
  const startTime = 11; // वीडियो 11 सेकंड से शुरू होगा
  const endTime = 89;  // वीडियो 90 सेकंड तक चलेगा

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleLoadedMetadata = () => {
        console.log("Metadata loaded, setting start time...");
        setTimeout(() => {
          video.currentTime = startTime;
          video.play();
        }, 500); // 500ms delay
      };

      const handleTimeUpdate = () => {
        if (video.currentTime >= endTime) {
          console.log("Looping back to start time...");
          video.currentTime = startTime;
          video.play();
        }
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div>
      <div className="w-full bg-[#f5f5f7]">
        <video
          ref={videoRef}
          src="/images/videoplayback (5).mp4"
          autoPlay
          muted
          playsInline
          className="w-[100%] h-auto mx-auto"
        ></video>
      </div>
      <div className="w-[50%] mx-auto mt-20">
        <h1 className="text-2xl font-bold poppins text-gray-500 text-center">
          MacBook Air is the world’s most popular laptop for a reason. Actually,
          for a lot of reasons. It delivers{" "}
          <span className="text-black">up to 18 hours of battery life</span>. The{" "}
          <span className="text-black">M4 chip</span> unlocks a whole new level
          of performance for work and play.{" "}
          <span className="text-black">Apple Intelligence</span> is built in to
          help you get things done effortlessly.1 And it now comes in a stunning
          Sky Blue colour. With the perfectly portable MacBook Air, you’ll be
          ready to take on just about anything, anywhere.
        </h1>
      </div>
    </div>
  );
};

export default Herosec_1;
