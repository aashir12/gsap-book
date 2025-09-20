"use client";

import React, { useRef, useState, useEffect } from "react";
import PlayMenu from "../components/playMenu";
import videos from "../json/videos.json";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
} from "react-icons/fa";
import { gsap } from "gsap";
import "../styles/bg.css";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef(null);
  const popupRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Animate popup with GSAP
  useEffect(() => {
    if (!popupRef.current) return;
    if (typeof window !== "undefined") {
      if (showInfo) {
        gsap.to(popupRef.current, { y: 0, duration: 0.6, ease: "power3.out" });
      } else {
        gsap.to(popupRef.current, {
          y: "100%",
          duration: 0.6,
          ease: "power3.in",
        });
      }
    }
  }, [showInfo]);

  return (
    <div className="w-[400px] h-[90vh] relative my-6 rounded-xl bg-white overflow-hidden m-auto flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
      >
        <source src={videos[currentIndex].url} type="video/mp4" />
      </video>

      {/* Subtitle (above video) */}
      {/* Subtitle (storybook style, limited text, no overlay) */}
      {/* Subtitle (paragraph style, clean text) */}
      <div className="absolute top-6 w-[80%] px-6 pointer-events-none">
        <div className="max-h-[20vh] overflow-hidden">
          <p className="text-white text-sm font-normal leading-snug text-justify drop-shadow-md">
            {videos[currentIndex].subtitle
              .split(" ")
              .slice(0, 35) // limit to 35 words
              .join(" ") +
              (videos[currentIndex].subtitle.split(" ").length > 35 ? "…" : "")}
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
      <div
        ref={popupRef}
        className="absolute bottom-0 left-0 w-full h-1/2 text-white p-6 rounded-t-xl translate-y-full popup-bg"
      >
        {/* Decorative vertical lines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="h-full w-[2px] bg-green-400 absolute left-1/4"></div>
          <div className="h-full w-[2px] bg-green-400 absolute left-2/4"></div>
          <div className="h-full w-[2px] bg-green-400 absolute left-3/4"></div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-10 relative z-10 my-6">
          {/* Mute / Unmute */}
          <button
            onClick={toggleMute}
            className="p-4 bg-green-800 rounded-full hover:bg-green-700 transition"
          >
            {isMuted ? <FaVolumeMute size={22} /> : <FaVolumeUp size={22} />}
          </button>

          {/* Play / Pause (center + bigger) */}
          <button
            onClick={togglePlay}
            className="p-6 bg-green-700 rounded-full hover:bg-green-600 transition scale-110"
          >
            {isPlaying ? <FaPause size={28} /> : <FaPlay size={28} />}
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="p-4 bg-green-800 rounded-full hover:bg-green-700 transition"
          >
            <FaExpand size={22} />
          </button>
        </div>

        {/* Subtitle inside popup */}
        <div className="text-center text-base font-light leading-snug px-4">
          {videos[currentIndex].subtitle.split(" ").slice(0, 30).join(" ") +
            (videos[currentIndex].subtitle.split(" ").length > 30 ? "…" : "")}
        </div>
        {/* Close button */}
        <div className="absolute top-3 right-5 z-10">
          <button
            onClick={() => setShowInfo(false)}
            className="text-white text-2xl"
          >
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
