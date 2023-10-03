import React, { useContext } from "react";
import logo from "../../../src/assets/images/logo.svg";
import leftsvg from "../../assets/images/unsplash.svg";
import { useImmerReducer } from "use-immer";
import AuthContext from "../../Context/AuthContext";

import { Link } from "react-router-dom";
import Button from "../Common/Button";
import { displayNotifications } from "../../Services/helper";

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "changedEmail":
      draft.error.email = action.error;
      draft.email = action.email;
      break;
    case "changedPassword":
      draft.error.password = action.error;
      draft.password = action.password;
      break;
    case "error":
      draft.error.general = action.error;
  }
};

const initialState = {
  email: "",
  password: "",
  error: {
    email: "",
    password: "",
    general: "",
  },
};

const Login = () => {
  let { loginUser } = useContext(AuthContext);
  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);

  const LeftPage = {
    backgroundImage: `url(${leftsvg})`,
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let loginResponse = await loginUser(e);
    displayNotifications(loginResponse);
  };

  return (
    <div className="md:h-screen overflow-hidden">
      <div className="md:h-full flex flex-col md:flex-row font-open">
        {/* left page */}
        <div
          className="left h-full md:w-1/3 w-full flex flex-col px-8 gap-8 pt-12 md:pt-0 md:justify-center"
          style={LeftPage}
        >
          <img className="w-48" src="/logo.svg" alt="logo" />
          <h1 className="text-3xl text-white font-pt font-bold">
            Uyo Fuel Inform tells you all you need to know on
          </h1>
          <ul className="text-sm text-white flex flex-col gap-2">
            <li>The Availability of Fuel in Filling Stations around you</li>
            <li>The Price of Fuel in each Filling Station</li>
            <li>The Distance of the Fuel Station from you</li>
            <li>Reviews from other Customers</li>
            <li>Fuel Insights</li>
            <li>and many more...</li>
          </ul>
          <div className="md:hidden mt-10 bg-[#E8EAF5] rounded-lg my-4 py-4 px-4">
            <div className="flex flex-col justify-center">
              <p className="text-center font-pt text-xl">Sign in</p>
              <span className="text-sm flex space-x-1 justify-center">
                <p className="">Don't have an account? </p>
                <Link to={"/signup"} className="font-medium text-primColor">
                  Sign up
                </Link>
              </span>
            </div>
            <form
              onSubmit={(e) => {
                submitForm(e);
              }}
              className="flex flex-col pt-5"
            >
              {/* Email               */}
              <div class="relative mb-5">
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={(e) => {
                    dispatch({
                      type: "changedEmail",
                      email: e.target.value,
                      error:
                        e.target.value == "" ? "Email must not be blank" : "",
                    });
                  }}
                />
                <label
                  htmlFor="email"
                  class="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#E8EAF5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              {/* password */}
              <div class="relative mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={(e) => {
                    dispatch({
                      type: "changedPassword",
                      password: e.target.value,
                      error:
                        e.target.value == ""
                          ? "Password field must not be blank"
                          : "",
                    });
                  }}
                />
                <label
                  htmlFor="password"
                  class="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#E8EAF5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Password
                </label>
              </div>
              <span className="text-end text-xs font-medium mb-6">
                <p>Forgot password?</p>
              </span>
              <Button
                shade={"blue"}
                content={"Login"}
                clickFunction={() => {}}
              />
              <span className="text-center text-xs mt-4 mb-8">
                Not a member?
                <Link
                  to={"/signup"}
                  className="text-base font-pt inline text-primColor"
                >
                  {" "}
                  Sign Up
                </Link>
              </span>
            </form>
          </div>
        </div>
        {/* Right Side */}
        <div className="right md:w-2/3 hidden md:flex items-center bg-[#E8EAF5]">
          <div className="md:block flex flex-col justify-center px-24 w-full">
            <div className="md:w-2/3 flex justify-between">
              <h1 className="text-5xl font-bold font-pt">Sign in</h1>
              <span className="flex space-x-2 items-center">
                <p className="">Don't have an account yet?</p>
                <Link to={"/signup"} className="font-medium text-primColor">
                  Sign up
                </Link>
              </span>
            </div>
            <form
              className="my-7 "
              onSubmit={(e) => {
                submitForm(e);
              }}
            >
              <label className="block w-full md:w-3/5">
                <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={(e) => {
                    dispatch({
                      type: "changedEmail",
                      email: e.target.value,
                      error:
                        e.target.value == "" ? "Email must not be blank" : "",
                    });
                  }}
                />
                <p className="text-xs text-red-600 py-2">
                  {state.error.email ? state.error.email : ""}
                </p>
              </label>
              <label className="block w-full md:w-3/5">
                <span className="block text-base font-semibold font-pt pt-6 text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  className="mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={(e) => {
                    dispatch({
                      type: "changedPassword",
                      password: e.target.value,
                      error:
                        e.target.value == ""
                          ? "Password field must not be blank"
                          : "",
                    });
                  }}
                />
                <p className="text-xs text-red-600 py-2">
                  {state.error.password ? state.error.password : ""}
                </p>
              </label>
              <div className="flex flex-col gap-1 pt-6">
                <Link to="/login" className="text-sm font-open pb-3">
                  Forgotten Password?
                </Link>
                <button
                  className="w-1/5 pt-7"
                  style={buttonStyle}
                  onSubmit={() => {
                    submitForm();
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
