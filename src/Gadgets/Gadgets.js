import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { RxCalendar } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import "./gadgets.css"

const Gadgets = () => {
    const [gedgets, setGedgets]= useState([])

    useEffect(()=>{
        fetch('gedgets.json')
        .then((res) =>res.json())
        .then((result) =>setGedgets(result))
    },[])
    

    return (
        <div className="max-w-[1440px] mx-auto ">
            <div >
                {gedgets.map((banner) => (
                    <Link to={`/detail/${banner._id}`} key={banner._id}>
                        <div className=" h-full border-2  rounded-t-lg  relative overflow-hidden my-8  gradient1">
                            <img
                                className="h-[100%] w-[100%] ease-in-out duration-500 transform hover:scale-125  "
                                src={banner.picture}
                                alt=""
                            />
                            <div className=" absolute bottom-2 sm:pl-8 pl-3 text-cyan-500  z-40">
                                <div className="  ">
                                    <Link to={`/category/${banner?.category}`} className="font-bold sm:text-lg text-sm  sm:px-8  sm:py-2 py-1 mb-2 px-2 bg-red-600 hover:bg-red-700 rounded-md text-white">
                                        {banner?.category}
                                    </Link>

                                    <h3 className="lg:text-4xl md:text-xl text-md font-semibold italic mt-3 sm:p-4 p-0 sm:w-2/3 w-full rounded-lg text-white hover:underline  hero-overlay">
                                        {banner?.title?.length > 100 ? banner?.title.slice(0, 100) + "..." : banner?.title}
                                    </h3>
                                    <div className="flex  items-center mt-3 text-xs flex-wrap">
                                        <div className="flex items-center gap-1 font-bold py-1   px-1 rounded-md  ">
                                            <img
                                                className="sm:w-10 w-6 sm:h-10 h-6 rounded-md"
                                                src={banner?.author?.author_img}
                                                alt=""
                                            />
                                            
                                        </div>
                                        <div className=" items-center  font-semibold sm:text-lg text-sm rounded-md py-2  sm:px-4 px-2 text-white">
                                            <p>{banner?.author?.name}</p>
                                            <div className='flex items-center gap-1'>
                                                <RxCalendar className="text-white"></RxCalendar>
                                                <button>{banner?.author?.published_date}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default Gadgets;