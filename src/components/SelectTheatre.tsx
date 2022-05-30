import React from "react";
import { useParams } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import { BsSuitHeartFill, BsClockHistory } from "react-icons/bs";
import SelectTheatreHeader from "./SelectTheatreHeader";
import SelectTheatreMain from "./SelectTheatreMain";

const SelectTheatre = () => {
  const { movieName } = useParams();
  return (
    <>
      <SubNavbar />
      <div className="bg-gray-200">
        <div className="container flex items-center justify-around bg-gray-700 lg:h-32">
          <div className="flex flex-col justify-around w-1/3 text-white text-3xl lg:gap-2">
            <div>{movieName}</div>
            <div className="hidden lg:flex items-center justify-between">
              <div className="border-slate-200 lg:border-2 text-xs text-slate-200 rounded-full p-1">
                UA
              </div>
              <div className="hidden lg:flex items-center justify-between lg:space-x-2 ">
                <BsSuitHeartFill className="text-red-600 lg:text-lg" />
                <h1 className="text-white text-lg">97 %</h1>
              </div>
              <div className="text-xs text-gray-400 border-2 border-zinc-400 rounded-lg px-1">
                Biography
              </div>
              <div className="text-xs text-gray-400 border-2 border-zinc-400 rounded-lg px-1">
                Drama
              </div>
              <div className="text-white text-sm">May 13,2022</div>
              <div className="flex items-center justify-between text-white text-sm space-x-1">
                <BsClockHistory />
                <h2>2 hrs 58 mins</h2>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center w-2/4 text-slate-300">
            <div className="flex flex-col lg:gap-2 text-xs justify-around">
              <div>Director</div>
              <img
                src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/pravin-tarde-15048-24-03-2017-17-45-17.jpg"
                alt=""
                className="lg:w-1/6 rounded-full"
              />
              <div>Pravin Tarde</div>
            </div>
            <div>
              <div className="flex flex-col gap-2 text-xs justify-around">
                <div>Cast</div>
                <img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/prasad-oak-1716-20-05-2019-07-20-27.jpg"
                  alt=""
                  className="w-1/6 rounded-full"
                />
                <div>Prasad Oak</div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 text-xs justify-around mt-5">
                <img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sanjay-dutt-2035-12-09-2017-05-07-10.jpg"
                  alt=""
                  className="w-1/6 rounded-full"
                />
                <div>Sanjay Dutt</div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 text-xs justify-around mt-5">
                <img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ananth-nag-2942-24-03-2017-18-01-32.jpg"
                  alt=""
                  className="w-1/6 rounded-full"
                />
                <div>Anant Nag</div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 text-xs justify-around mt-5">
                <img
                  src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/achyuth-kumar-19493-06-10-2016-04-07-39.jpg"
                  alt=""
                  className="w-1/6 rounded-full"
                />
                <div>Achyuth Kumar</div>
              </div>
            </div>
          </div>
        </div>
        <SelectTheatreHeader />
        <SelectTheatreMain />
      </div>
    </>
  );
};

export default SelectTheatre;
