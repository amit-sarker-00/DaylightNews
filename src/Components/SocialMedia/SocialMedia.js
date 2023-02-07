import React from "react";
import { FaRegComment, FaShare } from "react-icons/fa";
import { MdOutlineAddReaction } from "react-icons/md";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="w-full  max-w-lg mx-auto rounded overflow-hidden border shadow-sm m-4">
      <div className="px-6 py-4">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://i.ibb.co/N2NPBn1/photo-1633332755192-727a05c4013d.jpg"
            alt=""
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Author Name</p>
            <p className="text-gray-600">Date</p>
          </div>
        </div>
        <img
          className="w-full mt-4"
          src="https://i.ibb.co/RS61gNB/cat-sweet-kitty-animals-57416.jpg"
          alt=""
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">Why cat Loves to sleep?</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit
            corporis ex praesentium iure. Illum esse deserunt tempora dolor
            quasi.
          </p>
          <span className="text-red-500 link-hover ">
            <Link> Read More</Link>
          </span>
        </div>
        <div className="px-6 py-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <MdOutlineAddReaction></MdOutlineAddReaction>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <FaRegComment></FaRegComment>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <FaShare></FaShare>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
