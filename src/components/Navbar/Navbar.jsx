import React from "react";
import logo from "../../assets/logo.png";
import MyLink from "./MyLink";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { IoLogOut } from "react-icons/io5";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, loading, signOutUser } = useAuth();
  const navigate = useNavigate();
  const navLinks = (
    <>
      <MyLink to={"/"}>Home</MyLink>
      <MyLink to={"/scholarships"}>All Scholarships</MyLink>
      <MyLink to={"/contact-support"}>Contact Us</MyLink>
    </>
  );
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success(`Successfully Logout!`);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-999">
    <div className="bg-[#e7f7ff]/95 backdrop-blur-md rounded-b-2xl shadow-sm">
      <div className="navbar px-0 md:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center justify-center gap-2">
            <img src={logo} className="w-10" alt="" />
            <p className="text-base md:text-xl font-bold text-primary">
              ScholarStream
            </p>
          </Link>
        </div>
        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>
        {/* End */}
        <div className="navbar-end">
          {loading ? (
            <div className="skeleton h-11 w-11 shrink-0 rounded-full"></div>
          ) : user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 h-10 border-primary border rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    referrerPolicy="no-referrer"
                    src=""
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-3 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user?.displayName}</li>
                  <li className="text-xs">{user?.email}</li>
                </div>

                <li className="my-3">
                  <Link
                    to={"/dashboard"}
                    className="btn btn-secondary shadow-none border-none btn-xs"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-neutral"
                  >
                    <IoLogOut />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link
                to={"/login"}
                className="btn btn-primary rounded-lg shadow-none border-none text-white font-medium btn-sm mr-3"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn btn-secondary rounded-lg shadow-none border-none text-white font-medium btn-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
