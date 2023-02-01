import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news`)
      .then((res) => res.json())
      .then((result) => {
        const breakingNews = result?.filter(
          (breaking) => breaking?.category === "breaking"
        );
        setBreakingNews(breakingNews);
      });
  }, []);

  return (
    <div className="mb-4 sm:mb-10">
      <div className="my-3 flex items-center gap-2">
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500">
          BREAKING NEWS
        </h1>
        <div className="w-2 h-2 mt-1 bg-green-500 animate-pulse rounded-full"></div>
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
        {breakingNews?.length === 0 && <SkeletonLoading cards={6} />}
        {breakingNews?.map((breaking) => (
          <SplideSlide key={breaking?._id}>
            <Link
              to={`/detail/${breaking?._id}`}
              className=" h-32 flex border-2"
            >
              <div className="overflow-hidden w-40 h-32">
                <img
                  className="w-full h-full ease-in-out duration-500 transform hover:scale-125"
                  src={breaking?.picture}
                  alt=""
                />
              </div>
              <div className="mx-2">
                <h3 className="sm:text-md link-hover hover:text-red-500  text-xl font-bold mb-1">
                  {breaking?.title}
                </h3>
                <p>{breaking?.description.slice(0, 30) + "..."}</p>
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
