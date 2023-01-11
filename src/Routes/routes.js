import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminAccount from "../Pages/Accounts/Admin/AdminAccount";
import AllReaders from "../Pages/Accounts/Admin/AllReaders";
import AllWriters from "../Pages/Accounts/Admin/AllWriters";
import AddNews from "../Pages/Accounts/Writers/AddNews";
import UpdateNews from "../Pages/Accounts/Writers/UpdateNews";
import WriterProfile from "../Pages/Accounts/Writers/WriterProfile";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Welcome from "../Pages/Welcome/Welcome";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/account",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <Welcome />,
          },
          {
            path: "admin/profile",
            element: <AdminAccount />,
          },
          {
            path: "writers",
            element: <AllWriters />,
          },
          {
            path: "readers",
            element: <AllReaders />,
          },
          {
            path: "writer/profile",
            element: <WriterProfile />,
          },
          {
            path: "addnews",
            element: <AddNews />,
          },
          {
            path: "updateNews",
            element: <UpdateNews />,
          },
        ],
      },
    ],
  },
  { path: "signup", element: <SignUp /> },
  { path: "login", element: <SignIn /> },
]);
