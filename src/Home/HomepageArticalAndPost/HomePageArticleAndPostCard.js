import React from "react";
import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";

const HomePageArticleAndPostCard = ({ data }) => {
  console.log(data);
  const { author, category, description, picture, title } = data;
  return (
    <Link to={`/details/`} className="p-5  overflow-hidden shadow ">
      <div className="overflow-hidden w-62 h-36">
        <img
          className="transition transform hover:scale-125 object-cover w-full h-36"
          src={picture}
          alt="/"
        />
      </div>
      <div>
        <div className="flex items-center py-2">
          <div className="w-1 h-5 bg-red-600 "></div>
          <p className="pl-5 text-xl p">{category}</p>
        </div>
        <h1 className="text-sm sm:text-xl font-semibold ">
          {title.slice(0, 20) + "..."}
        </h1>
      </div>
      {/* author info  */}
      <div className="flex items-center gap-5 pt-3">
        <div className="flex items-center gap-1">
          <img
            className="w-6 h-6 rounded-full object-cover"
            src={author?.img}
            alt=""
          />
        </div>
        <div className="flex items-center gap-1 ">
          <RxCalendar></RxCalendar>
          <p className="text-[12px] text-slate-400">{author?.published_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageArticleAndPostCard;