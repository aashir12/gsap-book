import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between p-10 mt-10 border-t-2 border-[#b8ead9] rounded-2xl">
      <img
        src="/logo/logo1.png"
        alt="Logo 1"
        className="h-8 w-auto object-contain"
      />
      <img
        src="/logo/logo2.png"
        alt="Logo 2"
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

export default Footer;
