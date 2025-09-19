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

      {/* Subtitle (above, simple text) */}
      <div className="absolute top-6 w-full text-center px-4">
        <p className="text-white text-sm font-normal bg-black/40 px-3 py-1 rounded-lg inline-block">
          {videos[currentIndex].subtitle}
        </p>
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
        className="absolute bottom-0 left-0 w-full h-1/3 text-white p-4 rounded-t-xl translate-y-full popup-bg"
      >
        {/* Controls */}
        <div className="flex justify-center gap-6 my-4">
          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={toggleMute}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40"
          >
            <FaExpand />
          </button>
        </div>

        {/* Subtitle inside popup */}
        <div className="text-center text-lg font-light">
          {videos[currentIndex].subtitle}
        </div>

        {/* Close */}
        <div className="absolute top-2 right-4">
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
