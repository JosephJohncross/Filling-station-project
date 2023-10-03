import { createContext, useState, useEffect } from "react";
// import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import { checkCurrentLocation } from "../Services/helper";
// import { displayNotifications } from "../Services/helper";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  let [loading, setLoading] = useState(true);
  const location = useLocation();

  const navigate = useNavigate();

  //  Login user function
  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("https://lgfuel.onrender.com/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();
    //  console.log({"response":response})

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      if (user?.role === 0) {
        navigate("/admin/dashboard");
        return "Login successful";
      } else if (user?.role === 1) {
        navigate("/user/dashboard");
        return "Login successful";
      } else if (user?.role === 2) {
        navigate("/station/dashboard");
        return "Login successful";
      }
    } else if (response.status === 401) {
      // Still handle error case
      return "Invalid login credential";
    }
  };

  // Logout function
  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };

  // UpdateToken
  let updateToken = async () => {
    let response = await fetch("https://lgfuel.onrender.com/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens?.refresh,
      }),
    });

    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else if (checkCurrentLocation(location.pathname)){
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    loginUser: loginUser,
    user: user,
    logoutUser: logoutUser,
    authTokens: authTokens,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let timeOut = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, timeOut);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>
    // <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
