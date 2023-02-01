import React from 'react';
import { Link } from 'react-router-dom';

const SingleImage = ({ data }) => {
    const { author, category, description, picture, title, _id } = data
    return (
        <div className='flex lg:flex-row flex-col items-center py-5'>
            <div className='pr-0 md:pr-10  pb-5'>
                <Link to={`/detail/${_id}`} className='text-2xl font-bold py-3 hover:text-red-600'>{title}</Link>
                <p className='py-2'>{description?.slice(0, 200)}</p>
                <p className='text-sm text-gray-400'>{author?.published_date}</p>
            </div>
            <div className='w-full lg:w-[1000px]'>
                <img className='w-full lg:h-[600px] object-cover' src={picture} alt="" />
            </div>
        </div>
    );
};

export default SingleImage;