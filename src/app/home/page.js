"use client";
import "../styles/bg.css";
import { BubblesSVG } from "../components/bubbleSvg";


const Page = () => {
  return (
    <div className="w-[400px] h-[90vh] relative my-6 rounded-xl bg-white overflow-hidden m-auto flex flex-col items-center justify-between shadow-lg">
      {/* Background waves are handled in bg.css */}
      <BubblesSVG />
      <div className="z-10 flex flex-col items-center mt-16">
        <h1
          className="text-3xl font-light text-center text-gray-700 mb-6"
          style={{ fontFamily: "serif" }}
        >
          Il viaggio di Go
          <br />
          nella Laguna incantata
        </h1>
        <button className="px-8 py-3 rounded-xl bg-[#B7E4C7] text-gray-700 font-semibold shadow border border-[#90A98F] mb-8">
          Inizia il viaggio
        </button>
      </div>
      <footer className="absolute bottom-4 left-0 w-full flex flex-col items-center text-xs text-gray-600 z-10">
        <div className="flex items-center gap-2 mb-1">
          <img src="/logo-cnr.png" alt="CNR Logo" className="h-5" />
          <img src="/logo-ismar.png" alt="ISMAR Logo" className="h-5" />
        </div>
        <div>SPIN 2021.10019</div>
        <div>CNR ISMAR</div>
      </footer>
    </div>
  );
};

export default Page;
