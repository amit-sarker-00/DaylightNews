import { createBrowserRouter } from "react-router-dom";
import BannerDetails from "../Home/BannerDetails/BannerDetails";
import Home from "../Home/Home";
import Main from "../Layout/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/bannerDetails/:id", element: <BannerDetails /> },
    ],
  },
]);
