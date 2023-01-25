import React from "react";
import { Link } from "react-router-dom";

const HomeLetestAllMenu = () => {
  return (
    <div>
      <Link className="m-2 p-2 bg-black text-white" to="/Domestic">
        DOMESTIC
      </Link>
      <Link className="m-2 p-2 bg-black text-white" to="/life&style">
        LIFE & STYLE
      </Link>
      <Link className="m-2 p-2 bg-black text-white" to="/opinion">
        OPINION
      </Link>
      <Link className="m-2 p-2 bg-black text-white" to="/nrb">
        NRB
      </Link>
    </div>
  );
};

export default HomeLetestAllMenu;
