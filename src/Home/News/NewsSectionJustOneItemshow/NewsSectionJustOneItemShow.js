import React from "react";
import "../NewsSectionJustOneItemshow/NewsSectionJustOneItemcss.css";
import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";

const NewsSectionJustOneItemShow = ({ data }) => {
  const { title, picture, descrption, category, author, _id } = data;
  return (
    <div className="  flex items-center   my-3 gap-4 ">
      <div className="relative overflow-hidden ">
        <img
          className="work  ease-in-out duration-500 object-cover md:h-[300px] w-full transition transform hover:scale-125"
          src={picture}
          alt=""
        />
        <div className="absolute sm:bottom-5 bottom-2 text-white font-semibold left-3">
          <Link
            to={`detail/${_id}`}
            className=" hero-overlay py-1 px-3  lg:text-md xl:text-xl"
          >
            {title?.slice(0, 30)}
          </Link>
          <div className="flex items-center gap-5 pt-3">
            <div className="flex items-center gap-1">
              <img
                className="w-10 h-10 rounded-full object-cover bg-white p-1 transition transform hover:scale-125"
                src={author?.author_img}
                alt=""
              />
            </div>
            <div className="flex items-center gap-2 bg-white py-1 px-3">
              <RxCalendar className="text-red-500 "></RxCalendar>
              <p className="text-[12px] text-red-500">
                {author?.published_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSectionJustOneItemShow;
