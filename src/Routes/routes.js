import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
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
        ],
      },
    ],
  },
  { path: "signup", element: <SignUp /> },
  { path: "login", element: <SignIn /> },
]);
