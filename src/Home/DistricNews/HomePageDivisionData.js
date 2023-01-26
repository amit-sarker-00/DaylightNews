import React, { useEffect } from "react";
import { useState } from "react";
import DistricModal from "./DistricModal";
import DivisionHorizontalData from "./DivisionHorizontalData ";
import DivisionTitleData from "./DivisionTitleData ";
import HomePageDivisionSingleCard from "./HomePageDivisionSingleCard ";

const HomePageDivisionData = () => {
  const [datas, setDatas] = useState([]);
  const [city, setCity] = useState({});
  const [districtData, setDistrictData] = useState([]);
  const [preData, setPreData] = useState([]);
  const [dis, setDis] = useState("off");

  console.log(city?.district);

  useEffect(() => {
    fetch(`http://localhost:8000/news`)
      .then((res) => res.json())
      .then((result) => {
        setDatas(result);
      });
  }, []);

  //unique district
  const uniqueDistrict = [...new Set(datas?.map((data) => data?.district))];
  // console.log(uniqueDistrict);

  // confirm button click and set city
  const handleUpdateDistrict = (e) => {
    e.preventDefault();
    const form = e.target;
    const radio = document.querySelectorAll("input[type=radio]:checked");
    const district = radio[0]?.id;
    console.log(district);
    const isDefault = radio[1]?.id;
    if (isDefault) {
      localStorage.setItem("city", JSON.stringify({ district: district }));
    }

    setCity({ district: district });
    fetch(
      `http://localhost:8000/district/${
        city?.district ? city?.district : "Dhaka"
      }`
    )
      .then((res) => res.json())
      .then((result) => {
        setDistrictData(result);
        form.reset();
        setDis("off");
      });
  };
  useEffect(() => {
    fetch(
      `http://localhost:8000/district/Dhaka
      `
    )
      .then((res) => res.json())
      .then((result) => {
        setPreData(result);
      });
  }, [city?.district]);

  console.log(preData);

  return (
    <div>
      <div className="flex  flex-col-reverse xl:flex-row">
        <div className="w-full xl:w-[1400px]">
          <h1 className="text-2xl font-bold ">Division </h1>
          <div className="flex flex-col lg:flex-row ">
            <div>
              {city?.district ? (
                <>
                  {districtData?.slice(1, 2)?.map((data) => (
                    <HomePageDivisionSingleCard data={data} key={data?._id} />
                  ))}
                </>
              ) : (
                <>
                  {preData.slice(1, 2).map((data) => (
                    <HomePageDivisionSingleCard data={data} key={data?._id} />
                  ))}
                </>
              )}
            </div>
            <div className="p-5 ">
              {city?.district ? (
                <>
                  {districtData?.slice(0, 6).map((data) => (
                    <DivisionTitleData data={data} key={data?._id} />
                  ))}
                </>
              ) : (
                <>
                  {preData?.slice(0, 6).map((data) => (
                    <DivisionTitleData data={data} key={data?._id} />
                  ))}
                </>
              )}
            </div>
          </div>
          <div className=" gap-5 pb-5 grid grid-flow-cols-1 md:grid-cols-2 sm-flex xl:grid-cols-4 lg:grid-cols-3">
            {datas &&
              datas
                ?.slice(1, 5)
                ?.map((data) => (
                  <DivisionHorizontalData data={data} key={data?._id} />
                ))}
          </div>
        </div>
        <div className="w-full sm:w-[800px]  mx-auto xl:w-[300px] ">
          <h1 className="text-2xl font-bold text-center">Division Category</h1>
          <div className="pl-5 py-4">
            <label htmlFor="update-modal" className="text-xl">
              {city?.district ? city?.district : "Dhaka"} || Change City
            </label>
          </div>
          <div className="p-2 ">
            <img
              className="rounded-lg  w-[300px] h-[400px] sm:w-[800px]  mx-auto xl:w-[300px] xl:h-[450px]"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mtn-data-bundle-advert-design-template-086b970e7957e55a44ea4f181feb5a4b_screen.jpg?ts=1637022062"
              alt=""
            />
          </div>
        </div>
      </div>
      <DistricModal
        handleUpdateDistrict={handleUpdateDistrict}
        uniqueDistrict={uniqueDistrict.splice(1)}
        setCity={setCity}
        city={city}
        dis={dis}
        setDis={setDis}
      />
    </div>
  );
};

export default HomePageDivisionData;
