import { createBrowserRouter } from "react-router-dom";
import InternetionalTorism from "../Components/InternetionalTorism/InternetionalTorism";
import ErrorPage from "../ErrorPage/ErrorPage";
import BannerDetails from "../Home/BannerDetails/BannerDetails";
import EntertainmentNews from "../Home/EntertainmentNews/EntertainmentNews/EntertainmentNews";
import Home from "../Home/Home";
import Fashion from "../Home/HomePageLetestNews/Fashion";
import Health from "../Home/HomePageLetestNews/Health";
import Nuture from "../Home/HomePageLetestNews/Nuture";
import Travel from "../Home/HomePageLetestNews/Travel";
import Main from "../Layout/Main";
import Accounts from "../Pages/Accounts/Accounts";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import SlickCarousel from "../Practice/SlickCarousel/SlickCarousel";
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
          { path: "/fashion", element: <Fashion /> },
          { path: "/health", element: <Health /> },
          { path: "/nuture", element: <Nuture /> },
        ],
      },
      { path: "/account", element: <Accounts /> },
    ],
  },
  { path: "signup", element: <SignUp /> },
  { path: "bannerDetails/:id", element: <BannerDetails></BannerDetails> },
  { path: "login", element: <SignIn /> },
  { path: '/SlickCarousel',element: <SlickCarousel/>},
  {path: '/entertainmentNews', element: <EntertainmentNews/>},
  
]);
