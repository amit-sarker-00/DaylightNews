import React from "react";
import useTitle from "../Hooks/useTitle";
import Category from "../Pages/Categoris/Category";
import Banner from "./Banner/Banner";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import TrendingNews from "./TrendingNews/TrendingNews";

const Home = () => {
  useTitle('Home')

  return (
    <div>
      <Category />
      <Banner />
      <TrendingNews />
      <HomePageLetestNews />
      <HomePageArticalAndPost />
    </div>
  );
};

export default Home;
