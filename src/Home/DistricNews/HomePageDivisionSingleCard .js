import React from "react";
import { Link } from "react-router-dom";

const HomePageDivisionSingleCard = ({ data }) => {
  const { picture, title, _id } = data;
  return (
    <Link to={`/detail/${_id}`} className="py-4 ">
      <div className="w-full h-full lg:h-[300px] lg:w-[500px] relative ">
        <img className="relative w-full h-full" src={picture} alt="" />
        <h1 className="absolute bottom-0 w-full bg-slate-800 text-white p-3 rounded-b-lg">
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default HomePageDivisionSingleCard;
