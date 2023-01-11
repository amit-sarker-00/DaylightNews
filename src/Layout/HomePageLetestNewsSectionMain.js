import React from "react";
import { Outlet } from "react-router-dom";
import HomeLetestAllMenu from "../Home/HomeLetestSection/HomeLetestAllMenu/HomeLetestAllMenu";

const HomePageLetestNewsSectionMain = () => {
  return (
    <div>
      <HomeLetestAllMenu />
      <Outlet />
    </div>
  );
};

export default HomePageLetestNewsSectionMain;
