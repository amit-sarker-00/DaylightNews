import { useQuery } from '@tanstack/react-query';
import React from 'react';
import HomePageSnipper from '../HomePageStorySection/HomePageSnipper';
import LetestNewsCard from './LetestNewsCard';

const Domestic = () =>
{
    const { data: domesticNews, isLoading } = useQuery({
        queryKey: [ 'letestNews' ],
        queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }letestNews?letest=${ 'Domestic' }`)
            .then((res) => res.json())
    })

    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5'>
            {isLoading && <HomePageSnipper />}
            {
                domesticNews?.slice(-8)?.map(fashion => <LetestNewsCard key={fashion?._id} news={fashion} />)
            }
        </section>
    );
};

export default Domestic;