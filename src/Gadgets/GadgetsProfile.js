import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { updateWriter } from '../api/services';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const GadgetsProfile = () => {
    const { user } = useContext(AuthContext);

    fetch(`${process.env.REACT_APP_API_URL}gadgets/${user?.email}`,{
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

    return (
        <div>
            <h2>Gadgets profile</h2>
        </div>
    );
};

export default GadgetsProfile;