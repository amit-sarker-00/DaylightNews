import React, { useEffect, useState } from 'react';
import LetestNewsCard from './LetestNewsCard';

const Travel = () => {
    const [travels, setTravels] = useState([]);
    useEffect(() => {
        fetch('travel.json').then(res => res.json()).then(result => {
            setTravels(result)
        })
    }, []);

    return (
        <section className='sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5 '>
            {
                travels.map(travel => <LetestNewsCard news={travel} key={travel?.id} length={travels?.length} />)
            }
        </section>
    );
};

export default Travel;