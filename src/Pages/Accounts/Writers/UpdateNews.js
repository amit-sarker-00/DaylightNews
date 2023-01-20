import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteNews, getNews } from "../../../api/services";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import UpdateNewsCart from "./UpdateNewsCart";
import UpdateNewsForm from "./UpdateNewsForm";
const UpdateNews = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [singleNews, setUpdateNews] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(!loading);
        setCategories(data);
      });
  }, [loading]);
  
  // news by weriter email
  const newsByWriter = news.filter((news) => news.email === user?.email);
  // console.log(newsByWriter);
  const handleUpdateProduct = (signleNews) => {
    setUpdateNews(signleNews);
  };

  const allCategory = categories.map((news) => news.category);
  // unique category
  const uniqueCategory = [...new Set(allCategory)];

  const handleDelet = (id) => {
    deleteNews(id);
    toast.success("News Deleted Successfully");
  };
  return (
    <div>
      {newsByWriter &&
        Array.isArray(newsByWriter) &&
        newsByWriter.length > 0 ? (
        <div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:px-3 md:px-3  px-10">
            {newsByWriter.map((news) => (
              <UpdateNewsCart
                news={news}
                key={news._id}
                handleUpdateProduct={handleUpdateProduct}
                handleDelet={handleDelet}
              />
            ))}
          </div>
          <UpdateNewsForm
            loading={loading}
            news={singleNews}
            uniqueCategory={uniqueCategory}
          />
        </div>
      ) : (
        <div className="text-center text-3xl py-5 ">
          <h1>
            You have no News .Please
            <Link to="/account/addnews" className="text-[#3BB77E]">
              Add News .
            </Link>
          </h1>
          <img
            src="https://www.shutterstock.com/image-illustration/folded-newspaper-blank-background-news-260nw-1611489070.jpg"
            alt=".."
          />
        </div>
      )}
    </div>
  );
};

export default UpdateNews;
