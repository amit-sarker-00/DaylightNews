import { createBrowserRouter } from "react-router-dom";
import InternetionalTorism from "../Components/InternetionalTorism/InternetionalTorism";
import ErrorPage from "../ErrorPage/ErrorPage";
import BannerDetails from "../Home/BannerDetails/BannerDetails";
import EntertainmentNews from "../Home/EntertainmentNews/EntertainmentNews/EntertainmentNews";
import AllCategoryPage from "../Components/AllCategoryPage/AllCategoryPage";
import CardDetailsPage from "../Components/CardDetailsPage/CardDetailsPage";
import BdOnlinePayment from "../Components/DonationPage/BdOnlinePayment";
import DonationFail from "../Components/DonationPage/DonationFail";
import DonationPage from "../Components/DonationPage/DonationPage";
import AddSocialPost from "../Components/SocialMedia/AddSocialPost";
import MyNews from "../Components/SocialMedia/MyNews";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import Gadgets from "../Gadgets/Gadgets";
import GadgetsDetails from "../Gadgets/GadgetsDetails";
import Home from "../Home/Home";
import Domestic from "../Home/HomePageLetestNews/Demestic";
import Health from "../Home/HomePageLetestNews/Health";
import Natural from "../Home/HomePageLetestNews/Natural";
import Travel from "../Home/HomePageLetestNews/Travel";
import LiveStockMarketData from "../Home/LiveStockMarketData/LiveStockMarketData";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import SocialMediaLayout from "../Layout/SocialMediaLayout";
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
import SlickCarousel from "../Practice/SlickCarousel/SlickCarousel";
import Welcome from "../Pages/Welcome/Welcome";
import PrivateRoute from "./PrivateRoute";
import TranslationPage from "../Components/Translation/TranslationPage";
import GadgetsProfile from "../Gadgets/GadgetsProfile";
import GadgetPaymentForm from "../Gadgets/GadgetPaymentForm";
import HomePageStoryAllImage from "../Home/HomePageStorySection/HomePageStoryAllImage";
import LiveCryptoMarketData from "../Home/LiveCryptoMarketData/LiveCryptoMarketData";

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
          { path: "/domestic", element: <Domestic /> },
          { path: "/health", element: <Health /> },
          { path: "/natural", element: <Natural /> },
        ],
      },
      { path: "detail/:id", element: <CardDetailsPage /> },
      { path: "/category/:id", element: <AllCategoryPage /> },
      { path: "/gadgets/:id", element: <Gadgets /> },
      { path: "/GadgetPaymentForm/gadget", element: <GadgetPaymentForm/> },

      { path: "/stockMarket", element: <LiveStockMarketData /> },
      { path: "/donate", element: <DonationPage /> },

      {
        path: "/bdPayment/success",
        element: <BdOnlinePayment />,
      },
      {
        path: "/payment/fail",
        element: <DonationFail />,
      },
      {
        path: "/socialMedia",
        element: (
          <PrivateRoute>
            <SocialMediaLayout></SocialMediaLayout>
          </PrivateRoute>
        ),
        children: [{ path: "/socialMedia", element: <SocialMedia /> }],
      },
      { path: "/addSocialPost", element: <AddSocialPost /> },
      { path: "/mySocialNews", element: <MyNews /> },
      { path: "/cryptoMarket", element: <LiveCryptoMarketData /> },
      {
        path: "/gadgets",
        element: <Gadgets />,
      },
      {
        path: "/translation",
        element: <TranslationPage />,
      },
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
  {
    path: "gadgets",
    element: <Gadgets />,
  },
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
      {
        path: "/account/gadgets/profile",
        element: <GadgetsProfile />,
      },
    ],
  },
  { path: "story/:id", element: <HomePageStoryAllImage /> },
  { path: "signup", element: <SignUp /> },
  { path: "login", element: <SignIn /> },
  { path: "/SlickCarousel", element: <SlickCarousel /> },
  { path: "/entertainmentNews", element: <EntertainmentNews /> },
]);
