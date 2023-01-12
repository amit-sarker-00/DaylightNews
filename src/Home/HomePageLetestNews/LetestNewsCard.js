import React from 'react';
import { Link } from 'react-router-dom';
import { RxCalendar } from "react-icons/rx";

const LetestNewsCard = () => {
    return (
        <section>
            <div class="flex justify-center">
                <div class="rounded-lg  max-w-sm">
                    <div className="overflow-hidden h-[250px] rounded-xl">
                        <img
                            className="transform ease-in-out duration-500 hover:scale-125 object-cover w-full sm:h-[250px] h-full"
                            src='https://html.quomodosoft.com/binduz/assets/images/video-post-thumb-4.png'
                            alt="/"
                        />
                    </div>
                    <div className='flex  items-center gap-4 py-4'>
                        <Link className='bg-red-100 text-red-600 font-semibold rounded-md transition-all hover:bg-red-600 hover:text-white py-1 px-4 '>Category </Link>
                        <div className="flex items-center gap-1 ">
                            <RxCalendar />
                            <p className="text-[14px] text-slate-400">  14th February 2020</p>
                        </div>
                    </div>
                    <div>
                        <Link className='font-bold text-xl'>
                            <h1>
                                This New Emoji Has Been Years In The Making
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetestNewsCard;