import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchData from "../../Components/SearchData/SearchData";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';
import AllCard from './AllCard';
import HorizontalThreeImage from './horizontalThreeImage';
import SingleImage from './SingleImage';

const AllCategoryPage = () => {
    const { searchContent } = useContext(AuthContext)
    const params = useParams()
    console.log(params);

    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news`)
            .then((res) => res.json())
            .then((result) => {
                const categoryNews = result?.filter(category => category?.category === params?.id)
                setDatas(categoryNews)

            });
    }, [params?.id]);

    console.log(datas);

    return (
        <div>
             {searchContent ? <SearchData /> : <>
                <div className='w-full '>
                    {
                        datas?.length === 0 && <div className='grid lg:grid-cols-3 sm:grid-cols-2'>
                            {datas?.length === 0 && <SkeletonLoading cards={6} />}

                        </div>
                    }
                    <div>
                        {
                            datas && datas?.slice(0, 1).map(data => <SingleImage data={data} key={data?._id} />)
                        }
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-5 gap-5'>
                        {
                            datas && datas?.slice(1, 6).map(data => <HorizontalThreeImage data={data} key={data?._id} />)
                        }

                    </div>
                    <div className='grid grid-cols-1 '>
                        {
                            datas && datas?.slice(7, 200).map((data, i) => <AllCard data={data} key={data?._id} i={i} />)
                        }

                    </div>
                </div>
      </>}
        </div>
      
    );
};

export default AllCategoryPage;