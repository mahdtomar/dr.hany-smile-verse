import React, { useContext } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UnAuthorized from "./UnAuthorized";

const ProtectedRoutes = ({ allowedRoles }) => {
  const isAuth = useAuth();
  const location = useLocation();
  console.log(isAuth.user);
  //   console.log(useContext(UserContext));
  return isAuth.user.role?.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : isAuth.user ? (
    <Navigate to={"/unAuthorized"} state={{ from: location }} replace />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
