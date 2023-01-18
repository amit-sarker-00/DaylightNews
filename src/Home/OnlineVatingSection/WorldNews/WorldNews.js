import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';
import SingleCard from './SigleCard/SingleCard';
import RightSide4Card from './RightSide4Card/RightSide4Card';
import HorizentalSection from './HorizentaSection/HorizentalSection';

const WorldNews = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch(`WorldNews.json`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])


    return (
        <div>
            <Link className='flex  text-xl font-semibold gap-2 hover:text-red-600 transition-all'>World <span><BsArrowUpRightSquareFill className='text-red-600 mt-1' /></span></Link>

            <div className='flex xl:flex-row flex-col bg-r'>
                <div className='mt-5 w-full lg:w-[800px] '>

                    {
                        datas && datas.slice(0, 1).map(data => <SingleCard data={data} key={data?.title} />)
                    }
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            datas && datas.slice(6, 9).map(data => <HorizentalSection data={data} key={data?.title} />)
                        }

                    </div>

                </div>
                <div className='mt-5 w-[100%] xl:w-96 flex flex-row xl:flex-col '>
                    {
                        datas && datas.slice(1, 5).map(data => <RightSide4Card data={data} key={data?.title} />)
                    }
                </div>

            </div>



        </div>
    );
};

export default WorldNews;