import React, { useContext } from "react";
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
import SearchData from "../Components/SearchData/SearchData";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import InternetionalTorism from "./InternetionalTorism/InternetionalTorism";
import EntertainmentNews from "./EntertainmentNews/EntertainmentNews";
import ViralNews from "./ViralNews/ViralNews";
import VideoSection from "./VideoSection/VideoSection";
import FoodNews from "./FoodNews/FoodNews";
import EnvironmentNews from "./EnvironmentNews/EnvironmentNews";
import Voices from "./Voices/Voices";

const Home = () => {
  useTitle("Home");
  const { searchContent } = useContext(AuthContext)


  return (
    <div className="max-w-[1440px] mx-auto">
      {/* <Category /> */}
      {/* <Spinner /> */}
      {searchContent ? <SearchData /> : <>
        <Banner />
        <BreakingNews />
        <TrendingNews />
        <HomePageLetestNews />
        <HomePageArticalAndPost />
        <EnvironmentNews />
        <News />
        <Culture />
        <OnlineVatingSection />
        <InternetionalTorism />
        <FoodNews />
        <VideoSection />
        <Voices />
        <ViralNews />
      </>}
    </div>
  );
};

export default Home;
