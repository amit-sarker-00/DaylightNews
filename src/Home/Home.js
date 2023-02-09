import React, { useContext } from "react";
import useTitle from "../Hooks/useTitle";
import Banner from "./Banner/Banner";
import BreakingNews from "./BreakingNews/BreakingNews";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import TrendingNews from "./TrendingNews/TrendingNews";
import OnlineVatingSection from "./OnlineVatingSection/OnlineVatingSection";
import SearchData from "../Components/SearchData/SearchData";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

import SportsNews from "./SportsNews/SportsNews";

import HomePageDivisionData from "./DistricNews/HomePageDivisionData";
import LiveStockMarketData from "./LiveStockMarketData/LiveStockMarketData";
import SpacialNews from "../Components/SpacialNews/SpacialNews";
import DragAndDrop from "./DragAndDrop/DragAndDrop";

import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import HomePageStorySection from "./HomePageStorySection/HomePageStorySection";

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
          <HomePageDivisionData />
          <HomePageLetestNews />
          <HomePageArticalAndPost />
          <OnlineVatingSection />
          <SportsNews />
          <HomePageStorySection />
          {/* <VideoSection />
          <ViralNews /> */}
          {/* <News/> */}
          {/* <EnvironmentNews />
          <Voices /> */}
        </>
      )}
    </div>
  );
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
          <ViralNews />
          <News /> */}
          {/* <EnvironmentNews /> */}
          {/* <Voices /> */}
        </>
      )}
    </div>
  );
};

export default Home;
