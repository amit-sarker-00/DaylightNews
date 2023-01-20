import { createBrowserRouter } from "react-router-dom";
import DetailsCard from "../Components/CardDetailsPage/DetailsCard/DetailsCard";
import ErrorPage from "../ErrorPage/ErrorPage";
import BannerDetails from "../Home/BannerDetails/BannerDetails";
import Home from "../Home/Home";
import Fashion from "../Home/HomePageLetestNews/Fashion";
import Health from "../Home/HomePageLetestNews/Health";
import Nuture from "../Home/HomePageLetestNews/Nuture";
import Travel from "../Home/HomePageLetestNews/Travel";
import Main from "../Layout/Main";
import Accounts from "../Pages/Accounts/Accounts";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "/", element: <Travel /> },
          { path: "/domestic", element: <Fashion /> },
          { path: "/health", element: <Health /> },
          { path: "/nature", element: <Nuture /> },
        ],
      },
      { path: "/account", element: <Accounts /> },
      { path: "/detail/:id", element: <DetailsCard /> },
    ],
  },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <SignIn /> },
]);
