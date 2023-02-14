import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../../../api/auth";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import SmallSpinner from "../../../Components/Spinner/SmallSpinner";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const WriterProfileUpdateModal = ({ handelUpdateProfile }) => {
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
  }, [user]);

  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black bg-white  w-10/12 max-w-5xl">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handelUpdateProfile}
            className="space-y-1 ng-untouched ng-pristine ng-valid "
          >
            <div className="text-center">
              <h1 className="text-xl"> Update Your Shop!</h1>
            </div>

            <div className="space-y-3 text-sm ">
              <label className="block text-sm">Shop Name</label>
              <input
                type="text"
                name="shopname"
                placeholder="Enter Your Shop Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
                defaultValue={profile?.email}
                disabled
              />
            </div>

            <div className="space-y-3 text-sm">
              <label className="block text-sm">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Since Year"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                defaultValue={profile?.name}
              />
            </div>





            <div className="py-2 w-full">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="file-input  file-input-success w-full "
                defaultValue={profile?.image}
              />
            </div>
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-5 font-semibold rounded-lg text-white bg-[#3BB77E] "
              >
                {loading ? <SmallSpinner /> : "Submit & Update"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriterProfileUpdateModal;
