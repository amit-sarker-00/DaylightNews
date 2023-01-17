import React, { useState } from "react";

const VatingNews = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [voteCount, setVoteCount] = useState({
        Yes: 0,
        No: 0,
        No_Opinion: 0
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

    return (
        <div>
            <h1>Online Vote</h1>
            <div className="w-60">

                <div className="bg-gray-200 rounded-md">
                    <label className={`flex justify-between p-2 cursor-pointer rounded-md `} htmlFor="Yes">
                        <div className="flex gap-2">
                            <input onClick={() => handleVote("Yes")} type="radio" name="vote" value='Yes' id="Yes" />
                            Yes
                        </div>
                        <p>{voteCount.Yes}</p>
                        <p>{option1Percent ? `${option1Percent.toFixed(0)}%` : '0%'}</p>
                    </label>
                </div>
                <div className="bg-gray-200 my-2 rounded-md">
                    <label className={`flex justify-between p-2 cursor-pointer rounded-md`} htmlFor="No">
                        <div className="flex gap-2">
                            <input onClick={() => handleVote("No")} type="radio" name="vote" value='No' id="No" />
                            No
                        </div>
                        <p>{voteCount.No}</p>
                        <p>{option2Percent ? `${option2Percent.toFixed(0)}%` : '0%'}</p>
                    </label>
                </div>
                <div className="bg-gray-200  rounded-md">
                    <label className={`flex justify-between p-2 cursor-pointer rounded-md`} htmlFor="No-Opinion">
                        <div className="flex gap-2">
                            <input onClick={() => handleVote("No_Opinion")} type="radio" name="vote" value='No-Opinion' id="No-Opinion" />
                            No Opinion
                        </div>
                        <p>{voteCount.No_Opinion}</p>
                        <p>{option3Percent ? `${option3Percent.toFixed(0)}%` : '0%'}</p>
                    </label>
                </div>


            </div>
            <div>
                <button onClick={() => handleVote("option2")}></button>

            </div>

        </div>
    );
};

export default VatingNews;
