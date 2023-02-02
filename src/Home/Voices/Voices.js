import { useQuery } from "@tanstack/react-query";
import React from "react";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import VoicesCard from "./VoicesCard";

const Voices = () =>
{
  const { data: voicesNews, isLoading } = useQuery({
    queryKey: [ 'voicesNews' ],
    queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }voicesNews`)
      .then((res) => res.json())
  })


  return (
    <div className=" py-7 mb-8">
      <div>
        <h1 className=" font-bold text-xl text-red-600  sm:text-2xl text-black-500 mb-5">
          Voices News
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        <div className="">
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
              </a>
              <div className="p-2">
                <h5 className="text-gray-900 text-xl font-medium mb-2">The enduring message my grandfather took</h5>
                <p className="text-gray-700 text-base text-justify mb-4">
                  Air pollution control devices are a series of devices that work to prevent a variety of different pollutants, both gaseous and solid, from entering the atmosphere primarily out of industrial
                </p>

              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5">
          {isLoading && <SkeletonLoading />}
          {voicesNews?.slice(0, 6).map((Voice) => (
            <VoicesCard key={Voice?._id} VoiceNews={Voice} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Voices;
