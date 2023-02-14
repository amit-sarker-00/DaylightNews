import React, { useContext } from 'react';
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const DonationPage = () => {
    const { user, } = useContext(AuthContext);


    const handlePayment = (e) => {
        e.preventDefault();
        const form = e.target;
        const number = form?.mobileNumber?.value;
        const address = form?.address?.value;
        const zipCode = form?.zipCode?.value;
        const country = form?.country?.value;
        const currency = form?.currency?.value;
        const amount = form?.amount?.value;
        // console.log(paymentPerson, number, address, postCode, currency);
        const payment = {
            number,
            address,
            zipCode,
            country,
            currency,
            amount,
            email: user?.email,
            name: user?.displayName
        };

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
                console.log("rokek", data);
            });
    };


    return (
        <div className='w-full mb-20 mt-16  '>
            <section className="p-6  ">
                <form onSubmit={handlePayment} className="  flex flex-col  ng-untouched ng-pristine ng-valid">
                    <div className='mx-auto mb-3'>
                        <h1 className='text-2xl font-semibold'>Donate DaylightNews Team</h1>
                    </div>
                    <div className="  max-w-[900px] mx-auto   gap-6 p-6 rounded-md shadow-sm  ">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl"> Name</label>
                                <input type="text" placeholder="First name" defaultValue={user?.displayName} className="w-full rounded-md border outline-none  p-2 " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl">Email</label>
                                <input type="email" placeholder="Email" defaultValue={user?.email} className="w-full rounded-md p-2 border outline-none  " />
                            </div>
                            <div className="col-span-full">
                                <label className=" text-xl">Address</label>
                                <input type="text" required name="address" placeholder="Put Your Address" className="w-full rounded-md p-2 border outline-none   " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className=" text-xl">Address</label>
                                <input type="number" required name="mobileNumber" placeholder="Put Your Mobile Number" className="w-full rounded-md p-2 border outline-none  " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className=" text-xl">Amount</label>
                                <input type="number" required name="amount" placeholder="$$" className="w-full rounded-md p-2 border outline-none  " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className=" text-xl">country</label>
                                <input type="text" required name="country" placeholder="Put Your Country" className="w-full rounded-md p-2 border outline-none  " />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className=" text-xl">State / Province</label>
                                <input type="text" required name="state" placeholder="" className="w-full rounded-md p-2 border outline-none  " />
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
                                <input type="submit" className="w-full bg-black text-white rounded-md p-2 border  cursor-pointer" />
                            </div>
                        </div>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default DonationPage;