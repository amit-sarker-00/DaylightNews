import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminAccount from "../Pages/Accounts/Admin/AdminAccount";
import AllReaders from "../Pages/Accounts/Admin/AllReaders";
import AllWriters from "../Pages/Accounts/Admin/AllWriters";
import Comments from "../Pages/Accounts/UserAccount/Comments";
import UserProfile from "../Pages/Accounts/UserAccount/UserProfile";
import Wishlist from "../Pages/Accounts/UserAccount/Wishlist";
import AddNews from "../Pages/Accounts/Writers/AddNews";
import UpdateNews from "../Pages/Accounts/Writers/UpdateNews";
import WriterProfile from "../Pages/Accounts/Writers/WriterProfile";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Welcome from "../Pages/Welcome/Welcome";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import WriterRoute from "./WriterRoute";
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
            element: (
              <AdminRoute>
                <AdminAccount />
              </AdminRoute>
            ),
          },
          {
            path: "writers",
            element: (
              <AdminRoute>
                {" "}
                <AllWriters />
              </AdminRoute>
            ),
          },
          {
            path: "readers",
            element: (
              <AdminRoute>
                <AllReaders />
              </AdminRoute>
            ),
          },
          {
            path: "writer/profile",
            element: (
              <WriterRoute>
                <WriterProfile />
              </WriterRoute>
            ),
          },
          {
            path: "addnews",
            element: (
              <WriterRoute>
                <AddNews />
              </WriterRoute>
            ),
          },
          {
            path: "updateNews",
            element: (
              <WriterRoute>
                <UpdateNews />
              </WriterRoute>
            ),
          },
          {
            path: "reader/profile",
            element: <UserProfile />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
          {
            path: "comments",
            element: <Comments />,
          },
        ],
      },
    ],
  },
  { path: "signup", element: <SignUp /> },
  { path: "login", element: <SignIn /> },
]);
