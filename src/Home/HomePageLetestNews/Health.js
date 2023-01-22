import React, { useEffect, useState } from 'react';
import SkeletonLoading from '../../Components/SkeletonLoading/SkeletonLoading';
import LetestNewsCard from './LetestNewsCard';

const Health = () => {
    const [healths, setHeaths] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news`)
            .then((res) => res.json())
            .then((result) => {
                const healthNews = result?.filter(health => health?.category === 'health')
                setHeaths(healthNews)

            });
    }, []);

    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5'>
            {healths?.length === 0 && <SkeletonLoading cards={4} />}

            {
                healths?.slice(-8)?.map(health => <LetestNewsCard key={health?._id} news={health} />)
            }
        </section>
    );
};

export default Health;