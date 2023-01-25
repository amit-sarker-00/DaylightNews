import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './SkeletonLoading.css'

const SkeletonLoading = ({ cards }) => {
    return Array(cards)
        .fill(0)
        .map((item, i) => (
            <div key={i} className="card-skeleton">
                <div className="top-col">
                    <Skeleton width={250} height={10} count={6} />
                </div>
                <div className="bottom-col">
                    <Skeleton count={1} />
                </div>
            </div>
        ));
};

export default SkeletonLoading;