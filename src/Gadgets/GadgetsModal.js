import { HiOutlineChevronDown, HiOutlineChevronUp, } from "react-icons/hi2";

const GadgetsModal = ({ handleGadgetsBuy, quantity, setQuantity, price, setPrice, select, setSelect}) => {


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

    const closeModal =() =>{
        setQuantity(1)
        setPrice(500)
        setSelect(null)

    }

    const gadgetsQuantity = {
        quantity,
        price
    }

    return (
        <>
            <input type="checkbox" id="gadgetsModal" className="modal-toggle" />
            <div className="modal z-50 ">
                <div className="modal-box md:w-full sm:w-80 w-64 relative">
                    <label
                        onClick={closeModal}
                        htmlFor="gadgetsModal"
                        className=" mr-2 px-2 py-1 rounded-full absolute right-2 top-2 text-black text-bold bg-red-100 hover:bg-red-700 hover:text-white">
                        ✕
                    </label>
                    <h3
                        className="text-center md:mt-4 mt-2 md:text-lg text-md font-semibold font-serif text-black ">
                        How much quantity you are need?
                    </h3>

                    <div className='text-center text-black space-y-2'>
                        <div className='flex items-center justify-center gap-5  md:text-xl text-lg md:mt-4 mt-2 sm:mb-4 mb-2'>
                            <div>
                                <h2>Quantity: {quantity}</h2>
                            </div>
                            <div className='space-y-2'>
                                <div>
                                    <HiOutlineChevronUp
                                        className='hover:text-red-700  rounded-full bg-red-100 '
                                        onClick={handleIncrement}
                                    />
                                </div>
                                <div>
                                    <HiOutlineChevronDown 
                                        className='hover:text-red-700  rounded-full bg-red-100'
                                    onClick={handleDecrement} />
                                </div>
                            </div>
                            <div>
                                <h2>Price: ${price}</h2>
                            </div>

                        </div>
                        <button
                            onClick={() => handleGadgetsBuy(gadgetsQuantity)}
                            className='  px-4 py-2 rounded-lg text-semibold font-serif text-xl text-white hover:text-black bg-red-700 hover:bg-green-700'>
                            Add to Dashboard
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default GadgetsModal;