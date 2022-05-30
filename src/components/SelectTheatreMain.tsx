import React from "react";
import { MdOutlineSubtitles } from "react-icons/md";
import Theatre from "./Theatre";

const SelectTheatreMain = () => {
  const theatreList = [
    "Carnival: Huma, Kanjurmarg",
    "Balaji Movieplex: Kopar Khairane",
    "Carnival: Little World Mall, Kharghar",
    "Carnival: Sangam, Andheri",
  ];
  return (
    <div className="bg-white lg:w-4/5 mx-auto mt-4">
      <div className="flex justify-end space-x-2 items-center text-xs border-b-2">
        <div className="flex justify-around items-center">
          <div className="fill-green-600 bg-green-600 w-2 h-2 rounded-full" />
          <div className="p-2">AVAILABLE</div>
        </div>
        <div className="flex justify-around items-center">
          <div className="fill-green-600 bg-orange-600 w-2 h-2 rounded-full" />
          <div className="p-2">FAST FILLING</div>
        </div>
        <div className="flex justify-around items-center pr-4">
          <MdOutlineSubtitles />
          <div className="p-2">SUBTITLES</div>
        </div>
      </div>
      {theatreList.map((theatre) => (
        <Theatre theatre={theatre} />
      ))}
    </div>
  );
};

export default SelectTheatreMain;
