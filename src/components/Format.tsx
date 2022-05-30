import React from "react";
import DropDownIcon from "../svg/dropdown.svg";
import { useState } from "react";

const Format = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formatList = [
    "2D",
    "3D",
    "4DX",
    "4DX 3D",
    "IMAX 2D",
    "IMAX 3D",
    "3D SCREEN X",
  ];
  return (
    <div className="mt-2">
      <div
        className="flex justify-between w-72 h-12 p-3 items-center bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between w-72 h-12 p-3 items-center bg-white">
          <div className="text-base flex items-center space-x-4">
            <img src={DropDownIcon} alt="" className="h-3 w-3" />
            <div>Format</div>
          </div>
          <div className="text-xs">Clear</div>
        </div>
      </div>
      {isOpen && (
        <div className="grid grid-cols-3 gap-4 w-72  bg-white p-2 cursor-pointer">
          {formatList.map((format) => (
            <div className="border-2 border-slate-100 text-xs p-2 text-red-600">
              {format}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Format;
