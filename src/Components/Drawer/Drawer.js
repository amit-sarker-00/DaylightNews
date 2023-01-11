import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Drawer = () => {
    return (
        <section>

            <div id="drawer-navigation" className="fixed z-40 h-screen p-4 overflow-y- w-80 bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <div className='flex justify-between mb-4'>
                    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>

                    <label htmlFor="my-drawer" className=" drawer-button cursor-pointer"><FaTimes className='text-white ' /> </label>
                </div>

                <div>
                    <ul className=" text-white gap-1 flex flex-col">
                        <li className='w-full hover:bg-gray-500 transition-all '>
                            <Link className='py-2 pl-3 block'>Home</Link>
                        </li>
                        <li className='w-full hover:bg-gray-500 transition-all '>
                            <Link className='py-2 pl-3 block'>Posts</Link>
                        </li>
                        <li className='w-full hover:bg-gray-500 transition-all '>
                            <Link className='py-2 pl-3 block'>MegaMenu</Link>
                        </li>
                        <li className='w-full hover:bg-gray-500 transition-all '>
                            <Link className='py-2 pl-3 block'>Pages</Link>
                        </li>
                        <li className='w-full hover:bg-gray-500 transition-all '>
                            <Link className='py-2 pl-3 block'>LifeStyle</Link>
                        </li>
                        <li className='w-full hover:bg-gray-500 transition-all '>
                            <Link className='py-2 pl-3 block'>Gadgets</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Drawer;