import React from 'react';
import { Link } from 'react-router-dom';

const DonateNotUser = () =>
{
    return (
        <div>


            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=" rounded-lg my-10 py-20  ">
                        <h1 className="text-center text-lg md:text-3xl">
                            SomeThing wrong Your Need to Login & Then Try again...
                        </h1>
                        <p className='text-center  mt-4 text-xl'>Please Login Here <Link className='link font-bold' to={`/login`}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateNotUser;