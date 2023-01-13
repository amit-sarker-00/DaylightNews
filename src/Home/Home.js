import React from "react";
import useTitle from "../Hooks/useTitle";
import Category from "../Pages/Categoris/Category";
import Banner from "./Banner/Banner";
import Culture from "./Culture-Lifestyle/Culture-Lifestyle";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import TrendingNews from "./TrendingNews/TrendingNews";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Category />
      <Banner />
      <TrendingNews />
      <HomePageArticalAndPost />
      <Culture></Culture>
    </div>
  );
};

export default Home;
