import React, { useContext, useEffect, useState } from "react";
import { deleteComment, getComments } from "../../../api/services";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Comments = () => {
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    getComments(user?.email).then((data) => {
      setAllComments(data);
      setLoading(false);
    });
  }, [user, loading]);
  // console.log(allComments);

  const handleDeteteComment = (id) => {
    deleteComment(id).then((data) => {
      console.log(data);
    });
  };

  if (allComments.length === 0) {
    return (
      <div className="text-center text-3xl py-5 px-10">
        <h1>You have no Comments</h1>
      </div>
    );
  }

  return (
    <div>
      {allComments.map((comment) => (
        <div className="flex flex-col justify-between flex-1 mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{comment.name}</h1>
                <p className="text-gray-500 text-sm">{comment.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{comment.postTitle}</h1>
                <p className="text-gray-500 text-sm">{comment.postId}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{comment.comment}</h1>
                <p className="text-gray-500 text-sm">{comment.commentId}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{comment.createdAt}</h1>
                <p className="text-gray-500 text-sm">{comment.commentId}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
