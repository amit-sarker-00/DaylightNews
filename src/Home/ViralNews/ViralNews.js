import React, { useEffect, useState } from "react";
import
{
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { RxCalendar } from "react-icons/rx";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const ViralNews = () =>
{
  const [ viralNews, setviralNews ] = useState([]);
  useEffect(() =>
  {
    fetch(`${ process.env.REACT_APP_API_URL }news`)
      .then((res) => res.json())
      .then((data) =>
      {
        const viralNews = data.filter(viral => viral.category === 'viral')
        setviralNews(viralNews)
      });
  }, []);
  console.log(viralNews);
  return (
    <div className="mb-4 sm:my-10 md:my-16">
      <div className="font-bold text-xl sm:text-2xl text-red-500 my-3">
        <h1>VIRAL NEWS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div>
          <div className="font-bold border text-red-500 text-center py-1">
            <h1>MOST POPULAR</h1>
          </div>
          <div>
            {viralNews?.slice(0, 4).map((viral) => (
              <Link
                to={`/detail/${ viral?._id }`}
                key={viral?._id}
                className=" h-full w-full  "
              >
                <div className="flex w-full border h-full items-center">
                  <div className="overflow-hidden  h-32 w-44">
                    <img
                      className=" h-full w-full ease-in-out duration-500 transform hover:scale-125 object-cover"
                      src={viral?.picture}
                      alt=""
                    />
                  </div>
                  <div className="mx-2 w-72 h-32">
                    <h4 className="font-semibold text-red-400">{viral?.name}</h4>
                    <h3 className="sm:text-md link-hover hover:text-red-500 text-md font-bold mb-1">
                      {viral?.title}
                    </h3>
                    <p className="text-gray-500">
                      {viral?.description?.slice(0, 45) + "..."}
                    </p>
                    <div className="flex gap-2 items-center font-bold text-gray-400">
                      <RxCalendar></RxCalendar>
                      <p className=" font-bold text-gray-400">
                        {viral?.author?.published_date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <div className="font-bold border text-red-500 text-center py-1">
            <h1>TALKED ABOUT</h1>
          </div>
          <div>
            {viralNews?.slice(4, 8).map((viral) => (
              <Link
                to={`/detail/${ viral?._id }`}
                key={viral?._id}
                className=" h-full w-full  "
              >
                <div className="flex w-full border h-full items-center">
                  <div className="overflow-hidden  h-32 w-44">
                    <img
                      className=" h-full w-full ease-in-out duration-500 transform hover:scale-125 object-cover"
                      src={viral?.picture}
                      alt=""
                    />
                  </div>
                  <div className="mx-2 w-72 h-32">
                    <h4 className="font-semibold text-red-400">{viral?.name}</h4>
                    <h3 className="sm:text-md link-hover hover:text-red-500 text-md font-bold mb-1">
                      {viral?.title}
                    </h3>
                    <p className="text-gray-500">
                      {viral?.description?.slice(0, 45) + "..."}
                    </p>
                    <div className="flex gap-2 items-center font-bold text-gray-400">
                      <RxCalendar></RxCalendar>
                      <p className=" font-bold text-gray-400">
                        {viral?.author.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <div className="font-bold border text-red-500 text-center py-1">
            <h1>VIDEO OF THE DAY</h1>
          </div>
          <div className="h-[50%] mb-6 border">
            <iframe
              className=""
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ULIJrqzwMIY"
              title=" video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}

            ></iframe>
          </div>
          <div>
            <div className="text-center py-3  font-bold border-2 mb-3">
              <h1>JOIN US</h1>
            </div>
            <div>
              <ul className="flex items-center gap-5 justify-center">
                <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white border">
                  <FaGithub className="text-xl"></FaGithub>
                </li>
                <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white border">
                  <BsFacebook className="text-lg"></BsFacebook>
                </li>
                <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white border">
                  <FaTwitter className="text-lg"></FaTwitter>
                </li>
                <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white border">
                  <FaInstagram className="text-lg"></FaInstagram>
                </li>
                <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white border">
                  <FaLinkedin className="text-lg"></FaLinkedin>
                </li>
                <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white border">
                  <FaYoutube className="text-lg"></FaYoutube>
                </li>
                <li className="bg-white rounded-full hover:bg-red-500 transition-all p-2 hover:text-white border">
                  <FaWhatsapp className="text-lg"></FaWhatsapp>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ViralNews;
