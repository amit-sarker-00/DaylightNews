import React from "react";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
import { useQuery } from "@tanstack/react-query";
const SportsNews = () => {

  const { data: sportsNews, isLoading } = useQuery({
    queryKey: ['sportsNews'],
    queryFn: () => fetch(`${process.env.REACT_APP_API_URL}sportsNews`)
      .then((res) => res.json())
  })

  return (
    <div>
      <div className="my-3">
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500">
          LATEST SPORTS NEWS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
        <div className="border w-full h-full">
          <div className="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fu5a6ErmqoU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
        <div className="">
          {sportsNews?.slice(0, 5).map((sports) => (
            <Link
              to={`/detail/${sports?._id}`}
              key={sports._id}
              className=" h-full hover:text-red-500 w-full  "
            >
              <div className="flex w-full border border-gray-200 dark:border-gray-700   h-full items-center">
                <div className="overflow-hidden  h-32 w-44">
                  <img
                    className=" h-full w-full ease-in-out duration-500 transform hover:scale-125 object-cover"
                    src={sports?.picture}
                    alt=""
                  />
                </div>
                <div className="mx-2 w-72 h-32">
                  <h4 className="font-semibold text-red-400">{sports?.name}</h4>
                  <h3 className="sm:text-md link-hover   text-md font-bold mb-1">
                    {sports?.title}
                  </h3>
                  <div className="flex gap-2 items-center font-bold text-gray-400">
                    <RxCalendar></RxCalendar>
                    <p className=" font-bold text-gray-400">
                      {sports?.author?.published_date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="">
          {sportsNews?.slice(5, 10).map((sports) => (
            <Link
              to={`/detail/${sports?._id}`}
              key={sports._id}
              className=" h-full w-full  "
            >
              <div className="flex   w-full h-full border border-gray-200 dark:border-gray-700  ">
                <div className="overflow-hidden h-32 w-44">
                  <img
                    className=" h-full w-full ease-in-out duration-500 transform hover:scale-125 object-cover"
                    src={sports?.picture}
                    alt=""
                  />
                </div>
                <div className="mx-2 w-72">
                  <h4 className="font-semibold text-red-400">{sports?.name}</h4>
                  <h3 className="sm:text-md link-hover hover:text-red-500 text-md font-bold mb-1">
                    {sports?.title}
                  </h3>
                  <div className="flex gap-2 items-center font-bold text-gray-400">
                    <RxCalendar></RxCalendar>
                    <p className=" font-bold text-gray-400">
                      {sports?.author?.published_date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div >
  );
};

export default SportsNews;
