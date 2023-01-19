import React from 'react';
import { Link } from 'react-router-dom';
import { RxCalendar } from "react-icons/rx";

const LetestNewsCard = ({ news }) => {
    const { title, picture, category, _id } = news
    return (
        <section>
            <Link className='font-bold text-lg' to={`detail/${_id}`}>
                <div className="rounded-lg mx-auto max-w-sm  hover:text-red-500 transition-all">
                    <div className="overflow-hidden h-[200px] rounded-xl">
                        <img
                            className="transform ease-in-out duration-500 hover:scale-125 object-cover w-full sm:h-[200px] h-full"
                            src={picture}
                            alt="/"
                        />
                    </div>
                    <div className='flex  items-center gap-4 py-4'>
                        <Link to={category} className='bg-red-100 text-red-600 font-semibold rounded-md transition-all hover:bg-red-600 hover:text-white py-1 px-4 '>{category} </Link>
                        <div className="flex items-center gap-1 ">
                            <RxCalendar />
                            <p className="text-[14px] text-slate-400">  14th February 2020</p>
                        </div>
                    </div>
                    <div>

                        <h1>
                            {title?.length > 22 ? title.slice(0, 22) + '...' : title}
                        </h1>

                    </div>
                </div>
            </Link>
        </section>
    );
};

export default LetestNewsCard;