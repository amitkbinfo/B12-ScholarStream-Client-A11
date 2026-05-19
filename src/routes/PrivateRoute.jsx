import React from "react";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../pages/SharedPage/LoadingSpinner";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user) {
    return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
