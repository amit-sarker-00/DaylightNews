import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import HomeLatestSectionLifeStyle from "../Home/HomeLetestSection/HomeLetestSectionLifeStyle/HomeLatestSectionLifeStyle";
import HomeDomesticSection from "../Home/HomeLetestSection/HomeLletestDomesticSection/HomeDomesticSection";
import DashboardLayout from "../Layout/DashboardLayout";
import HomePageLetestNewsSectionMain from "../Layout/HomePageLetestNewsSectionMain";
import Main from "../Layout/Main";
import Accounts from "../Pages/Accounts/Accounts";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
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
        children: [
          {
            path: "",
            element: <Accounts />,
          },
        ],
      },
      {
        path: "/",
        element: <HomePageLetestNewsSectionMain />,
        children: [
          { path: "/life&style", element: <HomeLatestSectionLifeStyle /> },
          { path: "/Domestic", element: <HomeDomesticSection /> },
        ],
      },
    ],
  },
]);
