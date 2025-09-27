"use client";
import "../styles/bg.css";

const BubblesSVG = () => (
  <svg
    className="absolute top-0 left-0 w-full h-full pointer-events-none"
    viewBox="0 0 400 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Example bubbles, add more as needed */}
    <circle
      cx="80"
      cy="120"
      r="18"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="200"
      cy="180"
      r="10"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="300"
      cy="220"
      r="22"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="150"
      cy="300"
      r="14"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="250"
      cy="400"
      r="16"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    {/* More bubbles */}
    <circle
      cx="350"
      cy="100"
      r="12"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="50"
      cy="500"
      r="20"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="120"
      cy="600"
      r="8"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="320"
      cy="700"
      r="15"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="180"
      cy="750"
      r="10"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="370"
      cy="350"
      r="14"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="60"
      cy="250"
      r="9"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
    <circle
      cx="220"
      cy="550"
      r="17"
      fill="#B7E4C7"
      stroke="#222"
      strokeWidth="2"
    />
  </svg>
);

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
