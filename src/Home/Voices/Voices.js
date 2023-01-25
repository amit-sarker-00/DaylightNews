import React, { useEffect, useState } from "react";
import VoicesCard from "./VoicesCard";

const Voices = () => {
  const [Voices, setVoices] = useState([]);
  useEffect(() => {
    fetch("Voices.json")
      .then((res) => res.json())
      .then((result) => {
        setVoices(result);
      });
  }, []);

  return (
    <div className=" py-7">
      <div>
        <h1 className=" font-bold text-xl sm:text-2xl text-black-500 mb-5">
          Voices
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        <div className="">
          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
              </a>
              <div class="p-2">
                <h5 class="text-gray-900 text-xl font-medium mb-2">The enduring message my grandfather took</h5>
                <p class="text-gray-700 text-base text-justify mb-4">
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
