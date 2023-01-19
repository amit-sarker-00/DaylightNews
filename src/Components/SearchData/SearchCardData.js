
import React from 'react';
import { HiUser } from "react-icons/hi2";
import { IoTimeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SearchCardData = ({ searchData }) => {
    const { title, picture, descrption, category, author, _id } = searchData;
    return (
        <div className='w-full sm:w-96 md:w-auto border-white border hover:border hover:border-red-500 hover:text-red-600  ease-in-out duration-500 hover:rounded-xl transition-all'>
            <Link title={title} to={`details/${_id}`}>
                <div className='flex flex-row  border-b h-full items-center rounded-xl gap-2 '>
                    <img className='w-32 h-20 rounded-xl p-1' src={picture} alt="Album" />

                    <div>
                        <h2 className=" sm:font-semibold   pb-2 pt-2">{title?.length > 50 ? title.slice(0, 49) + '...' : title}</h2>
                        <div className="flex justify-around items-center pb-2  ">
                            <div>
                                <p className='flex items-center gap-1 text-gray-400'><HiUser className='text-red-700 bg-gray-300 rounded-md text-lg p-px'></HiUser> {author?.name}</p>
                            </div>
                            <p className='text-gray-400'>|</p>
                            <div>
                                <p className="flex items-center  gap-1">
                                    <span className=" rounded-full"><IoTimeSharp className="shadow-lg  text-lg text-red-700 bg-red-200 rounded-md p-px"></IoTimeSharp></span>
                                    <p className="text-gray-400">{author?.published_date}</p>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </Link>

        </div>
    );
};

export default SearchCardData;