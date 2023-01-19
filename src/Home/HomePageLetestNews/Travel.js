import React, { useEffect, useState } from 'react';
import LetestNewsCard from './LetestNewsCard';

const Travel = () => {
    const [travels, setTravels] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news`)
            .then((res) => res.json())
            .then((result) => {
                const fashionNews = result?.filter(fashion => fashion?.category === 'travel')
                setTravels(fashionNews)
                console.log(result);
            });
    }, []);

    return (
        <section className='sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5 '>
            {
                travels?.slice(-8)?.map((travel ) => <LetestNewsCard news={travel} key={travel?._id} />)
            }
        </section>
    );
};

export default Travel;