import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";

const Culture = () => {
  const [bannerImg, setBannerImg] = useState([]);
  //   const [sideBanner, setSideBanner] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news`)
      .then((res) => res.json())
      .then((result) => {
        const breakingNews = result?.filter(breaking => breaking?.category === 'cultures')
        setBannerImg(breakingNews)

      });
  }, []);


  return (
    <div className="mb-4 sm:my-10 md:my-16">
      <div className="font-bold text-xl sm:text-2xl text-red-500 my-3">
        <h1>Culture and Lifestyle</h1>
      </div>
      <div className="xl:flex grid grid-cols-1  gap-1 ">
        <div className=" ">
          <Splide
            aria-label=""
            options={{
              autoplay: true,
              height: "69vh",

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
            {bannerImg?.length === 0 && <SkeletonLoading cards={3} />}
            {bannerImg?.slice(0, 3).map((banner) => (
              <SplideSlide className="" key={banner?._id}>
                <div className="w-full h-[100%]">
                  <img
                    className="h-[100%] w-full object-cover"
                    src={banner?.picture}
                    alt=""
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className=" gap-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  h-full xl:grid-cols-2 w-full">
          {bannerImg?.length === 0 && <SkeletonLoading cards={2} />}

          {bannerImg?.slice(-4).map((banner) => (
            <Link
              className="border w-[100%] h-64 hover:text-red-600 transition-all "
              to={`/bannerDetails/${banner?._id}`}
              key={banner?._id}
            >
              <div className="h-[80%]">
                <div className="overflow-hidden h-[60%]">
                  <img
                    className="h-[100%] w-full ease-in-out duration-500 transform hover:scale-125 object-cover"
                    src={banner?.picture}
                    alt=""
                  />
                </div>
                <div className="mx-2">
                  <h3 className="font-bold text-md mt-2 link-hover">
                    {banner?.title}
                  </h3>
                  <p className="text-gray-600 ">
                    {banner?.description?.slice(0, 30) + "..."}{" "}
                  </p>
                  <span className="link  font-semibold ">Read More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;
