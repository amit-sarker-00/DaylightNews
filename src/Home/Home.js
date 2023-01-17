import React from "react";
import useTitle from "../Hooks/useTitle";
import Category from "../Pages/Categoris/Category";
import Banner from "./Banner/Banner";
import BreakingNews from "./BreakingNews/BreakingNews";
import Culture from "./Culture-Lifestyle/Culture-Lifestyle";
import FoodNews from "./FoodNews/FoodNews";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import News from "./News/News";
import TrendingNews from "./TrendingNews/TrendingNews";

const Home = () => {
  useTitle("Home");

  return (
    <div className="max-w-[1440px] mx-auto">
      <Category />
      <Banner />
      <BreakingNews />
      <TrendingNews />
      <HomePageLetestNews />
      <HomePageArticalAndPost />
      <FoodNews />
    </div>
  );
};

export default Home;
