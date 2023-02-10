import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiShoppingCart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { updateWriter } from '../api/services';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const GadgetsProfile = () => {
    const { user } = useContext(AuthContext);
    const [gadgets,setGadgets]=useState([])

    fetch(`${process.env.REACT_APP_API_URL}gadgets/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setGadgets(data));
          console.log(gadgets)

    return (
        <div>
            <div key={gadgets._id} className=" w-4/5 md:h-[800px] h-full mx-auto border-2  rounded-t-lg  relative overflow-hidden my-8  gradient1">
                <img
                    className="h-[100%] w-full ease-in-out duration-500 transform hover:scale-125  "
                    src={gadgets?.picture}
                    alt=""
                />
                <Link className=" absolute top-4 left-5  font-semibold sm:text-xl text-sm  sm:px-8  sm:py-2 py-1 mb-2 px-4 bg-green-600 hover:text-black translate rounded-md text-white font-mono ">
                    {gadgets?.productName}
                </Link>
                <div
                    className="  absolute bottom-2 sm:pl-8 pl-3 md:mb-8 sm:mb-4 mb-2 text-cyan-500  z-40">
                    <div
                        className="flex flex-col justify-center">
                        <h3
                            className="  lg:text-4xl md:text-xl text-md font-semibold sm:space-y-3 space-y-0  mt-3 sm:py-4 p-0 sm:w-2/3 w-full rounded-lg text-white hover:underline font-sans  ">
                            {gadgets?.title?.length > 80 ? gadgets?.title.slice(0, 80) + "..." : gadgets?.title}
                        </h3>
                        <ul className='list-disc text-gray-300 px-4 hidden md:block '>
                            <li> {gadgets?.product_used?.first}</li>
                            <li> {gadgets?.product_used?.second}</li>
                            <li > {gadgets?.product_used?.third}</li>
                            <li> {gadgets?.product_used?.four}</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetsProfile;