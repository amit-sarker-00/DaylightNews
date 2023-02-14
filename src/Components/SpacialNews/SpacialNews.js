import React, { useEffect, useState } from 'react';
import "../SpacialNews/SpacialNews.css"
import Marquee from "react-fast-marquee";

const SpacialNews = () =>
{


    const [ bannerData, setBannerData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    useEffect(() =>
    {
        fetch(`sylet.json`)
            .then((res) => res.json())
            .then((data) =>
            {
                setBannerData(data);
                setLoading(false);
            });
    }, []);


    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='flex    max-w-[1440px]mx-auto'>
                <div className=''>
                    <h1 className='text'>Spacial News</h1>
                </div>

                <Marquee pauseOnHover >
                    {bannerData?.map((item, i) => (
                        <div key={i}> {item?.title} || </div>
                    ))}
                </Marquee>

            </div>
        </div>
    );
};

export default SpacialNews;