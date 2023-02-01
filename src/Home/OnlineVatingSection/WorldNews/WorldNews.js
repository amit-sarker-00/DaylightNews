import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import SingleCard from "./SigleCard/SingleCard";
import RightSide4Card from "./RightSide4Card/RightSide4Card";
import HorizentalSection from "./HorizentaSection/HorizentalSection";
import SkeletonLoading from "../../../Components/SkeletonLoading/SkeletonLoading";

const WorldNews = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news`)
      .then((res) => res.json())
      .then((result) => {
        const WorldNews = result?.filter(
          (world) => world?.category === "World"
        );
        setDatas(WorldNews);
      });
  }, []);

  return (
    <div>
      <Link className="flex  text-xl sm:text-2xl font-bold gap-2 text-red-500 transition-all">
        WORLD{" "}
        <span>
          <BsArrowUpRightSquareFill className="text-red-600 mt-1" />
        </span>
      </Link>

      <div className="flex xl:flex-row flex-col items-center lg:items-start bg-r">
        <div className="mt-5 w-full lg:w-[800px] ">
          {datas?.length === 0 && <SkeletonLoading cards={1} />}

          {datas &&
            datas
              ?.slice(0, 1)
              .map((data) => <SingleCard data={data} key={data?._id} />)}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {datas?.length === 0 && <SkeletonLoading cards={3} />}
            {datas &&
              datas
                ?.slice(-3)
                .map((data) => (
                  <HorizentalSection data={data} key={data?._id} />
                ))}
          </div>
        </div>
        <div className="mt-5 w-[100%] xl:w-96 xl:flex flex-col md:grid md:grid-cols-2 xl:gap-0 gap-4  ">
          {datas?.length === 0 && <SkeletonLoading cards={2} />}

          {datas &&
            datas
              ?.slice(1, 5)
              .map((data) => <RightSide4Card data={data} key={data?._id} />)}
        </div>
      </div>
    </div>
  );
};

export default WorldNews;
