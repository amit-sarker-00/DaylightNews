import React from "react";
import Category from "../Pages/Categoris/Category";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Category />
      <HomePageLetestNews/>
    </div>
  );
};

export default Home;
