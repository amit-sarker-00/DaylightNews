import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteUser } from "../../../api/auth";

const AllReaders = () => {
  const [reader, setReader] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users`)
      .then((res) => res.json())
      .then((data) => {
        setReader(data);
      });
  }, [loading]);
  // console.log(reader);
  // reader
  const readers = reader?.filter((reader) => reader?.role === "reader");
  // console.log(readers);
  const handleDelete = (id) => {
    deleteUser(id);
    toast.success("delete reader Succussfuly");
    setLoading(!loading);
  };

  return (
    <>
      {readers && Array.isArray(readers) && readers.length > 0 ? (
        <>
          <div className=" px-10 py-5 sm:px-8 ">
            <div className="text-center">
              <h1 className="text-3xl text-black font-bold">
                All readers Information
              </h1>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Verfied</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {readers?.map((writer) => (
                    <tr key={writer?._id} writer={writer}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className=" w-20 h-20">
                              <img
                                src={writer?.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div className="w-10 lg:w-full">
                            <div className="font-bold">
                              {writer?.name?.slice(0, 20)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-2xl pt-10 lg:pt-0">
                        {writer?.email}
                      </td>
                      <td>No</td>

                      <th>
                        <button
                          onClick={() => handleDelete(writer?._id)}
                          className=" px-3 py-2 bg-[#DEF9EC] text-[#3BB77E] rounded flex hover:text-white hover:bg-[#3BB77E] text-[14px] font-bold"
                        >
                          <TrashIcon className="w-6 h-6" />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" text-gray-600 gap-5 flex flex-col justify-center items-center py-16 text-xl lg:text-3xl px-10">
            There's no reader data available right now.
          </div>
        </>
      )}
    </>
  );
};

export default AllReaders;
