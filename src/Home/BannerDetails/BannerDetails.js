import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BannerDetails = () => {
  const params = useParams();
  const { id } = params;

  // useEffect(() => {
  //   fetch(`mainBanner.json/${params._id}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, [params._id]);
  return (
    <div>
      <h1 className="text-2xl text-center">Details of banner {id}</h1>
    </div>
  );
};

export default BannerDetails;
