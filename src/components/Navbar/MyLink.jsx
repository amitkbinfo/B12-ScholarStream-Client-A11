import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-primary font-medium underline underline-offset-2" : `${className} font-medium`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
