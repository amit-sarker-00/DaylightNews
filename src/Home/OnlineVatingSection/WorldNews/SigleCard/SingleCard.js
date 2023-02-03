import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) =>
{
  // console.log(data)
  const { description, picture, title, _id } = data;
  return (
    <div className=" transition-all hover:text-red-600 ">
      <Link to={`/detail/${ _id }`} className="">
        <img className="  w-full" src={picture} alt="" />
        <h1 className="text-2xl link-hover font-bold py-1">
          {title}
        </h1>
        <p className="text-gray-600 pb-4">{description?.slice(0, 300)}</p>
      </Link>
    </div>
  );
};

export default SingleCard;
