import React from "react";
import PlayMenu from "../components/playMenu";

const Page = () => {
  return (
    <div className="w-[400px] h-[90vh] relative my-6 rounded-xl bg-white overflow-hidden m-auto flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content on top */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        <PlayMenu />
      </div>
    </div>
  );
};

export default Page;
