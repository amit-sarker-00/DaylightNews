import React from "react";
import { FaCalendarDay } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReecntWorkForHomePageSlidebar = ({ data }) => {
  const { author, category, description, picture, _id, title } = data;
  return (
    <Link
      to={`/detail/${_id}`}
      className="flex items-center justify-evenly lg:justify-start md:text-left transition-all bg-slate-50 mb-1 mx-1 shadow overflow-hidden object-cover hover:ml-5"
    >
      <div className="">
        <img className="w-36 h-20 " src={picture} alt="" />
      </div>
      <div className="pl-5 text-left ">
        <h3 className="text-sm md:text-sm lg:text-xl link-hover hover:text-red-500 font-semibold">
          {title?.slice(0, 20) + "..."}
        </h3>
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
