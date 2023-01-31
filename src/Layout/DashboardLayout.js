import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getRole } from "../api/auth";
import Menubar from "../Components/Dashboard/Menubar";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return (
    <div className="  md:flex lg:flex    lg:py-20  ">
      <Menubar role={role}></Menubar>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
