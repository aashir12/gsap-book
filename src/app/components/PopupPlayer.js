"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
} from "react-icons/fa";
import { LuArrowLeft } from "react-icons/lu";

export default function PopupPlayer({ url, title, subtitle, onClose }) {
  const popupVideoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // On URL change, just ensure mute state; rely on muted autoplay to start
  useEffect(() => {
    if (popupVideoRef.current) {
      popupVideoRef.current.muted = isMuted;
    }
  }, [url, isMuted]);

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
      <div className="flex flex-col h-full">
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
        <div className="relative h-1/2 bg-[url('/backgrounds/list-background.png')] flex flex-col justify-around py-6 bg-cover bg-center">
          {/* Controls */}
          <div className="flex justify-center items-center gap-6 relative z-10 ">
            {/* Mute / Unmute */}
            <button
              onClick={toggleMute}
              className="w-12 h-12 bg-transparent border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center hover:bg-white/10 transition cursor-pointer"
            >
              {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
            </button>

            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              className=" border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center bg-[#A8C2AC]/40 backdrop-blur-sm  hover:bg-white/10 transition cursor-pointer"
              style={{ width: "64px", height: "64px" }}
            >
              {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
            </button>

            {/* Fullscreen */}
            <button
              onClick={() => {
                if (popupVideoRef.current?.requestFullscreen) {
                  popupVideoRef.current.requestFullscreen();
                }
              }}
              className="w-12 h-12 bg-transparent border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center hover:bg-white/10 transition cursor-pointer"
            >
              <FaExpand size={14} />
            </button>
          </div>
          <div>
            {/* Title */}
            <div className="relative z-10 text-center">
              <h2
                className="text-2xl font-medium mb-2"
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
              className="relative z-10 text-center text-base font-light leading-snug px-14"
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

          <div className=" flex justify-center z-10">
            <button
              aria-label="Back"
              onClick={onClose}
              className="w-[136px] h-12 bg-transparent cursor-pointer border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center hover:bg-white/5 transition"
              style={{
                fontFamily: "Satoshi",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              <LuArrowLeft size={18} />
              <span className="ml-1">indietro</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
