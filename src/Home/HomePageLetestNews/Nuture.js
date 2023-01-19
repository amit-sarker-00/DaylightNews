import React, { useEffect, useState } from 'react';
import LetestNewsCard from './LetestNewsCard';

const Nuture = () => {
    const [natures, setNatures] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news`)
            .then((res) => res.json())
            .then((result) => {
                const naturalNews = result?.filter(natural => natural?.category === 'natural')
                setNatures(naturalNews)

            });
    }, []);

    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5'>
            {
                natures?.slice(-8).map(nature => <LetestNewsCard key={nature?._id} news={nature} />)
            }
        </section>
    );
};

export default Nuture;  