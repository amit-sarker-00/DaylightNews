import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const SocialDrawer = () => {
  return (
    <section>
      <div
        id="drawer-navigation"
        className=" h-screen p-4 sm:w-80 w-full  text-gray-600"
        tabIndex="-1"
        aria-labelledby="drawer-    navigation-label"
      >
        <div>
          <ul className=" gap-3 flex-col font-bold text-xl">
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Profile
              </Link>
            </li>
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                News Feed
              </Link>
            </li>
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Message
              </Link>
            </li>
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Notification
              </Link>
            </li>
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Friends
              </Link>
            </li>
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Group
              </Link>
            </li>
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Live Chat
              </Link>
            </li>
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Favorite
              </Link>
            </li>
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Videos
              </Link>
            </li>
            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Event
              </Link>
            </li>

            <li className="w-full ">
              <Link className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-sm  pl-2 ">
                Marketplace
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SocialDrawer;
