import React from 'react';

const InternetionalTorismTwo = ({ bangla }) => {
    const { author, title, position, picture } = bangla;
    return (
        <div>
            <div className="relative w-full mx-auto border shadow">
                <div className="relative flex items-end w-full text-left bg-center bg-cover cursor-pointer  lg:row-span-2  group dark:bg-gray-500">
                    <img className='w-full 2xl:h-[288px] xl:h-[220px] lg:h-[180px] md:h-[130px]' src={picture} alt="" />
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex justify-center items-center mx-5 mt-3">
                        <div>
                            <a rel="" href="#" className="px-2 py-2 lg:text-lg md:text-md sm:text-sm text-xs space-y-6 md:font-bold  tracking-wider uppercase hover:underline dark:text-gray-100">{title}</a>
                            <ul className='flex dark:text-gray-100 sm:pt-4 pt-2 sm:text-xl text-md '>
                                <li><p className=''>{author.name}</p></li>
                                <li> <p>{author.published_date}</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='absolute md:bottom-6 bottom-3  text-slate-300 font-semibold hidden md:block lg:ml-7 ml-4 md:text-xl sm:text-lg text-sm '>
                    <h2>{position}</h2>
                </div>

            </div>
        </div>
    );
};

export default InternetionalTorismTwo;