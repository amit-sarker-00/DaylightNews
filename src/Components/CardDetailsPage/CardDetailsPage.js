import React, { useEffect, useState } from 'react';
import DetailsCard from './DetailsCard/DetailsCard';
import LatestNews from './LetestNews/LatestNews';






const CardDetailsPage = () => {


    const [data, setData] = useState([])
    const [recentData, setRecentData] = useState([])

    useEffect(() => {
        fetch("testingforDetailspage.json")
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    useEffect(() => {
        fetch("LetestNewsDomesticCategory.json")
            .then(res => res.json())
            .then(data => setRecentData(data))

    }, [])

    // console.log(recentData)

    return (
        <div className='flex w-full gap-0 lg:gap-5 h-full'>
            <div className='flex '>
                {
                    data && data.map(da => <DetailsCard data={da} key={da.id} />)
                }
            </div>
            <div>
                <h1 className='text-center text-xl font-semibold pb-5 hidden lg:block'>Latest News</h1>
                <div className='lg:w-[500px]  hidden lg:block flex-col'>
                    {
                        recentData && recentData.map(recent => <LatestNews recent={recent} key={recent.id} />)
                    }
                </div>
                <div className='mt-10 hidden lg:block'>
                    <img className='object-cover w-[500px] h-[700px]' src="https://cdn.ecommercedns.uk/files/8/242988/9/13322649/christmas-banner-1.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default CardDetailsPage;