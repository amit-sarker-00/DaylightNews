import React, { useEffect, useState } from 'react';
import LetestNewsCard from './LetestNewsCard';

const Fashion = () => {
    const [fashionNews, setFashion] = useState([]);
    useEffect(() => {
        fetch('LetestNewsOpinionCategory.json').then(res => res.json()).then(result => {
            setFashion(result)
        })
    }, []);

    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5'>
            {
                fashionNews?.map(fashion => <LetestNewsCard key={fashion?.id} news={fashion} length={fashionNews?.length} />)
            }
        </section>
    );
};

export default Fashion;