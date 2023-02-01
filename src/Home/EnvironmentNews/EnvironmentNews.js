import React, { useEffect, useState } from "react";
import EnvironmentNewsCard from "./EnvironmentNewsCard";

const EnvironmentNews = () =>
{
  const [ environments, setEnvironments ] = useState([]);
  useEffect(() =>
  {
    fetch(`${ process.env.REACT_APP_API_URL }news`)
      .then((res) => res.json())
      .then((result) =>
      {
        const environmentNews = result.filter(environment => environment.category === 'EnvironmentNews')
        setEnvironments(environmentNews?.slice(-6));
      });
  }, []);

  return (
    <div className="mb-16">
      <div>
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500 mb-5">
          Environment News
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5">
        {environments?.map((environment) => (
          <EnvironmentNewsCard key={environment?._id} EnvNews={environment} />
        ))}
      </div>
    </div>
  );
};

export default EnvironmentNews;
