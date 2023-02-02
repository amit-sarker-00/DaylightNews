import { useQuery } from '@tanstack/react-query';
import React from 'react';
import HomePageSnipper from '../HomePageStorySection/HomePageSnipper';
import LetestNewsCard from './LetestNewsCard';

const Natural = () =>
{
    const { data: natures, isLoading } = useQuery({
        queryKey: [ 'letestNews' ],
        queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }letestNews?letest=${ 'natural' }`)
            .then((res) => res.json())
    })
    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5'>
            {isLoading && <HomePageSnipper />}

            {
                natures?.slice(-8).map(nature => <LetestNewsCard key={nature?._id} news={nature} />)
            }
        </section>
    );
};

export default Natural;  