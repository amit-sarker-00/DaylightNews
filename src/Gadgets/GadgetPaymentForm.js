import React from 'react';

const GadgetPaymentForm = () => {


    return (
        <div className='w-full mb-20 mt-16  '>
            <section className="p-6  ">
                <form className="  flex flex-col  ng-untouched ng-pristine ng-valid">
                    <div className='flex items-center mx-auto mb-3'>
                        <img
                            className='lg:w-28 w-20'
                            src="https://i.ibb.co/dWfVwFL/71405-online-payments-2.gif" alt="" />
                        <h1 className='lg:text-4xl sm:text-xl text-lg font-semibold animation'> Payment Form</h1>
                    </div>
                    <div className="  max-w-[900px] mx-auto border lg:mt-6 mt-0   gap-6 p-6 rounded-md shadow-sm  ">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl"> Name</label>
                                <input type="text" placeholder="First name" className="w-full rounded-md border outline-none  p-2 " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl">Email</label>
                                <input type="email" placeholder="Email" className="w-full rounded-md p-2 border outline-none  " />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label className=" text-xl">Price</label>
                                <input type="text" required name="amount" placeholder="$$" className="w-full rounded-md p-2 border outline-none " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className=" text-xl">ZIP / Postal</label>
                                <input type="text" required name="zipCode" placeholder="" className="w-full rounded-md p-2 border outline-none " />
                            </div>
                            <div>
                                <select className="select border w-full max-w-xs" name="currency">
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
        </div>
    );
};

export default GadgetPaymentForm;