import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import VatingOptions from "./VatingOptions";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import SkeletonLoading from "../../../Components/SkeletonLoading/SkeletonLoading";

const VatingNews = () => {
  const { user } = useContext(AuthContext);

  const {
    data: newsForVote,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["newsForVoting"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}newsForVoting`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return;
  }

  return (
    <div className="">
      <Link className="flex text-xl sm:text-2xl font-bold text-red-500 transition-all gap-2">
        ONLINE VOTING
        <span>
          <BsArrowUpRightSquareFill className="text-red-600 mt-1" />
        </span>
      </Link>
      <div className="mt-5 border bg-cyan-100">
        <Splide
          aria-label=""
          options={{
            autoplay: true,
            rewind: true,
            arrows: false,
            pagination: false,
            speed: "2000",
          }}
        >
          {isLoading && <SkeletonLoading cards={8} />}
          {newsForVote?.map((voteNews) => (
            <SplideSlide className="px-1" key={voteNews._id}>
              <div className="m-5">
                <img
                  className="h-52 w-full object-cover"
                  src={voteNews.picture}
                  alt=""
                />
                <p className="text-gray-600">
                  {voteNews?.description?.slice(0, 220)}
                </p>
              </div>

              <div className="">
                <VatingOptions refetch={refetch} user={user} news={voteNews} />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default VatingNews;
