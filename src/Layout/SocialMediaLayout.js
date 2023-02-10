import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../Components/Drawer/Drawer";
import SocialDrawer from "../Components/Drawer/SocialDrawer";
import Footer from "../Pages/Shared/Footer";

const SocialMediaLayout = () => {
  return (
    <div className="  md:flex lg:flex    lg:py-20  ">
      <SocialDrawer></SocialDrawer>
      <div className="w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default SocialMediaLayout;
