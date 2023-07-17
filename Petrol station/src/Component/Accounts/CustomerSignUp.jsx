import React, { useState } from "react";
import bgimg from "../../assets/images/signupimg.svg";
import leftsvg from "../../assets/images/unsplash.svg";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Button from "../Common/Button";

const CustomerSignUp = () => {
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

  const LeftPage = {
    backgroundImage: `url(${leftsvg})`,
  };

  const rightPage = {
    backgroundColor: "#e8eaf5",
  };

  return (
    <div>
      <div className="flex flex-row md:h-screen">
        {/* left flex */}
        <div
          className="left md:h-full mini:w-1/3 flex flex-col px-8 gap-8 justify-center pt-12 md:pt-0"
          style={LeftPage}
        >
          <img className="w-48" src="/logo.svg" alt="logo" />
          <h1 className="text-3xl text-white font-pt font-bold">
            Uyo Fuel Inform tells you all you need to know on
          </h1>
          <ul className="text-sm font-open text-white flex flex-col gap-2">
            <li>The Availability of Fuel in Filling Stations around you</li>
            <li>The Price of Fuel in each Filling Station</li>
            <li>The Distance of the Fuel Station from you</li>
            <li>Reviews from other Customers</li>
            <li>Fuel Insights</li>
            <li>and many more...</li>
          </ul>
          <div className="md:hidden mt-10 bg-[#E8EAF5] rounded-lg my-4 py-4 px-4">
            <p className="text-center font-pt text-xl">Sign up</p>
            <div className="flex flex-col pt-5">
              {/* Name */}
              <div class="relative mb-5">
                <input
                  type="text"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#E8EAF5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Username
                </label>
              </div>
              <div class="relative mb-5">
                <input
                  type="text"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#E8EAF5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email/Phone Number
                </label>
              </div>
              <div class="relative mb-5">
                <input
                  type="text"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#E8EAF5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Password
                </label>
              </div>
              <Button
                shade={"blue"}
                content={"Sign Up"}
              />
              <span className="text-center text-xs mt-4 mb-8">Already registered?<Link to={"/login"} className="text-base font-pt inline text-primColor"> Login</Link></span>
            </div>
          </div>
        </div>
        {/* right flex */}
        <div className="right md:w-2/3 hidden md:flex items-center bg-[#E8EAF5]">
          <div className="md:block flex flex-col justify-center px-24 w-full">
            <h1 className="text-5xl font-bold font-pt">Sign in</h1>
            <form className="my-7 ">
              <label className="block w-full md:w-3/5">
                <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                  User Name
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label className="block w-full md:w-3/5">
                <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                  Email/Phone Number
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label className="block w-full md:w-3/5">
                <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label className="flex w-3/5 mt-5 items-center space-x-3">
                <input
                  type="checkbox"
                  className="checked:bg-primColor w-7 h-7 mx-2 rounded-md bg-transparent border-slate-500"
                  onChange={handleCheckboxChange}
                />
                <p>
                  Creating an account means you are OK with our terms of
                  services, Privacy Policy and default Notification Settings
                </p>
              </label>
              <div className="flex flex-col gap-1 pt-6 w-max">
                <Button
                  shade={"blue"}
                  content={"Create Account"}
                  clickFunction={() => {}}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignUp;
