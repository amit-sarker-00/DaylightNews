import React, { useContext, useEffect, useState } from 'react';
import DetailsCard from './DetailsCard/DetailsCard';
import LatestNews from './LetestNews/LatestNews';
import { useParams } from 'react-router';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SearchData from '../SearchData/SearchData';





const CardDetailsPage = () => {
  const { searchContent } = useContext(AuthContext)


  const params = useParams()

  const [recentData, setRecentData] = useState([])
  const [detail, setDetail] = useState({});


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news/${params?.id}`)
      .then((res) => res.json())
      .then((result) => {
        setDetail(result)
      });
  }, [params?.id]);




  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}news`)
      .then((res) => res.json())
      .then((result) => {
        setRecentData(result?.slice(-5))
      });
  }, []);

  const { data: reactions, isLoading, refetch: reCall } = useQuery({
    queryKey: ['reactions', params?.id],
    queryFn: () => fetch(`${process.env.REACT_APP_API_URL}reactions/${params?.id}`).then(res => res.json())
  })

  const { data: singleNewsComment = [], refetch } = useQuery({
    queryKey: ['comment', params?.id],
    queryFn: () => fetch(`${process.env.REACT_APP_API_URL}comment/${params.id}`).then(res => res.json())
  })

  if (isLoading) {
    return <div className='w-full py-8 text-center font-bold'>Loading...</div>
  }

  return (
    <div>
      {searchContent ? <SearchData /> :
        <div className='flex w-full gap-0 lg:gap-5 h-full'>
          <div className='flex '>
            <DetailsCard reCall={reCall} singleNewsComment={singleNewsComment} detail={detail} refetch={refetch} reactions={reactions} />
          </div>
          <div>
            <h1 className='text-center text-xl font-semibold pb-5 hidden lg:block'>Latest News</h1>
            <div className='lg:w-[500px]  hidden lg:flex gap-3  flex-col'>
              {recentData?.length === 0 && <SkeletonLoading cards={4} />}

              {
                recentData && recentData.map(recent => <LatestNews recent={recent} key={recent._id} />)
              }
            </div>
            <div className='mt-10 hidden lg:block'>
              <img className='object-cover w-[500px] h-[700px]' src="https://cdn.ecommercedns.uk/files/8/242988/9/13322649/christmas-banner-1.png" alt="" />

            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default CardDetailsPage;