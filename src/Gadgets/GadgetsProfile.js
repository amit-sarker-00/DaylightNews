import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { updateWriter } from '../api/services';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const GadgetsProfile = () =>
{
    const { user } = useContext(AuthContext);
    const { data: orders, isLoading } = useQuery({
        queryKey: [ 'orders', user?.email ],
        queryFn: () => fetch(`${ process.env.REACT_APP_API_URL }orders?email=${ user?.email }`, {
        })
            .then((res) => res.json())
    })


    console.log(orders);


    return (
        <div>
            <h2>Gadgets profile</h2>
        </div>
    );
};

export default GadgetsProfile;