import React, { useState } from "react";

const VatingOptions = ({ news }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [voteCount, setVoteCount] = useState({
        Yes: 8,
        No: 5,
        No_Opinion: 2
    });

    const handleVote = option => {
        setSelectedOption(option);
        setVoteCount({
            ...voteCount,
            [option]: voteCount[option] + 1
        });
    };

    const totalVotes = Object.values(voteCount).reduce((a, b) => a + b, 0);
    const option1Percent = (voteCount.Yes / totalVotes) * 100;
    const option2Percent = (voteCount.No / totalVotes) * 100;
    const option3Percent = (voteCount.No_Opinion / totalVotes) * 100;


    const handleVoteSubmit = (event) => {
        alert(event)
        setSelectedOption(null)
        setDisabled(true)
    }

    return (
        <div>
            <div className="mt-3 select-none">

                <div className="bg-gray-200 rounded-md">
                    <label className={`flex  justify-between p-2 cursor-pointer rounded-md `}   >
                        <div className="flex gap-2">
                            <input disabled={disabled} onClick={() => handleVote("Yes")} type="radio" name={news.id} />
                            Yes
                        </div>
                        <p>{voteCount.Yes}</p>
                        <p>{option1Percent ? `${option1Percent.toFixed(0)}%` : '0%'}</p>
                    </label>
                </div>
                <div className="bg-gray-200 my-2 rounded-md">
                    <label className={`flex justify-between p-2 cursor-pointer rounded-md`} >
                        <div className="flex gap-2">
                            <input disabled={disabled} onClick={() => handleVote("No")} type="radio" name={news.id} />
                            No
                        </div>
                        <p>{voteCount.No}</p>
                        <p>{option2Percent ? `${option2Percent.toFixed(0)}%` : '0%'}</p>
                    </label>
                </div>
                <div className="bg-gray-200  rounded-md">
                    <label className={`flex justify-between p-2 cursor-pointer rounded-md`} >
                        <div className="flex gap-2">
                            <input disabled={disabled} onClick={() => handleVote("No_Opinion")} type="radio" name={news.id} />
                            No Opinion
                        </div>
                        <p>{voteCount.No_Opinion}</p>
                        <p>{option3Percent ? `${option3Percent.toFixed(0)}%` : '0%'}</p>
                    </label>
                </div>

                <div className=" flex justify-end mt-3 mb-5">
                    <button disabled={!selectedOption} onClick={() => handleVoteSubmit(news.id)} className="btn rounded-full btn-sm ">Vote</button>
                </div>
            </div>


        </div>
    );
};

export default VatingOptions;
