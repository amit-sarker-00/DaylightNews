import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { RiDeleteBin2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import DonationPage from '../Components/DonationPage/DonationPage';
import GadgetsDashboardDeleteModal from './GadgetsDashboardDeleteModal';

const GadgetProfileCard = ({ gadget, refetch }) => {
     const [processOrder, setProcessOrder] = useState(null)
    const { title, picture, productName, quantity, _id } = gadget;


    return (
        <div className="card  w-full mx-auto bg-base-100 shadow-xl ">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex items-center justify-between gap-5'>
                    <h2 className="card-title">
                        <p>{productName}</p>
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-xl font-md font-serif'>
                        <p>Quantity:{quantity} </p>
                    </p>
                </div>
                <p className=''>{title?.slice(0, 100)}</p>
                <div className='flex items-center justify-between'>
                    <div
                        className="">
                        <button
                            onClick={() => setProcessOrder(gadget)}
                            className='bg-red-100 md:px-4 px-1 py-2 rounded-lg text-semibold xl:text-xl text-lg font-serif text-black hover:bg-green-600 hover:text-white translate-all'>
                            Confirm Buy
                        </button>
                        
                    </div>
                    <div>
                        <label
                            htmlFor="deleteModal"
                            className='flex items-center md:gap-2 gap-0 bg-red-100 md:px-4 px-1 py-2 rounded-lg text-semibold text-xl font-serif text-black hover:bg-green-600 hover:text-white translate-all'>
                            <RiDeleteBin2Line className='md:text-xl text-lg' />
                            Delete
                        </label>
                    </div>
                </div>
            </div>
            <GadgetsDashboardDeleteModal
                _id={_id}
                refetch={refetch}
                title={productName}
            />
        </div>
    );
};

export default GadgetProfileCard;