import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SearchCardData from './SearchCardData';

const SearchData = () => {
    const { searchContent } = useContext(AuthContext)
    const [searchDatas, setSearchDatas] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}searchNews?search=${searchContent}`).then(res => res.json()).then(result => {
            setSearchDatas(result);
        })


    }, [searchContent]);
    return (
        <div>
            <h1>Search on "{searchContent}"</h1>
            <div>
                {searchContent && searchDatas?.length === 0 && <div className='text-red-600 w-full flex items-center justify-center h-36 text-center text-xl font-semibold'>
                    {/* No data found! please search another keyword */}
                </div>}
            </div>
            <div className='md:grid xl:grid-cols-3 md:grid-cols-2 flex flex-col mb-8 items-center gap-3'>
                {searchDatas?.map(searchDt => <SearchCardData key={searchDt._id} searchData={searchDt} />)}
            </div>
        </div>
    );
};

export default SearchData;