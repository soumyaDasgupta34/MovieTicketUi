import React from "react";

const SubNavbar = () => {
  return (
    <nav className="container flex bg-slate-800 text-slate-300 justify-between h-10 text-xs items-center">
      <div className="flex space-x-4 ">
        <div>
          <a href="/" className="flex items-center ml-4 text-white lg:ml-32">
            Movies
          </a>
        </div>
        <div>
          <a href="/" className="flex items-center hover:text-white">
            Stream
          </a>
        </div>
        <div>
          <a href="/" className="flex items-center hover:text-white">
            Events
          </a>
        </div>
        <div>
          <a href="/" className="flex items-center hover:text-white">
            Plays
          </a>
        </div>
        <div>
          <a href="/" className="flex items-center hover:text-white">
            Sports
          </a>
        </div>
        <div>
          <a href="/" className="flex items-center hover:text-white">
            Activities
          </a>
        </div>
        <div>
          <a href="/" className="flex items-center hover:text-white">
            Buzz
          </a>
        </div>
      </div>
      <div className="hidden lg:flex space-x-4 ">
        <div>
          <a href="/" className="flex items-center hover:text-white">
            ListYourShows
          </a>
        </div>
        <div>
          <a href="/" className="flex items-center hover:text-white">
            Corporates
          </a>
        </div>
        <div>
          <a href="/" className="flex items-center hover:text-white">
            Offers
          </a>
        </div>
        <div>
          <a
            href="/"
            className="flex items-center mr-4  hover:text-white lg:mr-32"
          >
            GiftCards
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
