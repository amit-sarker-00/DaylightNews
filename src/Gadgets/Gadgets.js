import React from 'react';
import "./gadgets.css"
import { useQuery } from '@tanstack/react-query';
import GadgetsCard from './GadgetsCard';

const Gadgets = () => {

    const { data: gadgets, isLoading } = useQuery({
        queryKey: ['gadgets'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}gadgets`)
            .then((res) => res.json())
    })
    // console.log(gadgets)

    if (isLoading) {
        return;
    }

    return (
        <div className="max-w-[1440px] mx-auto ">
            <div >
                {gadgets?.map((banner) =><GadgetsCard
                    key={banner._id}
                    banner={banner}
                />
                )}
            </div>
        </div>
    );
};

export default Gadgets;