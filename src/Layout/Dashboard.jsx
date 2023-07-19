import React from "react";
import { FaBookDead, FaBookMedical, FaHome, FaHouseUser, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import DashboardUser from "../components/DashboardUser/DashboardUser";
import useOwner from "../hooks/useOwner";

const Dashboard = () => {
  const [isOwner] = useOwner();

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          {isOwner ? (
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <DashboardUser />
              <li className="text-lg py-2 font-semibold">
                <NavLink
                  to="/dashboard/managehouse"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                      : "hover:text-purple-600  ease-in duration-200"
                  }
                >
                  <FaHome className="font-bold  text-xl" />
                  Manage House
                </NavLink>
              </li>
              <li className="text-lg py-2 font-semibold">
                <NavLink
                  to="/dashboard/manageallbooking"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                      : "hover:text-purple-600  ease-in duration-200"
                  }
                >
                  <FaBookDead className="font-bold  text-xl" />
                  Manage Booking
                </NavLink>
              </li>
              <li className="text-lg py-2 font-semibold">
                <NavLink
                  to="/dashboard/addhouse"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                      : "hover:text-purple-600  ease-in duration-200"
                  }
                >
                  <FaHouseUser className="font-bold  text-xl" />
                  Add New House
                </NavLink>
              </li>
              <div className="h-[1px] w-full bg-slate-400 my-3"></div>
              <li className="text-lg py-2 font-semibold">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                      : "hover:text-purple-600  ease-in duration-200"
                  }
                >
                  <FaHome className="font-bold  text-xl" />
                  Back to Home
                </NavLink>
              </li>
              <li className="text-lg py-2 font-semibold">
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                      : "hover:text-purple-600  ease-in duration-200"
                  }
                >
                  <FaUser className="font-bold  text-xl" />
                  Profile
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <DashboardUser />
              <li className="text-lg py-2 font-semibold">
                <NavLink
                  to="/dashboard/managebooking"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                      : "hover:text-purple-600  ease-in duration-200"
                  }
                >
                  <FaBookMedical className="font-bold  text-xl" />
                  Manage Booking
                </NavLink>
              </li>
              <div className="h-[1px] w-full bg-slate-400 my-3"></div>
              <li className="text-lg py-2 font-semibold">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                      : "hover:text-purple-600  ease-in duration-200"
                  }
                >
                  <FaHome className="font-bold  text-xl" />
                  Back to Home
                </NavLink>
              </li>
              <li className="text-lg py-2 font-semibold">
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gradient-to-r from-green-400 to-blue-500"
                      : "hover:text-purple-600  ease-in duration-200"
                  }
                >
                  <FaUser className="font-bold  text-xl" />
                  Profile
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
