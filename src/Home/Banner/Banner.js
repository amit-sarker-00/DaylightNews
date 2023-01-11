import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Banner.css";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
const Banner = () => {
  const [bannerImg, setBannerImg] = useState([]);
  const [sideBanner, setSideBanner] = useState([]);
  useEffect(() => {
    fetch("mainBanner.json")
      .then((res) => res.json())
      .then((data) => setBannerImg(data));
  }, []);

  useEffect(() => {
    fetch("sideBanner.json")
      .then((res) => res.json())
      .then((data) => setSideBanner(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mx-3 sm:mx-10 md:mx-16 lg:mx-24 my-4 sm:my-10 md:my-16">
      <div className=" ">
        <Splide
          aria-label=""
          options={{
            autoplay: true,
            height: "65vh",

            breakpoints: {
              1500: {
                height: "60vh",
              },
              1024: {
                height: "40vh",
              },
            },
            rewind: true,
            arrows: true,
            pagination: true,
            speed: "2000",
          }}
        >
          {bannerImg?.map((banner) => (
            <SplideSlide className="relative" key={banner.id}>
              <Link
                to={`/bannerDetails/${banner.id}`}
                className="w-full h-[100%] gradient"
              >
                <img
                  className="h-full w-full object-cover"
                  src={banner.image}
                  alt=""
                />
                <div className=" absolute bottom-10  text-cyan-500  z-50">
                  <div className=" mx-5 ">
                    <button className="font-bold py-1 mb-2 px-2 bg-red-600 hover:bg-red-700 text-white">
                      {banner.name}
                    </button>
                    <h3 className="sm:text-2xl text-xl text-white">
                      {banner.title}
                    </h3>
                    <div className="sm:flex hidden gap-2 items-center mt-3">
                      <div className="flex items-center gap-1 font-bold py-1  px-2 bg-white text-red-500">
                        <img
                          className="w-4 h-4 rounded-xl"
                          src={banner.author.author_img}
                          alt=""
                        />
                        <button>{banner.author.author_name}</button>
                      </div>
                      <div className="flex items-center gap-1 font-bold py-1  px-2 bg-white text-red-500">
                        <RxCalendar></RxCalendar>
                        <button>{banner.author.date}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className=" gap-1 grid grid-cols-1 sm:grid-cols-2 h-full w-full">
        {sideBanner?.map((banner) => (
          <Link to={`/bannerDetails/${banner.id}`} key={banner.id}>
            <div className=" h-full border sm:border-none  relative overflow-hidden">
              <img
                className="h-[100%] w-[100%] transition transform hover:scale-125  "
                src={banner.img}
                alt=""
              />
              <div className=" absolute bottom-2  text-cyan-500  z-50">
                <div className=" mx-5 ">
                  <button className="font-bold py-1 mb-2 px-2 bg-red-600 hover:bg-red-700 rounded-sm text-white">
                    {banner.category}
                  </button>
                  <h3 className="text-sm text-white">{banner.title}</h3>
                  <div className="sm:flex hidden gap-2 items-center mt-3 text-xs flex-wrap">
                    <div className="flex items-center gap-1 font-bold py-1   px-2 bg-white text-red-500">
                      <img
                        className="w-4 h-4 rounded-xl"
                        src={banner.author.author_img}
                        alt=""
                      />
                      <button>{banner.author.author_name}</button>
                    </div>
                    <div className="flex items-center gap-1 font-bold py-1  px-2 bg-white text-red-500">
                      <RxCalendar className=""></RxCalendar>
                      <button>{banner.author.date}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Banner;

// please  install in the main branch
// $ npm install @splidejs/react-splide
