import React from "react";
import { Link } from "react-router-dom";

const HorizentalSection = ({ data }) =>
{
  const { picture, title, _id } = data;
  return (
    <div className=" mb-3 w-full  transition-all hover:border border hover:border-gray-200 border-white">
      <Link to={`detail/${ _id }`} className="text-md font-bold hover:text-red-600 ">
        <div className="overflow-hidden xl:h-20">
          <img
            className="w-full h-60 ease-in-out duration-500 transform hover:scale-125 object-cover"
            src={picture}
            alt=""
          />
        </div>
        <h1 className="link-hover">{title?.slice(0, 30)}</h1>
      </Link>
    </div>
  );
};

export default HorizentalSection;
