import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // TODO
const isHouseOwner = true;


  return (
    <div>
      <div className=" max-w-7xl mx-auto">
        <nav className="lg:px-0 ps-14 pe-5 flex justify-between items-center">
          <div className="py-5 text-green-500 font-extrabold text-4xl">
            <Link to="/">
              <span className="text-orange-600">House</span>Hunter
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex items-center space-x-6 font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600"
                      : "hover:text-green-600 ease-in duration-200"
                  }
                >
                  Home
                </NavLink>
              </li>
           
              <li>
                <NavLink
                   to={
                    isHouseOwner
                      ? "/dashboard/managehouse"
                      : "/dashboard/managebooking"
                  }
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600"
                      : "hover:text-green-600 ease-in duration-200"
                  }
                >
                Dashboard
                </NavLink>
              </li>

              <li>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img title="" src="https://images.pexels.com/photos/4045762/pexels-photo-4045762.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-indigo-300 rounded-box w-52"
                  >
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">Logout</Link>
                    </li>
                  </ul>
                </div>{" "}
              </li>
              <li> <Link to="/login">
                  <button className="bg-green-500 px-5 py-2 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                    Login
                  </button>
                </Link></li>
            </ul>
          </div>

          {/* Mobile Screen */}
          <div className="lg:hidden cursor-pointer ml-10 z-50">
            <button
              title={!isMenuOpen ? "Open Menu" : "Close Menu"}
              aria-label={!isMenuOpen ? "Open Menu" : "Close Menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {!isMenuOpen ? (
                <FaBars className="h-6 w-6 text-orange-600" />
              ) : (
                <FaTimes className="h-6 w-6 text-orange-600" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <div className="lg:hidden bg-indigo-300 h-96 opacity-90 z-30 absolute inset-0">
              <ul className=" grid place-items-center py-20">
                <li className="font-semibold mt-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 ease-in duration-200"
                    }
                  >
                    Home
                  </NavLink>
                </li>
              
                <li className="font-semibold mt-3">
                <NavLink
                  to="/dashboard/managehouse"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600"
                      : "hover:text-green-600 ease-in duration-200"
                  }
                >
                Dashboard
                </NavLink>
              </li>
                <li className="mt-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://images.pexels.com/photos/4045762/pexels-photo-4045762.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <Link to="/login">
                    <button className="bg-green-500 px-5 py-2 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
