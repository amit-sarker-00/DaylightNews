import React from "react";
import { Link } from "react-router-dom";

const RightSide4Card = ({ data }) => {
  const { author, category, description, picture, title, _id } = data;
  return (
    <div className="mx-3 mb-3 w-full  transition-all xl:w-72 pb-4 ">
      <div className="overflow-hidden w-full xl:w-72 xl:h-24 ">
        <img
          className=" w-full xl:w-72 xl:h-24 h-64 object-cover ease-in-out duration-500 transform hover:scale-125 "
          src={picture}
          alt=""
        />
      </div>
      <Link to={`detail${_id}`} className="text-lg font-bold">
        {" "}
        <h1 className="hover:text-red-600 link-hover"> {title?.slice(0, 50)}</h1>
      </Link>
    </div>
  );
};

export default RightSide4Card;
