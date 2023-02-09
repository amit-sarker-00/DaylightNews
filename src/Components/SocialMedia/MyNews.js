import React, { useContext, useEffect, useState } from "react";
import { FaRegComment, FaShare } from "react-icons/fa";
import { MdOutlineAddReaction } from "react-icons/md";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyNews = () => {
  const { user } = useContext(AuthContext);
  const [socialNews, setSocialNews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/socialNews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSocialNews(data));
  }, [user?.email]);
  // const myNews = socialNews.filter(socialNews.email === user?.email);
  return (
    <div>
      <div>
        <h1 className="sm:text-3xl text-xl  text-red-500 font-bold text-center my-4">
          My Social News
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {socialNews?.map((news) => (
          <div
            key={news._id}
            className="w-full  max-w-lg mx-auto rounded overflow-hidden border shadow-sm m-4"
          >
            <div className="px-6 py-4">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://i.ibb.co/N2NPBn1/photo-1633332755192-727a05c4013d.jpg"
                  alt=""
                />
                <div className="text-sm">
                  <p className="text-gray-900 font-semibold leading-none">
                    {news.name}
                  </p>
                  <p className="text-gray-600">Date</p>
                </div>
              </div>
              <img className="w-full h-64 mt-4" src={news?.image} alt="" />
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">{news.title}</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  fugit corporis ex praesentium iure. Illum esse deserunt
                  tempora dolor quasi.
                </p>
              </div>
              <div className="px-6 py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  <MdOutlineAddReaction></MdOutlineAddReaction>
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  <FaRegComment></FaRegComment>
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  <FaShare></FaShare>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNews;
