import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getUser } from "../../../api/auth";
import { imageUpload } from "../../../api/imageUpload";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
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
import CountUp from "react-countup";
import { RiDeleteBin6Line } from "react-icons/ri";

const AdminAccount = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUsers, setNewUsers] = useState([]);

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
  // New users
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewUsers(data);
      });
  }, []);
  // website traffic
  const datas = [
    {
      name: "Day 1",
      decrease: 2000,
      visiting: 4000,
      amt: 2400,
    },
    {
      name: "Day 2",
      decrease: 3000,
      visiting: 1398,
      amt: 2210,
    },
    {
      name: "Day 3",
      decrease: 2000,
      visiting: 9800,
      amt: 2290,
    },
    {
      name: "Day 4",
      decrease: 2780,
      visiting: 3908,
      amt: 2000,
    },
    {
      name: "Day 5",
      decrease: 1890,
      visiting: 4800,
      amt: 2181,
    },
    {
      name: "Day 6",
      decrease: 2390,
      visiting: 3800,
      amt: 2500,
    },
    {
      name: "Day 7",
      decrease: 3490,
      visiting: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="">
      <div className="text-white font-bold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="bg-violet-500 p-3 rounded-md">
          <div className="flex items-center justify-between">
            <p className="">Total Users</p>
            <div className=" ">
              <CountUp duration={5} end={25} />
              <span>M</span>
            </div>
          </div>
          <>
            <progress
              className="progress progress-warning w-[98%] border"
              value="78"
              max="100"
            ></progress>
            <div className="flex items-center justify-between">
              <p>Change</p>
              <p>78%</p>
            </div>
          </>
        </div>
        <div className="bg-pink-500 p-3 rounded-md">
          <div className="flex items-center justify-between">
            <p className="">Total Donated</p>
            <div className=" ">
              <span>$</span>
              <CountUp duration={5} end={60} />
              <span>M</span>
            </div>
          </div>
          <>
            <progress
              className="progress progress-success w-[98%] border"
              value="65"
              max="100"
            ></progress>
            <div className="flex items-center justify-between">
              <p>Change</p>
              <p>65%</p>
            </div>
          </>
        </div>
        <div className="bg-orange-500 p-3 rounded-md">
          <div className="flex items-center justify-between">
            <p className="">New Users</p>
            <div className=" ">
              <CountUp duration={5} end={77} />
              <span>K</span>
            </div>
          </div>
          <>
            <progress
              className="progress progress-accent w-[98%] border"
              value="90"
              max="100"
            ></progress>
            <div className="flex items-center justify-between">
              <p>Change</p>
              <p>90%</p>
            </div>
          </>
        </div>
        <div className="bg-cyan-500 p-3 rounded-md">
          <div className="flex items-center justify-between">
            <p className="">Net Profit</p>
            <div className=" ">
              <CountUp duration={5} end={40} />
              <span>K</span>
            </div>
          </div>
          <>
            <progress
              className="progress progress-primary w-[98%] border"
              value="55"
              max="100"
            ></progress>
            <div className="flex items-center justify-between">
              <p>Change</p>
              <p>55%</p>
            </div>
          </>
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div style={{ width: "100%" }}>
            <div className="text-center font-bold md: mb-2">
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
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <div>
              <div className="flex items-center justify-center gap-2 font-bold text-xl mb-2">
                <h1>New Users</h1>
                <div className="w-2 h-2 mt-1 bg-green-500 animate-pulse rounded-full"></div>
              </div>
              {newUsers?.slice(-5).map((users) => (
                <div key={users._id} className="text-gray-700   font-semibold">
                  <div className="flex  transition-all items-center justify-between  py-3 px-2 border ">
                    <div className="flex items-center gap-4 w-36">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={users?.image}
                        alt=""
                      />
                      <p className="">{users.name} </p>
                    </div>
                    <p>{users?.email}</p>
                    <p className="p-1 bg-orange-100  rounded-md ">
                      <RiDeleteBin6Line className="w-6 h-6  text-orange-300"></RiDeleteBin6Line>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-center gap-2 font-bold text-xl mb-2">
                <h1>Website Traffic</h1>
                <div className="w-2 h-2 mt-1 bg-green-500 animate-pulse rounded-full"></div>
              </div>
              <div className="border" style={{ width: "100%", height: 280 }}>
                <AreaChart
                  width={500}
                  height={250}
                  data={datas}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="visiting"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                  <Area
                    type="monotone"
                    dataKey="decrease"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AdminAccount;
