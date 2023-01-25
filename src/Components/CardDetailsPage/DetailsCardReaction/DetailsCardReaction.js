import React, { useState } from 'react';

import { SlEmotsmile } from 'react-icons/sl';
import { BsEmojiFrown } from 'react-icons/bs';
import { BsFillEmojiAngryFill } from 'react-icons/bs';
import { BsEmojiSunglassesFill } from 'react-icons/bs';
import { BsEmojiNeutral } from 'react-icons/bs';

const DetailsCardReaction = ({ detail, reactions, reCall }) => {

    const [smileEmoji, setSmileEmoji] = useState(reactions?.smileEmoji > 0 ? reactions?.smileEmoji : 0);
    const [frownEmoji, setFrownEmoji] = useState(reactions?.frownEmoji > 0 ? reactions?.frownEmoji : 0);
    const [angryEmoji, setAngryEmoji] = useState(reactions?.angryEmoji > 0 ? reactions?.angryEmoji : 0);
    const [sunglasEmoji, setSunglasEmoji] = useState(reactions?.sunglasEmoji > 0 ? reactions?.sunglasEmoji : 0);
    const [naturalEmoji, setNaturalEmoji] = useState(reactions?.naturalEmoji > 0 ? reactions?.naturalEmoji : 0);

    const data = {
        smileEmoji, frownEmoji, angryEmoji, sunglasEmoji, naturalEmoji
    }
    console.log(reactions);
    const updateReactionFN = () => {
        fetch(`${process.env.REACT_APP_API_URL}reactions?id=${detail?._id}`, {
            method: 'PUT', headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            reCall()

        })
    }
    const handleVote = option => {
        if (option === 'smileEmoji') {
            setSmileEmoji(smileEmoji + 1)
            updateReactionFN()
        }
        if (option === 'frownEmoji') {
            setFrownEmoji(frownEmoji + 1)
            updateReactionFN()

        }
        if (option === 'angryEmoji') {
            setAngryEmoji(angryEmoji + 1)
            updateReactionFN()

        }
        if (option === 'sunglasEmoji') {
            setSunglasEmoji(sunglasEmoji + 1)
            updateReactionFN()

        }
        if (option === 'naturalEmoji') {
            setNaturalEmoji(naturalEmoji + 1)
            updateReactionFN()

        }


    };


    return (
        <div className='mx-auto text-center'>
            <h1 className='text-xl font-semibold py-4'>Your Reaction on this post</h1>
            <div className='w-full lg:w-80 mx-auto  flex gap-2 m-1 flex-col md:flex-row'>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <SlEmotsmile onClick={() => handleVote("smileEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{smileEmoji}</p>
                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsEmojiFrown onClick={() => handleVote("frownEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{frownEmoji}</p>

                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsFillEmojiAngryFill onClick={() => handleVote("angryEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{angryEmoji}</p>

                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsEmojiSunglassesFill onClick={() => handleVote("sunglasEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{sunglasEmoji}</p>

                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsEmojiNeutral onClick={() => handleVote("naturalEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{naturalEmoji}</p>

                </div>
            </div>

        </div>
    );
};

export default DetailsCardReaction;