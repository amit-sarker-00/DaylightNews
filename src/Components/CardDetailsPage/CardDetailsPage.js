import React, { useEffect, useState } from 'react';
import DetailsCard from './DetailsCard/DetailsCard';
import LatestNews from './LetestNews/LatestNews';
import { useParams } from 'react-router';





const CardDetailsPage = () => {

    const params = useParams()

    const [detail, setDetail] = useState({});
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news/${params?.id}`)
            .then((res) => res.json())
            .then((result) => {
                setDetail(result)
            });
    }, [params?.id]);

    const [recentData, setRecentData] = useState([])

    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news`)
            .then((res) => res.json())
            .then((result) => {
                setRecentData(result?.slice(-5))
            });
    }, []);


    // console.log(recentData)

    return (
        <div className='flex w-full gap-0 lg:gap-5 h-full'>
            <div className='flex '>
                   <DetailsCard detail={detail} />
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