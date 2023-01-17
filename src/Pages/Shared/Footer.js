import React from "react";
import {
  HiChevronDoubleRight,
  HiEnvelope,
  HiHome,
  HiPhone,
} from "react-icons/hi2";
import {
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoSkype,
  IoLogoTwitter,
  IoTimeSharp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import car1 from "../../assest/Footer img/car 2.jfif";
import car2 from "../../assest/Footer img/car 3.jfif";
import car3 from "../../assest/Footer img/car 4.jfif";

const Footer = () => {

  const footerTopPost = [
    {
      id: 1,
      author: {
        name: "Licks lord",
        published_date: "06 june,2018",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
      },
      title: "Paron Lake,Peru for gadgets slows",
      description: "Through photography, the beauty of Mother Nature can be frozen in time. This category celebrates the magic of our planet and beyond — from the immensity of the great outdoors, to miraculous moments in your own backyard. major technology company to reveal how weakness in the global economy is impacting its business Sales have also slowed after demand boomed during the pandemic when customers at home spent a lot online",
      "picture": "https://images.unsplash.com/photo-1528255915607-9012fda0f838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      category: "travel"
    },
    {
      id: 2,
      author: {
        name: "Lana Rose",
        published_date: "12 june,2018",
        img: "https://s2982.pcdn.co/wp-content/uploads/2022/01/photographer.png.webp"
      },
      title: "Machu Picchu Thomas sbampato",
      description: "Another of the world’s manmade wonders, Machu Picchu, located in Peru, is believed to have been a royal estate or sacred religious site for Inca leaders, according to History.com. After the Incan civilization was destroyed by the Spanish in the 1500s, Machu Picchu lay undiscovered and unknown except by locals until 1911, despite that this monument to ancient life in Peru stretches over five miles and features more than 3,000 stone steps. Some say it’s “overrated,” but we’re guessing it’s worth your time, and here are. business Sales have also slowed after demand boomed during the pandemic when customers at home spent a lot online",
      "picture": "https://images.unsplash.com/photo-1528255915607-9012fda0f838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      category: "travel"
    },
    {
      id: 3,
      author: {
        name: "Lana Rose",
        published_date: "18 june,2018",
        img: "https://s2982.pcdn.co/wp-content/uploads/2022/01/photographer.png.webp"
      },
      title: "The Roman Colosseum THE TRAVEL",
      description: "Another of the world’s manmade wonders, Machu Picchu, located in Peru, is believed to have been a royal estate or sacred religious site for Inca leaders, according to History.com. After the Incan civilization was destroyed by the Spanish in the 1500s, Machu Picchu lay undiscovered and unknown except by locals until 1911, despite that this monument to ancient life in Peru stretches over five miles and features more than 3,000 stone steps. Some say it’s “overrated,” but we’re guessing it’s worth your time, and here are. business Sales have also slowed after demand boomed during the pandemic when customers at home spent a lot online",
      "picture": "https://www.rd.com/wp-content/uploads/2019/06/595949a-scaled.jpg?resize=700,466",
      category: "travel"
    },

  ]
  return (
    <div className=" bg-black">
      <footer className="footer pt-10 w-5/6 mx-auto flex px-3 lg:justify-between lg:flex-row flex-wrap justify-center  text-white ">
        {/* ---------------------about us --------------------  */}
        <div>
          <h1 className=" font-bold md:text-start text-center w-full text-lg pb-6">ABOUT US</h1>
          <div className="">
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              since has five.
            </h2>
            <p className=" flex  items-center gap-2 py-3 mt-5">
              <HiHome className="text-lg text-red-600"></HiHome>
              <Link className="hover:link"> 15 Cliff St, New York NY 10038, USA</Link>
            </p>
            <p className=" flex  items-center gap-2 ">
              <HiPhone className=" text-lg text-red-600"></HiPhone>

              <Link className="hover:link">+91 234 567 8765</Link>
            </p>
            <p className=" flex  items-center gap-2 py-3">
              <HiEnvelope className="text-lg text-red-600"></HiEnvelope>
              <Link className="hover:link">friendlywarriors@gmail.com</Link>
            </p>
            <div className="flex justify-center md:justify-start gap-3 py-2">
              <Link className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600 ">
                <IoLogoFacebook className=" sm:text-xl text-lg " />
              </Link>
              <Link className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600">
                <IoLogoTwitter className="sm:text-xl text-lg " />
              </Link>
              <Link className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600">
                <IoLogoGoogle className="sm:text-xl text-lg  " />
              </Link>
              <Link className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600">
                <IoLogoLinkedin className="sm:text-xl text-lg   " />
              </Link>
              <Link className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600">
                <IoLogoInstagram className="sm:text-xl text-lg  " />
              </Link>
              <Link className="rounded-full transition-all bg-red-600 p-2 hover:bg-white hover:text-red-600">
                {" "}
                <IoLogoSkype className="sm:text-xl text-lg" />
              </Link>
            </div>
          </div>
        </div>
        {/*  ------------------------------------ popular CATEGORIES--------------------------*/}
        <div>
          <h1 className="font-bold text-lg pb-6">POPULAR CATEGORIES</h1>
          <div>
            <Link>
              <div className="flex justify-between py-3 hover:text-red-600">
                <div className="flex items-center gap-2">
                  <HiChevronDoubleRight></HiChevronDoubleRight>
                  <p> Make-Up</p>
                </div>
                <div>
                  <p>(05)</p>
                </div>
              </div>
            </Link>

            <Link>
              <div className="flex justify-between hover:text-red-600">
                <div className="flex items-center gap-2">
                  <HiChevronDoubleRight></HiChevronDoubleRight>
                  <p>Health</p>
                </div>
                <div>
                  <p>(05)</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-between py-3 hover:text-red-600">
                <div className="flex items-center gap-2">
                  <HiChevronDoubleRight></HiChevronDoubleRight>
                  <p> Audio</p>
                </div>
                <div>
                  <p>(08)</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-between hover:text-red-600">
                <div className="flex items-center gap-2">
                  <HiChevronDoubleRight></HiChevronDoubleRight>
                  <p> Travel</p>
                </div>
                <div>
                  <p>(25)</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-between py-3 hover:text-red-600">
                <div className="flex items-center gap-2">
                  <HiChevronDoubleRight></HiChevronDoubleRight>
                  <p> Health</p>
                </div>
                <div>
                  <p>(12)</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex items-center gap-2">
                <HiChevronDoubleRight></HiChevronDoubleRight>
                <div className="flex justify-between hover:text-red-600 gap-20 ">
                  <p> Food</p>
                  <p>(15)</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*--------------------------------popular post --------------------- */}
        <div>
          <h1 className="font-bold text-lg pb-6 w-full text-center sm:text-start">POPULAR POST</h1>
          <div className="">
            {
              footerTopPost.map(topPost => <div key={topPost.id} className="flex gap-3  hover:text-red-500   p-2">
                <img src={car1} alt="" className="w-16 rounded-lg" />
                <div>
                  <Link className=" transition-all">
                    {topPost.title}
                  </Link>
                  <h1 className="p-2">
                    <Link className=" items-center gap-2  flex rounded-full transition-all">
                      <IoTimeSharp className="shadow-lg  text-lg bg-red-600 rounded-lg"></IoTimeSharp>
                      {topPost.author.published_date}
                    </Link>
                  </h1>
                </div>
              </div>)
            }
          </div>
        </div>
      </footer>
      <div className="text-center py-4 text-gray-300 border-t border-gray-800 ">
        <p>Copyright © 2022 All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
