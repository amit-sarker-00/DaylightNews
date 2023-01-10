import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Welcome from "../Pages/Welcome/Welcome";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <SignIn /> },
      {
        path: "/account",
        element: <DashboardLayout />,
        children: [{ path: "/account", element: <Welcome /> }],
      },
    ],
  },
]);
