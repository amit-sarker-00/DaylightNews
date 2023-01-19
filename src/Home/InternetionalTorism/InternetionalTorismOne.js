import React from 'react';

const InternetionalTorismOne = ({ srilanka }) => {

    const { author, title, position, picture } = srilanka;
    return (
        <div>
            <div className=" relative w-full mx-auto border">
                <div
                    className="relative flex items-end w-full text-left bg-center bg-cover cursor-pointer  lg:row-span-2  group dark:bg-gray-500">
                    <img
                        className='object-cover max-h-[578px] w-full' src={picture} alt="" />
                    <div
                        className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900 ">
                    </div>
                    <div
                        className="absolute top-0 left-0 right-0 flex justify-center items-center mx-5 mt-3">
                        <div>
                            <a rel="" href="#"
                                className="px-3 py-2 lg:text-3xl md:text-xl sm:text-lg text-md space-y-6 sm:font-bold  tracking-wider uppercase hover:underline dark:text-gray-100">{title}</a>
                            <ul className='flex dark:text-gray-100 sm:pt-4 pt-2 sm:text-xl text-md '>
                                <li><p className=''>{author.name}</p></li>
                                <li> <p>{author.published_date}</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='absolute md:bottom-10 bottom-3  text-slate-300 font-bold md:ml-10 ml-4 md:text-2xl sm:text-lg text-sm '>
                    <h2>{position}</h2>
                </div>
            </div>
        </div>
    );
};

export default InternetionalTorismOne;