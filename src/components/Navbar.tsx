import React from "react";
import { Link } from "react-router-dom";
import IconSvg from "../svg/icon.svg";
import SearchSvg from "../svg/search.svg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";

const Navbar = () => {
  const options = ["Mumbai", "Bangalore", "Hydrebad", "Pune"];
  const defaultOption = options[0];
  return (
    <nav className="container flex bg-gray-700 justify-between h-16 items-center ">
      <div className="flex  items-center space-x-4 lg:mt-2">
        <div>
          <a href="/" className="flex items-center ml-4 lg:ml-32">
            <img src={IconSvg} alt="BookMyShow" />
          </a>
        </div>
        <div className="flex items-center bg-white p-2 w-32 h-9 rounded-md lg:w-[30rem]">
          <img src={SearchSvg} alt="Search" className="w-4 h-3 mr-1" />
          <input
            type="search"
            className="w-full focus:outline-none"
            placeholder="Search for movies, events, plays, sports and activities"
          />
        </div>
      </div>
      <div className="flex items-center justify-evenly space-x-8 mr-12">
        <div>
          <Dropdown
            options={options}
            onChange={() => {}}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div className="bg-red-500 rounded-md w-16 h-8 flex items-center justify-center text-xs">
          <button className=" text-white">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
