import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Drawer = () =>
{

    // categories
    const { data: allCategory = [] } = useQuery({
        queryKey: [ 'categories' ],
        queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }categories`)
            .then((res) => res.json())
    })

    return (
        <section>

            <div id="drawer-navigation" className="fixed z-40 h-screen p-4 sm:w-80 w-48 bg-gray-50 text-gray-600" tabIndex="-1" aria-labelledby="drawer-    navigation-label">
                <div className='flex justify-between items-center mb-4 '>
                    <h5 id="drawer-navigation-label" className="text-base font-semibold uppercase ">Menu</h5>

                    <label htmlFor="my-drawer" className=" drawer-button cursor-pointer p-2 bg-red-500 text-white rounded-full"><FaTimes className='' /> </label>
                </div>

                <div>
                    <ul className=" gap-3 flex-col ">
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Home</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>News</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Sports</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Pages</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Travel</Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Future </Link>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Culture</Link>
                        </li>
                        <li className='w-full pl-2  hover:bg-red-500 hover:text-white ease-in-out duration-300 py-1 hover:pl-8' >
                            <div className="dropdown w-full ">
                                <Link tabIndex={1} className="flex items-center gap-1 "><span>Categories</span> <IoIosArrowDropdown className="mt-1" /></Link>
                                <ul tabIndex={1} className="dropdown-content sm:w-60 w-20 z-50 rounded-md text-black font-semibold  shadow bg-gray-200 ">
                                    {
                                        allCategory?.map((category, i) => <li key={i} className="w-full">
                                            <Link to={`/category/${ category }`} className="block py-1 px-2 hover:pl-8 ease-in-out duration-300 hover:text-white  my-1 hover:bg-red-500  "  >{category}</Link>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </li>
                        <li className='w-full '>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Gadgets</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Drawer;