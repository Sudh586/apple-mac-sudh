import React, { useRef, useEffect } from "react";

const Herosec_1 = () => {
  const videoRef = useRef(null);
  const startTime = 11; // वीडियो 11 सेकंड से शुरू होगा
  const endTime = 89;  // वीडियो 90 सेकंड तक चलेगा

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // जब वीडियो लोड हो जाए, तो 11 सेकंड से शुरू करें
      const handleLoadedMetadata = () => {
        video.currentTime = startTime;
        video.play(); // ऑटो-प्ले सुनिश्चित करें
      };

      // वीडियो की प्रोग्रेस चेक करें और 90 सेकंड बाद रीस्टार्ट करें
      const handleTimeUpdate = () => {
        if (video.currentTime >= endTime) {
          video.currentTime = startTime; // वापस 11 सेकंड पर जाएं
          video.play(); // दोबारा प्ले करें
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
