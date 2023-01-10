import React from "react";

const Navbar = () => {


  function formatDate(date) {
    const yyyy = date.getFullYear();
    let dd = date.getDate() + 1;
    if (dd < 10) dd = "0" + dd;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let strTime =
      monthNames[date.getMonth()] + "/" + dd + "/" + yyyy;
    return strTime;
  }
  const currentDate = formatDate(new Date());
  return (
    <div>
      <h1>this is navbar</h1>
    </div>
  );
};

export default Navbar;
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const menuItems = (
//     <React.Fragment>
//       <li>
//         <Link>Home</Link>
//       </li>
//       <li>
//         <Link>Posts</Link>
//       </li>
//       <li>
//         <Link>MegaMenu</Link>
//       </li>
//       <li>
//         <Link>Pages</Link>
//       </li>
//       <li>
//         <Link>LifeStyle</Link>
//       </li>
//       <li>
//         <Link>Gadgets</Link>
//       </li>
//     </React.Fragment>
//   );

//   return (
//     <div className="navbar bg-base-100 flex justify-between">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={1}
//             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {menuItems}
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost normal-case text-xl">
//           Daylight News
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal p-0">{menuItems}</ul>
//       </div>
//       <label
//         htmlFor="dashboard-drawer"
//         tabIndex={2}
//         className="btn btn-ghost lg:hidden"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </label>
//     </div>
//   );
// };
// export default Navbar;
