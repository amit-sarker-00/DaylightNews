import React from "react";
import Category from "../Pages/Categoris/Category";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Category />
      {/* <HomeLetestSection /> */}
      <HomePageArticalAndPost />
    </div>
  );
};

export default Home;
