import React from 'react';
import { toast } from 'react-hot-toast';

const GadgetsDashboardDeleteModal = ({  refetch, setStoreDelete,storeDelete, }) => {



    const deleteHandle = id => {
        fetch(`http://localhost:8000/gadgets/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("news-token")}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    setStoreDelete(null)
                    toast.success(`your ${storeDelete?.title} delete is successful`)
                }

            })
    }

    return (
        <div className='z-20'>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="deleteModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-center">
                    <div className='flex items-center justify-center'>
                        <img className='sm:w-20 w-14'
                            src="https://i.ibb.co/VJnxMsH/58413-delete-icon-animation.gif" alt="" />
                        <h3 className="font-bold text-lg">Are you sure want to delete?</h3>
                    </div>
                    <p className="py-4">You've been selected for a chance to get one year to use Wikipedia for free!</p>
                    <div className=" flex items-center justify-around">
                        <button>
                            <button
                                onClick={() => deleteHandle(storeDelete?._id)}
                                className='flex items-center md:gap-2 gap-0 bg-red-700 text-white  md:px-4 px-1 py-2 rounded-lg text-semibold md:text-xl text-md font-serif  hover:bg-green-600 hover:text-black translate-all'>
                                Confirm Delete
                            </button>
                        </button>
                        <label
                        onClick={()=>setStoreDelete(null) }
                            htmlFor="deleteModal"
                            className="className='flex items-center md:gap-2 gap-0 bg-red-700 text-white  md:px-4 px-1 py-2 rounded-lg text-semibold md:text-xl text-md font-serif  hover:bg-green-600 hover:text-black translate-all'>">
                            Cancel
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GadgetsDashboardDeleteModal;