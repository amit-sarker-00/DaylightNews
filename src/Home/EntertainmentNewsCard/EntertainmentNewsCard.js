import React from 'react';
import { IconName, IoBookmark } from "react-icons/io5";
const EntertainmentNewsCard = ({ entertainment }) => {
    // console.log(entertainment);
    const { picture, title, author, position } = entertainment;

    return (
        <div className='flex justify-center p-4 hover:border hover:border-gray-200 dark:border-gray-700  '>
            <div className=" lg:w-full md:w-96 w-80 overflow-hidden text-black">
                <div className=" sm:text-left text-center">
                    <p
                        className='font-semibold text-gray-500 text-sm hover:text-red-600'>{position}
                    </p>
                    <p
                        className=' flex-wrap  sm:text-2xl text-lg font-bold py-2 hover:text-red-600'>
                        {title}
                    </p>
                </div>
                <div
                    className='flex items-center gap-2 pb-3 '>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                    <p
                        className='flex items-center gap-1 text-red-600'>
                        <IoBookmark></IoBookmark>
                        <span className='font-semibold'>{author.react_count}</span>
                    </p>
                </div>
                <img
                    src={picture}
                    className="object-cover transform ease-in-out duration-500 hover:scale-125 rounded-lg object-center w-full h-72"
                    alt="" />
            </div>
        </div>
    );
};

export default EntertainmentNewsCard;