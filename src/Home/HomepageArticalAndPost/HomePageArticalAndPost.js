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
    <div className=" bg-white my-5">
      <h1 className="py-8 text-3xl mx-3">Recent Articles & Post</h1>
      <div className="flex lg:flex-row flex-col">
        <div className="w-full lg:w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:mx-3 ">
          {articleData &&
            articleData.map((data) => (
              <HomePageArticleAndPostCard data={data} key={data._id} />
            ))}
        </div>
        <div className="lg:w-[500px] w-full text-center py-5">
          <h1 className="text-2xl font-semibold">Recent Work</h1>
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
