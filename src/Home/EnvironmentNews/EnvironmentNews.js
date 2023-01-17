import React, { useEffect, useState } from "react";
import EnvironmentNewsCard from "./EnvironmentNewsCard";

const EnvironmentNews = () => {
  const [environments, setEnvironments] = useState([]);
  useEffect(() => {
    fetch("EnvironmentNews.json")
      .then((res) => res.json())
      .then((result) => {
        setEnvironments(result);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500 mb-5">
          The Latest Environment News
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5">
        {environments?.map((environment) => (
          <EnvironmentNewsCard key={environment?.id} EnvNews={environment} />
        ))}
      </div>
    </div>
  );
};

export default EnvironmentNews;
