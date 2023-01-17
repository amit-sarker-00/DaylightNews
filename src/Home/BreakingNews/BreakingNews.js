import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  useEffect(() => {
    fetch("BreakingNews.json")
      .then((res) => res.json())
      .then((data) => setBreakingNews(data));
  }, []);
  return (
    <div className="mb-4 sm:mb-10">
      <div className="my-3">
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500">
          BREAKING NEWS
        </h1>
      </div>
      <Splide
        className=" "
        aria-label=""
        options={{
          speed: "8000",
          autoplay: true,
          gap: "1rem",
          rewind: true,
          perPage: 3,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            576: {
              perPage: 1,
            },
          },

          arrows: false,
          pagination: false,
        }}
      >
        {breakingNews?.map((breaking) => (
          <SplideSlide key={breaking._id}>
            <Link className=" h-28 flex">
              <div className="overflow-hidden w-40 h-28">
                <img
                  className="w-full h-full ease-in-out duration-500 transform hover:scale-125"
                  src={breaking.image}
                  alt=""
                />
              </div>
              <div className="mx-2">
                <h3 className="sm:text-md link-hover text-md font-bold mb-1">
                  {breaking.title}
                </h3>
                <div className="flex gap-1 items-center font-bold text-gray-400">
                  <BiTime></BiTime>
                  <p className=" font-bold text-gray-400">two minutes ago</p>
                </div>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default BreakingNews;
