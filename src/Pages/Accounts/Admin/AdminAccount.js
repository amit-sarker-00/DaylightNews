import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getUser } from "../../../api/auth";
import { imageUpload } from "../../../api/imageUpload";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import WriterProfileUpdateModal from "../Writers/WriterProfileUpdateModal";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FcDonate } from "react-icons/fc";
import { BsCheckLg } from "react-icons/bs";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminAccount = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProfile = () =>
    getUser(user?.email).then((data) => {
      setProfile(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProfile();
  }, [user, loading]);
  const handelUpdateProfile = (event) => {
    event.preventDefault();
    const shopname = event.target.shopname.value;
    const since = event.target.since.value;
    const description = event.target.description.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const twitter = event.target.twitter.value;
    const facebook = event.target.facebook.value;
    const instagram = event.target.instagram.value;
    const pinterest = event.target.pinterest.value;

    // Image Upload
    const shopimage = event.target.image.files[0];
    if (!shopimage) {
      const UpdateWriter = {
        shopname,
        since,
        address,
        phone,
        twitter,
        facebook,
        instagram,
        twitter,
        pinterest,
        email: user?.email,
        description,
      };
      // console.log(UpdateWriter);
      // updateWriter(UpdateWriter).then((data) => {
      //   console.log(data);
      // });
      fetch(`${process.env.REACT_APP_API_URL}user/${user?.email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UpdateWriter),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          toast.success("Update Successfuly !");
        });
      return;
    }
    imageUpload(shopimage)
      .then((res) => {
        const UpdateWriter = {
          shopname,
          since,
          address,
          phone,
          twitter,
          facebook,
          instagram,
          twitter,
          pinterest,
          shopimage: res.data.display_url,
          email: user?.email,
          description,
        };
        // console.log(UpdateWriter);
        // updateWriter(UpdateWriter).then((data) => {
        //   console.log(data);
        // });

        fetch(`${process.env.REACT_APP_API_URL}user/${user?.email}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(UpdateWriter),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLoading(false);
            toast.success("Update Successfuly !");
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const data = [
    {
      name: "Day 1",
      totalDonate: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Day 2",
      totalDonate: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Day 3",
      totalDonate: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Day 4",
      totalDonate: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Day 5",
      totalDonate: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Day 6",
      totalDonate: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Day 7",
      totalDonate: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="">
      <div className=" text-gray-600 md:mt-0 mb-16 my-10">
        <div className="md:w-[400px] border shadow-sm mx-auto">
          <div className="relative">
            <p className="h-40 bg-blue-900 w-full"></p>
            <div className="py-3 top-1/2 left-1/3 absolute">
              <img
                className=" w-[150px] mx-auto bg-black h-[150px] object-cover border rounded-full"
                src={
                  user.photoURL ? (
                    user.photoURL
                  ) : (
                    <div className="relative flex-shrink-0">
                      <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                      <img
                        src="https://source.unsplash.com/50x50/?portrait"
                        alt=""
                        className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                      />
                    </div>
                  )
                }
                alt=""
              />
            </div>
          </div>
          <div className="mt-20">
            <h1 className="text-2xl text-center font-bold">
              {user?.displayName}
              <span>({profile.role})</span>
            </h1>
            <h2 className="font-bold mb-3 text-center ">FrontEnd Developer</h2>
            <div className="text-center mt-3 mb-6 font-bold ">
              <button className="p-2  bg-gray-300 rounded-sm">
                Update Profile
              </button>
            </div>

            <hr className="w-[80%] h-1 bg-gray-300 rounded-2xl mb-3 mx-auto" />
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div style={{ width: "100%" }}>
            <div className="text-center font-bold text-xl mb-2">
              <h1>Weekly Donated</h1>
            </div>
            <div className="border" style={{ width: "100%", height: 340 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area dataKey="totalDonate" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2 font-bold text-xl mb-2">
              <h1>Recently Donated</h1>
              <div className="w-2 h-2 mt-1 bg-green-500 animate-pulse rounded-full"></div>
            </div>
            <div className="text-gray-700   font-semibold">
              <div className="flex  transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-green-200  rounded-md ">
                    <FcDonate className="w-6 h-6 "></FcDonate>
                  </p>
                  <p className="">Abdul donated $10 </p>
                </div>
                <p className="p-1 bg-lime-100  rounded-md ">
                  <BsCheckLg className="w-6 h-6  text-green-500"></BsCheckLg>
                </p>
              </div>
              <div className="flex  transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-pink-200  rounded-md">
                    <FcDonate className="w-6 h-6 "></FcDonate>
                  </p>
                  <p className="">Afia Nasrin donated $25 </p>
                </div>
                <p className="p-1 bg-lime-100  rounded-md ">
                  <BsCheckLg className="w-6 h-6  text-green-500"></BsCheckLg>
                </p>
              </div>
              <div className="flex  transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-yellow-200  rounded-md">
                    <FcDonate className="w-6 h-6 "></FcDonate>
                  </p>
                  <p className="">Sojib donated $15</p>
                </div>
                <p className="p-1 bg-lime-100  rounded-md ">
                  <BsCheckLg className="w-6 h-6  text-green-500"></BsCheckLg>
                </p>
              </div>
              <div className="flex  transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-orange-200  rounded-md">
                    <FcDonate className="w-6 h-6 "></FcDonate>
                  </p>
                  <p className="">Elon Mask donated $150 </p>
                </div>
                <p className="p-1 bg-lime-100  rounded-md ">
                  <BsCheckLg className="w-6 h-6  text-green-500"></BsCheckLg>
                </p>
              </div>
              <div className="flex  transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-violet-200  rounded-md">
                    <FcDonate className="w-6 h-6 "></FcDonate>
                  </p>
                  <p className="">Hero Alam donated $30 </p>
                </div>
                <p className="p-1 bg-lime-100  rounded-md ">
                  <BsCheckLg className="w-6 h-6  text-green-500"></BsCheckLg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAccount;
