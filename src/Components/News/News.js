import React, { useEffect, useState } from 'react';
import HealthNewsCards from '../NewsCards/HealthNewsCards/HealthNewsCards';
import LifeStyleCards from '../NewsCards/LifeStyleCard/LifeStyleCards';
import TravelCards from '../NewsCards/TravelCards/TravelCards';

const News = () => {
    const [travelData, setTravelData] =useState([])
    const [lifeStyle, setLifeStyle]=useState([])
    const [healthNews,setHealthNews]=useState([])


    useEffect(()=>{
        fetch('travelData.json')
        .then(res => res.json())
            .then(data => setTravelData(data))
    },[])

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
        <div className=''>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                <div className=''>
                    {
                        travelData.map(travel => <TravelCards
                            key={travel.id}
                            travel={travel}
                        ></TravelCards>)
                    }
                </div>
                <div>
                    {
                        lifeStyle.map(life => <LifeStyleCards
                            key={life.id}
                            life={life}
                        ></LifeStyleCards>)
                    }
                </div>
                <div>
                    {
                        healthNews.map(health => <HealthNewsCards
                            key={health.id}
                            health={health}
                        ></HealthNewsCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default News;