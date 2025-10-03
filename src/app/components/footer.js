import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-center justify-between p-10 mt-10 border-t-2 border-[#b8ead9] rounded-2xl">
      <Image
        src="/logo/logo1.png"
        alt="Logo 1"
        width={100}
        height={32}
        className="h-8 w-auto object-contain"
      />

      <Image
        src="/logo/logo2.png"
        alt="Logo 2"
        width={100}
        height={32}
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

export default Footer;
