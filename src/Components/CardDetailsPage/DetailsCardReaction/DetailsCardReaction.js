import React, { useState } from 'react';

import { SlEmotsmile } from 'react-icons/sl';
import { BsEmojiFrown } from 'react-icons/bs';
import { BsFillEmojiAngryFill } from 'react-icons/bs';
import { BsEmojiSunglassesFill } from 'react-icons/bs';
import { BsEmojiNeutral } from 'react-icons/bs';

const DetailsCardReaction = ({ detail, reactions, refetch }) => {

    const [emojiCount, setEmojiCount] = useState({
        smileEmoji: 8,
        frownEmoji: 5,
        angryEmoji: 3,
        sunglasEmoji: 9,
        naturalEmoji: 5,
    });

    const handleVote = option => {
        setEmojiCount({
            ...emojiCount,
            [option]: parseInt(emojiCount[option] + 1)
        });

        const data = {
            reactionNewsId: detail?._id,
            smileEmoji: {
                ...emojiCount,
                [option]: parseInt(emojiCount[option] + 1)
            },
            frownEmoji: {
                ...emojiCount,
                [option]: parseInt(emojiCount[option] + 1)
            },
            angryEmoji: {
                ...emojiCount,
                [option]: parseInt(emojiCount[option] + 1)
            },
            sunglasEmoji: {
                ...emojiCount,
                [option]: parseInt(emojiCount[option] + 1)
            },
            naturalEmoji: {
                ...emojiCount,
                [option]: parseInt(emojiCount[option] + 1)
            },
        }

        if (option) {
            fetch(`${process.env.REACT_APP_API_URL}reactions?id=${detail?._id}`, {
                method: 'PUT', headers: {
                    'content-type': 'application/json'
                }, body: JSON.stringify(data)
            }).then(res => res.json()).then(result => {
                console.log(result);
                refetch()

            })
        }

    };

    console.log(reactions);

    return (
        <div className='mx-auto text-center'>
            <h1 className='text-xl font-semibold py-4'>Your Reaction on this post</h1>
            <div className='w-full lg:w-80 mx-auto  flex gap-2 m-1 flex-col md:flex-row'>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <SlEmotsmile onClick={() => handleVote("smileEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{reactions?.smileEmoji}</p>
                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsEmojiFrown onClick={() => handleVote("frownEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{reactions?.frownEmoji}</p>

                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsFillEmojiAngryFill onClick={() => handleVote("angryEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{reactions?.angryEmoji}</p>

                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsEmojiSunglassesFill onClick={() => handleVote("sunglasEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{reactions?.sunglasEmoji}</p>

                </div>
                <div className='border py-2 lg:py-4 px-2 lg:px-6'>
                    <BsEmojiNeutral onClick={() => handleVote("naturalEmoji")} className='mx-auto cursor-pointer m-1 text-yellow-800 text-xl' />
                    <p>{reactions?.naturalEmoji}</p>

                </div>
            </div>

        </div>
    );
};

export default DetailsCardReaction;
