import React, { useState } from "react";
import bgimg from "../../assets/images/signupimg.svg";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import { useImmerReducer } from "use-immer";

const initalState = {
  signupSec: "page1",
};

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "switchCurrentPageSignup":
      draft.signupSec = action.val;
      break;
  }
};

const StationSignUp = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initalState);

  const buttonStyle = {
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
        <div
          style={leftPage}
          className="left w-1/3 flex flex-col h-screen relative"
        >
          <img
            className="w-40 absolute top-5 left-5"
            src="/logo.svg"
            alt="logo"
          />
          <div className="h-screen flex flex-col justify-center px-5">
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
          className="right w-2/3 pl-10 pt-24 mini:mx-auto "
          style={rightPage}
        >
          <div className="flex flex-row items-center space-x-2 justify-end md:max-w-4xl">
            <p className="font-open">Have an account already? </p>
            <Link
              to="/login"
              className="bg-white py-2 px-5 rounded-md outline-none focus:outline-primColor focus:ring-0 focus:border-transparent"
            >
              Sign in
            </Link>
          </div>
          <form className="my-5 md:max-w-4xl mt-10">
            {state.signupSec === "page1" && (
              <>
                <h1 className="text-5xl font-bold font-pt">Sign in</h1>
                <div className="">
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Filling Station Name
                    </span>
                    <input
                      type="text"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </label>
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Email
                    </span>
                    <input
                      type="text"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </label>
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Phone Number
                    </span>
                    <input
                      type="text"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </label>
                  <label className="block w-full md:w-3/5">
                    <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                      Password
                    </span>
                    <input
                      type="text"
                      name="text"
                      className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </label>
                  <div className="mt-6">
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
                  </div>
                </div>
              </>
            )}
            {state.signupSec === "page2" && (
              <>
                <p className="">Hello page 2</p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StationSignUp;
