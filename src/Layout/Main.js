import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../Components/Drawer/Drawer";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
    
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
            <Navbar />
          <div className="w-5/6 mx-auto">
            <Outlet />
          </div>
          <Footer />
         
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
           
            <Drawer />
        </div>
      </div>
      
    </div>
  );
};

export default Main;
