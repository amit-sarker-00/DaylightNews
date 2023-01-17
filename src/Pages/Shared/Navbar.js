import React, { useContext, useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  // date
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("en-US", options);
  // categories 
  useEffect(() => {
    fetch("NewsData.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(News);

  // all category in news
  const allCategory = categories.map((news) => news.category);
  // console.log(allCategory);
  // unique category
  const uniqueCategory = [...new Set(allCategory)];

  return (
    <main>
      <section className="bg-[#f0f2f5] pb-5">
        <div className="">
          <div className="w-5/6 mx-auto flex  justify-between py-1">
            <div>
              <label
                htmlFor="my-drawer"
                className=" cursor-pointer drawer-button"
              >
                {" "}
                <AiOutlineBars />
              </label>
            </div>

            <div>
              <h1>Tempareture </h1>
            </div>
          </div>

          <div className="w-5/6 mx-auto items-center sm:flex-row flex flex-col justify-between">
            <div>
              <ul className="flex gap-3">
                <Link className="rounded-full" href="#">
                  <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white">
                    <FaFacebookF className="text-lg" />
                  </li>
                </Link>
                <Link className="rounded-full" href="#">
                  <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white">
                    <FaGoogle className="text-lg" />
                  </li>
                </Link>
                <Link className="rounded-full" href="#">
                  <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white">
                    <FaGithub className="text-lg" />
                  </li>
                </Link>
                <Link className="rounded-full" href="#">
                  <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white">
                    <FaLinkedinIn className="text-lg" />
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-bold italic "><a href="/">DayLight-News</a></h1>
            </div>
            <div>
              <h1 className="text-sm font-semibold">{currentDate}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="my-2 w-5/6 mx-auto ">
        <div className="flex justify-between">
          <div>
            <ul className=" gap-3 hidden lg:flex">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>News</Link>
              </li>
              <li>
                <Link>Sports</Link>
              </li>
              <li>
                <Link>Pages</Link>
              </li>
              <li>
                <Link>Travel</Link>
              </li>
              <li>
                <Link>Future </Link>
              </li>
              <li>
                <Link>Culture</Link>
              </li>
              <li >
                <div className="dropdown dropdown-hover">
                  <Link tabIndex={1} className="flex items-center gap-1 "><span>Categories</span> <IoIosArrowDropdown className="mt-1" /></Link>
                  <ul tabIndex={1} className="dropdown-content sm:w-60 w-20 z-50 rounded-md  shadow bg-gray-200 ">
                    {
                      uniqueCategory.map((category, i) => <li key={i} className="w-full">
                        <Link to={`/category/${category}`} className="block py-1 px-2 hover:pl-8 ease-in-out duration-300 hover:text-white  my-1 hover:bg-red-500" >{category}</Link>
                      </li>)
                    }
                  </ul>
                </div>
              </li>
              <li>
                <Link>Gadgets</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <div>
              <input
                className="p-1 rounded-2xl pl-3  bg-[#f0f2f5] "
                type="search"
                placeholder="Search"
              />
            </div>
            <div>
              {user?.email ? (
                <>
                  <div>
                    <button onClick={logout}>log out</button>
                    <Link className="sm:px-2" to="/account">
                      Account
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link className="btn btn-sm ml-2" to="/login">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
