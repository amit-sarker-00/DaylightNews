import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ data }) => {
    // console.log(data)
    const { author, category, description, picture
        , title
    } = data
    return (
        <div className=''>
            <img className=' xl:h-96 w-full' src={picture} alt="" />
            <Link className=''>
                <h1 className='text-2xl font-bold py-1'>{title}</h1>
                <p className='text-gray-600 pb-4'>{description.slice(0, 300)}</p>
            </Link>
        </div>
    );
};

export default SingleCard;