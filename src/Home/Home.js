import React from "react";
import Category from "../Pages/Categoris/Category";
import Banner from "./Banner/Banner";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import TrendingNews from "./TrendingNews/TrendingNews";

const Home = () => {
  return (
    <div>
      <Category/>
      <Banner />
      <TrendingNews />
      <HomePageArticalAndPost/>
    </div>
  );
};

export default Home;
