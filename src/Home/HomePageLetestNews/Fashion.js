import React, { useEffect, useState } from 'react';
import LetestNewsCard from './LetestNewsCard';

const Fashion = () => {
    const [fashionNews, setFashion] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news`)
            .then((res) => res.json())
            .then((result) => {
                const fashionNews = result?.filter(fashion => fashion?.category === 'Domestic')
                setFashion(fashionNews)
                console.log(result);
            });
    }, []);
  
    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5'>
            {
                fashionNews?.slice(-8)?.map(fashion => <LetestNewsCard key={fashion?._id} news={fashion} />)
            }
        </section>
    );
};

export default Fashion;