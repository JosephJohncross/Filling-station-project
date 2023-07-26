import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import StationLayout from "../Layout/StationLayout";
import AuthContext from "../Context/AuthContext";
import AdminDashboard from "../Component/Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../Component/Dashboard/UserDashboard/UserDashboard";
import SuperAdminDashboard from "../Component/Dashboard/SuperAdminDashboard.jsx/SuperAdminDashboard";
import UserLayout from "../Layout/UserLayout";
import AdminLayout from "../Layout/AdminLayout";

const PrivateRoutes = () => {
  let location = useLocation();

  let { user } = useContext(AuthContext);
  console.log("Hello")
  console.log(user);
  if (user && user.role === 1) {
    return <UserDashboard />;
  } else if (user && user.role === 2) {
    return <AdminDashboard />;
  } else if (user && user.role === 0) {
    return <SuperAdminDashboard />;
  } else if (user === null) {
    return <Navigate to={"/login"} />;
  }
};

export default PrivateRoutes;
