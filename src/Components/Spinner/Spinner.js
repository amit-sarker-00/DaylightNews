import React from "react";
import loader from "../../assest/loader/ezgif-2-6d0b072c3d3f.gif";

function Spinner() {
  return (
    <div>
      <img
        src={loader}
        className="mx-[45%] lg:my-[20%] my-[60%] md:my-[40%]"
        alt=""
      />
    </div>
  );
}

export default Spinner;
