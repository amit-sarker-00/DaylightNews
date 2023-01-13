import { createBrowserRouter } from "react-router-dom";
import BannerDetails from "../Home/BannerDetails/BannerDetails";
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
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "signup", element: <SignUp /> },
  { path: "bannerDetails/:id", element: <BannerDetails></BannerDetails> },
  { path: "login", element: <SignIn /> },
]);
