import { useQuery } from '@tanstack/react-query';
import React from 'react';
import HomePageSnipper from '../HomePageStorySection/HomePageSnipper';
import LetestNewsCard from './LetestNewsCard';

const Travel = () =>
{
    const { data: travels, isLoading } = useQuery({
        queryKey: [ 'letestNews' ],
        queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }letestNews?letest=${ 'travel' }`)
            .then((res) => res.json())
    })


    return (
        <section className='sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5 '>
            {isLoading && <HomePageSnipper />}

            {
                travels?.slice(-8)?.map((travel) => <LetestNewsCard news={travel} key={travel?._id} />)
            }
        </section>
    );
};

export default Travel;