import React from "react";
import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";

const HomePageArticleAndPostCard = ({ data }) => {
  const { author, category, description, picture, title, _id } = data;
  return (
    <Link
      to={`/detail/${_id}`}
      className=" h-80 transition-all overflow-hidden shadow border hover:shadow-2xl mb-4"
    >
      <div className="overflow-hidden">
        <img
          className="transition transform ease-in-out duration-500 hover:scale-125 object-cover w-full h-44"
          src={picture}
          alt="/"
        />
      </div>
      <div>
        <div className="my-2 mx-2 flex items-center justify-between">
          <Link
            to={`/category/${category}`}
            className=" px-2 text-xl text-red-500 font-semibold   bg-red-200 "
          >
            {category}
          </Link>
          <div className="flex items-center gap-1 ">
            <RxCalendar></RxCalendar>
            <p className="text-[14px] text-slate-400">
              {author?.published_date}
            </p>
          </div>
        </div>
        <div className=" mx-2">
          <h3 className="text-md sm:text-xl hover:text-red-500 link-hover font-bold">
            {title?.slice(0, 20) + "..."}
          </h3>
          <p>
            {description?.slice(0, 40) + "..."}
            <span className="text-red-500 link-hover">Read More</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageArticleAndPostCard;
