import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Drawer = () => {
    const [categories, setCategories] = useState([]);
    // categories 
    useEffect(() => {
        fetch("NewsData.json")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);
    // console.log(News);

    // all category in news
    const allCategory = categories.map((news) => news.category);
    // console.log(allCategory);
    // unique category
    const uniqueCategory = [...new Set(allCategory)];

    return (
        <section>

            <div id="drawer-navigation" className="fixed z-40 h-screen p-4 overflow-y- w-80 bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <div className='flex justify-between mb-4'>
                    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>

                    <label htmlFor="my-drawer" className=" drawer-button cursor-pointer"><FaTimes className='text-white ' /> </label>
                </div>

                <div>
                    <ul className=" gap-3 flex-col text-white">
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 ease-in-out duration-300 pl-2 hover:pl-8'>Home</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 ease-in-out duration-300 pl-2 hover:pl-8'>News</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 ease-in-out duration-300 pl-2 hover:pl-8'>Sports</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 ease-in-out duration-300 pl-2 hover:pl-8'>Pages</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 ease-in-out duration-300 pl-2 hover:pl-8'>Travel</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 ease-in-out duration-300 pl-2 hover:pl-8'>Future </Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 ease-in-out duration-300 pl-2 hover:pl-8'>Culture</Link>
                        </li>
                        <li className='w-full pl-2  hover:bg-red-500 ease-in-out duration-300 py-1 hover:pl-8' >
                            <div className="dropdown w-full ">
                                <Link tabIndex={1} className="flex items-center gap-1 "><span>Categories</span> <IoIosArrowDropdown className="mt-1" /></Link>
                                <ul tabIndex={1} className="dropdown-content sm:w-60 w-20 z-50 rounded-md text-black font-semibold  shadow bg-gray-200 ">
                                    {
                                        uniqueCategory.map((category, i) => <li className="w-full">
                                            <Link to={`/category/${category}`} className="block py-1 px-2 hover:pl-8 ease-in-out duration-300 hover:text-white  my-1 hover:bg-red-500" key={i}>{category}</Link>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 ease-in-out duration-300 pl-2 hover:pl-8'>Gadgets</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Drawer;