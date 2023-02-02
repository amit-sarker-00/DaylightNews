import React, { useEffect, useState } from "react";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import NewsSectionJustOneItemShow from "./NewsSectionJustOneItemshow/NewsSectionJustOneItemShow";
import TravelCards from "./TravelCards/TravelCards";

const News = () => {
  const [techNews, setTechNews] = useState([]);
  const [lifeStyle, setLifeStyle] = useState([]);
  const [cultureshNews, setCulturesNews] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news`)
      .then((res) => res.json())
      .then((result) => {
        const techNews = result?.filter((tech) => tech?.category === "entertainment");
        setTechNews(techNews?.slice(-4));
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news`)
      .then((res) => res.json())
      .then((result) => {
        const lifeStyles = result?.filter(
          (lifeStyles) => lifeStyles?.category === "lifeStyle"
        );
        setLifeStyle(lifeStyles?.slice(-4));
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news`)
      .then((res) => res.json())
      .then((result) => {
        const cultures = result?.filter(
          (cultures) => cultures?.category === "cultures"
        );
        setCulturesNews(cultures?.slice(-4));
      });
  }, []);

  return (
    <div className="mx-auto mb-12">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        <div className="">
          <div className=" border-b-2 border-dashed">
            <button className="bg-red-500 text-white rounded-t-xl py-2 px-5 ">
              {" "}
              Technology{" "}
            </button>
          </div>
          {techNews?.length === 0 && <SkeletonLoading cards={1} />}

          {techNews?.slice(0, 1).map((travel) => (
            <NewsSectionJustOneItemShow
              key={travel._id}
              data={travel}
            ></NewsSectionJustOneItemShow>
          ))}

          {techNews.map((travel) => (
            <TravelCards key={travel._id} data={travel}></TravelCards>
          ))}
        </div>
        <div>
          <div className=" border-b-2 border-dashed">
            <button className="bg-cyan-400 text-white rounded-t-xl py-2 px-5 ">
              Life Style
            </button>
          </div>
          {lifeStyle?.length === 0 && <SkeletonLoading cards={1} />}

          {lifeStyle?.slice(0, 1).map((travel) => (
            <NewsSectionJustOneItemShow
              key={travel._id}
              data={travel}
            ></NewsSectionJustOneItemShow>
          ))}

          {lifeStyle.map((life) => (
            <TravelCards key={life._id} data={life}></TravelCards>
          ))}
        </div>
        <div>
          <div className=" border-b-2 border-dashed">
            <button className="bg-black text-white rounded-t-xl py-2 px-5 ">
              Cultures
            </button>
          </div>
          {cultureshNews?.length === 0 && <SkeletonLoading cards={1} />}

          {cultureshNews?.slice(0, 1).map((travel) => (
            <NewsSectionJustOneItemShow
              key={travel._id}
              data={travel}
            ></NewsSectionJustOneItemShow>
          ))}
          {cultureshNews.map((health) => (
            <TravelCards key={health._id} data={health}></TravelCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
