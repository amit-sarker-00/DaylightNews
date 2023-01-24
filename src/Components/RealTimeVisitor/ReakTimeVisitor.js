import React, { useEffect, useState } from 'react';

const ReakTimeVisitor = () => {


    const [visits, setVisits] = useState(0);

    useEffect(() => {
        setVisits(visits + 1);
    }, []);


    return (
        <div>
            <p>Number of visits: {visits}</p>
        </div>
    );
};

export default ReakTimeVisitor;