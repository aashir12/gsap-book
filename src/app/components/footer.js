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
      className={`flex items-center justify-between gap-2 px-4 py-4 mt-10 border-t-2 ${borderColor} rounded-2xl ${textColor}`}
    >
      <div>
        <h6 className="text-[12px] font-bold">UN PREGETTO DI</h6>
        <Image
          src="/logo/logo1.png"
          alt="Logo 1"
          width={80}
          height={32}
          className="h-8 w-auto object-contain"
          style={imgFilter}
        />
      </div>
      <div>
        <h6 className="text-[12px] font-bold">CON IL SUPPORTO DI</h6>
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
        <h6 className="text-[12px] font-bold">DISEGNI E GRAPHICA</h6>
        <div>
          <h1 className="text-[12px] font-bold">Tommaso Lodi</h1>
          <p
            className={`link flex flex-row items-center text-center ${linkExtra}`}
          >
            <CiLink />
            nerone.design
          </p>
        </div>
      </div>
      <div>
        <h6 className="text-[12px] font-bold">ANIMAZIONE</h6>
        <div>
          <h1 className="text-[12px] font-bold">Matae Stocco</h1>
          <p
            className={`link flex flex-row items-center text-center ${linkExtra}`}
          >
            <CiLink />
            kinnouts.com
          </p>
        </div>
      </div>
      <div>
        <h6 className="text-[12px] font-bold">CODICE</h6>
        <div>
          <h1 className="text-[12px] font-bold">Anqa Digital Agency</h1>
          <p
            className={`link flex flex-row items-center text-center ${linkExtra}`}
          >
            <CiLink />
            Anqa.it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
