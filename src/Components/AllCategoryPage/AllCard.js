import React from 'react';
import { Link } from 'react-router-dom';

const AllCard = ({ data, i }) => {


    const { author, category, description, picture, title, _id } = data
    return (


        <div className='w-full lg:w-[800px]  mx-auto my-2 flex  hover:text-red-600 '>
            <p className='m-1 lg:m-3 px-3 text-xl bg-gray-200 rounded-full'>{i + 1}</p>
            <div className='flex flex-col lg:flex-row bg-gray-200'>
                <div className='overflow-hidden'>
                    <img className='lg:w-56 lg:h-48 object-cover ease-in-out duration-500 transform hover:scale-125' src={picture} alt="" />
                </div>
                <div className='pl-5 pt-5'>
                    <Link to={`/detail/${_id}`} className='text-xl font-semibold '>{title}</Link>
                    <p className='py-5 '>{description?.slice(0, 100) + "..."}</p>
                    <p className='text-sm text-gray-400 '>{author?.published_date}</p>
                </div>
            </div>
        </div>

    );
};

export default AllCard;