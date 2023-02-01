import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  // console.log(data)
  const { author, category, description, picture, title, _id } = data;
  return (
    <div className=" transition-all">
      <img className="  w-full" src={picture} alt="" />
      <Link to={`/detail/${_id}`} className="">
        <h1 className="text-2xl hover:text-red-600 link-hover font-bold py-1">
          {title}
        </h1>
        <p className="text-gray-600 pb-4">{description?.slice(0, 300)}</p>
      </Link>
    </div>
  );
};

export default SingleCard;
