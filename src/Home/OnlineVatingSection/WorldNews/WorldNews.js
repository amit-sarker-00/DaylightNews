import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import SingleCard from "./SigleCard/SingleCard";
import RightSide4Card from "./RightSide4Card/RightSide4Card";
import HorizentalSection from "./HorizentaSection/HorizentalSection";
import SkeletonLoading from "../../../Components/SkeletonLoading/SkeletonLoading";
import { useQuery } from "@tanstack/react-query";

const WorldNews = () =>
{
  const { data: worldNews, isLoading } = useQuery({
    queryKey: [ 'worldNews' ],
    queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }worldNews`)
      .then((res) => res.json())
  })

  return (
    <div className="mb-10">
      <Link to={`/category/${ 'World' }`} className="flex  text-xl sm:text-2xl font-bold gap-2 text-red-500 transition-all">
        WORLD{" "}
        <span>
          <BsArrowUpRightSquareFill className="text-red-600 mt-1" />
        </span>
      </Link>

      <div className="flex xl:flex-row flex-col items-center lg:items-start bg-r">
        <div className="mt-5 w-full lg:w-[800px] ">
          {isLoading && <SkeletonLoading cards={1} />}

          {worldNews &&
            worldNews
              ?.slice(0, 1)
              .map((data) => <SingleCard data={data} key={data?._id} />)}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {isLoading && <SkeletonLoading cards={3} />}
            {worldNews &&
              worldNews
                ?.slice(-3)
                .map((data) => (
                  <HorizentalSection data={data} key={data?._id} />
                ))}
          </div>
        </div>
        <div className="mt-5 w-[100%] xl:w-96 xl:flex flex-col md:grid md:grid-cols-2 xl:gap-0 gap-4  ">
          {isLoading && <SkeletonLoading cards={2} />}

          {worldNews &&
            worldNews
              ?.slice(1, 5)
              .map((data) => <RightSide4Card data={data} key={data?._id} />)}
        </div>
      </div>
    </div>
  );
};

export default WorldNews;
