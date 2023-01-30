import React from "react";
import { Link } from "react-router-dom";

const DivisionHorizontalData = ({ data }) =>
{
  const { description, author, category, picture, title, _id } = data;
  return (
    <Link to={`/detail/${ _id }`} className="w-full ">
      <img className="md:full w-full md:h-[175px] object-cover" src={picture} alt="" />
      <h1 className="bg-slate-800 rounded-b-lg text-white p-2 text-sm">
        {title.slice(0, 30) + "..."}
      </h1>
    </Link>
  );
};

export default DivisionHorizontalData;
