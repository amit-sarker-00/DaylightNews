import React from "react";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
const EnvironmentNewsCard = ({ EnvNews }) => {
  const { title, picture, category, description, author } = EnvNews;
  return (
    <div>
      <Link
        to={`/details/`}
        className="p-2 flex gap-4 hover:text-red-600 transition-all overflow-hidden shadow items-center"
      >
        <div className="overflow-hidden w-70 md:h-52 sm:h-40">
          <img
            className="transition transform ease-in-out duration-500 hover:scale-125 object-cover w-[250px] sm:h-52 h-full"
            src={picture}
            alt="/"
          />
        </div>
        <div>
          <div>
            <div className="flex items-center py-2">
              <div className="w-1 h-5 bg-red-600 "></div>
              <p className="pl-5 text-xl text-black font-bold">{category}</p>
            </div>
            <h1 className="text-sm sm:text-xl font-semibold ">{title}</h1>
            <p className="text-sm sm:text-xl text-black">
              {description.slice(0, 50) + "..."}
            </p>
          </div>

          {/* author info  */}
          <div className="flex items-center gap-5 pt-3">
            <div className="flex items-center gap-1">
              <img
                className="w-6 h-6 rounded-full object-cover"
                src={author?.img}
                alt=""
              />
              <p className="text-sm sm:text-xl text-black  ">{author?.name}</p>
            </div>
            <div className="flex items-center gap-1 ">
              <RxCalendar></RxCalendar>
              <p className="text-[14px] text-slate-400">
                {author?.published_date}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EnvironmentNewsCard;
