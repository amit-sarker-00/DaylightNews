import React from "react";
import Category from "../Pages/Categoris/Category";
import Banner from "./Banner/Banner";
import Culture from "./Culture-Lifestyle/Culture-Lifestyle";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import TrendingNews from "./TrendingNews/TrendingNews";

const Home = () => {
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
