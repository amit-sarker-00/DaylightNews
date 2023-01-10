import React, { useEffect, useState } from "react";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Category = () => {
  const [News, setNews] = useState([]);
  useEffect(() => {
    fetch("NewsData.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  // console.log(News);

  // all category in news
  const allCategory = News.map((news) => news.category);
  // console.log(allCategory);
  // unique category
  const uniqueCategory = [...new Set(allCategory)];
  // console.log(uniqueCategory);
  return (
    <div className="flex gap-6">
      {uniqueCategory.map((category, uxi) => (
        <Link key={uxi} to={`/category/${category}`}>
          <p>{category}</p>
        </Link>
      ))}
    </div>
  );
};

export default Category;
