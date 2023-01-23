import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HomePageLetestNews = () => {
  return (
    <main className="mb-4 sm:mb-10">
      <section className="flex mb-7 sm:flex-row flex-col sm:justify-between sm:items-center ">
        <div className="">
          <h1 className="font-bold text-xl sm:text-2xl text-red-500">
            LATEST NEWS
          </h1>
        </div>
        <div className="flex font-semibold pt-3 gap-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500 transition-all"
            }
            to="/"
          >
            Travel
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500 transition-all"
            }
            to="/domestic"
          >
            Domestic
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500 transition-all"
            }
            to="/health"
          >
            Health
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500 transition-all"
            }
            to="/nature"
          >
            Nature
          </NavLink>
        </div>
      </section>

      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default HomePageLetestNews;
