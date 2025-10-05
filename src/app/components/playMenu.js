"use client";
import React from "react";
import Image from "next/image";

const PlayMenu = ({ onPrev, onNext, onInfo, onHome, onAZ }) => {
  return (
    <div className="absolute bottom-0 w-full shadow-md bg-gradient-to-t from-black/70 to-transparent">
      <div className="flex justify-between items-end">
        {/* Left Group */}
        <div className="flex">
          <button
            onClick={onHome}
            className="p-2 rounded-l text-center border border-gray-400 cursor-pointer hover:bg-[#b8ead9] transition-all duration-300 bg-[#A8C2AC] border-gray-400 backdrop-blur-sm hover:bg-[#b8ead9] cursor-pointer "
          >
            <Image
              src="/logo/home-icon.png"
              alt="home icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </button>
          <button
            onClick={onAZ}
            className="p-2 rounded-r text-center border-2 border-gray-400 border-l-0 hover:bg-[#b8ead9] cursor-pointer transition-all duration-300 bg-[#A8C2AC] border-gray-400 backdrop-blur-sm hover:bg-[#b8ead9] cursor-pointer "
          >
            <Image
              src="/logo/a-z-icon.png"
              alt="a-z icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </button>
        </div>

        {/* Center Info (raised + bigger) */}
        <button
          onClick={onInfo}
          className="p-2 rounded-full text-center mb-8 border-2 transition-all duration-300 bg-[#A8C2AC] border-gray-400 backdrop-blur-sm hover:bg-[#b8ead9] cursor-pointer transition-all duration-300 bg-[#A8C2AC] border-gray-400 backdrop-blur-sm hover:bg-[#b8ead9] cursor-pointer "
        >
          {/* <CiCircleInfo size={36} /> */}
          <Image
            src="/logo/info-icon.png"
            alt="Info"
            width={46}
            height={46}
            className="object-contain"
          />
        </button>

        {/* Right Group */}
        <div className="flex">
          <button
            onClick={onPrev}
            className="p-2 rounded-l text-center border-2 border-gray-400 hover:bg-[#b8ead9] cursor-pointer transition-all duration-300 bg-[#A8C2AC] border-gray-400 backdrop-blur-sm hover:bg-[#b8ead9] cursor-pointer "
          >
            <Image
              src="/logo/left-icon.png"
              alt="left-icon"
              width={40}
              height={40}
              className="object-contain"
            />{" "}
          </button>
          <button
            onClick={onNext}
            className="p-2 rounded-r text-center border-2 border-gray-400 border-l-0 hover:bg-[#b8ead9] cursor-pointer transition-all duration-300 bg-[#A8C2AC] border-gray-400 backdrop-blur-sm hover:bg-[#b8ead9] cursor-pointer "
          >
            <Image
              src="/logo/right-icon.png"
              alt="right-icon"
              width={40}
              height={40}
              className="object-contain"
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayMenu;
