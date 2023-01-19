import React from 'react';
import { HiUser, IconName } from "react-icons/hi2";
import { IoTimeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const TravelCards = ({ data }) => {
    const { title, picture, descrption, category, author } = data;
    return (

        <div className=' border-white border hover:border hover:border-red-500 ease-in-out duration-500 hover:rounded-xl transition-all'>
            <div className='flex sm:flex-row flex-col h-full items-center  rounded-xl   py-3 gap-4 '>
                <figure><img className='sm:w-32 rounded-xl p-1' src={picture} alt="Album" /></figure>
                <Link>
                    <h2 className=" font-semibold md:text-start text-black hover:text-red-500 transition-all text-center pb-2 pt-4">{title}</h2>
                    <div className="flex justify-around pb-2  ">
                        <div>
                            <p className='flex items-center gap-1 text-gray-400'><HiUser className='text-red-700 bg-gray-300 rounded-md text-lg p-px'></HiUser> {author.name}</p>
                        </div>
                        <p className='text-gray-400'>|</p>
                        <div>
                            <p className="flex items-center  gap-1">
                                <span className=" rounded-full"><IoTimeSharp className="shadow-lg  text-lg text-red-700 bg-red-200 rounded-md p-px"></IoTimeSharp></span>
                                <p className="text-gray-400">{author.published_date}</p>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <hr />
        </div>

    );
};

export default TravelCards;