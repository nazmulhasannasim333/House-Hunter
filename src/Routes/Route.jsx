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
          loader: ({params}) => fetch(`http://localhost:5000/house/${params.id}`)
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
        element: <Dashboard />,
        children: [
         // House Owner Dashboard
          {
            path: "managehouse",
            element: <ManageHouse />,
          },
          {
            path: "updatehouse/:id",
            element: <UpdateHouse />,
            loader: ({params}) => fetch(`http://localhost:5000/house/${params.id}`)
          },
          {
            path: "manageallbooking",
            element: <ManageAllBooking />,
          },
          {
            path: "addhouse",
            element: <AddHouse />,
          },
         // House Renter Dashboard
          {
            path: "managebooking",
            element: <ManageBooking />,
          },
        ],
      },
  ]);
  
  export default router;