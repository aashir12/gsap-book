import React from "react";
import Image from "next/image";

const Footer = ({ variant = "dark" }) => {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-black";
  const borderColor = isLight ? "border-white/60" : "border-[#b8ead9]";
  const imgFilter = isLight
    ? { filter: "brightness(0) invert(1)" }
    : { filter: "brightness(0)" };

  return (
    <div
      className={`flex items-center justify-between gap-2 p-4 mt-10 rounded-2xl  ${textColor}`}
    >
      <div>
        <h6 className="text-[12px] font-bold pb-2">UN PROGETTO DI</h6>

        <Image
          src="/logo/logo1.png"
          alt="Logo 1"
          width={80}
          height={32}
          className="h-8 w-auto object-contain"
          style={imgFilter}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="text-[12px] font-bold ">CON IL SUPPORTO DI</h6>
        <Image
          src="/logo/logo2.png"
          alt="Logo 2"
          width={80}
          height={32}
          className="h-8 w-auto object-contain"
          style={imgFilter}
        />
      </div>

      <div>
        <h6 className="text-[12px] font-bold">DISEGNI E GRAFICA </h6>
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
            nerone.design
          </p>
        </div>
      </div>
      <div>
        <h6 className="text-[12px] font-bold">ANIMAZIONE </h6>
        <div>
          <h1 className="text-[12px] font-bold">Mateo Stocco</h1>
          <p className="link flex flex-row items-center text-center">
            <Image
              src="/icons/link_18.png"
              alt="Logo 2"
              width={24}
              height={24}
              className="h-4 w-auto object-contain"
              style={imgFilter}
            />
            kinnouts
          </p>
        </div>
      </div>
      <div>
        <h6 className="text-[12px] font-bold">CODICE</h6>
        <div>
          <h1 className="text-[12px] font-bold">Anqa Digital Agency</h1>
          <p className="link flex flex-row items-center text-center">
            <Image
              src="/icons/link_18.png"
              alt="Logo 2"
              width={24}
              height={24}
              className="h-4 w-auto object-contain"
              style={imgFilter}
            />
            anqa.it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
