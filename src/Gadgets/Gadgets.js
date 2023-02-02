import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { RxCalendar } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import "./gadgets.css"

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        fetch('gedgets.json')
            .then((res) => res.json())
            .then((result) => setGadgets(result))
    }, [])


    return (
        <div className="max-w-[1440px] mx-auto ">
            <div >
                {gadgets.map((banner) => (
                    <Link to={`/detail/${banner._id}`}>
                        <div className=" h-full border-2  rounded-t-lg  relative overflow-hidden my-8  gradient1">
                            <img
                                className="h-[100%] w-[100%] ease-in-out duration-500 transform hover:scale-125  "
                                src={banner.picture}
                                alt=""
                            />
                            <Link className=" absolute top-4 left-5  font-semibold sm:text-xl text-sm  sm:px-8  sm:py-2 py-1 mb-2 px-4 bg-red-600 hover:bg-red-700 hover:text-black translate rounded-md text-white font-mono ">
                                {banner?.productName}
                            </Link>
                            <div
                                className="  absolute bottom-2 sm:pl-8 pl-3 md:mb-8 sm:mb-4 mb-2 text-cyan-500  z-40">
                                <div
                                    className="flex flex-col justify-center">
                                    <h3
                                        className="  lg:text-4xl md:text-xl text-md font-semibold sm:space-y-4 space-y-0  mt-3 sm:py-4 p-0 sm:w-2/3 w-full rounded-lg text-white hover:underline font-sans  ">
                                        {banner?.title?.length > 80 ? banner?.title.slice(0, 80) + "..." : banner?.title}
                                    </h3>
                                    <div>
                                        <button className=' font-semibold sm:text-lg text-sm  sm:px-8  sm:py-2 py-1 mb-2 px-4 bg-red-600 hover:bg-green-700 hover:text-black translate rounded-md text-white'>Buy</button>
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