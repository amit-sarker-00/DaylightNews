import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import GadgetProfileCard from './GadgetProfileCard';

const GadgetsProfile = () => {
    const { user } = useContext(AuthContext);
    const [gadgets,setGadgets]=useState([])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}gadgets/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setGadgets(data));
            
        
    },[user.email])
    console.log(gadgets)


     return (
        <div className='grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 md:w-11/12 w-full mx-auto gap-4 md:mt-0 mt-8'>
            {
                gadgets.map(gadget => <GadgetProfileCard 
                key={gadget._id}
                gadget={gadget}
                />)
            }

        </div>
    );
};

export default GadgetsProfile;