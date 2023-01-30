import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { getUser } from "../../../api/auth";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);

  const fetchProfile = () =>
    getUser(user?.email).then((data) => {
      setProfile(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProfile();
  }, [user, loading]);
  return (
    <div className=" md:max-w-xs w-full lg:max-w-xs px-10 md:px-0  lg:px-0">
      <div className="w-[900px]  flex flex-col justify-center lg:px-4 md:px-4 px-10 py-6 shadow-md rounded-xl  text-gray-900 bg-[#d1e8f2]">
        <img
          src={profile?.shopimage ? profile?.shopimage : user?.photoURL}
          alt=""
          className="w-32 h-32 "
        />
        <div className="space-y-4  divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <p className="text-[14px]">
              Since {profile?.since ? profile?.since : "2022"}
            </p>
            <h2 className="text-xl font-semibold text-[24px] space-y-1">
              {profile?.shopname ? profile?.shopname : user?.displayName}
            </h2>

            <p className="space-y-1 text-[14px]">
              {profile.description ? profile.description : "description...."}
            </p>
            <p className="space-y-1 text-[16px]font-bold">Follow Us</p>

            <div className="flex space-y-1">
              {/* <MapPinIcon className="h-10 w-10 text-[#3BB77E]" /> */}
              <p className="px-1">
                Address: {profile?.address ? profile?.address : "Bangladesh"}
              </p>
            </div>
            <div className="flex space-y-1">
              {/* <PhoneIcon className="h-5 w-5  text-[#3BB77E]" /> */}
              <p className="px-1">
                Call Us: {profile.phone ? profile.phone : "0123456789"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <WriterProfileUpdateModal handelUpdateProfile={handelUpdateProfile} /> */}
    </div>
  );
};

export default UserProfile;
