import React from "react";
import { Link } from "react-router-dom";

const RightSide4Card = ({ data }) =>
{
  const {  picture, title, _id } = data;
  return (
    <div className="mx-3 mb-3 w-full  transition-all xl:w-72 pb-4 ">
      <Link to={`detail${ _id }`} className="text-lg hover:text-red-600 font-bold">
        <div className="overflow-hidden w-full xl:w-72 xl:h-24 ">
          <img
            className=" w-full xl:w-72 xl:h-24 h-64 object-cover ease-in-out duration-500 transform hover:scale-125 "
            src={picture}
            alt=""
          />
        </div>
        {" "}
        <h1 className=" link-hover"> {title?.slice(0, 50)}</h1>
      </Link>
    </div>
  );
};

export default RightSide4Card;
