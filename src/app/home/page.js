"use client";
import React, { useState, useEffect } from "react";
import PlayMenu from "../components/playMenu";
import videos from "../json/videos.json";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  if (!isClient) return null; // render nothing until client hydration

  return (
    <div className="w-[400px] h-[90vh] relative my-6 rounded-xl bg-white overflow-hidden m-auto flex items-center justify-center">
      <video
        key={videos[currentIndex].id}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
      >
        <source src={videos[currentIndex].src} type="video/mp4" />
      </video>

      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        <PlayMenu onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default Page;
