import React from 'react';
import { HiBookmark, HiChatBubbleBottomCenter, IconName } from "react-icons/hi2";

const EntertainmentNewsComment = ({ comment }) => {
    const { title, date, rating, message, image } = comment;


    return (
        <div 
        className="lg:w-96 md:w-80 w-60 mx-auto shadow-b-lg hover:border hover:border-red-600 mt-4 p-4 text-black">
            <div className='italic'>
                <h2
                    className=" flex text-justify md:text-2xl sm:text-lg text-md font-bold ">
                    {title}
                </h2>
                <div
                    className='md:flex block items-center gap-x-3 py-2 '>
                    <div
                        className='flex items-center  gap-x-4'>
                        <p
                            className='lg:text-lg text-md'>
                            {date}</p>
                        <HiChatBubbleBottomCenter
                            className=' font-bold text-2xl text-red-500 '>
                        </HiChatBubbleBottomCenter>
                        <span className=''>{message}</span>
                    </div>
                    <span className='flex justify-center py-2 font-bold text-red-600'> <HiBookmark className=' text-2xl mr-2'></HiBookmark> {rating} </span>
                </div>
            </div>

        </div>
    )
};

export default EntertainmentNewsComment;