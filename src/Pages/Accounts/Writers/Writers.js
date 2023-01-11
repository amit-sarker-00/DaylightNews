import React, { useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import WriterProfile from "./WriterProfile";

const Writers = () => {
  const [loading, setLoading] = useState(true);
  setInterval(() => {
    setLoading(false);
  }, 5000);

  return (
    <div>
      <div>{loading ? <Spinner /> : <WriterProfile />}</div>
    </div>
  );
};

export default Writers;
