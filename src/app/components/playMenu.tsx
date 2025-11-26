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
  ({ onPrev, onNext, onInfo, onHome, onAZ, currentIndex }, ref) => {
    const [showPrevButton, setShowPrevButton] = React.useState(false);

    const handleNext = () => {
      if (currentIndex === 0) {
        setShowPrevButton(true);
      }
      onNext(); 
    };

      const handlePrev = () => {
        if (currentIndex === 0) {
          setShowPrevButton(false);
        }
        onPrev();
      };

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
                className="object-contain responsive-icon-small-home"
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
                className="object-contain responsive-icon-small-home"
              />
            </button>
          </div>

          {/* Center Info Button */}
          {![ 4, 5, 6, 9, 14, 18, 19].includes(currentIndex) && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-6 responsive-mb-bottom z-10">
               <button
                onClick={onInfo}
                className="responsive-padding cursor-pointer border-2 border-white rounded-full bg-[#A8C2AC]/40 backdrop-blur-sm "
              >
                <Image
                  src="/logo/info-icon.png"
                  alt="Info"
                  width={50}
                  height={50}
                  className="rounded-full object-contain responsive-icon-medium-home"
                />
              </button>
            </div>
          )}

          {/* Right Group */}
          <div className="flex">
            {(currentIndex > 0 || showPrevButton) && (
              <button
                onClick={handlePrev}
                className="responsive-padding rounded-tl-2xl text-center border-2 border-gray-400 bg-[#A8C2AC]/40 backdrop-blur-sm hover:bg-[#b8ead9]/40 cursor-pointer transition-all duration-300"
              >
                <Image
                  src="/logo/left-icon.png"
                  alt="left-icon"
                  width={40}
                  height={40}
                  className="object-contain responsive-icon-small-home"
                />
              </button>
            )}
            <button
              onClick={handleNext}
              className={`responsive-padding text-center border-2 border-gray-400 bg-[#A8C2AC]/40 backdrop-blur-sm hover:bg-[#b8ead9]/40 cursor-pointer transition-all duration-300 ${
                showPrevButton === false ? "border-l-2 rounded-l-xl" : "border-l-0"
              }`}
            >
              <Image
                src="/logo/right-icon.png"
                alt="right-icon"
                width={40}
                height={40}
                className="object-contain responsive-icon-small-home"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

PlayMenu.displayName = "PlayMenu";
export default PlayMenu;
