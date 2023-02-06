import React, { useContext } from "react";
import Spinner from "../Components/Spinner/Spinner";
import useTitle from "../Hooks/useTitle";
import Banner from "./Banner/Banner";
import BreakingNews from "./BreakingNews/BreakingNews";
import Culture from "./Culture-Lifestyle/Culture-Lifestyle";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import News from "./News/News";
import TrendingNews from "./TrendingNews/TrendingNews";
import OnlineVatingSection from "./OnlineVatingSection/OnlineVatingSection";
import SearchData from "../Components/SearchData/SearchData";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import InternetionalTorism from "./InternetionalTorism/InternetionalTorism";
import EntertainmentNews from "./EntertainmentNews/EntertainmentNews";
import ViralNews from "./ViralNews/ViralNews";
import VideoSection from "./VideoSection/VideoSection";
import SportsNews from "./SportsNews/SportsNews";
import Voices from "./Voices/Voices";

import HomePageStorySection from "./HomePageStorySection/HomePageStorySection";
import EnvironmentNews from "./EnvironmentNews/EnvironmentNews";
import HomePageDivisionData from "./DistricNews/HomePageDivisionData";
import LiveStockMarketData from "./LiveStockMarketData/LiveStockMarketData";
import SpacialNews from "../Components/SpacialNews/SpacialNews";

const Home = () => {
  useTitle("Home");
  const { searchContent } = useContext(AuthContext);

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* <Category /> */}
      {/* <Spinner /> */}
      {searchContent ? (
        <SearchData />
      ) : (
        <>
          <Banner />
          <BreakingNews />
          <TrendingNews />
          {/* <HomePageDivisionData />
          <HomePageLetestNews />
          <HomePageArticalAndPost />
          <OnlineVatingSection />
          <SportsNews />
          <HomePageStorySection />
          <VideoSection />
          <ViralNews /> */}
          {/* <News/> */}
          {/* <EnvironmentNews />
          <Voices /> */}
        </>
      )}
    </div>
  );
};

export default Home;