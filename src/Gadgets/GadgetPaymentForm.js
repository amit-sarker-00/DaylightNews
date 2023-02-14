import React from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md'

const GadgetPaymentForm = ({ gadget }) => {

    const { title, picture, productName, quantity, userEmail, userName, price } = gadget;
    console.log(gadget);

    const handleGadgetPayment = (e) => {
        e.preventDefault();
        const form = e.target;
        const currency = form.currency.value;
        const zipCode = form.zipCode.value;

        const payment = {
            title,
            picture,
            productName,
            quantity,
            amount: price,
            zipCode,
            currency,
            email: userEmail,
            name: userName,
        }

        fetch(`${process.env.REACT_APP_API_URL}payment`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(payment),
        })
            .then((res) => res.json())
            .then((data) => {
                window.location.replace(data.url);
                // console.log("rokek", data);
            });

    }



    return (
        <>
            <input type="checkbox" id="gadgetPaymentForm" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='w-full  '>
                        <section className=" py-4  ">
                            <form onSubmit={handleGadgetPayment} className="  flex flex-col  ng-untouched ng-pristine ng-valid">
                                <div className='flex items-center mx-auto mb-3'>
                                    <img
                                        className='lg:w-28 w-20'
                                        src="https://i.ibb.co/dWfVwFL/71405-online-payments-2.gif" alt="" />
                                    <h1 className='lg:text-4xl sm:text-xl text-lg font-semibold translate'> Payment Form</h1>
                                </div>
                                <div className="  max-w-[900px] mx-auto border hover:border-red-600 lg:mt-6 mt-0   gap-6 p-6 rounded-md shadow-sm  ">
                                    <div className='flex items-center justify-center md:gap-4 gap-2 md:text-xl text-md font-serif  py-4'>
                                        <p>Product Name:- <span className='font-semibold'>{productName}</span></p>
                                        <p>Quantity:- <span className='font-semibold'>{quantity}</span></p>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                                        <div className="col-span-full sm:col-span-3">
                                            <label className=" text-xl"> Name</label>
                                            <input type="text" placeholder="First name" defaultValue={userName} disabled className="w-full rounded-md border hover:border-red-600 outline-none  p-2 " />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label className=" text-xl">Email</label>
                                            <input type="email" placeholder="Email" defaultValue={userEmail} disabled className="w-full rounded-md p-2 border hover:border-red-600 outline-none  " />
                                        </div>

                                        <div className="col-span-full sm:col-span-2">
                                            <p>
                                                price: {price}
                                            </p>
                                            {/* <input type="text" required name="amount" defaultValue={gadget?.price} disabled placeholder="$$" className="w-full rounded-md p-2 border hover:border-red-600 outline-none " /> */}
                                        </div>
                                        <div className="col-span-full sm:col-span-2">
                                            <label className=" text-xl">ZIP / Postal</label>
                                            <input type="text" required name="zipCode" placeholder="" className="w-full rounded-md p-2 border hover:border-red-600 outline-none " />
                                        </div>
                                        <div>
                                            <select className="select border hover:border-red-600 w-full max-w-xs" name="currency">
                                                <option value="BDT" selected>
                                                    BDT
                                                </option>
                                                <option>USD</option>
                                            </select>
                                        </div>
                                        <div className="col-span-full">
                                            <input type="submit" className="w-full bg-black hover:bg-green-600 text-white rounded-md p-2 text-lg font-serif font-semibold cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </section>
                        <div className='flex justify-center  px-4 '>
                            <img className='w-full rounded-lg' src="https://i.ibb.co/NpKKrcN/Master-Card-Web-Banner-b-N-PC-1440-X540.jpg" alt="" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <label
                            htmlFor="gadgetPaymentForm"
                            className="flex items-center gap-1 bg-red-600 hover:bg-red-400 hover:text-black md:px-4 px-1 py-2 rounded-lg text-semibold xl:text-xl text-lg font-serif text-white translate-all">
                            Cancel
                            <MdOutlineCancel />
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GadgetPaymentForm;

