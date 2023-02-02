import React, { useEffect, useState } from 'react';
import "../SpacialNews/SpacialNews.css"

const SpacialNews = () => {


    const [bannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`sylet.json`)
            .then((res) => res.json())
            .then((data) => {
                setBannerData(data);
                setLoading(false);
            });
    }, []);
    console.log(bannerData)

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='flex    max-w-[1440px]mx-auto'>
                <div className=''>
                    <h1 className='text  '>Spacial News</h1>
                </div>
                <div className='w-full flex'>



                    <div className='flex '>
                        <marquee direction="left"
                            onmousedown="this.stop();"
                            onmouseup="this.start();">
                            {bannerData.map((item) => (
                                <> {item?.title} || </>
                            ))}
                        </marquee>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SpacialNews;