import React from "react";
// import loader from "../../assest/loader/ezgif-2-6d0b072c3d3f.gif";

function Spinner() {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  return (
    <div className="flex">
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses}`}></div>
    </div>
  );
}

export default Spinner;
