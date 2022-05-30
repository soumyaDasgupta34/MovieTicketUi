import React from "react";
import DropDownIcon from "../svg/dropdown.svg";
import { useState } from "react";

const Languages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const languageList = [
    "Hindi",
    "Telugu",
    "Tamil",
    "English",
    "Kannada",
    "Malaylam",
    "Bengali",
    "Marathi",
  ];
  return (
    <div>
      <div
        className="flex justify-between w-72 h-12 p-3 items-center bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between w-72 h-12 p-3 items-center bg-white">
          <div className="text-base flex items-center space-x-4">
            <img src={DropDownIcon} alt="" className="h-3 w-3" />
            <div>Languages</div>
          </div>
          <div className="text-xs">Clear</div>
        </div>
      </div>
      {isOpen && (
        <div className="grid grid-cols-3 gap-4 w-72  bg-white p-2 cursor-pointer">
          {languageList.map((language) => (
            <div className="border-2 border-slate-100 text-xs p-2 text-red-600">
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Languages;
