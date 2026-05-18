import React from "react";
import logo from "../../assets/logo.png";
import MyLink from "./MyLink";
import { Link } from "react-router";
const Navbar = () => {
  const navLinks = (
    <>
      <MyLink to={"/"}>Home</MyLink>
      <MyLink to={"/all-scholarships"}>All Scholarships</MyLink>
    </>
  );
  return (
    <div className="bg-[#e7f7ff] rounded-b-2xl">
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link
            to={"/login"}
            className="btn btn-primary rounded-lg shadow-none border-none text-white font-medium btn-sm"
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
      </div>
    </div>
  );
};

export default Navbar;
