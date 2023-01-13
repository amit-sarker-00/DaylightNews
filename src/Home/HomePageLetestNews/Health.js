import React, { useEffect, useState } from 'react';
import LetestNewsCard from './LetestNewsCard';

const Health = () => {
    const [heaths, setHeaths] = useState([]);
    useEffect(() => {
        fetch('LetestNewsDomesticCategory.json').then(res => res.json()).then(result => {
            setHeaths(result)
        })
    }, []);

    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5'>
            {
                heaths?.map(health => <LetestNewsCard key={health?.id} news={health} length={heaths?.length} />)
            }
        </section>
    );
};

export default Health;