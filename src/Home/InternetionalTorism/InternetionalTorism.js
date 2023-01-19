import React, { useEffect, useState } from 'react';
import InternetionalTorismOne from './InternetionalTorismOne';
import InternetionalTorismThree from './InternetionalTorismThree';
import InternetionalTorismTwo from './InternetionalTorismTwo';
import Aos from 'aos';

const InternetionalTorism = () => {
    const [srilankaa, setSrilanka] = useState([])
    const [bangladesh, setBangladesh] = useState([])
    const [duvaiImg, setDubaiImg] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news`)
            .then((res) => res.json())
            .then((result) => {
                const fashionNews = result?.filter(fashion => fashion?.category === 'travel')
                setSrilanka(fashionNews.slice(0, 1))
                setBangladesh(fashionNews.slice(0, 2))
                setDubaiImg(fashionNews.slice(0, 3))
                console.log(result);
            });
    }, []);
    useEffect(() => {
        fetch('InternationalNewsImg/internetionalNewsImage-1.json').then(res => res.json()).then(result => {
            setSrilanka(result)
        })
    }, []);

    // useEffect(() => {
    //     fetch('InternationalNewsImg/internetionalNewsImg-2.json').then(res => res.json()).then(result => {
    //         setBangladesh(result)
    //     })
    // }, []);

    // useEffect(() => {
    //     fetch('InternationalNewsImg/internationalNews-3.json').then(res => res.json()).then(result => {
    //         setDubaiImg(result)
    //     })
    // }, []);

    // useEffect(() => {
    //     Aos.init()
    // }, [])


    return (
        <div className='my-8'>
            <div
                className=' text-black font-semibold md:text-3xl text-xl uppercase py-4 sm:text-left text-center'>
                Internetional Tories News
            </div>

            <div className=''>
                <div className='flex overflow-hidden'>
                    <div className='md:w-2/3 w-full'>
                        {
                            srilankaa.map(srilanka =>
                                <InternetionalTorismOne
                                    key={srilanka.id}
                                    srilanka={srilanka}
                                ></InternetionalTorismOne>)
                        }
                    </div>
                    <div className='w-1/3 hidden md:block '>
                        {
                            bangladesh.map(bangla =>
                                <InternetionalTorismTwo
                                    key={bangla.id}
                                    bangla={bangla}
                                ></InternetionalTorismTwo>)
                        }
                    </div>
                </div>
                <div className='md:flex block '>
                    {
                        duvaiImg.map(dubai =>
                            <InternetionalTorismThree
                                key={dubai.id}
                                dubai={dubai}
                            ></InternetionalTorismThree>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InternetionalTorism;