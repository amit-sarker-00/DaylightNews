import React from "react";
import Category from "../Pages/Categoris/Category";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import TrendingNews from "./TrendingNews/TrendingNews";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Category />
      <Banner />
      <TrendingNews />
      <HomePageLetestNews />
      <HomePageArticalAndPost />
    </div>
  );
};

export default Home;
