import React from "react";
import { FaCalendarDay } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReecntWorkForHomePageSlidebar = ({ data }) => {
  const { author, category, description, picture, title } = data;
  return (
    <Link
      to={`/details/`}
      className="flex items-center justify-evenly lg:justify-start md:text-left bg-slate-50 m-1 shadow overflow-hidden object-cover"
    >
      <div className="overflow-hidden m-2">
        <img
          className="w-36 h-20 ease-in-out duration-500 transform hover:scale-125 object-cover"
          src={picture}
          alt=""
        />
      </div>
      <div className="pl-5 text-le ">
        <h1 className="text-sm md:text-sm lg:text-xl font-semibold">
          {title.slice(0, 20) + "..."}
        </h1>
        <div className="flex items-center ">
          <FaCalendarDay className="text-red-500" />
          <p className="pl-2 text-[12px] text-slate-400">
            {author?.published_date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ReecntWorkForHomePageSlidebar;
