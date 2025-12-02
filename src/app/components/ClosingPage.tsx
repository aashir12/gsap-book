"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Footer from "./footer";
import AnimatedBubbles from "./AnimatedBubbles";
import ExtendedFooter from "./ExtendedFooter";


interface ClosingPageProps {
  onGoToHome: () => void;
}

export default function ClosingPage({ onGoToHome }: ClosingPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animate closing page on mount
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      gsap.set(containerRef.current, { opacity: 0, y: 20 });
      gsap.set(contentRef.current, { opacity: 0, y: 0 });

      const tl = gsap.timeline();
      tl.to(containerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }).to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }
  }, []);

  return (
    <div className="app-viewport text-black relative">
      <div
        ref={containerRef}
        className="app-frame archer-book-pro font-light relative my-6 rounded-xl bg-[#5a6e5c] m-auto h-screen"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
        >
          <source src="/backgrounds/Home_page_BG.mp4" type="video/mp4" />
        </video>

        {/* bubbles */}
        <AnimatedBubbles />

        <div
          ref={contentRef}
          className="z-10 overflow-y-scroll h-full no-scrollbar"
        >
          <div className="min-h-screen w-full h-screen flex flex-col justify-between">
            <div className="pt-24 flex items-center flex-col">
              <h1
                className="responsive-text-title font-medium text-black leading-tight text-center mb-12"
                style={{ fontFamily: "Archer", fontWeight: 500 }}
              >
                Fine
              </h1>
              <button
                onClick={onGoToHome}
                className="pulse-button responsive-text-button rounded-[16px] cursor-pointer border-2 border-[#C4A5FF] text-[#5800FF] font-bold bg-purple-200/10 backdrop-blur-md hover:bg-purple-200/20 transition-all duration-500 hover:rounded-[40px] hover:scale-105 active:scale-95"
                style={{ fontFamily: "Satoshi" }}
              >
                torna all&apos;inizio
              </button>
            </div>
            <div className="w-full">
              <Footer />
              <ExtendedFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
