import React from 'react';
import VatingNews from './VatingNews/VatingNews';
import WorldNews from './WorldNews/WorldNews';

const OnlineVatingSection = () => {
    return (
        <section className='flex xl:flex-row flex-col'>
            <div className='w-full xl:w-[65%]'>
                <WorldNews />
            </div>

            <div className='w-full xl:sm:w-[35%]'>
                <VatingNews />
            </div>
        </section>
    );
};

export default OnlineVatingSection;