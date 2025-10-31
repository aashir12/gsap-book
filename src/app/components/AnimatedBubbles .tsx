"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function AnimatedBubbles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bubbles = containerRef.current?.querySelectorAll(".bubble");
    if (bubbles) {
      // Get the actual device height and add some buffer
      const deviceHeight = window.innerHeight;
      const exitPoint = -(deviceHeight + 200); // Exit beyond device height + buffer

      bubbles.forEach((bubble, index) => {
        const delay = index * 1;
        const duration = 20 + Math.random() * 5;

        const animateBubble = () => {
          gsap.fromTo(
            bubble,
            { y: 200, opacity: 0 },
            {
              y: exitPoint, // Use dynamic height-based exit point
              opacity: 1,
              duration,
              ease: "sine.out",
              onComplete: animateBubble,
              delay,
            }
          );
        };

        animateBubble();
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[99]  overflow-hidden pointer-events-none"
    >
      {/* Large bubble */}
      <div className="absolute bottom-0 left-[5%] bubble">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>

      {/* Small bubble */}
      <div className="absolute bottom-0 left-[45%] bubble">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>
      {/* Small bubble */}
      <div className="absolute bottom-0 left-[89%] bubble">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>

      {/* Medium bubble */}
      <div className="absolute bottom-0 left-[50%] bubble">
        <Image
          src="/bolle_PNG/bolla-Medium.png"
          width={45}
          height={45}
          alt="bubble"
        />
      </div>

      {/* Another Large bubble */}
      <div className="absolute bottom-0 left-[70%] bubble">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>

      {/* Small bubble */}
      <div className="absolute bottom-0 left-[85%] bubble">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>

      {/* Small bubble */}
      <div className="absolute bottom-0 left-[25%] bubble">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>

      {/* Large bubble */}
      <div className="absolute bottom-0 left-[35%] bubble">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>

      {/* Medium bubble */}
      <div className="absolute bottom-0 left-[60%] bubble">
        <Image
          src="/bolle_PNG/bolla-Medium.png"
          width={45}
          height={45}
          alt="bubble"
        />
      </div>

      {/* Small bubble */}
      <div className="absolute bottom-0 left-[75%] bubble">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>

      {/* Large bubble */}
      <div className="absolute bottom-0 left-[95%] bubble">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>

      {/* Additional bubbles to double the amount */}
      {/* Medium bubble */}
      <div className="absolute bottom-0 left-[15%] bubble">
        <Image
          src="/bolle_PNG/bolla-Medium.png"
          width={45}
          height={45}
          alt="bubble"
        />
      </div>

      {/* Small bubble */}
      <div className="absolute bottom-0 left-[25%] bubble">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>

      {/* Large bubble */}
      <div className="absolute bottom-0 left-[35%] bubble">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>

      {/* Medium bubble */}
      <div className="absolute bottom-0 left-[60%] bubble">
        <Image
          src="/bolle_PNG/bolla-Medium.png"
          width={45}
          height={45}
          alt="bubble"
        />
      </div>

      {/* Small bubble */}
      <div className="absolute bottom-0 left-[75%] bubble">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>

      {/* Large bubble */}
      <div className="absolute bottom-0 left-[95%] bubble">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>
      {/* Additional bubbles to double the amount */}
      {/* Medium bubble */}
      <div className="absolute bottom-0 left-[15%] bubble">
        <Image
          src="/bolle_PNG/bolla-Medium.png"
          width={45}
          height={45}
          alt="bubble"
        />
      </div>

      {/* Small bubble */}
      <div className="absolute bottom-0 left-[25%] bubble">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>

      {/* Large bubble */}
      <div className="absolute bottom-0 left-[35%] bubble">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>

      {/* Medium bubble */}
      <div className="absolute bottom-0 left-[60%] bubble">
        <Image
          src="/bolle_PNG/bolla-Medium.png"
          width={45}
          height={45}
          alt="bubble"
        />
      </div>
    </div>
  );
}
