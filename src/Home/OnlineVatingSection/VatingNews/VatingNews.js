import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import VatingOptions from './VatingOptions';

const VatingNews = () => {
    const [vatingNews, setVatingNews] = useState([]);
    useEffect(() => {
        fetch('travelData.json').then(res => res.json()).then(result => {
            setVatingNews(result)
        })
    }, []);
    return (
        <div>
            <Link className='flex text-xl font-semibold hover:text-red-600 transition-all gap-2'>Online Voting <span><BsArrowUpRightSquareFill className='text-red-600 mt-1' /></span></Link>
            <div className="mt-5">
                <Splide
                    aria-label=""
                    options={{
                        autoplay: true,

                        rewind: true,
                        arrows: false,
                        pagination: false,
                        speed: "2000",
                    }}
                >
                    {vatingNews.map((vatingNews) => (
                        <SplideSlide className='px-1' key={vatingNews.id}>
                            <div className="">
                                <img
                                    className="h-52 w-full rounded-t-xl object-cover"
                                    src={vatingNews.picture}
                                    alt=""
                                />
                                <p>{vatingNews?.description.slice(0, 215)}</p>
                            </div>

                            <div className=''>
                                <VatingOptions news={vatingNews} />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default VatingNews;