import React, { useEffect, useState } from 'react';
import LetestNewsCard from './LetestNewsCard';

const Nuture = () => {
    const [nutures, setNutures] = useState([]);
    useEffect(() => {
        fetch('LetestNewsLifeCategory.json').then(res => res.json()).then(result => {
            setNutures(result)
        })
    }, []);

    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5'>
            {
                nutures?.map(nuture => <LetestNewsCard key={nuture?.id} news={nuture} length={nutures?.length} />)
            }
        </section>
    );
};

export default Nuture;  