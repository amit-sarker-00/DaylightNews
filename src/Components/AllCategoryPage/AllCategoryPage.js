import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
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

    const { data: categoryNews ,isLoading} = useQuery({
        queryKey: [ 'categoryNews', params?.id ],
        queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }categoryNews?category=${params?.id}`)
            .then((res) => res.json())
    })
 
   

    return (
        <div>
             {searchContent ? <SearchData /> : <>
                <div className='w-full '>
                    {
                        isLoading && <div className='grid lg:grid-cols-3 sm:grid-cols-2'>
                            {isLoading && <SkeletonLoading cards={6} />}

                        </div>
                    }
                    <div>
                        {
                            categoryNews && categoryNews?.slice(0, 1).map(data => <SingleImage data={data} key={data?._id} />)
                        }
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-5 gap-5'>
                        {
                            categoryNews && categoryNews?.slice(1, 6).map(data => <HorizontalThreeImage data={data} key={data?._id} />)
                        }

                    </div>
                    <div className='grid grid-cols-1 '>
                        {
                            categoryNews && categoryNews?.slice(7, 200).map((data, i) => <AllCard data={data} key={data?._id} i={i} />)
                        }

                    </div>
                </div>
      </>}
        </div>
      
    );
};

export default AllCategoryPage;