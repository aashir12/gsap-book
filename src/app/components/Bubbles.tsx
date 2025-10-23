"use client";

import Image from "next/image";
import React from "react";

export default function Bubbles() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none">
      <div className="absolute top-5 left-4">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[10%] left-[45%]">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[20%] left-[60%]">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[30%] left-1/2">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[70%] left-[70%]">
        <Image
          src="/bolle_PNG/bolla-Large.png"
          width={60}
          height={60}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[80%] left-[85%]">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[65%] left-1/3">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[50%] left-[60%]">
        <Image
          src="/bolle_PNG/bolla-Medium.png"
          width={45}
          height={45}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[90%] left-[15%]">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[270px] left-[45%]">
        <Image
          src="/bolle_PNG/bolla-Medium.png"
          width={45}
          height={45}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[290px] left-[80%]">
        <Image
          src="/bolle_PNG/bolla-Small.png"
          width={33}
          height={33}
          alt="bubble"
        />
      </div>
      <div className="absolute top-[310px] left-[5%]">
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
