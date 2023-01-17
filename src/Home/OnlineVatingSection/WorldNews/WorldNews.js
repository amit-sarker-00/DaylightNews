import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

const WorldNews = () => {
    return (
        <div>
            <Link className='flex  text-xl font-semibold gap-2 hover:text-red-600 transition-all'>World <span><BsArrowUpRightSquareFill className='text-red-600 mt-1' /></span></Link>
            <div className='mt-5'>

            </div>
        </div>
    );
};

export default WorldNews;