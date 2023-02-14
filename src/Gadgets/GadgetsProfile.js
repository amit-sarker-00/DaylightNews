import { useQuery } from '@tanstack/react-query';
import React, { useContext, } from 'react';

import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import GadgetProfileCard from './GadgetProfileCard';

const GadgetsProfile = () => {
    const { user } = useContext(AuthContext);
    // const [gadgets,setGadgets]=useState([])

    // useEffect(()=>{
    //     fetch(`${process.env.REACT_APP_API_URL}gadgets/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => setGadgets(data));
    // },[user.email])
  
    const { data: gadgets, refetch } = useQuery({
        queryKey: ['gadgets'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}gadgets/${user?.email}`)
            .then((res) => res.json())
    })


     return (
        <div className='grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 md:w-11/12 w-full mx-auto gap-4 md:mt-0 mt-8'>
            {
                 gadgets?.map(gadget => <GadgetProfileCard 
                key={gadget._id}
                gadget={gadget}
                refetch={refetch}
                />)
            }

        </div>
    );
};

export default GadgetsProfile;