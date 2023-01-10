import React from "react";
import { HiChevronDoubleRight, HiEnvelope, HiHome, HiPhone, IconName } from "react-icons/hi2";
import { IoLogoFacebook, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin, IoLogoSkype, IoLogoTwitter, IoTimeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import car1 from '../../assest/Footer img/car 2.jfif'
import car2 from '../../assest/Footer img/car 3.jfif'
import car3 from '../../assest/Footer img/car 4.jfif'

const Footer = () => {
  return (
    <div className="bg-black pb-8 w-full">
      <footer className="footer p-10   text-base-content">
        {/* ---------------------about us --------------------  */}
        <div>
          <span className=" font-bold text-lg text-white pb-6">ABOUT US</span>
          <div className="">
            <h2>Lorem Ipsum is simply dummy text of the  printing and typesetting industry.<br /> Lorem Ipsum  has been the industry's standard  dummy text since has five...</h2>
            <p className="link link-hover flex  items-center gap-2 py-3 mt-5">
              <HiHome className="text-lg text-red-600"></HiHome>
              15 Cliff St, New York NY 10038, USA
            </p>
            <p className="link link-hover flex  items-center gap-2 ">
              <HiPhone className=" text-lg text-red-600"></HiPhone>
              +91 234 567 8765
            </p>
            <p className="link link-hover flex  items-center gap-2 py-3">
              <HiEnvelope className="text-lg text-red-600"></HiEnvelope>
              mail@example.com
            </p>
            <div className="flex gap-3 py-2">
              <span className="rounded-full bg-red-600 p-2 hover:bg-white text-white hover:text-red-600 "><IoLogoFacebook className=" sm:text-xl text-lg " ></IoLogoFacebook></span>
              <span className="rounded-full bg-red-600 p-2 hover:bg-white text-white hover:text-red-600"><IoLogoTwitter className="sm:text-xl text-lg "></IoLogoTwitter></span>
              <span className="rounded-full bg-red-600 p-2 hover:bg-white text-white hover:text-red-600"><IoLogoGoogle className="sm:text-xl text-lg  " ></IoLogoGoogle>  </span>
              <span className="rounded-full bg-red-600 p-2 hover:bg-white text-white hover:text-red-600"><IoLogoLinkedin className="sm:text-xl text-lg   "></IoLogoLinkedin> </span>
              <span className="rounded-full bg-red-600 p-2 hover:bg-white text-white hover:text-red-600"><IoLogoInstagram className="sm:text-xl text-lg  "></IoLogoInstagram></span>
              <span className="rounded-full bg-red-600 p-2 hover:bg-white text-white hover:text-red-600"> <IoLogoSkype className="sm:text-xl text-lg"></IoLogoSkype></span>
            </div>
          </div>
        </div>
        {/*  ------------------------------------ popular CATEGORIES--------------------------*/}
        <div>
          <span className="font-bold text-lg text-white pb-6">POPULAR CATEGORIES</span>
          <div >
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
          <span className="font-bold text-lg text-white pb-6">POPULAR POST</span>
          <div className="">
            <div className="flex gap-3 p-2">
              <img src={car1} alt="" className="w-16 rounded-lg" />
              <div>
                <p>Santino loganne legan <br /> an year old resident...</p>
                <p className="flex items-center gap-2 p-2">
                  <span className="  rounded-full"><IoTimeSharp className="shadow-lg  text-lg bg-red-600 text-white rounded-lg"></IoTimeSharp></span>
                  <p className="">25 jan 2022</p>
                </p>
              </div>
            </div>
            <div className="flex gap-3 px-2">
              <img src={car2} alt="" className="w-16 rounded-lg" />
              <div>
                <p>Santino loganne legan <br /> an year old resident...</p>
                <p className="flex items-center gap-2 p-2">
                  <span className="  rounded-full"><IoTimeSharp className="shadow-lg  text-lg bg-red-600 text-white rounded-lg"></IoTimeSharp></span>
                  <p className="">25 jan 2022</p>
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-2">
              <img src={car3} alt="" className="w-16 rounded-lg" />
              <div>
                <p>Santino loganne legan <br /> an year old resident...</p>
                <p className="flex items-center gap-2 p-2">
                  <span className="  rounded-full"><IoTimeSharp className="shadow-lg  text-lg bg-red-600 text-white rounded-lg"></IoTimeSharp></span>
                  <p className="">25 jan 2022</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-white">
        <p>Copyright © 2022 All Rights Reserved.</p>
      </div>

    </div>
  );
};

export default Footer;
