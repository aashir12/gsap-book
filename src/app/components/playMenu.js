"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { FaArrowDownAZ, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PlayMenu = ({ onPrev, onNext, onInfo }) => {
  const router = useRouter();

  const goToAZ = () => {
    router.push("/home/a-z");
  };

  return (
    <div className="absolute bottom-0 w-full shadow-md">
      <div className="flex justify-between items-end">
        {/* Left Group */}
        <div className="flex">
          <div className="p-2 rounded-l text-center border border-gray-400 cursor-pointer">
            <IoHomeOutline size={24} />
          </div>
          <button
            onClick={goToAZ}
            className="p-2 rounded-r text-center border border-gray-400 border-l-0 hover:bg-gray-200 cursor-pointer"
          >
            <FaArrowDownAZ size={24} />
          </button>
        </div>

        {/* Center Info (raised + bigger) */}
        <button
          onClick={onInfo}
          className="p-2 rounded-full text-center mb-8 border border-gray-400 hover:bg-gray-200 cursor-pointer"
        >
          <CiCircleInfo size={36} />
        </button>

        {/* Right Group */}
        <div className="flex">
          <button
            onClick={onPrev}
            className="p-2 rounded-l text-center border border-gray-400 hover:bg-gray-200 cursor-pointer"
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={onNext}
            className="p-2 rounded-r text-center border border-gray-400 border-l-0 hover:bg-gray-200 cursor-pointer"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayMenu;
