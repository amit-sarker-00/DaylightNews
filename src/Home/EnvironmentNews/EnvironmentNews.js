import { useQuery } from "@tanstack/react-query";
import React from "react";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import EnvironmentNewsCard from "./EnvironmentNewsCard";

const EnvironmentNews = () =>
{
  const { data: environmentNews, isLoading } = useQuery({
    queryKey: [ 'environmentNews' ],
    queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }environmentNews`)
      .then((res) => res.json())
  })

  return (
    <div className="mb-16">
      <div>
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500 mb-5">
          Environment News
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5">
        {isLoading && <SkeletonLoading />}
        {environmentNews?.slice(0, 6).map((environment) => (
          <EnvironmentNewsCard key={environment?._id} EnvNews={environment} />
        ))}
      </div>
    </div>
  );
};

export default EnvironmentNews;
