"use client";

import React, { useRef, useState, useEffect } from "react";
import PlayMenu from "../components/playMenu";
import videos from "../json/videos.json";
import PopupPlayer from "../components/PopupPlayer";

import "../styles/bg.css";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const videoRef = useRef(null);
  const popupRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  // Popup play/mute are handled inside PopupPlayer

  const toggleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Ensure clicking info mounts the popup component

  // When video index changes, keep background playing muted
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.muted = true; // always muted background
      videoRef.current.play();
    }
  }, [currentIndex]);

  // Popup self-animates; we mount/unmount via showInfo

  return (
    <div className="app-viewport">
      <div className="app-frame relative rounded-xl bg-white overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
        >
          <source src={videos[currentIndex].url} type="video/mp4" />
        </video>

        {/* Subtitle (paragraph style, limited text, no overlay) */}
        <div className="absolute top-6 w-[80%] px-6 pointer-events-none">
          <div className="max-h-[20vh] overflow-hidden">
            <p className="text-white text-sm font-normal leading-snug text-justify drop-shadow-md">
              {videos[currentIndex].subtitle
                .split(" ")
                .slice(0, 35) // limit to 35 words
                .join(" ") +
                (videos[currentIndex].subtitle.split(" ").length > 35
                  ? "…"
                  : "")}
            </p>
          </div>
        </div>

        {/* Play Menu */}
        <PlayMenu
          onPrev={handlePrev}
          onNext={handleNext}
          onInfo={() => setShowInfo(true)}
        />

        {/* Popup */}
        {showInfo && (
          <PopupPlayer
            url={videos[currentIndex].url}
            title={videos[currentIndex].title}
            subtitle={videos[currentIndex].subtitle}
            onClose={() => setShowInfo(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
