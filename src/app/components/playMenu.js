import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { FaArrowDownAZ, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PlayMenu = () => {
  return (
    <div className="absolute bottom-0 w-full shadow-md">
      <div className="flex justify-between items-end">
        {/* Left Group */}
        <div className="flex">
          <div className="p-2 rounded-l text-center border border-gray-400">
            <IoHomeOutline size={24} />
          </div>
          <div className="p-2 rounded-r text-center border border-gray-400 border-l-0">
            <FaArrowDownAZ size={24} />
          </div>
        </div>

        {/* Center Info (raised + bigger) */}
        <div className="p-2 rounded-full text-center mb-8 border border-gray-400">
          <CiCircleInfo size={36} />
        </div>

        {/* Right Group */}
        <div className="flex">
          <div className="p-2 rounded-l text-center border border-gray-400">
            <FaArrowLeft size={24} />
          </div>
          <div className="p-2 rounded-r text-center border border-gray-400 border-l-0">
            <FaArrowRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMenu;
