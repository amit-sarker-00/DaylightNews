import React from "react";

function AllComment ({ comment })
{
    const { name, userImage, message, date, time } = comment.comment;
    return (
        <div className="border border-gray-200 dark:border-gray-700   rounded-md mt-2 mb-2">
            <div className="flex space-x-4 ">
                <img
                    alt=""
                    src={userImage}
                    className="object-cover w-12 h-12 md:w-20 md:h-20 rounded-md shadow dark:bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                    <div rel="noopener noreferrer" className="text-sm font-semibold">
                        <h1 className="text-gray-500 text-start">   {name}</h1>
                    </div>
                    <span className="text-xs text-gray-700 font-bold text-start">{message}</span>
                    <span className="text-xs dark:text-gray-400">
                        {date} {time}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AllComment;