import React from "react";
import Languages from "./Languages";
import Genre from "./Genre";
import Format from "./Format";
import Movies from "./Movies";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { getMovies } from "../redux/busSlice";

const MoviesList = () => {
  const dispatch = useAppDispatch();

  const MoviesSm = () => {
    return (
      <div className="grid grid-cols-4  items-center justify-evenly">
        {moviesList.map((movie) => (
          <Movies movie={movie} />
        ))}
      </div>
    );
  };

  const { moviesList } = useAppSelector((state) => state.bus);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <>
      <div className="lg:hidden">
        <MoviesSm />
      </div>
      <div className="flex flex-col justify-start">
        <div className="hidden lg:flex space-x-16 ml-36 mt-12 ">
          <div>
            <div className="mb-6 text-2xl font-bold">Filters</div>
            <div className="flex flex-col">
              <Languages />
              <Genre />
              <Format />
              <div className="mt-2">
                <button className="bg-white text-red-500 text-sm border-2 rounded-md border-red-500  w-72">
                  Browse By Cinemas
                </button>
              </div>
            </div>
          </div>
          <div className="w-8/12 flex flex-col justify-between">
            <div className=" text-2xl font-bold mb-6">Movies</div>
            <div className="flex bg-white w-full h-14 justify-between items-center font-bold text-lg p-6 mb-8">
              <div>Coming Soon</div>
              <div className="flex items-center space-x-1">
                <button className="text-base text-red-500 font-medium">
                  Expore Upcoming Movies
                </button>
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 mt-3 mb-6 items-center justify-evenly">
              {moviesList.map((movie) => (
                <Movies movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
