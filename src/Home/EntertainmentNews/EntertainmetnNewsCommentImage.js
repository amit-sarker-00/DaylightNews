import React from 'react';

const EntertainmetnNewsCommentImage = ({comment}) => {
    const { image }=comment
    return (
        <div className='flex justify-center w-full mt-8'>
            <img src={image} alt="" />
        </div>
    );
};

export default EntertainmetnNewsCommentImage;