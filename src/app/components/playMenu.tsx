"use client";
import React, { forwardRef } from "react";
import Image from "next/image";

interface PlayMenuProps {
  onPrev: () => void;
  onNext: () => void;
  onInfo: () => void;
  onHome: () => void;
  onAZ: () => void;
  currentIndex: number;
}

const PlayMenu = forwardRef<HTMLDivElement, PlayMenuProps>(
  ({ onPrev, onNext, onInfo, onHome, onAZ,currentIndex }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute bottom-0 w-full shadow-md bg-gradient-to-t from-black/70 to-transparent"
      >
        <div className="flex justify-between items-end">
          {/* Left Group */}
          <div className="flex">
            <button
              onClick={onHome}
              className="responsive-padding text-center border-2 border-gray-400 border-l-0 bg-[#A8C2AC]/40 backdrop-blur-sm hover:bg-[#b8ead9]/40 cursor-pointer transition-all duration-300"
            >
              <Image
                src="/logo/home-icon.png"
                alt="home icon"
                width={40}
                height={40}
                className="object-contain responsive-icon-small"
              />
            </button>
            <button
              onClick={onAZ}
              className="responsive-padding rounded-tr-2xl text-center border-2 border-gray-400 border-l-0 bg-[#A8C2AC]/40 backdrop-blur-sm hover:bg-[#b8ead9]/40 cursor-pointer transition-all duration-300"
            >
              <Image
                src="/logo/a-z-icon.png"
                alt="a-z icon"
                width={40}
                height={40}
                className="object-contain responsive-icon-small"
              />
            </button>
          </div>
          {/* Center Info (raised + bigger) */}
          {![3, 4, 5, 6, 8, 14, 18, 19].includes(currentIndex) && (
            <button
              onClick={onInfo}
              className="responsive-mb-bottom responsive-padding cursor-pointer border-2 border-white rounded-full bg-[#A8C2AC]/40 backdrop-blur-sm "
            >
              <Image
                src="/logo/info-icon.png"
                alt="Info"
                width={50}
                height={50}
                className="rounded-full object-contain responsive-icon-medium"
              />
            </button>
          )}
          {/* Right Group */}
          <div className="flex">
            <button
              onClick={onPrev}
              className="responsive-padding rounded-tl-2xl text-center border-2 border-gray-400 bg-[#A8C2AC]/40 backdrop-blur-sm hover:bg-[#b8ead9]/40 cursor-pointer transition-all duration-300"
            >
              <Image
                src="/logo/left-icon.png"
                alt="left-icon"
                width={40}
                height={40}
                className="object-contain responsive-icon-small"
              />{" "}
            </button>
            <button
              onClick={onNext}
              className="responsive-padding text-center border-2 border-gray-400 border-l-0 bg-[#A8C2AC]/40 backdrop-blur-sm hover:bg-[#b8ead9]/40 cursor-pointer transition-all duration-300"
            >
              <Image
                src="/logo/right-icon.png"
                alt="right-icon"
                width={40}
                height={40}
                className="object-contain responsive-icon-small"
              />{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

PlayMenu.displayName = "PlayMenu";

export default PlayMenu;
