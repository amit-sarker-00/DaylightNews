import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  function formatDate(date) {
    const yyyy = date.getFullYear();
    let dd = date.getDate() + 1;
    if (dd < 10) dd = "0" + dd;
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let strTime = monthNames[date.getMonth()] + "/" + dd + "/" + yyyy;
    return strTime;
  }
  const currentDate = formatDate(new Date());
  return (
    <main>
      <section className="bg-[#f0f2f5] pb-5">
        <div className="w-11/12 mx-auto flex  justify-between py-1">
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

        <div className="w-11/12 mx-auto items-center flex justify-between">
          <div>
            <ul className="flex gap-3">
              <a className="rounded-full" href="#">
                <li className="bg-white rounded-full hover:bg-blue-500 transition-all p-2 hover:text-white">
                  <FaFacebookF className="text-lg" />
                </li>
              </a>
              <a className="rounded-full" href="#">
                <li className="bg-white rounded-full hover:bg-blue-500 transition-all p-2 hover:text-white">
                  <FaGoogle className="text-lg" />
                </li>
              </a>
              <a className="rounded-full" href="#">
                <li className="bg-white rounded-full hover:bg-blue-500 transition-all p-2 hover:text-white">
                  <FaGithub className="text-lg" />
                </li>
              </a>
              <a className="rounded-full" href="#">
                <li className="bg-white rounded-full hover:bg-blue-500 transition-all p-2 hover:text-white">
                  <FaLinkedinIn className="text-lg" />
                </li>
              </a>
            </ul>
          </div>
          <div>
            <h1 className="btn ">DayLight-News</h1>
          </div>
          <div>
            <p className="text-sm font-semibold">{currentDate}</p>
          </div>
        </div>
      </section>

      <section className="my-2">
        <div className="flex justify-between w-11/12 mx-auto">
          <div>
            <ul className="flex gap-3">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Posts</Link>
              </li>
              <li>
                <Link>MegaMenu</Link>
              </li>
              <li>
                <Link>Pages</Link>
              </li>
              <li>
                <Link>LifeStyle</Link>
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
            <div>user logo</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
