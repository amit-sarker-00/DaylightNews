import React, { useEffect, useState } from 'react';
import InternetionalTorismOne from './InternetionalTorismOne';
import InternetionalTorismThree from './InternetionalTorismThree';
import InternetionalTorismTwo from './InternetionalTorismTwo';
import Aos from 'aos';
import SkeletonLoading from '../../Components/SkeletonLoading/SkeletonLoading';

const InternetionalTorism = () => {
    const [srilankaa, setSrilanka] = useState([])
    const [bangladesh, setBangladesh] = useState([])
    const [duvaiImg, setDubaiImg] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news`)
            .then((res) => res.json())
            .then((result) => {
                const fashionNews = result?.filter(fashion => fashion?.category === 'travel')
                setSrilanka(fashionNews?.slice(0, 1))
                setBangladesh(fashionNews?.slice(0, 2))
                setDubaiImg(fashionNews?.slice(0, 3))

            });
    }, []);




    return (
        <div className='my-8'>
            <div
                className=' text-red-600 font-semibold md:text-3xl text-xl uppercase py-4 sm:text-left text-center'>
                Internetional Tories News
            </div>

            <div className=''>
                <div className='flex overflow-hidden'>
                    <div className='md:w-2/3 w-full'>
                        {srilankaa?.length === 0 && <SkeletonLoading cards={1} />}

                        {
                            srilankaa.map(srilanka =>
                                <InternetionalTorismOne
                                    key={srilanka?._id}
                                    srilanka={srilanka}
                                ></InternetionalTorismOne>)
                        }
                    </div>
                    <div className='w-1/3 hidden md:block '>
                        {bangladesh?.length === 0 && <SkeletonLoading cards={1} />}

                        {
                            bangladesh.map(bangla =>
                                <InternetionalTorismTwo
                                    key={bangla?._id}
                                    bangla={bangla}
                                ></InternetionalTorismTwo>)
                        }
                    </div>
                </div>
                <div className='md:flex block '>
                    {duvaiImg?.length === 0 && <SkeletonLoading cards={5} />}

                    {
                        duvaiImg.map(dubai =>
                            <InternetionalTorismThree
                                key={dubai?._id}
                                dubai={dubai}
                            ></InternetionalTorismThree>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InternetionalTorism;