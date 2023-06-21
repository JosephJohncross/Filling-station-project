import { Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Component/Accounts/Login";
import SignUp from "../Component/Accounts/SignUp";
import UserDashboard from "../Component/Dashboard/UserDashboard/UserDashboard";
import StaffDashboard from "../Component/Dashboard/StaffAdminDashboard.jsx/StaffDashboard";
import AdminDashboard from "../Component/Dashboard/AdminDashboard/AdminDashboard";
import StationPage from "../Pages/StationPage";

export const CustomRoutes = () => {
  return [
    // Generic routes
    // <Route path="/" element={<Root />} />,
    <Route path="/" exact element={<Homepage />} />,
    <Route path="login" element={<Login />} />,
    <Route path="signup" element={<SignUp />} />,
    <Route path="station" element={<StationPage />} />,

    // User route
    <Route path="/" element={<PrivateRoutes roles={"1"} />}>
      <Route path="user/dashboard" element={<UserDashboard />} />,
    </Route>,

    // station admin
    <Route path="/" element={<PrivateRoutes roles={"2"} />}>
      <Route path="staff/dashboard" element={<StaffDashboard />} />,
    </Route>,

    // Admin Routes
    <Route path="/" element={<PrivateRoutes roles={"3"} />}>
      <Route path="admin/dashboard" element={<AdminDashboard />} />,
    </Route>,
  ];
};
