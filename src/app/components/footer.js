import React from "react";
import Image from "next/image";
import { CiLink } from "react-icons/ci";

// variant: 'dark' (original black text) or 'light' (white text)
const Footer = ({ variant = "dark" }) => {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-black";
  const borderColor = isLight ? "border-white/60" : "border-[#b8ead9]";
  const linkExtra = isLight ? "text-white" : "";
  const imgFilter = isLight
    ? undefined
    : { filter: "invert(1) brightness(0) saturate(0)" };

  return (
    <div
      className={`flex items-start justify-between gap-6 px-6 py-6 mt-10 border-t-2 ${borderColor} rounded-2xl ${textColor}`}
    >
      <div className="flex flex-col gap-2">
        <h6 className="text-[12px] font-bold mb-1">UN PREGETTO DI</h6>
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
        <h6 className="text-[12px] font-bold mb-1">CON IL SUPPORTO DI</h6>
        <Image
          src="/logo/logo2.png"
          alt="Logo 2"
          width={80}
          height={32}
          className="h-8 w-auto object-contain"
          style={imgFilter}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="text-[12px] font-bold mb-1">DISEGNI E GRAPHICA</h6>
        <div>
          <h1 className="text-[12px] font-bold mb-1">Tommaso Lodi</h1>
          <p className={`text-[10px] flex flex-row items-center ${linkExtra}`}>
            <CiLink size={12} className="mr-1" />
            nerone.design
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="text-[12px] font-bold mb-1">ANIMAZIONE</h6>
        <div>
          <h1 className="text-[12px] font-bold mb-1">Matae Stocco</h1>
          <p className={`text-[10px] flex flex-row items-center ${linkExtra}`}>
            <CiLink size={12} className="mr-1" />
            kinnouts.com
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="text-[12px] font-bold mb-1">CODICE</h6>
        <div>
          <h1 className="text-[12px] font-bold mb-1">Anqa Digital Agency</h1>
          <p className={`text-[10px] flex flex-row items-center ${linkExtra}`}>
            <CiLink size={12} className="mr-1" />
            Anqa.it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
