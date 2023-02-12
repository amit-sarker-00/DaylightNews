import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiShoppingCart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import GadgetsModal from './GadgetsModal';

const GadgetsCard = ({ banner }) =>
{
    const [ loading, setLoading ] = useState(true);
    const { user } = useContext(AuthContext);
    const [ quantity, setQuantity ] = useState(1);
    const [ price, setPrice ] = useState(500);
    const { picture, productName, title, } = banner;


    const handleGadgetsBuy = (e) =>
    {


        const gadgetsAllData = {
            picture,
            productName,
            title,
            quantity: e.quantity,
            price: e.price,
            userEmail: user?.email,
            userName: user?.displayName,
        }

        fetch(`${ process.env.REACT_APP_API_URL }orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(gadgetsAllData),
        })
            .then((res) => res.json())
            .then((data) =>
            {
                console.log(data);
                setLoading(false);
                setQuantity(1)
                toast.success("Update Successfuly !");
            });

    }




    return (
        <div>
            <div key={banner._id} className=" w-4/5 md:h-[800px] h-full mx-auto border-2  rounded-t-lg  relative overflow-hidden my-8  gradient1">
                <img
                    className="h-[100%] w-full ease-in-out duration-500 transform hover:scale-125  "
                    src={banner.picture}
                    alt=""
                />
                <Link className=" absolute top-4 left-5  font-semibold sm:text-xl text-sm  sm:px-8  sm:py-2 py-1 mb-2 px-4 bg-red-600 hover:bg-red-700 hover:text-black translate rounded-md text-white font-mono ">
                    {banner?.productName}
                </Link>
                <div
                    className="  absolute bottom-2 sm:pl-8 pl-3 md:mb-8 sm:mb-4 mb-2 text-cyan-500  z-40">
                    <div
                        className="flex flex-col justify-center">
                        <h3
                            className="  lg:text-4xl md:text-xl text-md font-semibold sm:space-y-3 space-y-0  mt-3 sm:py-4 p-0 sm:w-2/3 w-full rounded-lg text-white hover:underline font-sans  ">
                            {banner?.title?.length > 80 ? banner?.title.slice(0, 80) + "..." : banner?.title}
                        </h3>
                        <ul className='list-disc text-gray-300 px-4 hidden md:block '>
                            <li> {banner?.product_used?.first}</li>
                            <li> {banner?.product_used?.second}</li>
                            <li > {banner?.product_used?.third}</li>
                            <li> {banner?.product_used?.four}</li>
                        </ul>
                        <div className='sm:py-2 py-0'>
                            <label
                                // onClick={() => handleGadgets()}
                                htmlFor="gadgetsModal"
                                className=' font-semibold sm:text-lg text-sm w-48 sm:px-8 px-2 sm:py-2 py-1   bg-red-600 hover:bg-green-700 hover:text-black translate rounded-md text-white flex items-center gap-3'>
                                <HiShoppingCart className='text-xl text-whit' />
                                Buy Now
                            </label>
                            <GadgetsModal
                                handleGadgetsBuy={handleGadgetsBuy}
                                quantity={quantity}
                                setQuantity={setQuantity}
                                price={price}
                                setPrice={setPrice}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetsCard;