import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SearchCardData from './SearchCardData';

const SearchData = () =>
{
    const { searchContent } = useContext(AuthContext)

    const { data: searchDatas, isLoading } = useQuery({
        queryKey: [ 'searchNews', searchContent ],
        queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }searchNews?search=${ searchContent }`).then(res => res.json())
    })


    return (
        <div>
            <h1>Search on {searchContent}, Found-Items: {searchDatas?.length}</h1>
            <div>
                {isLoading && <p className='text-center'>Loading....</p>}
                {searchContent && searchDatas?.length === 0 && <div className='text-red-600 w-full flex items-center justify-center h-36 text-center text-xl font-semibold'>
                    No data found! please search another keyword
                </div>}
            </div>
            <div className=' mt-4 flex flex-col gap-5 mb-8 '>
                {searchDatas?.map(searchDt => <SearchCardData key={searchDt._id} searchData={searchDt} />)}
            </div>
        </div>
    );
};

export default SearchData;