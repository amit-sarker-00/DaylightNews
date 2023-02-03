import React from "react";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
const EnvironmentNewsCard = ({ EnvNews }) =>
{
  const { title, picture, _id, category, description, author } = EnvNews;
  return (
    <div>
      <Link
        to={`/detail/${ _id }`}
        className=" hover:text-red-600 transition-all flex gap-4  overflow-hidden items-center"
      >

        <div>
          <div className=" w-full lg:max-w-full xl:h-[250px] lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 relative flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain">
              <img className="w-full h-full" src={picture} alt="" />
              <Link to={`/category/${ category }`} className="absolute w-full font-semibold bg-red-100 px-1 py-1 text-red-600  left-0 top-0">{category}</Link>
            </div>

            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className=" ">

                <div className="  font-bold text-xl hover:link mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description?.slice(0, 190)}...</p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src={author?.img} alt="Avatar of Writer" />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{author?.name}</p>
                  <p className="text-gray-600">{author?.published_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EnvironmentNewsCard;
