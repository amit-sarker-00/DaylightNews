import React from 'react';



const LatestNews = ({ recent }) => {
    console.log(recent)
    const { author, category, description, picture, title
    } = recent
    return (
        <div>
            <div className='p-0 lg:p-2  border-b-2  border-gray-300  bg-gray-200 flex gap-5 w-full '>
                <div>
                    <img className='w-32 h-full object-cover' src={picture} alt="" />
                </div>
                <div className='w-full xl:w-72 '>
                    <p className='text-gray-600 text-sm py-2 text-right'>{author?.published_date}</p>
                    <p className='text-md font-semibold'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;