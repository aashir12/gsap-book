import React from "react";
import Image from "next/image";
import { CiLink } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-2 px-2 mt-10 border-t-2 border-[#b8ead9] rounded-2xl">
      <div>
        <h6 className="text-[12px] font-bold">UN PREGETTO DI</h6>
        <Image
          src="/logo/logo1.png"
          alt="Logo 1"
          width={80}
          height={32}
          className="h-8 w-auto object-contain"
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
        />
      </div>
      <div>
        <h6 className="text-[12px] font-bold">DISEGNI E GRAPHICA</h6>
        <div>
          <h1 className="text-[12px] font-bold">Tommaso Lodi</h1>
          <p className="link flex flex-row items-center text-center">
            <CiLink />
            nerone.design
          </p>
        </div>
      </div>
      <div>
        <h6 className="text-[12px] font-bold">ANIMAZIONE</h6>
        <div>
          <h1 className="text-[12px] font-bold">Matae Stocco</h1>
          <p className="link flex flex-row items-center text-center">
            <CiLink />
            kinnouts.com
          </p>
        </div> 
      </div>
      <div>
        <h6 className="text-[12px] font-bold">CODICE</h6>
        <div>
          <h1 className="text-[12px] font-bold">Anqa Digital Agency</h1>
          <p className="link flex flex-row items-center text-center">
            <CiLink />
            Anqa.it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
