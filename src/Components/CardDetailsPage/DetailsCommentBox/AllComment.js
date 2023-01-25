import React from "react";
import { Link } from "react-router-dom";

function AllComment({ comment }) {
    const { name, userImage, message, date, time } = comment.comment;
    return (
        <div>
            <div className="flex space-x-4 py-3">
                <img
                    alt=""
                    src={userImage}
                    className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                    <div rel="noopener noreferrer" className="text-sm font-semibold">
                        {name}
                    </div>
                    <span className="text-xs dark:text-gray-400">{message}</span>
                    <span className="text-xs dark:text-gray-400">
                        {date} {time}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AllComment;
