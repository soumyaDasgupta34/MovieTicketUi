import React from "react";
import Slider from "./Slider";
import SubNavbar from "./SubNavbar";
import MoviesList from "./MoviesList";

const Home = () => {
  return (
    <>
      <SubNavbar />
      <div className="mt-2 bg-slate-100">
        <Slider />
        <MoviesList />
      </div>
    </>
  );
};

export default Home;
