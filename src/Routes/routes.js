import { createBrowserRouter } from "react-router-dom";
import AllCategoryPage from "../Components/AllCategoryPage/AllCategoryPage";
import CardDetailsPage from "../Components/CardDetailsPage/CardDetailsPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Fashion from "../Home/HomePageLetestNews/Fashion";
import Health from "../Home/HomePageLetestNews/Health";
import Nuture from "../Home/HomePageLetestNews/Nuture";
import Travel from "../Home/HomePageLetestNews/Travel";
import HomePageStoryAllImage from "../Home/HomePageStorySection/HomePageStoryAllImage";
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
import PrivateRoute from "./PrivateRoute";
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
          { path: "/natural", element: <Nuture /> },
        ],
      },
      { path: "detail/:id", element: <CardDetailsPage /> },
      { path: "/category/:id", element: <AllCategoryPage /> },
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

  { path: "story/:id", element: <HomePageStoryAllImage /> },
  { path: "signup", element: <SignUp /> },
  { path: "login", element: <SignIn /> },
]);
