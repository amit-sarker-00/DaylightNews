import { useQuery } from "@tanstack/react-query";
import React from "react";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import EnvironmentNewsCard from "./EnvironmentNewsCard";

<<<<<<< HEAD
const EnvironmentNews = () => {
  const [environments, setEnvironments] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news`)
      .then((res) => res.json())
      .then((result) => {
        const environmentNews = result.filter(environment => environment.category === 'EnvironmentNews')
        setEnvironments(environmentNews?.slice(-6));
      });
  }, []);
=======
const EnvironmentNews = () =>
{
  const { data: environmentNews, isLoading } = useQuery({
    queryKey: [ 'environmentNews' ],
    queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }environmentNews`)
      .then((res) => res.json())
  })
>>>>>>> 1526a4fa885aa644356d9e2880ca0501334980f3

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
