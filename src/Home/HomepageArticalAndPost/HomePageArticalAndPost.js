import React, { useEffect, useState } from "react";
import ReecntWorkForHomePageSlidebar from "../RecentWorkForHomePageSlidebar/ReecntWorkForHomePageSlidebar";
import HomePageArticleAndPostCard from "./HomePageArticleAndPostCard";

const HomePageArticalAndPost = () => {
  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    fetch(`HomePageAticalAndPost.json`)
      .then((res) => res.json())
      .then((data) => setArticleData(data));
  }, []);

  console.log(articleData);
  return (
    <div className=" bg-white py-16 ">
      <div className=" items-center flex justify-between">
        <h1 className="pb-3 text-3xl pl-4 w-full lg:w-[1050px]"> Articles & Post</h1>
        <h1 className="text-3xl lg:w-[500px] hidden lg:block pl-3 w-full">Recent Post</h1>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="w-full lg:w-[1050px] grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4  lg:mx-3 ">
          {articleData &&
            articleData.map((data) => (
              <HomePageArticleAndPostCard data={data} key={data._id} />
            ))}
        </div>
        <div className="lg:w-[500px] w-full text-center pb-5">
          <h1 className="text-3xl lg:w-[500px] block lg:hidden pt-8 pb-5 w-full">Recent Post</h1>
          <div className="w-full">
            {articleData &&
              articleData.map((data) => (
                <ReecntWorkForHomePageSlidebar data={data} key={data._id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageArticalAndPost;
