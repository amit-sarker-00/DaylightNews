import React, { useEffect, useState } from "react";
import VoicesCard from "./VoicesCard";

const Voices = () =>
{
  const [ Voices, setVoices ] = useState([]);
  useEffect(() =>
  {
    fetch(`${ process.env.REACT_APP_API_URL }news`)
      .then((res) => res.json())
      .then((result) =>
      {
        const voicesNews = result.filter(voice => voice.category === 'voices')
        setVoices(voicesNews?.slice(-6));
      });
  }, []);


  return (
    <div className=" py-7">
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
          {Voices?.map((Voice) => (
            <VoicesCard key={Voice?._id} VoiceNews={Voice} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Voices;
