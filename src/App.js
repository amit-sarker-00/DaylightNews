import React, { useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import "react-photo-view/dist/react-photo-view.css";
import 'react-photo-view/dist/react-photo-view.css';
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import 'react-loading-skeleton/dist/skeleton.css'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { DarkAndWhiteContext } from "./Contexts/AuthProvider/AuthProvider";



const queryClient = new QueryClient()
function App ()
{
  const { setIsDarkMode, isDarkMode } = useContext(DarkAndWhiteContext)
  const [ openIcons, setOpenIcons ] = useState(false);
  const handlDarkAndWhiteMode = () =>
  {

    setIsDarkMode(!isDarkMode)

  }

  return (

    <div className={`relative ${ isDarkMode ? 'bg-gray-900 text-gray-200' : ' bg-white' }`} >

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

      <div className="absolute top-1/3 sm:w-12 xl:right-12 lg:right-6 md:right-3 sm:right-2 right-1 overflow-hidden  ">
        <div className="block sm:hidden">

          <span onClick={() => (openIcons)}><IoIosArrowDropleft /></span>
        </div>

        <ul className={`sm:flex hidden flex-col gap-1`}>

          <li title="dark & white mode" onClick={handlDarkAndWhiteMode} className=" rounded-full cursor-pointer hover:bg-red-500 flex justify-center items-center w-8 h-8 duration-150 ease-in-out  hover:text-white">
            <CgDarkMode className="text-md" />
          </li>

          <a href="https://web.facebook.com/jillurahman.jibon.3" rel="noreferrer" target={'_blank'}>

            <li className=" rounded-full cursor-pointer hover:bg-red-500 flex justify-center items-center w-8 h-8 duration-150 ease-in-out  hover:text-white">
              <FaFacebookF className="text-md" />
            </li>
          </a>
          <a href="mailto:jillurahmanjibon@gmail.com" rel="noreferrer" target={'_blank'}>

            <li className=" rounded-full cursor-pointer hover:bg-red-500 flex justify-center items-center w-8 h-8 duration-150 ease-in-out  hover:text-white">
              <FaGoogle className="text-md" />
            </li>
          </a>
          <a href="https://github.com/JilluRahmanJibon" rel="noreferrer" target={'_blank'}>

            <li className=" rounded-full cursor-pointer hover:bg-red-500 flex justify-center items-center w-8 h-8 duration-150 ease-in-out  hover:text-white">
              <FaGithub className="text-md" />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jillurahmanjibon/" rel="noreferrer" target={'_blank'}>

            <li className=" rounded-full cursor-pointer hover:bg-red-500 flex justify-center items-center w-8 h-8 duration-150 ease-in-out  hover:text-white">
              <FaLinkedinIn className="text-md" />
            </li>
          </a>


          <li className="h-40 rounded-full  flex justify-center items-center w-8  duration-150 ease-in-out   ">
            <div className=" h-full flex flex-col    ">
              <div className=" h-14 w-[2px]  ml-[45px] z-50  bg-red-500"></div>
              <p className="transform -rotate-90 mt-8 text-lg font-bold">FOLLOWUS</p>
            </div>
          </li>


        </ul>
      </div>
    </div>

  );
}

export default App;
