import React, { useState } from "react";

const VatingOptions = ({ news, user, refetch }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [voteBtnDisabled, setvoteBtnDisabled] = useState(false);
    const [voteCount, setVoteCount] = useState({
        Yes: news?.vote?.Yes,
        No: news?.vote?.No,
        No_Opinion: news?.vote?.No_Opinion
    });

    const handleVote = option => {
        setSelectedOption(option);

    };

    const totalVotes = Object.values(voteCount).reduce((a, b) => a + b, 0);
    const option1Percent = (voteCount.Yes / totalVotes) * 100;
    const option2Percent = (voteCount.No / totalVotes) * 100;
    const option3Percent = (voteCount.No_Opinion / totalVotes) * 100;


    const handleVoteSubmit = (event) => {
        const data = {

            Yes: {
                ...voteCount,
                [selectedOption]: voteCount[selectedOption] + 1
            },
            No: {
                ...voteCount,
                [selectedOption]: voteCount[selectedOption] + 1
            },
            No_Opinion: {
                ...voteCount,
                [selectedOption]: voteCount[selectedOption] + 1
            }
        }
        fetch(`${process.env.REACT_APP_API_URL}votingNews?id=${event}`, {
            method: 'PUT', headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            console.log(result);
            setvoteBtnDisabled(true)
            refetch()
        })

        setVoteCount({
            ...voteCount,
            [selectedOption]: voteCount[selectedOption] + 1
        });

    }

    return (
        <div>
            <div className="mt-3 select-none">

                <div className="bg-gray-200 rounded-md">
                    <label className={`flex  justify-between p-2 cursor-pointer rounded-md `}   >
                        <div className="flex gap-2">
                            <input disabled={voteBtnDisabled} onClick={() => handleVote("Yes")} type="radio" name={news._id} />
                            Yes
                        </div>

                        <p>{option1Percent ? `${parseInt(option1Percent)}%` : '0%'}</p>
                    </label>
                </div>
                <div className="bg-gray-200 my-2 rounded-md">
                    <label className={`flex justify-between p-2 cursor-pointer rounded-md`} >
                        <div className="flex gap-2">
                            <input disabled={voteBtnDisabled} onClick={() => handleVote("No")} type="radio" name={news._id} />
                            No
                        </div>

                        <p>{option2Percent ? `${parseInt(option2Percent)}%` : '0%'}</p>
                    </label>
                </div>
                <div className="bg-gray-200  rounded-md">
                    <label className={`flex justify-between p-2 cursor-pointer rounded-md`} >
                        <div className="flex gap-2">
                            <input disabled={voteBtnDisabled} onClick={() => handleVote("No_Opinion")} type="radio" name={news._id} />
                            No Opinion
                        </div>

                        <p>{option3Percent ? `${parseInt(option3Percent)}%` : '0%'}</p>
                    </label>
                </div>

                <div className=" flex justify-end mt-3 mb-5">
                    <button disabled={!selectedOption || voteBtnDisabled} onClick={() => handleVoteSubmit(news._id)} className="btn rounded-full btn-sm ">Vote</button>

                </div>
            </div>


        </div>
    );
};

export default VatingOptions;
