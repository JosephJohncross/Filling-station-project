import React from "react";
import leftsvg from "../../assets/images/unsplash.svg";
import logo from "../../../src/assets/images/logo.svg";
import { Link } from "react-router-dom";
const Login = () => {
  const LeftPage = {
    backgroundImage: `url(${leftsvg})`,
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
  };
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex flex-row">
        {/* left page */}
        <div
          className="left h-full w-1/3 flex flex-col px-8 gap-8 justify-center"
          style={LeftPage}
        >
          <img className="w-48" src={logo} alt="logo" />
          <h1 className="text-3xl text-white font-pt font-bold">
            Uyo Fuel Inform tells you all you need to know on
          </h1>
          <ul className="text-sm text-white flex flex-col gap-4">
            <li>The Availability of Fuel in Filling Stations around you</li>
            <li>The Price of Fuel in each Filling Station</li>
            <li>The Distance of the Fuel Station from you</li>
            <li>Reviews from other Customers</li>
            <li>Fuel Insights</li>
            <li>and many more...</li>
          </ul>
        </div>
              {/* Right Side */}
      <div className="right w-2/3 flex flex-col justify-center px-24">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <form className="my-5 grid gap-7">
          <label className="block w-3/5">
            <span className="block text-sm font-medium text-slate-700">
              Email/Phone number
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <label className="block w-3/5">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <div className="flex flex-col gap-1">
          <Link to="/login">Forgotten Password?</Link>
          <button className="w-1/5" style={buttonStyle}>Login</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
