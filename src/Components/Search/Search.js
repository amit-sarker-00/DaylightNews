import React, { useContext, useEffect, useState } from 'react';

// import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Search = () => {

  


    const [data, setData] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterr, setFilter] = useState('');

   

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}news`)
            .then((res) => res.json())
            .then((data) => {
                setSearchApiData(data)
            });
    }, []);



    const handleFilter = (e) => {
        // e.preventDefault()
        if (e?.length > 1) {
            const filterResult = searchApiData.filter(item => item?.title?.toLowerCase().includes(e?.toLowerCase()) || item?.category?.toLowerCase().includes(e?.toLowerCase()))
            setData(filterResult)
            // setFilter(e.target.value)
        } else {
            console.log("eeee", e)
            setData([])
        }
        setFilter(e)
    }



    console.log(data)

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={filterr}
                    className="border"
                    onChange={e => handleFilter(e.target.value)}
                />

            </form>
            <ul>
                {data.length >= 0 && data?.map(data => {
                    return (
                        <li key={data?._id}>{data?.title}</li>
                    )
                }

                )}
            </ul>
        </div>
    );
};

export default Search;