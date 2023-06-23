import React, { useState } from "react";
import bgimg from "../../assets/images/signupimg.svg";
import logo from "../../assets/images/logo.svg";

const StationSignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const buttonStyle = {
    backgroundColor: isChecked ? "blue" : "gray",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
  };

  const leftPage = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const rightPage = {
    backgroundColor: "#e8eaf5",
  };

  return (
    <div>
      <div className="flex flex-row h-screen">
        {/* left flex */}
        <div style={leftPage} className="left w-1/3 flex flex-col h-screen relative">
          <img className="w-28 absolute top-5 left-5" src={logo} alt="logo" />
          <div className="h-screen flex flex-col justify-center px-5">
            <h3 className="text-white my-6 text-3xl font-bold font-pt">
              Uyo Fuel Inform tells you all you need to know on
            </h3>
            <ul className="text-white flex flex-col gap-y-3">
              <li>The Availability of Fuel in Filling Stations around you</li>
              <li>The Price of Fuel in each Filling Station</li>
              <li>The Distance of the Fuel Station from you</li>
              <li>Reviews from other Customers</li>
              <li>Fuel Insights</li>
              <li>and many more...</li>
            </ul>
          </div>
        </div>
        {/* right flex */}
        <div className="right w-2/3 pl-10 pt-24" style={rightPage}>
          <div className="flex right-80 absolute">
            <p>Have an account already?</p>
            <button className="bg-white ">Sign in</button>
          </div>
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <form className="my-5 grid gap-7">
            <label className="block w-3/5">
              <span className="block text-sm font-medium text-slate-700">
                User Name
              </span>
              <input
                type="text"
                name="username"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </label>
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
            <label className="flex w-3/5">
              <input
                type="checkbox"
                className="checked:bg-blue-500 w-8 h-8 mx-2"
                onChange={handleCheckboxChange}
              />
              <p>
                Creating an account means you are OK with our terms of services,
                Privacy Policy and default Notification Settings
              </p>
            </label>
            <button className="w-1/5" style={buttonStyle} disabled={!isChecked}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StationSignUp;