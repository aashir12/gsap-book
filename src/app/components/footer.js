import React from "react";
import Image from "next/image";
import { CiLink } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-2 px-2 mt-10 rounded-2xl">
      <div>
        <h6 className="text-[12px] font-bold">UN PROGETTO DI</h6>
        <Image
          src="/logo/logo1.png"
          alt="Logo 1"
          width={80}
          height={32}
          className="h-8 w-auto object-contain"
          style={{ filter: "brightness(0)" }}
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
          style={{ filter: "brightness(0)" }}
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
              className="h-8 w-auto object-contain"
              style={{ filter: "brightness(0)" }}
            />
            nerone.design
          </p>
        </div>
      </div>
      <div>
        <h6 className="text-[12px] font-bold">ANIMAZIONE</h6>
        <div>
          <h1 className="text-[12px] font-bold">Matteo Stocco</h1>
          <p className="link flex flex-row items-center text-center">
            <Image
              src="/icons/link_18.png"
              alt="Logo 2"
              width={24}
              height={24}
              className="h-8 w-auto object-contain"
              style={{ filter: "brightness(0)" }}
            />
            kinnouts.com
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
              className="h-8 w-auto object-contain"
              style={{ filter: "brightness(0)" }}
            />
            Anqa.it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
