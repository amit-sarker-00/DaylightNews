import React from 'react';
import VatingNews from './VatingNews/VatingNews';
import WorldNews from './WorldNews/WorldNews';

const OnlineVatingSection = () => {
    return (
        <section className='flex'>
            <div className='sm:w-[65%]'>
                <WorldNews />
            </div>

            <div className='sm:w-[35%]'>
                <VatingNews />
            </div>
        </section>
    );
};

export default OnlineVatingSection;