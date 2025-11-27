"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ variant = "dark" }) => {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-black";
  const imgFilter = isLight
    ? { filter: "brightness(0) invert(1)" }
    : { filter: "brightness(0)" };

  return (
    <div
      className={`flex items-center justify-around gap-2 p-4 mt-10 rounded-2xl  ${textColor}`}
    >
      <div className="flex flex-col gap-2 text-center">
        <h6 className="font-[Archer] font-bold text-[10px] leading-[14px] pb-2">
          UN PROGETTO DI
        </h6>
        <Image
          src="/footer/footer-logo.png"
          alt="Logo 2"
          width={80}
          height={32}
          className="h-8 w-auto object-contain"
          style={imgFilter}
        />
      </div>
      <div className="text-center">
        <h6 className="font-[Archer] font-bold text-[10px] leading-[14px] pb-2">
          TESTI DI{" "}
        </h6>
        <div>
          <h1 className="text-[12px] font-bold ">Christian Toson </h1>
          <h1 className="text-[12px] font-bold leading-[0.5]">& </h1>
          <h1 className="text-[12px] font-bold ">Laura Cannarozzi </h1>
        </div>
      </div>
      <div className="text-center">
        <h6 className="font-[Archer] font-bold text-[10px] leading-[14px] pb-2">
          DISEGNI E GRAFICA{" "}
        </h6>
        <div>
          <h1 className="text-[12px] font-bold">Tommaso Lodi</h1>
          <p className="link flex flex-row items-center text-center">
            <Image
              src="/icons/link_18.png"
              alt="Logo 2"
              width={24}
              height={24}
              className="h-4 w-auto object-contain"
              style={imgFilter}
            />
            <Link href="https://nerone.design" target="_blank">
              nerone.design
            </Link>
          </p>
        </div>
      </div>
      <div className="text-center">
        <h6 className="font-[Archer] font-bold text-[10px] leading-[14px] pb-2">
          ANIMAZIONE{" "}
        </h6>
        <div>
          <h1 className="text-[12px] font-bold">Matteo Stocco</h1>
          <p className="link flex flex-row items-center text-center">
            <Image
              src="/icons/link_18.png"
              alt="Logo 2"
              width={24}
              height={24}
              className="h-4 w-auto object-contain"
              style={imgFilter}
            />
            <Link href="https://kinonauts.com" target="_blank">kinonauts.com</Link>
          </p>
        </div>
      </div>
      <div className="text-center">
        <h6 className="font-[Archer] font-bold text-[10px] leading-[14px] pb-2">
          CODICE
        </h6>
        <div>
          <h1 className="text-[12px] font-bold">Anqa Digital Agency</h1>
          <p className="link flex flex-row items-center text-center">
            <Image
              src="/icons/link_18.png"
              alt="Logo 2"
              width={24}
              height={24}
              className="h-4 ml-5 w-auto object-contain text-center"
              style={imgFilter}
            />
            <Link href="https://anqa.it" target="_blank">anqa.it</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
