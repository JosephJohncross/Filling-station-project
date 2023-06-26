import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import StaffLayout from "../Layout/StaffLayout";
import AuthContext from "../Context/AuthContext";
import UserLayout from "../Layout/UserLayout";
import AdminDashboard from "../Component/Dashboard/AdminDashboard/AdminDashboard";

const PrivateRoutes = ({ role }) => {
  let location = useLocation();

  let { user } = useContext(AuthContext);
  console.log(user);
  if (user && user.role === 1) {
    return <UserLayout />;
  } else if (user && user.role === 2) {
    return <StaffLayout />;
  } else {
    return <AdminDashboard/>;
  } 
  // else if (user && user.role === 3) {
  //   return <AdminLayout/>;
  // } 
//   else {
//     return <Navigate to={"/login"} />;
//   }
};

export default PrivateRoutes;
