import { Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Component/Accounts/Login";
import SignUp from "../Component/Accounts/SignUp";
import StationSignUp from "../Component/Accounts/StationSignUp";
import CustomerSignUp from "../Component/Accounts/CustomerSignUp";
import UserDashboard from "../Component/Dashboard/UserDashboard/UserDashboard";
import AdminDashboard from "../Component/Dashboard/AdminDashboard/AdminDashboard";
import StationPage from "../Pages/StationPage";
import SuperAdminDashboard from "../Component/Dashboard/SuperAdminDashboard.jsx/SuperAdminDashboard";

import Search from "../Pages/Search";

import GeneralStationPage from "../Pages/GeneralStationPage";

export const CustomRoutes = () => {
  return [
    // Generic routes
    // <Route path="/" element={<Root />} />,
    <Route path="/" exact element={<Homepage />} />,
    <Route path="login" element={<Login />} />,
    <Route path="signup" element={<SignUp />} />,
    <Route path="/stationsignup" element={<StationSignUp />} />,
    <Route path="/customersignup" element={<CustomerSignUp />} />,
    <Route path="station" element={<StationPage />} />,

    // User route
    <Route path="user/dashboard" element={<PrivateRoutes />} />,

    // station admin
    <Route path="station/dashboard" element={<PrivateRoutes />} />,

    // Admin Routes
    <Route path="admin/dashboard" element={<PrivateRoutes />} />,
  ];
};
