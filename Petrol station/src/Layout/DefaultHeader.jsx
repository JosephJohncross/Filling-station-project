import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

// image import
import Button from "../Component/Common/Button";
import { Link, Navigate } from "react-router-dom";
import Drawer from "../Component/Common/Drawer";
import RegularHeader from "./RegularHeader";

const DefaultHeader = ({ hasBg = true, dispatch }) => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Navigation bar */}
      <div className={`${hasBg ? "bg-white" : "bg-transparent"} z-10`}>
        <div className="container_limiter py-4 flex items-center justify-between">
          <Link to={"/"}>
            <img src="/logo.svg" alt="" className="w-36" />
          </Link>
          <div className="items-center space-x-3 font-open hidden ipad:flex">
            {/* Account */}
            {user ? (
              <>
                {/* Search  */}
                <div className="relative hidden ipad:block mini:min-w-[300px]">
                  <img
                    src="/locator.svg"
                    alt=""
                    className="absolute top-1/2 -translate-y-1/2 left-2"
                  />
                  <input
                    name=""
                    type="text"
                    className="border border-gray-400/70  w-full h-10 rounded-sm font-mont text-sm focus:border-uniuyoGreen focus:ring-0 focus:outline-none py-3 text-[#4E4E4E] pl-9 pr-5"
                    onChange={(e) => {}}
                    placeholder="Enter, location, keyword"
                  />
                </div>
                <Button
                  shade={"blue"}
                  clickFunction={() => {}}
                  content={"Search"}
                  icon={false}
                />
                <div className="py-2 text-start font-bold text-xl hs-dropdown relative">
                  <div className="hs-dropdown-toggle">
                    <button
                      id="hs-dropdown-default"
                      type="button"
                      className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      <img src="/uacct.svg" />
                      Account
                      <svg
                        className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Account dropdown */}
                  <div
                    className="hs-dropdown-menu space-y-4 absolute right-0 px-4 py-3 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                    aria-labelledby="hs-dropdown-unstyled"
                  >
                    {/* Profile */}
                    <p
                      className="text-sm font-open cursor-pointer"
                      onClick={() => {
                        if (user.role == 1) {
                          navigate("/user/dashboard");
                        } else if (user.role == 0) {
                          navigate("/admin/dashboard");
                        } else if (user.role == 2) {
                          navigate("/station/dashboard");
                        }
                        dispatch({
                          type: "activePage",
                          val: "profile",
                        });
                      }}
                    >
                      My profile
                    </p>
                    {/* Favorite */}
                    <p
                      className="text-sm font-open cursor-pointer"
                      onClick={() => {
                        dispatch({
                          type: "activePage",
                          val: "favorite",
                        });
                      }}
                    >
                      Favorite stations
                    </p>
                    {/* Logout */}
                    <button
                      className="rounded-md px-6 py-2 font-semibold font-pt text-base focus:outline-red-500 w-full  text-[#F2F2F2] bg-red-600 shadow-md hover:bg-red-500 hover:shadow-sm flex justify-center items-center"
                      onClick={() => {
                        logoutUser();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
                {/* Notification */}
                <div className="py-2 text-start font-bold text-xl hs-dropdown relative">
                  <div className="hs-dropdown-toggle">
                    <button
                      id="hs-dropdown-default"
                      type="button"
                      className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      <img src="/unote.svg" />
                      Notifications
                      <svg
                        className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* verifeid stations dropdown */}
                  <div
                    className="hs-dropdown-menu space-y-4 absolute right-0 px-4 py-3 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                    aria-labelledby="hs-dropdown-unstyled"
                  >
                    <p className="text-sm font-open font-normal">
                      A notification from xy filling station
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex space-x-6 items-center">
                <Button
                  shade={"blue"}
                  clickFunction={() => {
                    navigate("/signup");
                  }}
                  content={"Signup"}
                  icon={false}
                />
                <Button
                  clickFunction={() => {
                    navigate("/login");
                  }}
                  content={"Login"}
                  shade={"white"}
                />
              </div>
            )}
          </div>
          <div className="mini:hidden">
            {user ? (
              <Drawer
                content={
                  <>
                    <ul className="space-y-3">
                      <li>
                        <button
                          className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                          onClick={() => {
                            dispatch({
                              type: "activePage",
                              val: "profile",
                            });
                          }}
                        >
                          My profile
                        </button>
                      </li>
                      <li>
                        <button
                          className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                          onClick={() => {
                            dispatch({
                              type: "activePage",
                              val: "favorite",
                            });
                          }}
                        >
                          Favourite Station
                        </button>
                      </li>
                      <li>
                        <button
                          className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                          onClick={() => {
                            dispatch({
                              type: "activePage",
                              val: "notif",
                            });
                          }}
                        >
                          Notification
                        </button>
                      </li>
                    </ul>
                  </>
                }
              />
            ) : (
              <>
                <RegularHeader />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultHeader;
