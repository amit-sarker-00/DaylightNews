import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BdOnlinePayment = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transectionId = query.get("transectionId");
    console.log(transectionId);

    const [order, setOrder] = useState({});
    console.log(order);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}payment/byTransactionId/${transectionId}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [transectionId]);

    if (!order?._id) {
        return (
            <div className="w-11/12 lg:w-10/12 bg-blue-50 mx-auto rounded-lg my-10 py-20  ">
                <h1 className="text-center text-lg md:text-3xl">No Order found...</h1>
            </div>
        );
    }
    return (
        <div>
            <div className="w-11/12 lg:w-10/12 bg-blue-50 mx-auto rounded-lg my-10 py-20  ">
                <div className="text-center text-lg md:text-3xl">
                    {" "}
                    <h2>Congrats! successfully paid....</h2>
                    <p>Your Order summary</p>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>payment date</th>
                            <th>address</th>
                            <th>transactionId </th>
                            <th>Country
                            </th>
                            <th>Mobile Number
                            </th>
                            <button
                                className=" px-5 py-2 text-white bg-black mx-auto block print:hidden"
                                onClick={() => window.print()}
                            >
                                Print
                            </button>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>{order?.name}</th>
                            <th>{order?.price}</th>
                            <td>{order?.paidAt}</td>
                            <td>{order?.address}</td>
                            <td>{order?.transactionId}</td>
                            <td>{order?.country
                            }</td>
                            <td>{order?.number}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default BdOnlinePayment;