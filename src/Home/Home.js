import React from "react";
import Category from "../Pages/Categoris/Category";
import HomeLetestSection from "./HomeLetestSection/HomeLetestSection";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Category />
      <HomeLetestSection />
    </div>
  );
};

export default Home;
