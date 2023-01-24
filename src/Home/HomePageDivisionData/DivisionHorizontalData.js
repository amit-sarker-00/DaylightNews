import React from 'react';
import { Link } from 'react-router-dom';

const DivisionHorizontalData = ({ data }) => {

    const { description
        , author
        , category
        , picture
        , title } = data
    return (
        <Link className='w-full '>
            <img className='md:full w-full ' src={picture} alt="" />
            <h1 className='bg-slate-800 rounded-b-lg text-white p-2 text-sm'>{title.slice(0, 30) + "..."}</h1>
        </Link>
    );
};

export default DivisionHorizontalData;