import React from "react";

const VideoPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        controls
      >
        <source src="/candle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
