import React, { useEffect, useState } from "react";
import { RxCalendar } from "react-icons/rx";

const VideoSection = () =>
{
  const [ VideoPost, setVideoPost ] = useState([]);
  useEffect(() =>
  {
    fetch("videosection.json")
      .then((res) => res.json())
      .then((data) => setVideoPost(data));
  }, []);
  return (
    <div className="mb-4 sm:my-10 md:my-16">
      <div className="font-bold text-xl sm:text-2xl text-red-500 my-3">
        <h1>VIDEO POST NEWS</h1>
      </div>
      <div className="lg:flex  justify-between gap-4 ">
        <div>
          {VideoPost?.slice(0, 2).map((video) => (
            <div className="" key={video._id}>
              <div className="mb-4 ">
                <div className="h-72 ">
                  <iframe
                    className="rounded-2xl"
                    width="100%"
                    height="100%"
                    src={video.video}
                    title=" video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}

                  ></iframe>
                </div>
                <div className="mt-3">
                  <div className="flex gap-4">
                    <div>
                      <p className=" rounded-sm font-bold px-1 bg-red-200">
                        {video.type}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center font-bold text-gray-400">
                      <RxCalendar></RxCalendar>
                      <p className=" font-bold text-gray-400">
                        {video.author.date}
                      </p>
                    </div>
                  </div>
                  <h1 className="sm:text-md link-hover text-md font-bold mb-1">
                    {video.title}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="  w-full lg:w-[50%]">
          {VideoPost?.slice(2, 3).map((video) => (
            <div key={video._id} className="  h-full">
              <div className="h-[100%]">
                <div className="lg:h-[650px] h-[300px] mb-3">
                  <iframe
                    className="rounded-2xl"
                    width="100%"
                    height="100%"
                    src={video.video}
                    title=" video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}

                  ></iframe>
                </div>
                <div className="mt-3">
                  <div className="flex gap-4">
                    <div>
                      <p className=" rounded-sm font-bold px-1 bg-red-200">
                        {video.type}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center font-bold text-gray-400">
                      <RxCalendar></RxCalendar>
                      <p className=" font-bold text-gray-400">
                        {video.author.date}
                      </p>
                    </div>
                  </div>
                  <h1 className="sm:text-md link-hover text-md font-bold mb-1">
                    {video.title}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {VideoPost?.slice(3, 5).map((video) => (
            <div key={video._id} className=" ">
              <div className="mb-4 ">
                <div className="h-72">
                  <iframe
                    className="rounded-2xl"
                    width="100%"
                    height="100%"
                    src={video.video}
                    title=" video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}

                  ></iframe>
                </div>
                <div className="mt-3">
                  <div className="flex gap-4">
                    <div>
                      <p className=" rounded-sm font-bold px-1 bg-red-200">
                        {video.type}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center font-bold text-gray-400">
                      <RxCalendar></RxCalendar>
                      <p className=" font-bold text-gray-400">
                        {video.author.date}
                      </p>
                    </div>
                  </div>
                  <h1 className="sm:text-md link-hover text-md font-bold mb-1">
                    {video.title}
                  </h1>
                </div>
              </div>
            </div>
          ))
          }
        </div >
      </div >
    </div >
  );
};

export default VideoSection;
