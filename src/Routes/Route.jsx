import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import BookingForm from "../Pages/BookingForm/BookingForm";
import AddHouse from "../Pages/Dashboard/HouseOwner/AddHouse";
import ManageAllBooking from "../Pages/Dashboard/HouseOwner/ManageAllBooking";
import ManageHouse from "../Pages/Dashboard/HouseOwner/ManageHouse";
import UpdateHouse from "../Pages/Dashboard/HouseOwner/UpdateHouse";
import ManageBooking from "../Pages/Dashboard/HouseRenter/ManageBooking";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import UpdateProfile from "../components/UpdateUserProfile/UpdateUserProfile";
import UserProfile from "../components/UserProfile/UserProfile";
import OwnerRoute from "./OwnerRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/booking/:id",
          element: <BookingForm />,
          loader: ({params}) => fetch(`https://house-hunter-server-eight.vercel.app/house/${params.id}`)
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
         // House Owner Dashboard
          {
            path: "managehouse",
            element: <OwnerRoute><ManageHouse /></OwnerRoute>,
          },
          {
            path: "updatehouse/:id",
            element: <OwnerRoute><UpdateHouse /></OwnerRoute>,
            loader: ({params}) => fetch(`https://house-hunter-server-eight.vercel.app/house/${params.id}`)
          },
          {
            path: "manageallbooking",
            element: <OwnerRoute><ManageAllBooking /></OwnerRoute>,
          },
          {
            path: "addhouse",
            element: <OwnerRoute><AddHouse /></OwnerRoute>,
          },
         // House Renter Dashboard
          {
            path: "managebooking",
            element: <ManageBooking />,
          },
          // User Profile
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "updateprofile/:id",
            element: <UpdateProfile />,
            loader: ({params}) => fetch(`https://house-hunter-server-eight.vercel.app/getprofileinfo/${params.id}`)
          },
        ],
      },
  ]);
  
  export default router;