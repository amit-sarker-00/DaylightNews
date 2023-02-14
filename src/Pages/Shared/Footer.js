import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaGithub } from "react-icons/fa";
import
  {
    HiChevronDoubleRight,
    HiEnvelope,
    HiHome,
    HiPhone,
  } from "react-icons/hi2";
import
  {
    IoLogoFacebook,
    IoLogoGoogle,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoSkype,
    IoLogoTwitter,
    IoTimeSharp,
  } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () =>
{
  // categories
  const { data: allCategory = [] } = useQuery({
    queryKey: [ "categories" ],
    queryFn: () =>
      fetch(`${ process.env.REACT_APP_API_URL }categories`).then((res) =>
        res.json()
      ),
  });

  const categories = allCategory.filter(
    (n) => n !== undefined && n !== null && n !== false && n !== 0
  );

  const { data: footerTopPost } = useQuery({
    queryKey: [ "breakingNews" ],
    queryFn: () =>
      fetch(`${ process.env.REACT_APP_API_URL }breakingNews`).then((res) =>
        res.json()
      ),
  });


  return (
    <div className=" bg-black">
      <footer className="footer pt-10 w-5/6 mx-auto flex px-3 lg:justify-between lg:flex-row flex-wrap justify-center  text-white ">
        {/* ---------------------about us --------------------  */}
        <div>
          <h1 className=" font-bold md:text-start text-center w-full text-lg pb-6">
            ABOUT US
          </h1>
          <div className="">
            <h2>
              We believe that the news of our online newsportal website has the
              power to make every reader's life richer
              <br /> and more fulfilling, and to make all societies stronger and
              more just.
            </h2>
            <p className=" flex  items-center gap-2 py-3 mt-5">
              <HiHome className="text-lg text-red-600"></HiHome>
              <Link className="hover:link"> Dhaka, Bangladesh</Link>
            </p>
            <p className=" flex  items-center gap-2 ">
              <HiPhone className=" text-lg text-red-600"></HiPhone>

              <Link className="hover:link">+880-1853239027</Link>
            </p>
            <p className=" flex  items-center gap-2 py-3">
              <HiEnvelope className="text-lg text-red-600"></HiEnvelope>
              <a href="mailto:jillurahmanjibon@gmail.com" target={'_blank'} rel="noreferrer" className="hover:link">jillurahmanjibon@gmail.com</a>
            </p>
            <div className="flex justify-center md:justify-start gap-3 py-2">
              <a rel="noreferrer" target={'_blank'} href="https://web.facebook.com/jillurahman.jibon.3" className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600 ">
                <IoLogoFacebook className=" sm:text-xl text-lg " />
              </a>
              <a rel="noreferrer" target={'_blank'} href="https://github.com/JilluRahmanJibon" className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600">
                <FaGithub className="sm:text-xl text-lg " />
              </a>
              <a rel="noreferrer" target={'_blank'} href="mailto:jillurahmanjibon@gmail.com" className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600">
                <IoLogoGoogle className="sm:text-xl text-lg  " />
              </a>
              <a href="https://www.linkedin.com/in/jillurahmanjibon/" rel="noreferrer" target={'_blank'} className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600">
                <IoLogoLinkedin className="sm:text-xl text-lg   " />
              </a>

            </div>
          </div>
        </div>
        {/*  ------------------------------------ popular CATEGORIES--------------------------*/}
        <div>
          <h1 className="font-bold text-lg pb-6">POPULAR CATEGORIES</h1>
          <div className="w-full">
            {categories?.slice(0, 6)?.map((category) => (
              <div key={category}>
                <Link to={`/category/${ category }`} className="py-2 block ">
                  <div className="flex justify-between  hover:text-red-600">
                    <div className="flex items-center gap-2">
                      <HiChevronDoubleRight></HiChevronDoubleRight>
                      <p> {category}</p>
                    </div>
                    <div>
                      <p>(05)</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/*--------------------------------popular post --------------------- */}
        <div>
          <h1 className="font-bold text-lg pb-6 w-full text-center sm:text-start">
            POPULAR POST
          </h1>
          <div className="">
            {footerTopPost?.slice(0, 3).map((topPost) => (
              <Link
                to={`/detail/${ topPost?._id }`}
                key={topPost._id}
                className="flex gap-3 hover:text-red-500   p-2"
              >
                <img
                  src={topPost?.picture}
                  alt=""
                  className="w-16 rounded-lg"
                />
                <div>
                  <h1 className=" transition-all">
                    {topPost?.title?.length > 30
                      ? topPost?.title.slice(0, 30) + "..."
                      : topPost?.title}
                  </h1>

                  <h2 className="p-2 items-center gap-2  flex rounded-full transition-all">
                    <IoTimeSharp className="shadow-lg  text-lg bg-red-600 rounded-lg"></IoTimeSharp>
                    {topPost?.author?.published_date}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </footer>
      <div className="text-center py-8 text-gray-300 border-t border-gray-800 ">
        <p>
          Copyright © 2023 All Rights Reserved By{" "}
          <a href="#" className="text-red-500 font-bold italic">
            Programming-hero
          </a>
          -Students, Friendly Warriors Team
        </p>
      </div>
    </div>
  );
};

export default Footer;
