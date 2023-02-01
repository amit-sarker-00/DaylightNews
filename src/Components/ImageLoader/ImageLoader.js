import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "./image.css";
const ImageLoader = ({ cards }) => {
  // please install first--- npm i react-loading-skeleton
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div key={i} className="card-skeleton">
        <div className="top-col">
          <Skeleton width={130} height={10} count={6} />
        </div>
        <div className="bottom-col">
          <Skeleton count={1} />
        </div>
      </div>
    ));
};

export default ImageLoader;
