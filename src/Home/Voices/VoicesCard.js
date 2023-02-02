import React from "react";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";

const VoicesCard = ({ VoiceNews }) =>
{
  const { title, picture, category, _id, description, author } = VoiceNews;
  return (
    <div>
      <Link
        to={`/detail/${ _id }`}
        className="p-2 flex gap-4 hover:text-red-500 transition-all overflow-hidden shadow items-center"
      >
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <div className=" relative">
              <img className=" w-full h-full object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={picture} alt="" />
              <Link to={`/category/${ category }`} className="absolute top-0 bg-red-500 rounded-tl-lg inline-block px-1 py-1 text-white">{category}</Link>
            </div>
            <div className=" pl-3 py-2 flex flex-col justify-start">
              <h5 className=" text-md hover:link font-medium mb-2">{title?.slice(0, 40)}</h5>
              <p className="text-gray-700 text-base mb-4">
                {description?.slice(0, 80)}...
              </p>
              <div className="flex items-center gap-5 pt-3">
                <div className="flex items-center gap-1">
                  <img
                    className="w-6 h-6 rounded-full object-cover"
                    src={author?.img}
                    alt=""
                  />
                  <p className="text-sm font-semibold text-gray-500">{author?.name}</p>
                </div>
                <div className="flex items-center gap-1 ">
                  <RxCalendar></RxCalendar>
                  <p className="text-[14px] text-slate-400">
                    {author?.published_date}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VoicesCard;
