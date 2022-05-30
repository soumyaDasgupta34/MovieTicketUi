import React from "react";
import { useNavigate } from "react-router-dom";

const Movies = (props: any) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/selectTheatre/${props.movie.name}`);
  };
  return (
    <div className="flex flex-col justify-between mb-8 flex-1">
      <img
        src={props.movie.image}
        alt=""
        className="h-9/12 w-9/12 rounded-md cursor-pointer"
        onClick={onClickHandler}
      />
      <div className="text-xs lg:text-lg font-bold">{props.movie.name}</div>
      <div className="text-sm text-gray-500">{props.movie.rating}</div>
      <div className="text-sm text-gray-500">{props.movie.language}</div>
    </div>
  );
};

export default Movies;
