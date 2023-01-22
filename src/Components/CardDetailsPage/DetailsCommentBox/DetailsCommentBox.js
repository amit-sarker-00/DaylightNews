import React, { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import { addComment } from "../../../api/services";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import AllComment from "./AllComment";

const DetailsCommentBox = ({ detail }) => {

    //   console.log(detail);
    const { _id, picture } = detail;
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = React.useState(false);
    const [comments, setComments] = React.useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}comment/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setComments(data);
            });
    }, [loading]);
    //   console.log(comments);
    const handleCommentBox = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const commentData = {
            userImage: user?.photoURL,
            picture,
            name,
            email,
            message,
            _id: detail._id,
            time: format(new Date(), "p"),
            date: format(new Date(), "PP"),
        };
        // console.log(commentData);
        addComment(commentData).then((data) => {
            toast.success("Comment Successfuly !");
            e.target.reset();
            setLoading(!loading);
        });
    };

    return (
        <div className="text-center w-full lg:w-[700px] mx-auto py-10 ">
            <h1 className="text-2xl text-red-500 ">.. Leave a comment ..</h1>
            <form onSubmit={handleCommentBox}>
                <div className="flex items-center  gap-6">
                    <div className="w-full  sm:w-[300px]">
                        <p className="text-left text-gray-500 py-1">Full Name*</p>
                        <input
                            className="w-full h-10"
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                        />
                    </div>
                    <div className="w-full sm:w-[300px]">
                        <p className="text-left text-gray-500 py-1">Email*</p>
                        <input
                            className="w-full h-10"
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                        />
                    </div>
                </div>
                <div className=" text-center w-full md:w-[623px] py-5">
                    <textarea
                        placeholder="Message"
                        name="message"
                        className="w-full textarea textarea-bordered p-5"
                        id=""
                        cols="10"
                        rows="5"
                    ></textarea>
                </div>

                <input
                    type="submit"
                    className="py-2 px-7 bg-red-600 text-white"
                    value="Submit Comment "
                />
            </form>
            {comments.map((comment) => (
                <AllComment key={comment?._id} comment={comment}></AllComment>
            ))}
        </div>
    );
};

export default DetailsCommentBox;
