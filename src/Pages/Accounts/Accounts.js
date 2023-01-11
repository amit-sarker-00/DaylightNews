import React, { useContext, useEffect, useState } from "react";
import { getRole } from "../../api/auth";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import AdminAccount from "./Admin/AdminAccount";
import Writers from "./Writers/Writers";

const Accounts = () => {
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
  console.log(role);
  return (
    <div>
      <div>{role === "admin" ? <AdminAccount /> : <Writers />}</div>
    </div>
  );
};

export default Accounts;
