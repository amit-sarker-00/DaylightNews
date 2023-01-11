import React, { useState } from "react";
import SmallSpinner from "../../../Components/Spinner/SmallSpinner";
import WriterProfile from "./WriterProfile";

const Writers = () => {
  const [loading, setLoading] = useState(true);
  setInterval(() => {
    setLoading(false);
  }, 5000);

  return (
    <div>
      <div>{loading ? <SmallSpinner /> : <WriterProfile />}</div>
    </div>
  );
};

export default Writers;
