import React, { useState } from "react";
import bgimg from "../../assets/images/signupimg.svg";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import { useImmerReducer } from "use-immer";
import { createStation } from "../../Services/admin-request";
import { displayNotifications } from "../../Services/helper";

const initalState = {
  signupSec: "page1",
  name: "",
  email: "",
  password: "",
  licenseNumber: "",
  longitude: "",
  latitude: "",
  phone: "",
};

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "switchCurrentPageSignup":
      draft.signupSec = action.val;
      break;
    case "setName":
      draft.name = action.val;
      break;
    case "setEmail":
      draft.email = action.val;
      break;
    case "setPassword":
      draft.password = action.val;
      break;
    case "setLicenseNumber":
      draft.licenseNumber = action.val;
      break;
    case "setLongitude":
      draft.longitude = action.val;
      break;
    case "setLatitude":
      draft.latitude = action.val;
      break;
    case "setPhone":
      draft.phone = action.val;
      break;
  }
};

const StationSignUp = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initalState);
  const navigate = useNavigate();

  const buttonStyle = {
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
  };

  const createAStation = async () => {
    if (
      state.email == "" ||
      state.latitude == "" ||
      state.longitude == "" ||
      state.licenseNumber == "" ||
      state.name == "" ||
      state.password == "" ||
      state.phone == ""
    ) {
      displayNotifications("One or more fields are not empty or not valid");
      return;
    }
    let result = await createStation(
      state.name,
      state.latitude,
      state.longitude,
      state.email,
      state.password,
      state.licenseNumber,
      state.phone
    );
    if (result) {
      displayNotifications(
        "Station created. Account will be verified in 24hrs"
      );
      navigate("/");
    } else {
      displayNotifications("Operation unsuccessfull");
    }
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
      <div className="flex flex-col mini:flex-row h-screen">
        {/* left flex */}
        <div
          style={leftPage}
          className="left mini:w-1/3 flex flex-col h-screen relative"
        >
          <img
            className="w-40 absolute top-5 left-5"
            src="/logo.svg"
            alt="logo"
          />
          <div className=" hidden  h-screen mini:flex flex-col justify-center px-5">
            <h3 className="text-white my-6 text-3xl font-bold font-pt">
              Uyo Fuel Inform tells you all you need to know on
            </h3>
            <ul className="text-white text-sm font-open flex flex-col gap-y-3">
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
        <div
          className="right mini:w-2/3 mini:pl-10 px-4 rounded-lg mini:rounded-none mini:px-0 pt-24 mini:mx-auto "
          style={rightPage}
        >
          <div className="mini:w-2/3 flex-col mini:flex-row flex items-center gap-y-2 mini:gap-y-0 mini:justify-between mini:pr-24">
            <h1 className="text-5xl font-bold font-pt">Sign Up</h1>
            <div className="flex flex-row items-center space-x-2 justify-end ">
              <p className="font-open text-sm">Already have an account? </p>
              <Link to={"/login"} className="font-medium text-primColor">
                Sign in
              </Link>
            </div>
          </div>

          <form className="my-5 md:max-w-4xl mt-10">
            {state.signupSec === "page1" && (
              <>
                <div className="">
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Filling Station Name
                    </span>
                    <input
                      value={state.name}
                      type="text"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      onChange={(e) => {
                        dispatch({
                          type: "setName",
                          val: e.target.value,
                        });
                      }}
                    />
                  </label>
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Email
                    </span>
                    <input
                      value={state.email}
                      type="text"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      onChange={(e) => {
                        dispatch({
                          type: "setEmail",
                          val: e.target.value,
                        });
                      }}
                    />
                  </label>
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Phone Number
                    </span>
                    <input
                      value={state.phone}
                      type="text"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      onChange={(e) => {
                        dispatch({
                          type: "setPhone",
                          val: e.target.value,
                        });
                      }}
                    />
                  </label>
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Password
                    </span>
                    <input
                      value={state.password}
                      type="password"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      onChange={(e) => {
                        dispatch({
                          type: "setPassword",
                          val: e.target.value,
                        });
                      }}
                    />
                  </label>
                  <div className="mt-6 flex justify-between items-center w-full md:w-3/5">
                    <Button
                      shade={"blue"}
                      clickFunction={(e) => {
                        e.preventDefault();
                        dispatch({
                          type: "switchCurrentPageSignup",
                          val: "page2",
                        });
                      }}
                      content={"Next"}
                      icon={false}
                    />
                    <p className="text-sm font-pt">Step 1/2</p>
                  </div>
                </div>
              </>
            )}
            {state.signupSec === "page2" && (
              <>
                <label className="block w-full md:w-3/5">
                  <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                    License number
                  </span>
                  <input
                    value={state.licenseNumber}
                    type="text"
                    name="text"
                    className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    onChange={(e) => {
                      dispatch({
                        type: "setLicenseNumber",
                        val: e.target.value,
                      });
                    }}
                  />
                </label>
                <div className="flex mini:flex-row flex-col mini:gap-x-6 w-full md:w-3/5">
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Latitude
                    </span>
                    <input
                      value={state.latitude}
                      type="text"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      onChange={(e) => {
                        dispatch({
                          type: "setLatitude",
                          val: e.target.value,
                        });
                      }}
                    />
                  </label>
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Longitude
                    </span>
                    <input
                      value={state.longitude}
                      type="text"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      onChange={(e) => {
                        dispatch({
                          type: "setLongitude",
                          val: e.target.value,
                        });
                      }}
                    />
                  </label>
                </div>
                <div className="flex mt-16 justify-between w-full md:w-3/5">
                  <Button
                    shade={"blue"}
                    clickFunction={(e) => {
                      e.preventDefault();
                      dispatch({
                        type: "switchCurrentPageSignup",
                        val: "page1",
                      });
                    }}
                    content={"Back"}
                    icon={false}
                  />
                  <Button
                    shade={"blue"}
                    clickFunction={(e) => {
                      e.preventDefault();
                      createAStation();
                    }}
                    content={"Sign up"}
                    icon={false}
                  />
                </div>
                <p className="text-sm font-pt mt-7">Step 2/2</p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StationSignUp;
