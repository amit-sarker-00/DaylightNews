import React, { useEffect, useState } from 'react';
import EntertainmentNewsCard from '../../EntertainmentNewsCard/EntertainmentNewsCard';
import EntertainmetnNewsCommentImage from '../EntertainmentNewCommentCard/EntertianmentNewsCommentImage/EntertainmetnNewsCommentImage';
import EntertainmentNewsComment from '../EntertainmentNewsComment/EntertainmentNewsComment';

const EntertainmentNews = () => {
    const [entertainments, setEntertainment] = useState([])
    const [entertainmentComment, setEntertainmentComment] = useState([])


    useEffect(() => {
        fetch('internationalNews.json')
            .then(res => res.json())
            .then(data => setEntertainment(data))
    }, [])

    useEffect(() => {
        fetch('entertainmentNewsComment.json')
            .then(res => res.json())
            .then(data => setEntertainmentComment(data))
    }, [])

    return (

        <div
            className='flex md:justify-start justify-center mx-auto  my-12'>
            <div
                className='w-3/4 '>
                <h2
                    className=' text-black font-semibold md:text-3xl text-xl py-8 px-5 w-[100px] text-center'>
                    Entertainment
                </h2>
                <div
                    className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        entertainments.map(entertainment =>
                            <EntertainmentNewsCard
                                key={entertainment.id}
                                entertainment={entertainment}
                            ></EntertainmentNewsCard>)
                    }
                </div>
            </div>
            <div className=' w-1/3 hidden sm:block sticky top-5 h-full gap-3'>
                <div>
                    <div>
                        <h2
                            className='text-lg font-bold text-black'>
                            MOST COMMENT...
                        </h2>
                        <h2
                            className='w-[50px] h-[5px]  bg-red-500 my-1 '>
                        </h2>
                    </div>
                    <div>
                        {
                            entertainmentComment.map(comment =>
                                <EntertainmentNewsComment
                                    key={comment.id}
                                    comment={comment}
                                ></EntertainmentNewsComment>)
                        }
                        {
                            entertainmentComment.slice(0, 1).map(comment =>
                                <EntertainmetnNewsCommentImage
                                    key={comment.id}
                                    comment={comment}
                                ></EntertainmetnNewsCommentImage>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EntertainmentNews;