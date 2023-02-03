import React from 'react';
import { Link } from 'react-router-dom';

const HorizontalThreeImage = ({ data }) => {
    const { author, category, description, picture, title, _id } = data
    return (
        <div className=' mx-auto hover:text-red-600 '>
            <div className='overflow-hidden'>
                <img className='w-full lg:h-48 object-cover ease-in-out duration-500 transform hover:scale-125' src={picture} alt="" />
            </div>
            <Link to={`/detail/${_id}`} className='text-xl font-bold pb-3'>{title?.slice(0, 50)}</Link>
            <hr />
        </div>
    );
};

export default HorizontalThreeImage;