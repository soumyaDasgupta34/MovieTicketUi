import React from "react";
import { AiTwotoneHeart, AiOutlineMobile } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";

const Theatre = (props: any) => {
  return (
    <div className="grid grid-cols-2 p-4 lg:p-8 border-b-2">
      <div>
        <div className="flex flex-col text-sm w-1/2 gap-6 cursor-pointer">
          <div className="flex items-center justify-start space-x-4 p-4">
            <AiTwotoneHeart className="text-gray-400 text-base hover:fill-red-500" />
            <div className="font-medium hover:underline">{props.theatre}</div>
          </div>
          <div className="hidden lg:flex items-center text-sm justify-center lg:justify-around">
            <div className="flex items-center text-green-500 lg:space-x-2">
              <AiOutlineMobile />
              <div>M-Ticket</div>
            </div>
            <div className="flex items-center text-yellow-500 lg:space-x-2">
              <IoFastFoodOutline />
              <div>{"Food & Beverage"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-around items-center w-1/3 cursor-pointer">
          <div className="border-2 border-gray-400 text-sm text-green-500 px-3 py-2 rounded-lg">
            5:05 PM
          </div>
          <div className="border-2 border-gray-400 text-sm text-green-500 px-3 py-2 rounded-lg">
            10:45 PM
          </div>
        </div>
        <div>
          <div className="flex items-center justify-start space-x-4 p-4">
            <div className="fill-green-600 bg-yellow-600 w-2 h-2 rounded-full" />
            <div className="text-xs">Cancellation Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theatre;
