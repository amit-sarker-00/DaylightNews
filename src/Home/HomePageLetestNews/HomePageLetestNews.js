import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HomePageLetestNews = () =>
{
    return (
        <main className='px-3 mt-8 mb-16'>
            <section className='flex mb-7 sm:flex-row flex-col sm:justify-between sm:items-center '>
                <div className='flex items-center xl:gap-10 lg:gap-5  md:gap-5 sm:gap-3 '>
                    <h1 className='text-3xl'>Letest News </h1>
                    <div className='bg-red-600 xl:w-[500px]  hidden sm:block lg:w-[400px] md:w-[200px] sm:w-[100px] h-[3px] mt-2'></div>
                </div>
                <div className='flex font-semibold pt-3 gap-2'>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'text-red-500' : 'hover:text-red-500 transition-all'
                    } to='/'>Travel</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'text-red-500' : 'hover:text-red-500 transition-all'
                    } to='/domestic'>Domestic</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'text-red-500' : 'hover:text-red-500 transition-all'
                    } to='/health'>Health</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'text-red-500' : 'hover:text-red-500 transition-all'
                    } to='/natural'>Natural</NavLink>
                </div>
            </section>

            <section>
                <Outlet />
            </section>
        </main>
    );
};

export default HomePageLetestNews;
