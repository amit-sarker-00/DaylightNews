import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const GadgetProfileCard = ({ gadget }) => {
    const { title, picture, productName, product_used, author, quantity } = gadget;
    // console.log(published_date)
    return (
        <div className="card  w-full mx-auto bg-base-100 shadow-xl z-10">
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

                <p className=''>{title.slice(0, 100)}</p>
                <div className='flex items-center justify-between'>
                    <Link to={`/gadgets/payment`}
                        className="">
                        <button
                            className='bg-red-700 md:px-4 px-1 py-2 rounded-lg text-semibold xl:text-xl text-lg font-serif text-white hover:bg-green-600 hover:text-black translate-all'>
                            Confirm Buy
                        </button>
                    </Link>
                    <div>
                        <button
                            className='flex items-center gap-2 bg-red-700 md:px-4 px-1 py-2 rounded-lg text-semibold text-xl font-serif text-white hover:bg-green-600 hover:text-black translate-all'>
                            <RiDeleteBin2Line className='md:text-xl text-lg' />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetProfileCard;