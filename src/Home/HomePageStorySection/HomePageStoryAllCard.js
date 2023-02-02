import React from 'react';
import { Link } from 'react-router-dom';
import "../HomePageStorySection/HomePageStory.css"

const HomePageStoryAllCard = ({ data }) => {
    return (
        <Link to={`/story/${data?._id}`} className=''>
            <div className='relative overflow-hidden w-full h-[200px] md:h-[600px] story' >
                <img className=' ease-in-out duration-500 transform hover:scale-125 h-full object-cover w-full' src={data?.pictureOne} alt="" />
                <div className='absolute z-50 bottom-0 h-24 md:h-36 w-full px-2 text-white'>
                    <h1 className='text-white text-sm md:text-2xl  font-bold py-3' >{data?.title}</h1>
                    <p className='text-white'>{data?.category}</p>
                </div>
            </div>
        </Link>
    );
};

export default HomePageStoryAllCard;