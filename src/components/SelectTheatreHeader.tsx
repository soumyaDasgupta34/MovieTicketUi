import React from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
  MdOutlineKeyboardArrowDown,
  MdOutlineSearch,
} from "react-icons/md";

const SelectTheatreHeader = () => {
  return (
    <div className="flex justify-around items-center bg-white">
      <div className="hidden lg:flex items-center justify-evenly lg:w-2/6 lg:p-2 cursor-pointer">
        <MdOutlineArrowBackIosNew className="text-2xl text-gray-400" />
        <div className="flex flex-col text-xs gap-0 items-center justify-around rounded-md bg-rose-500 text-white w-11 p-1">
          <div>FRI</div>
          <div className="text-sm font-bold">27</div>
          <div>MAY</div>
        </div>
        <div className="flex flex-col text-xs gap-0 items-center hover:text-rose-500">
          <div>SAT</div>
          <div className="text-sm font-bold">28</div>
          <div>MAY</div>
        </div>
        <div className="flex flex-col text-xs gap-0 items-center hover:text-rose-500">
          <div>SUN</div>
          <div className="text-sm font-bold">29</div>
          <div>MAY</div>
        </div>
        <div className="flex flex-col text-xs gap-0 items-center hover:text-rose-500">
          <div>MON</div>
          <div className="text-sm font-bold">30</div>
          <div>MAY</div>
        </div>
        <div className="flex flex-col text-xs gap-0 items-center hover:text-rose-500">
          <div>TUE</div>
          <div className="text-sm font-bold">31</div>
          <div>MAY</div>
        </div>
        <div className="flex flex-col text-xs gap-0 items-center hover:text-rose-500">
          <div>WED</div>
          <div className="text-sm font-bold">1</div>
          <div>JUNE</div>
        </div>
        <MdOutlineArrowForwardIos className="text-2xl text-gray-400" />
      </div>
      <div className="flex items-center justify-around text-sm border-zinc-300 h-16">
        <div className="flex items-center font-medium border-x-2 h-full border-b-4 border-b-rose-500 px-3 w-2/6">
          Hindi-2D
        </div>
        <div className="flex items-center justify-around border-r-2 h-full px-3 text-xs">
          <div>Filter Sub Region</div>
          <div className="text-lg text-gray-400">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className=" flex items-center border-r-2 h-full px-3 text-xs">
          <div>Filter Price Range</div>
          <div className="text-lg text-gray-400">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="flex items-center border-r-2 h-full px-3 text-xs">
          <div>Filter Show Timings</div>
          <div className="text-lg text-gray-400">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="flex items-center  h-full px-3 text-lg">
          <MdOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default SelectTheatreHeader;
