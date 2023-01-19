import React from "react";
import InternetionalTorism from "../Components/InternetionalTorism/InternetionalTorism";
import useTitle from "../Hooks/useTitle";
import Category from "../Pages/Categoris/Category";
import Banner from "./Banner/Banner";
import Culture from "./Culture-Lifestyle/Culture-Lifestyle";
import EntertainmentNews from "./EntertainmentNews/EntertainmentNews/EntertainmentNews";
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
      <TrendingNews />
      <HomePageLetestNews />
      <HomePageArticalAndPost />
      <EntertainmentNews></EntertainmentNews>
      <InternetionalTorism></InternetionalTorism>
      <News />
      <Culture />
    </div>
  );
};

export default Home;
