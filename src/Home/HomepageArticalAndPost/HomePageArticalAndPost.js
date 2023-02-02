import { useQuery } from "@tanstack/react-query";
import React from "react";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import ReecntWorkForHomePageSlidebar from "../RecentWorkForHomePageSlidebar/ReecntWorkForHomePageSlidebar";
import HomePageArticleAndPostCard from "./HomePageArticleAndPostCard";

const HomePageArticalAndPost = () =>
{

  const { data: articleData, isLoading } = useQuery({
    queryKey: [ 'articleNews' ],
    queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }articleNews`)
      .then((res) => res.json())
  })
  const { data: recentlyNews, isLoading: recentLoading } = useQuery({
    queryKey: [ 'articleNews' ],
    queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }recentlyNews`)
      .then((res) => res.json())
  })




  return (
    <div className=" bg-white py-16 ">
      <div className=" items-center flex justify-between my-3">
        <div className="flex items-center ">
          <h1 className="font-bold text-xl lg:w-[960px] sm:text-2xl text-red-500">
            ARTICLES
          </h1>
        </div>
        <h1 className="font-bold w-full hidden lg:block text-xl sm:text-2xl text-red-500">
          RECENT POST
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="w-full lg:w-[1050px] grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4   ">
          {isLoading && <SkeletonLoading cards={6} />}

          {articleData &&
            articleData
              ?.slice(-6)
              .map((data) => (
                <HomePageArticleAndPostCard data={data} key={data._id} />
              ))}
        </div>
        <div className="lg:w-[500px] w-full text-center pb-5">
          <h1 className="text-3xl text-red-500 block  lg:hidden pt-8 pb-5 w-full">
            Recent Post
          </h1>
          <div className="w-full">
            {recentLoading && <SkeletonLoading cards={2} />}

            {recentlyNews &&
              recentlyNews
                ?.slice(-8)
                .map((data) => (
                  <ReecntWorkForHomePageSlidebar data={data} key={data._id} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageArticalAndPost;
