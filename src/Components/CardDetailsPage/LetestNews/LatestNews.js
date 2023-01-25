import React from "react";
import { Link } from "react-router-dom";

const LatestNews = ({ recent }) => {
  const { author, category, description, picture, title, _id } = recent;
  return (
    <Link to={`/detail/${_id}`}>
      <div className="p-0 lg:p-1 border-b-2 border-gray-300 hover:ml-5 transition-all bg-gray-200 flex gap-3 w-full ">
        <div>
          <img className="w-32 h-full object-cover" src={picture} alt="" />
        </div>
        <div className="w-full xl:w-72 ">
          <div className="flex items-center text-red-500 font-bold justify-between">
            <p>{category}</p>
            <p className=" text-sm py-2 text-right">{author?.published_date}</p>
          </div>
          <p className="text-md link-hover  hover:text-red-600 font-semibold">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LatestNews;
