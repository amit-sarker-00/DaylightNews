import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Banner.css";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";

const Banner = () =>
{
  const [ bannerData, setBannerData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  useEffect(() =>
  {
    fetch(`${ process.env.REACT_APP_API_URL }news`)
      .then((res) => res.json())
      .then((data) =>
      {
        setBannerData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1  my-4 sm:my-10 md:my-16">
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
            {bannerData?.length === 0 && <SkeletonLoading cards={6} />}
            {bannerData?.slice(-8)?.map((banner) => (
              <SplideSlide className="relative" key={banner._id}>
                <Link
                  to={`/detail/${ banner._id }`}
                  className="w-full h-[100%] gradient"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={banner?.picture}
                    alt=""
                  />
                  <div className=" absolute bottom-10 px-5 text-cyan-500  z-50">
                    <div className="  ">
                      <Link
                        to={`/category/${ banner?.category }`}
                        className="font-bold py-1 mb-2 px-2 bg-red-600 hover:bg-red-700 text-white"
                      >
                        {banner?.category}
                      </Link>
                      <h3
                        title={banner?.title}
                        className="sm:text-2xl mt-1 link-hover text-md text-white"
                      >
                        {banner?.title?.length > 50
                          ? banner?.title?.slice(0, 50) + "..."
                          : banner?.title}
                      </h3>
                      <div className="sm:flex hidden gap-2 items-center mt-3">
                        <div className="flex items-center gap-1 font-bold py-1 justify-center px-2 bg-white text-red-500">
                          <img
                            className="w-4 h-4 rounded-xl"
                            src={banner?.author?.author_img}
                            alt=""
                          />
                          <button>{banner?.author?.author_name}</button>
                        </div>
                        <div className="flex items-center gap-1 font-bold py-1  px-2 bg-white text-red-500">
                          <RxCalendar></RxCalendar>
                          <button>{banner?.author?.published_date}</button>
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
          {bannerData?.length === 0 && <SkeletonLoading cards={2} />}
          {bannerData?.slice(103, 107)?.map((banner) => (
            <Link to={`/detail/${ banner._id }`} key={banner._id}>
            
              <div className=" h-full border sm:border-none  relative overflow-hidden">
                <img
                  className="h-[100%] w-[100%] ease-in-out duration-500 transform hover:scale-125  "
                  src={banner?.picture}
                  alt=""
                />
                <div className=" absolute bottom-2 pl-3 text-cyan-500  z-40">
                  <div className="  ">
                    <Link
                      to={`/category/${ banner?.category }`}
                      className="font-bold mb-2 px-2 bg-red-600 hover:bg-red-700 rounded-sm text-white"
                    >
                      {banner?.category}
                    </Link>

                    <h3 className="text-sm text-white link-hover   hover:underline mt-1 hero-overlay">
                      {banner?.title?.length > 50
                        ? banner?.title?.slice(0, 50) + "..."
                        : banner?.title}
                    </h3>
                    <div className="sm:flex hidden gap-2 items-center mt-3 text-xs flex-wrap">
                      <div className="flex items-center gap-1 font-bold  py-1  px-2 bg-white text-red-500">
                        <img
                          className="w-4 h-4 rounded-xl"
                          src={banner?.author?.author_img}
                          alt=""
                        />
                        <button>{banner?.author?.author_name}</button>
                      </div>
                      <div className="flex items-center gap-1 font-bold py-1  px-2 bg-white text-red-500">
                        <RxCalendar className=""></RxCalendar>
                        <button>{banner?.author?.published_date}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

// please  install in the main branch
// $ npm install @splidejs/react-splide
