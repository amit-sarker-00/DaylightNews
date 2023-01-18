import React from "react";
import Spinner from "../Components/Spinner/Spinner";
import useTitle from "../Hooks/useTitle";
import Category from "../Pages/Categoris/Category";
import Banner from "./Banner/Banner";
import Culture from "./Culture-Lifestyle/Culture-Lifestyle";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import News from "./News/News";
import TrendingNews from "./TrendingNews/TrendingNews";
import OnlineVatingSection from "./OnlineVatingSection/OnlineVatingSection";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
  useTitle("Home");

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* <Category /> */}
      <Spinner />
      <Banner />
      <BreakingNews/>
      <TrendingNews />
      <HomePageLetestNews />
      <HomePageArticalAndPost />
      <News />
      <Culture />
      <OnlineVatingSection />
    </div>
  );
};

export default Home;
