import React from 'react';

import { SlEmotsmile } from 'react-icons/sl';
import { BsEmojiFrown } from 'react-icons/bs';
import { BsFillEmojiAngryFill } from 'react-icons/bs';
import { BsEmojiSunglassesFill } from 'react-icons/bs';
import { BsEmojiNeutral } from 'react-icons/bs';

const DetailsCardReaction = () => {
    return (
        <div className='mx-auto text-center'>
            <h1 className='text-xl font-semibold py-4'>Your Reaction on this post</h1>
            <div className='w-full lg:w-80 mx-auto  flex gap-2 m-1 flex-col md:flex-row'>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <SlEmotsmile className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p className='text-sm'>0</p>
                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsEmojiFrown className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p className='text-sm'>0</p>

                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsFillEmojiAngryFill className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p className='text-sm'>0</p>

                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsEmojiSunglassesFill className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p className='text-sm'>0</p>

                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsEmojiNeutral className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p className='text-sm'>0</p>

                </div>
            </div>
        </div>
    );
};

export default DetailsCardReaction;