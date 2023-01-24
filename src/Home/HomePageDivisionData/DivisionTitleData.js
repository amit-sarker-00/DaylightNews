import React from 'react';
import { Link } from 'react-router-dom';

const DivisionTitleData = ({ data }) => {

    const { description
        , author
        , category
        , picture
        , title } = data
    return (
        <>
            <div className='flex items-center gap-3 pb-2'>
                <p className='w-1 h-1 bg-black rounded-full'></p>
                <Link>  {title}</Link>
            </div>
            <hr />
        </>
    );
};

export default DivisionTitleData;