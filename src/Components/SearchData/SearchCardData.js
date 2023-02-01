
import React from 'react';
import { HiUser } from "react-icons/hi2";
import { IoTimeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SearchCardData = ({ searchData, setSearchData }) => {
    const { title, picture, description, category, author, _id } = searchData;
    return (
        <div className=' lg:w-[800px]  mx-auto '>
            <Link className=' bg-gray-200 border-white inline-block border hover:border hover:border-red-500 hover:text-red-600  ease-in-out duration-500 hover:rounded-xl transition-all' onClick={() => setSearchData(null)} title={title} to={`/detail/${_id}`}>

                <div className='flex flex-col lg:flex-row'>
                    <div className='overflow-hidden'>
                        <img className='lg:w-56 lg:h-48 object-cover ease-in-out duration-500 transform hover:scale-125' src={picture} alt="" />
                    </div>
                    <div className='pl-5 pt-5'>
                        <p className='text-xl font-semibold '>{title}</p>
                        <p className='py-5 '>{description?.slice(0, 100) + "..."}</p>
                        <p className='text-sm text-gray-400 '>{author?.published_date}</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default SearchCardData;