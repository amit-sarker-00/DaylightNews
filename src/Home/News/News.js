import React, { useEffect, useState } from 'react';
import NewsSectionJustOneItemShow from './NewsSectionJustOneItemshow/NewsSectionJustOneItemShow';
import TravelCards from './TravelCards/TravelCards';



const News = () => {
    const [travelData, setTravelData] = useState([])
    const [lifeStyle, setLifeStyle] = useState([])
    const [healthNews, setHealthNews] = useState([])



    // all traverl card 
    useEffect(() => {
        fetch('travelData.json')
            .then(res => res.json())
            .then(data => setTravelData(data))
    }, [])



    useEffect(() => {
        fetch('lifeStyle.json')
            .then(res => res.json())
            .then(data => setLifeStyle(data))
    }, [])




    useEffect(() => {
        fetch('healthNews.json')
            .then(res => res.json())
            .then(data => setHealthNews(data))
    }, [])

    return (
        <div className='mx-auto mb-12'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                <div className=''>
                    <div className=' border-b-2 border-dashed'>
                        <button className='bg-red-500 text-white rounded-t-xl py-2 px-5 '> NEWS</button>
                    </div>
                    {
                        travelData.slice(0, 1).map(travel => <NewsSectionJustOneItemShow
                            key={travel.id}
                            data={travel}
                        ></NewsSectionJustOneItemShow>)
                    }


                    {
                        travelData.map(travel => <TravelCards
                            key={travel.id}
                            data={travel}
                        ></TravelCards>)
                    }
                </div>
                <div>
                    <div className=' border-b-2 border-dashed'>
                        <button className='bg-cyan-400 text-white rounded-t-xl py-2 px-5 '>TRAVEL NEWS</button>
                    </div>


                    {
                        lifeStyle.slice(0, 1).map(travel => <NewsSectionJustOneItemShow
                            key={travel.id}
                            data={travel}
                        ></NewsSectionJustOneItemShow>)
                    }



                    {
                        lifeStyle.map(life => <TravelCards
                            key={life.id}
                            data={life}
                        ></TravelCards>)
                    }
                </div>
                <div>
                    <div className=' border-b-2 border-dashed'>
                        <button className='bg-black text-white rounded-t-xl py-2 px-5 '>TRAVEL NEWS</button>
                    </div>

                    {
                        healthNews.slice(0, 1).map(travel => <NewsSectionJustOneItemShow
                            key={travel.id}
                            data={travel}
                        ></NewsSectionJustOneItemShow>)
                    }
                    {
                        healthNews.map(health => <TravelCards
                            key={health.id}
                            data={health}
                        ></TravelCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default News;