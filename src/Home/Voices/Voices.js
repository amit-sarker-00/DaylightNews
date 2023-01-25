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
    <div>
      <div>
        <h1 className=" font-bold text-xl sm:text-2xl text-black-500 mb-5">
         Voices
        </h1>
      </div>
      <div className="flex gap-5">
      <div>
      <h1 className=" font-bold text-xl sm:text-2xl text-black-500 mb-5">
         Voices imageeeeeeeeeeee
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5">
        {Voices?.map((Voice) => (
          <VoicesCard key={Voice?._id} VoiceNews={Voice} />
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default Voices;
