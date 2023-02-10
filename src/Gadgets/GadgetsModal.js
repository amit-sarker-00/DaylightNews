import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp, } from "react-icons/hi2";

const GadgetsModal = ({ handleGadgetsBuy,quantity,setQuantity,price,setPrice }) => {
    

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        setPrice(price + 500);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setPrice(price - 500);
        }
    };

    const gadgetsQuantity ={
        quantity,
        price
    }

    return (
        <>
            <input type="checkbox" id="gadgetsModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="gadgetsModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">How much quantity you are need?</h3>

                    <div className='flex items-center gap-5 pt-4'>

                        <div>
                            <h2>Quantity: {quantity}</h2>
                        </div>
                        <div>
                            <div>
                                <HiOutlineChevronUp onClick={handleIncrement} />
                            </div>
                            <div>
                                <HiOutlineChevronDown onClick={handleDecrement} />
                            </div>
                        </div>
                        <div>
                            <h2>Price: ${price}</h2>
                        </div>
                        
                    </div>
                    <div>
                        <button onClick={() => handleGadgetsBuy(gadgetsQuantity)}
                        className=''>
                            Confirm buy
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default GadgetsModal;

// const App = () => {
//     const [quantity, setQuantity] = useState(0);
//     const [price, setPrice] = useState(10);

//     const handleIncrement = () => {
//         setQuantity(quantity + 1);
//         setPrice(price + 10);
//     };

//     const handleDecrement = () => {
//         if (quantity > 0) {
//             setQuantity(quantity - 1);
//             setPrice(price - 10);
//         }
//     };

//     return (
//         <div>
//             <h2>Quantity: {quantity}</h2>
//             <h2>Price: ${price}</h2>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//         </div>
//     );
// };