import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DistricModal from "./DistricModal";
import DivisionHorizontalData from "./DivisionHorizontalData ";
import DivisionTitleData from "./DivisionTitleData ";
import HomePageDivisionSingleCard from "./HomePageDivisionSingleCard ";

const HomePageDivisionData = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("district.json")
      .then((res) => res.json())
      .then((result) => {
        setDatas(result);
      });
  }, []);
  console.log(datas);
  return (
    <div>
      <div className="flex  flex-col-reverse xl:flex-row">
        <div className="w-full xl:w-[1400px]">
          <h1 className="text-2xl font-bold ">Division </h1>
          <div className="flex flex-col lg:flex-row ">
            <div>
              {datas &&
                datas
                  ?.slice(1, 2)
                  .map((data) => (
                    <HomePageDivisionSingleCard data={data} key={data?._id} />
                  ))}
            </div>
            <div className="p-5 ">
              {datas &&
                datas
                  ?.slice(0, 6)
                  ?.map((data) => (
                    <DivisionTitleData data={data} key={data?._id} />
                  ))}
            </div>
          </div>
          <div className=" gap-5 pb-5 grid grid-flow-cols-1 md:grid-cols-2 sm-flex xl:grid-cols-4 lg:grid-cols-3">
            {datas &&
              datas
                ?.slice(1, 5)
                .map((data) => (
                  <DivisionHorizontalData data={data} key={data?._id} />
                ))}
          </div>
        </div>
        <div className="w-full sm:w-[800px]  mx-auto xl:w-[300px] ">
          <h1 className="text-2xl font-bold text-center">Division Category</h1>
          <div className="pl-5 py-4">
            <Link className="">Division</Link>
          </div>
          <div className="p-2 ">
            <img
              className="rounded-lg  w-full sm:w-[800px]  mx-auto xl:w-[300px] xl:h-[450px]"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mtn-data-bundle-advert-design-template-086b970e7957e55a44ea4f181feb5a4b_screen.jpg?ts=1637022062"
              alt=""
            />
          </div>
        </div>
      </div>
      <DistricModal />
    </div>
  );
};

export default HomePageDivisionData;
