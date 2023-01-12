import React from "react";
import Category from "../Pages/Categoris/Category";
import Banner from "./Banner/Banner";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import TrendingNews from "./TrendingNews/TrendingNews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <TrendingNews />
      <HomePageLetestNews />
      <HomePageArticalAndPost />
    </div>
  );
};

export default Home;
