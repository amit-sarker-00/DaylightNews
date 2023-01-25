import React from 'react';

const DetailsCommentBox = () => {


    const handleCommentBox = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const message = form.message.value
        const data = {
            name,
            email,
            message
        }
        console.log(data)
    }




    return (
        <div className='text-center w-full lg:w-[700px] mx-auto py-10 '>
            <h1 className='text-2xl text-red-500 '>.. Leave a comment ..</h1>
            <form onSubmit={handleCommentBox}>
                <div className='flex items-center  gap-6'>
                    <div className='w-full  sm:w-[300px]'>
                        <p className='text-left text-gray-500 py-1'>Full Name*</p>
                        <input className='w-full h-10' type="text" name='name' />
                    </div>
                    <div className='w-full sm:w-[300px]'>
                        <p className='text-left text-gray-500 py-1'>Full Name*</p>
                        <input className='w-full h-10' type="email" name='email' />
                    </div>
                </div>
                <div className=' text-center w-full md:w-[623px] py-5'>
                    <textarea placeholder='Message' name="message" className='w-full  p-5' id="" cols="10" rows="5"></textarea>
                </div>

                <input type="submit" className='py-2 px-7 bg-red-600 text-white' value="Submit Comment " />
            </form>
        </div>
    );
};

export default DetailsCommentBox;