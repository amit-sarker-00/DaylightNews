import React from "react";
import useTitle from "../Hooks/useTitle";
import Category from "../Pages/Categoris/Category";
import Banner from "./Banner/Banner";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import News from "./News/News";
import TrendingNews from "./TrendingNews/TrendingNews";

const Home = () => {
  useTitle('Home')

  return (
    <div className="max-w-[1440px] mx-auto">
      <Category />
      <Banner />
      <TrendingNews />
      <HomePageLetestNews />
      <HomePageArticalAndPost />
      <News/>
    </div>
  );
};

export default Home;
