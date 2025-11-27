"use client"
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
  FaTimes,
} from "react-icons/fa";
import { LuArrowLeft } from "react-icons/lu";

export default function PopupPlayer({ url, title, subtitle, onClose }) {
  const popupVideoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // On URL change, reload the video source
  useEffect(() => {
    if (popupVideoRef.current) {
      popupVideoRef.current.load();
      popupVideoRef.current.muted = isMuted;
      if (isPlaying) {
        popupVideoRef.current.play().catch((e) => console.log("Autoplay prevented", e));
      }
    }
  }, [url]);

  // Sync mute state
  useEffect(() => {
    if (popupVideoRef.current) {
      popupVideoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    if (!popupVideoRef.current) return;
    if (popupVideoRef.current.paused) {
      popupVideoRef.current.play();
      setIsPlaying(true);
    } else {
      popupVideoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const next = !isMuted;
    if (popupVideoRef.current) popupVideoRef.current.muted = next;
    setIsMuted(next);
  };

  // Slide-in animation on mount without touching video
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.set(containerRef.current, { y: "100%" });
    gsap.to(containerRef.current, { y: 0, duration: 0.6, ease: "power3.out" });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 w-full h-full text-white p-0 rounded-t-xl z-50"
    >
      <div className="flex flex-col h-full relative">
        {/* Fixed Close Button (Top Left) */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-50 w-12 h-12 border-2 border-white/50 text-white rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-white/20 transition cursor-pointer"
        >
          <FaTimes className="w-6 h-6 fill-white" />
        </button>

        {/* Upper half: looping video */}
        <div className="relative h-1/2 overflow-hidden">
          <video
            ref={popupVideoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={url} type="video/mp4" />
          </video>
        </div>

        {/* Lower half: background image with title and subtitle */}
        <div className="relative h-1/2 bg-[url('/backgrounds/list-background.png')] flex flex-col justify-between py-6 bg-cover bg-center">
          {/* Controls */}
          <div className="flex justify-center items-center gap-[36px] pt-[32px] pb-[64px] relative z-10 ">
            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              className=" p-4 border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center bg-[#A8C2AC]/40 backdrop-blur-sm hover:bg-white/10 transition cursor-pointer responsive-control-large"
            >
              {isPlaying ? (
                <FaPause className="w-[64px] h-[64px] fill-white responsive-icon-medium" />
              ) : (
                <FaPlay className="w-[64px] h-[64px]  fill-white responsive-icon-medium" />
              )}
            </button>

            {/* Fullscreen */}
            <button
              onClick={() => {
                if (popupVideoRef.current?.requestFullscreen) {
                  popupVideoRef.current.requestFullscreen();
                }
              }}
              className=" p-4 border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center bg-[#A8C2AC]/40 backdrop-blur-sm hover:bg-white/10 transition cursor-pointer responsive-control-large"
            >
              <FaExpand className="stroke-[2] w-[64px] h-[64px] responsive-icon-medium" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col justify-start">
            {/* Title */}
            <div className="relative z-10 text-center mb-4">
              <h2
                className="text-2xl font-medium mb-2 responsive-text-header"
                style={{
                  fontFamily: "Archer",
                  fontSize: "48px",
                  fontWeight: "400",
                }}
              >
                {title ?? ""}
              </h2>
            </div>

            {/* Subtitle inside popup (limited to 30 words) */}
            <div
              className="relative z-10 text-center text-base font-light leading-snug px-14 responsive-text-subtitle"
              style={{
                fontFamily: "Satoshi",
                fontSize: "18px",
                fontWeight: "500",
                opacity: "0.8",
              }}
            >
              {subtitle}
            </div>
          </div>

          <div className=" flex justify-center z-10 mt-4">
            <button
              aria-label="Back"
              onClick={onClose}
              className="w-[136px] h-[48px] cursor-pointer border-2 border-[#b8ead9] text-white rounded-full hover:bg-white/10 transition flex items-center justify-center bg-[#A8C2AC]/40 backdrop-blur-sm responsive-text-subtitle"
              style={{
                fontFamily: "Satoshi",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              <div className="flex items-center justify-center gap-1">
                <LuArrowLeft className="responsive-icon-arrow" />
                <span>indietro</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
