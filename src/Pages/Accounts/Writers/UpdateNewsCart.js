import { ArrowPathIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

const UpdateNewsCart = ({ news, handleUpdateProduct, handleDelet }) => {
  return (
    <div className="shadow hover:shadow-2xl border hover:border-gray-200 dark:border-gray-700   ">
      <div className="overflow-hidden">
        <img
          className="w-full h-44 ease-in-out duration-500 transform hover:scale-125"
          src={news?.picture}
          alt=""
        />
      </div>
      <div className="mx-2">
        <div className="flex gap-2 my-2 items-center flex-wrap justify-between">
          <button className="px-2 bg-red-600 hover:bg-red-700 rounded-sm text-white font-semibold">
            {news?.category}
          </button>
          <div className="sm:flex gap-1 items-center hidden">
            <p className="flex">{news?.author?.published_date}</p>
          </div>
        </div>
        <h3 className="sm:text-xl text-md font-bold">
          {news?.title?.slice(0, 50) + ".."}
        </h3>
        <p>{news?.description?.slice(0, 100) + ".. "}</p>
        <div className="flex justify-between">
          <label
            onClick={() => handleUpdateProduct(news)}
            htmlFor="update-modal"
            className="px-3 py-2   bg-[#DEF9EC] text-[#3BB77E] rounded flex  font-bold"
          >
            <ArrowPathIcon className="h-6 w-6 mx-2 " /> Update
          </label>
          <button
            onClick={() => handleDelet(news?._id)}
            className=" px-3 py-2 bg-[#fde0e9] text-[#f74b81] rounded flex  font-bold"
          >
            <TrashIcon className="h-6 w-6 mx-2 " /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateNewsCart;
