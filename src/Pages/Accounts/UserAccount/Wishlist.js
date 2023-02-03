import React, { useContext, useEffect, useState } from "react";
import { deleteWishlist, getWishlist } from "../../../api/services";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Wishlist = () => {
  const [allWishlists, setallWishlists] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    getWishlist(user?.email).then((data) => {
      setallWishlists(data);
      setLoading(false);
    });
  }, [user, loading]);
  // console.log(allWishlists);

  const handleDeteteComment = (id) => {
    deleteWishlist(id).then((data) => {
      console.log(data);
    });
  };

  if (allWishlists.length === 0) {
    return (
      <div className="text-center text-3xl py-5 px-10">
        <h1>You have no Comments</h1>
      </div>
    );
  }

  return (
    <div>
      {allWishlists.map((wishlist) => (
        <div className="flex flex-col justify-between flex-1 mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{wishlist.name}</h1>
                <p className="text-gray-500 text-sm">{wishlist.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{wishlist.postTitle}</h1>
                <p className="text-gray-500 text-sm">{wishlist.postId}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{wishlist.wishlist}</h1>
                <p className="text-gray-500 text-sm">{wishlist.commentId}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{wishlist.createdAt}</h1>
                <p className="text-gray-500 text-sm">{wishlist.commentId}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
