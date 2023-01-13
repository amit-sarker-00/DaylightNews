import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";

const TrendingNews = () => {
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    fetch("trending.json")
      .then((res) => res.json())
      .then((data) => setTrendingNews(data));
  }, []);
  return (
    <div className=" mb-4 sm:mb-10 ">
      <div className="mx-3  my-3">
        <h1 className=" font-bold text-2xl text-red-500">WHAT'S TRENDING</h1>
      </div>
      <div className="mx-3  ">
        <Splide
          className=" "
          aria-label=""
          options={{
            speed: "2000",
            autoplay: true,
            gap: "1rem",
            rewind: true,
            perPage: 4,
            breakpoints: {
              1280: {
                perPage: 3,
              },
              1024: {
                perPage: 2,
              },
            },
            arrows: true,
            pagination: false,
            perMove: 2,
          }}
        >
          {trendingNews?.map((trending) => (
            <SplideSlide key={trending._id}>
              <Link to={`/trending/${trending._id}`}>
                <div className=" h-80 shadow hover:shadow-2xl  border hover:border-gray-300 ">
                  <div className="overflow-hidden">
                    <img
                      className="w-full h-44 ease-in-out duration-500 transform hover:scale-125"
                      src={trending.image}
                      alt=""
                    />
                  </div>
                  <div className="mx-2">
                    <div className="flex gap-2 my-2 items-center flex-wrap justify-between">
                      <button className="px-2 bg-red-600 hover:bg-red-700 rounded-sm text-white font-semibold">
                        {trending.category}
                      </button>
                      <div className="sm:flex gap-1 text-[14px] text-slate-400 items-center hidden">
                        <RxCalendar></RxCalendar>
                        <p className="flex">{trending.author.date}</p>
                      </div>
                    </div>
                    <h3 className="sm:text-xl text-md font-bold">
                      {trending.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TrendingNews;
