import React from "react";
import { useParams } from "react-router-dom";

const BannerDetails = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1 className="text-2xl text-center">Details of banner {id}</h1>
    </div>
  );
};

export default BannerDetails;
