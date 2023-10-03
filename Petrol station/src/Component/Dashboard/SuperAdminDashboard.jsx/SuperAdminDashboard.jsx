import React, { useRef, useEffect, useContext } from "react";
import { useImmerReducer } from "use-immer";
import DashboardNavs from "./DashboardNavs";
import AdminDashboardCard from "./AdminDashboardCard";
import Badge from "./Badge";
import {
  stationDummyData,
  userDummyData,
  formatDate,
} from "../../../Services/helper";
import Button from "../../Common/Button";
import CustomModal from "../../Common/CustomModal";
import TextInput from "../../Common/TextInput";
import Histogram from "../../Charts/Histogram";
import FusinChart from "../../Charts/FusionCharts";
import Drawer from "../../Common/Drawer";
import {
  createStation,
  getAllStatiions,
  getStatistics,
  geAllUsers,
  verifyStation,
  deleteStation,
} from "../../../Services/admin-request";
import AuthContext from "../../../Context/AuthContext";
import { Collapse, initTE, Sidenav } from "tw-elements";

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "switchDashboard":
      draft.activeTab = "dash";
      draft.activeBody = "dash";
      break;
    case "switchFillingStation":
      draft.activeTab = "filling";
      draft.activeBody = "allStations";
      break;
    case "switchUsers":
      draft.activeTab = "users";
      draft.activeBody = "users";
      break;
    case "allStations":
      draft.activeBody = "allStations";
      break;
    case "verifiedStations":
      draft.activeBody = "verifiedS";
      break;
    case "pendingVerification":
      draft.activeBody = "pendingS";
      break;
    case "setStations":
      draft.stations = action.stations;
      break;
    case "setUsers":
      draft.users = action.users;
      break;
    case "setVerifiedStations":
      draft.verifiedStations = action.verified;
      break;
    case "setPendingStations":
      draft.pendingVerification = action.pending;
      break;
    case "setStationName":
      draft.stationName = action.name;
      break;
    case "setStationEmail":
      draft.stationEmail = action.email;
      break;
    case "setStationLicense":
      draft.stationLicense = action.license;
      break;
    case "setStationLongitude":
      draft.stationLongitude = action.longitude;
      break;
    case "setStationLatitude":
      draft.stationLatitude = action.latitude;
      break;
    case "setStationPassword":
      draft.stationPassword = action.password;
      break;
    case "setStatistics":
      draft.stats = action.stats;
      break;
    case "selectedStation":
      // draft.stationEmail = action.station.email;
      draft.stationName = action.station.name;
      draft.stationLatitude = action.station.latitude;
      draft.stationLongitude = action.station.longitude;
      draft.stationId = action.station.user;
      break;
    case "clearForm":
      // draft.stationEmail = "";
      draft.stationName = "";
      draft.stationLatitude = "";
      draft.stationLongitude = "";
      draft.stationId = "";
      break;

    // Account modal
    case "toggleAccount":
      draft.createStationModal = draft.val;
      break;
    case "triggerReload":
      draft.forceReload = !draft.forceReload;
      break;
    case "openEditModal":
      draft.openEditModal = action.val;
      break;
    case "openDeleteModal":
      draft.openDeleteModal = action.val;
      break;
    case "setStationReload":
      draft.stationReload = action.val;
      break;
  }
};

const initialState = {
  activeTab: "dash",
  activeBody: "dash",
  stations: [],
  verifiedStations: [],
  pendingVerification: [],
  users: [],
  stationId: "",
  stationName: "",
  stationEmail: "",
  stationLicense: "",
  stationLatitude: "",
  stationLongitude: "",
  stationPassword: "",
  forceReload: false,
  stationReload: false,
  stats: null,

  // Modal
  openEditModal: "",
  openDeleteModal: "",
};

const SuperAdminDashboard = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);

  // Refs
  const createModalRef = useRef();
  const { logoutUser } = useContext(AuthContext);

  useEffect(() => {
    initTE({ Collapse, Sidenav });
  }, []);

  useEffect(() => {
    getStatistics().then((data) => {
      dispatch({ type: "setStatistics", stats: data });
    });
  }, []);
  useEffect(() => {}, [state.forceReload]);

  useEffect(() => {
    if (state.activeBody === "allStations") {
      getAllStatiions().then((data) => {
        console.log(data);
        dispatch({ type: "setStations", stations: data });
        dispatch({
          type: "setVerifiedStations",
          verified: [...state.stations].filter((station) => {
            return station.is_verified;
          }),
        });
        dispatch({
          type: "setVerifiedStations",
          pending: [...state.stations].filter((station) => {
            return station.is_verified;
          }),
        });
      });
    }
    if (state.activeBody == "users") {
      geAllUsers().then((data) => {
        dispatch({ type: "setUsers", users: data });
      });
    }
  }, [state.activeBody]);

  useEffect(() => {
    // console.log("hello");
    getStatistics().then((data) => {
      dispatch({ type: "setStatistics", stats: data });
    });
    if (state.activeBody === "pendingS") {
      getAllStatiions().then((data) => {
        console.log("heelo");
        dispatch({ type: "setStations", stations: data });
        dispatch({
          type: "setVerifiedStations",
          verified: [...state.stations].filter((station) => {
            return station.is_verified;
          }),
        });
        dispatch({
          type: "setVerifiedStations",
          pending: [...state.stations].filter((station) => {
            return station.is_verified;
          }),
        });
      });
    }
  }, [state.stationReload]);

  return (
    <>
      <section className="bg-gray-100/30 mini:h-screen overflow-hidden w-screen">
        <div className="ipad:grid mini:admin__layout h-full w-full">
          {/* Logo */}
          <div className="py-5 bg-white mini:flex justify-center items-center hidden ">
            <img src="/logo.svg" alt="logo" className="w-28" />
          </div>

          {/* Right side of header */}
          {/* Notification */}
          {/* Desktop version */}
          <div className="hidden bg-white ipad:flex justify-end items-center px-6 ipad:px-8 mini:px-10 mini:pr-16 py-6 mini:py-0">
            {/* Search  */}
            <div className="relative hidden ipad:block">
              <img
                src="/search.svg"
                alt=""
                className="absolute top-1/2 -translate-y-1/2 left-2"
              />
              <input
                name=""
                type="text"
                className="border border-gray-400/70 h-10 rounded-md font-mont text-sm focus:border-uniuyoGreen focus:ring-0 focus:outline-none py-3 text-[#4E4E4E] pl-9 pr-5"
                onChange={(e) => {}}
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    alert("Enter");
                  }
                }}
              />
            </div>
            {/* Notification icon */}
            <div className="flex items-center space-x-3 pl-2 hs-dropdown relative">
              <div className="cursor-pointer">
                <img src="/notification.svg" alt="" className="w-8" />
              </div>

              {/* Notification dropdown */}
              <div
                class="hs-dropdown-menu space-y-4 px-4 py-6 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                aria-labelledby="hs-dropdown-unstyled"
              >
                <p className="text-sm font-open">
                  Hello world, this is notifcation dropdown
                </p>
              </div>
            </div>
            {/* Message icon */}
            <div className="flex items-center space-x-3 pl-2 hs-dropdown relative">
              <div
                className="cursor-pointer hs-dropdown-toggle"
                id="hs-dropdown-unstyled"
              >
                <img src="/message.svg" alt="" className="w-8" />
              </div>

              {/* Message dropdown */}
              <div
                class="hs-dropdown-menu space-y-4 px-4 py-6 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                aria-labelledby="hs-dropdown-unstyled"
              >
                <p className="text-sm font-open">
                  Hello world, how was your day
                </p>
              </div>
            </div>
            {/* Setiing icon */}
            <div className="flex items-center space-x-3 pl-2 hs-dropdown relative">
              <div
                className="cursor-pointer hs-dropdown-toggle"
                id="hs-dropdown-unstyled"
              >
                <img src="/set.svg" alt="" className="w-8" />
              </div>

              {/* Settings dropdown */}
              <div
                class="hs-dropdown-menu space-y-4 px-4 py-6 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                aria-labelledby="hs-dropdown-unstyled"
              >
                <Button
                  clickFunction={() => {}}
                  content={"Change password"}
                  icon={false}
                  shade={"blue"}
                />
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
          </div>

          {/* Notification */}
          {/* Mobile version */}
          <div className="px-4 flex justify-between items-center mini:hidden shadow-md">
            <div className="flex items-center">
              <Drawer
                content={
                  <>
                    <ul className="space-y-3">
                      <li>
                        <button
                          className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                          onClick={() => {
                            dispatch({
                              type: "switchDashboard",
                            });
                          }}
                        >
                          Dashboard
                        </button>
                      </li>
                      <li className="flex items-center">
                        <button
                          className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                          onClick={() => {
                            dispatch({
                              type: "switchUpdates",
                            });
                          }}
                        >
                          Filling station
                        </button>
                        <img
                          className="w-4 h-4"
                          src="https://img.icons8.com/ios-glyphs/30/ffffff/sort-down.png"
                          alt="sort-down"
                        />
                      </li>
                      <li>
                        <button
                          className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                          onClick={() => {
                            dispatch({
                              type: "switchProfile",
                              val: "notif",
                            });
                          }}
                        >
                          Users
                        </button>
                      </li>
                    </ul>
                  </>
                }
              />
              {/* logo */}
              <div className="py-5 bg-white mini:flex justify-center items-center">
                <img src="/logo.svg" alt="logo" className="w-28" />
              </div>
            </div>
            <div className=" bg-white flex items-center px-6 ipad:px-8 mini:hidden">
              {/* Notification icon */}
              <div className="flex items-center space-x-3 pl-2 hs-dropdown relative">
                <div className="cursor-pointer">
                  <img src="/notification.svg" alt="" className="w-8" />
                </div>

                {/* Notification dropdown */}
                <div
                  class="hs-dropdown-menu space-y-4 px-4 py-6 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                  aria-labelledby="hs-dropdown-unstyled"
                >
                  <p className="text-sm font-open">
                    Hello world, this is notifcation dropdown
                  </p>
                </div>
              </div>
              {/* Message icon */}
              <div className="flex items-center space-x-3 pl-2 hs-dropdown relative">
                <div
                  className="cursor-pointer hs-dropdown-toggle"
                  id="hs-dropdown-unstyled"
                >
                  <img src="/message.svg" alt="" className="w-8" />
                </div>

                {/* Message dropdown */}
                <div
                  class="hs-dropdown-menu space-y-4 px-4 py-6 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                  aria-labelledby="hs-dropdown-unstyled"
                >
                  <p className="text-sm font-open">
                    Hello world, how was your day
                  </p>
                </div>
              </div>
              {/* Setiing icon */}
              <div className="flex items-center space-x-3 pl-2 hs-dropdown relative">
                <div
                  className="cursor-pointer hs-dropdown-toggle"
                  id="hs-dropdown-unstyled"
                >
                  <img src="/set.svg" alt="" className="w-8" />
                </div>

                {/* Settings dropdown */}
                <div
                  class="hs-dropdown-menu space-y-4 px-4 py-6 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                  aria-labelledby="hs-dropdown-unstyled"
                >
                  <Button
                    clickFunction={() => {}}
                    content={"Change password"}
                    icon={false}
                    shade={"blue"}
                  />
                  <button
                    className="rounded-md px-6 py-2 font-semibold font-pt text-base focus:outline-red-500 w-full  text-[#F2F2F2] bg-red-600 shadow-md hover:bg-red-500 hover:shadow-sm flex justify-center items-center"
                    onClick={() => {}}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side navigation */}
          <div className="bg-white  pt-12 hidden ipad:block">
            {/* Admin section */}
            <div className="flex flex-col gap-y-6 mini:pl-10">
              {/* Dashboard */}
              <DashboardNavs
                dispatch={dispatch}
                navBtnContent={
                  <>
                    <img
                      src={
                        state.activeTab === "dash"
                          ? "/dashboard.svg"
                          : "/dashboard.svg"
                      }
                    />
                    <p className="">Dashboard</p>
                  </>
                }
                navTarget={"dashboard"}
                activeTab={state.activeTab === "dash" ? true : false}
                dropdown={false}
                dispatchEvent={"switchDashboard"}
              />
              {/* Filling station   */}
              <DashboardNavs
                dispatch={dispatch}
                navBtnContent={
                  <>
                    <img
                      src={
                        state.activeTab === "filling"
                          ? "/stationActive.svg"
                          : "/station.svg"
                      }
                    />
                    <p className="">Flling Station</p>
                  </>
                }
                navContent={
                  <>
                    <div className="flex flex-col space-y-2 font-medium text-textColor">
                      <button
                        className="text-start focus:outline-none focus:text-primColor"
                        onClick={() => {
                          dispatch({
                            type: "allStations",
                          });
                        }}
                      >
                        All station
                      </button>
                      <button
                        className="text-start focus:outline-none focus:text-primColor"
                        onClick={() => {
                          dispatch({
                            type: "verifiedStations",
                          });
                        }}
                      >
                        Verified
                      </button>
                      <button
                        className="text-start focus:outline-none focus:text-primColor"
                        onClick={() => {
                          dispatch({
                            type: "pendingVerification",
                          });
                        }}
                      >
                        Pending Verification
                      </button>
                    </div>
                  </>
                }
                navTarget={"fillingStation"}
                activeTab={state.activeTab === "filling" ? true : false}
                dropdown={true}
                dispatchEvent={"switchFillingStation"}
              />
              {/* Users */}
              <DashboardNavs
                dispatch={dispatch}
                navBtnContent={
                  <>
                    <img
                      src={
                        state.activeTab === "users"
                          ? "/usersActive.svg"
                          : "/users.svg"
                      }
                    />
                    <p className="">Users</p>
                  </>
                }
                navTarget={"users"}
                activeTab={state.activeTab === "users" ? true : false}
                dropdown={false}
                dispatchEvent={"switchUsers"}
              />
            </div>
          </div>

          {/* Main body */}
          <div className="shadow-[inset_10px_0_10px_0px_rgba(0,0,0,.09)] mini:pl-5 mini:pt-5 font-open">
            <div className="bg-[#F8F8F8] w-full ipad:h-[85vh] ipad:overflow-y-auto ipad:dashboard_scroll mb-10">
              {/* Common cards section for filling station */}
              {(state.activeBody === "allStations" ||
                state.activeBody === "verifiedS" ||
                state.activeBody === "pendingS") && (
                <>
                  <div className="px-4 mini:px-8 my-5 grid grid-cols-2 gap-5 mini:grid-cols-4 mini:gap-7">
                    <div className="" data-hs-overlay="#hs-basic-modal">
                      <AdminDashboardCard
                        icon={"/new.svg"}
                        quantity={"New"}
                        cardText={"Create Account"}
                      />
                    </div>
                    <AdminDashboardCard
                      icon={"/verified.svg"}
                      quantity={state.stats?.verified_stations}
                      cardText={"Verified Stations"}
                    />
                    <AdminDashboardCard
                      icon={"/pending.svg"}
                      quantity={state.stats?.pending_verification_stations}
                      cardText={"Pending Stations"}
                    />
                    <AdminDashboardCard
                      icon={"/cancelled.svg"}
                      quantity={"0"}
                      cardText={"Canceled Stations"}
                    />
                  </div>
                </>
              )}

              {/* Create Station Account modal */}
              <div
                id="hs-basic-modal"
                class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
              >
                <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto">
                  <div class="flex flex-col bg-white border-t shadow-md rounded-md ">
                    <div class="flex justify-between items-center py-3 px-4 border-b">
                      <h3 class="font-bold text-gray-800 font-pt text-lg">
                        Create Account
                      </h3>
                      <button
                        ref={createModalRef}
                        type="button"
                        class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm"
                        data-hs-overlay="#hs-basic-modal"
                      >
                        <span class="sr-only">Close</span>
                        <svg
                          class="w-3.5 h-3.5"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Body */}
                    <form
                      className="mx-5 my-6 mini:grid  mini:gap-x-5 mini:gap-y-3 mini:grid-cols-2"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      {/* Filling station name */}
                      <div className="space-y-1">
                        <label
                          htmlFor="petrol_price"
                          className="text-sm font-medium"
                        >
                          Filling Station Name
                        </label>
                        <input
                          value={state.stationName}
                          id="petrol_price"
                          type="text"
                          name="petrol_price"
                          className="w-full outline-none focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-md p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          onChange={(e) => {
                            dispatch({
                              type: "setStationName",
                              name: e.target.value,
                            });
                          }}
                        />
                      </div>
                      {/* Email address */}
                      <div className="space-y-1">
                        <label
                          htmlFor="petrol_price"
                          className="text-sm font-medium"
                        >
                          Email
                        </label>
                        <input
                          value={state.stationEmail}
                          id="petrol_price"
                          type="text"
                          name="petrol_price"
                          className="w-full rounded-md outline-none focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          onChange={(e) => {
                            dispatch({
                              type: "setStationEmail",
                              email: e.target.value,
                            });
                          }}
                        />
                      </div>
                      {/* Latitude */}
                      <div className="space-y-1">
                        <label
                          htmlFor="petrol_price"
                          className="text-sm font-medium"
                        >
                          Latitude
                        </label>
                        <input
                          value={state.stationLatitude}
                          id="petrol_price"
                          type="text"
                          name="petrol_price"
                          className="w-full rounded-md outline-none focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          onChange={(e) => {
                            dispatch({
                              type: "setStationLatitude",
                              latitude: e.target.value,
                            });
                          }}
                        />
                      </div>
                      {/* Longitude */}
                      <div className="space-y-1">
                        <label
                          htmlFor="petrol_price"
                          className="text-sm font-medium"
                        >
                          Longitude
                        </label>
                        <input
                          value={state.stationLongitude}
                          id="petrol_price"
                          type="text"
                          name="petrol_price"
                          className="w-full rounded-md outline-none focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          onChange={(e) => {
                            dispatch({
                              type: "setStationLongitude",
                              longitude: e.target.value,
                            });
                          }}
                        />
                      </div>
                      {/* License Number */}
                      <div className="space-y-1">
                        <label
                          htmlFor="petrol_price"
                          className="text-sm font-medium"
                        >
                          License No
                        </label>
                        <input
                          id="petrol_price"
                          type="text"
                          name="petrol_price"
                          className="w-full outline-none focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-md p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          onChange={(e) => {
                            dispatch({
                              type: "setStationLicense",
                              license: e.target.value,
                            });
                          }}
                        />
                      </div>
                      {/* Password */}
                      <div className="space-y-1">
                        <label
                          htmlFor="petrol_price"
                          className="text-sm font-medium"
                        >
                          Password
                        </label>
                        <input
                          value={state.stationPassword}
                          id="petrol_price"
                          type="password"
                          name="petrol_price"
                          className="w-full outline-none focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-md p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          onChange={(e) => {
                            dispatch({
                              type: "setStationPassword",
                              password: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </form>
                    {/* Buttons */}
                    <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t ">
                      <button
                        type="button"
                        class="py-3 px-8 inline-flex justify-center items-center gap-2 rounded-md border border-primColor font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all text-sm"
                        data-hs-overlay="#hs-basic-modal"
                      >
                        Close
                      </button>
                      <button
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          createModalRef.current.click();
                          createStation(
                            state.stationName,
                            state.stationLatitude,
                            state.stationLongitude,
                            state.stationEmail,
                            state.stationPassword,
                            state.stationLicense
                          );
                          dispatch({ type: "triggerReload" });
                        }}
                      >
                        Create station
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard_limiter mt-7"></div>
              {/* Dashboard */}
              {state.activeBody === "dash" && (
                <>
                  <div className="px-6 mini:px-8 my-5">
                    <p className="font-bold font-pt text-textColor text-xl mb-8">
                      Statistics
                    </p>
                    {/* Cards section */}
                    <div className="flex flex-col gap-y-4 mini:gap-y-0 mini:justify-between mini:flex-row">
                      {/* Total numbers of visits */}
                      <div className="hover:cursor-pointer px-5 shadow-md flex items-center space-x-5 hover:shadow-lg bg-white mini:px-10 py-6 mini:py-3 ipad:h-44 mini:h-36 rounded-md transition-shadow">
                        <div className="flex w-2/3 mini:w-max flex-col space-y-2">
                          {/* Card name */}
                          <p className=" text-textColor font-medium">
                            Total Number of visits
                          </p>
                          {/* Number */}
                          <p className="font-pt  text-xl">253, 560</p>
                          <p className="font-pt text-gray-400">In 245 days</p>
                        </div>
                        <div
                          className={`bg-[#FAD28480] w-16 h-16 flex justify-center items-center rounded-full`}
                        >
                          <img src="/visits.svg" alt="" />
                        </div>
                      </div>

                      {/* Number of registered users */}
                      <div className="hover:cursor-pointer px-5 shadow-md flex items-center space-x-5 hover:shadow-lg bg-white mini:px-10 py-6 mini:py-3 ipad:h-44 mini:h-36 rounded-md transition-shadow">
                        <div className="flex w-2/3 mini:w-max flex-col space-y-2">
                          {/* Card name */}
                          <p className=" text-textColor font-medium">
                            Number of registered users
                          </p>
                          {/* Number */}
                          <p className="font-pt  text-xl">
                            {state.stats?.all_users}
                          </p>
                          <p className="font-pt text-gray-400">In 245 days</p>
                        </div>
                        <div
                          className={`bg-[#FF755533] w-16 h-16 flex justify-center items-center rounded-full`}
                        >
                          <img src="/registered.svg" alt="" />
                        </div>
                      </div>

                      {/* Number of registered filling stations */}
                      <div className="hover:cursor-pointer px-5 py-6 shadow-md flex items-center space-x-5 hover:shadow-lg bg-white mini:px-10 mini:py-3 ipad:h-44 mini:h-36 rounded-md transition-shadow">
                        <div className="flex flex-col w-2/3 mini:w-max space-y-2">
                          {/* Card name */}
                          <p className=" text-textColor font-medium">
                            Number of Registered Stations
                          </p>
                          {/* Number */}
                          <p className="font-pt  text-xl">
                            {state.stats?.all_stations}
                          </p>
                          <p className="font-pt text-gray-400">In 245 days</p>
                        </div>
                        <div
                          className={`bg-[#384AAD33] w-16 h-16 flex justify-center items-center rounded-full`}
                        >
                          <img src="/stationActive.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    {/* Charts */}
                    <div className="py-12 pt-20">
                      <p className="text-gray-500 text-lg font-pt font-semibold pb-5">
                        Charts
                      </p>
                      {/* Charts section */}
                      <div className="flex flex-col gap-y-8 space-x-0 mini:flex-row mini:gap-y-0 mini:space-x-6">
                        {/* Visits chart */}
                        <div className="shadow-md px-3 mini:px-5 py-7 mini:w-1/2 rounded-md ">
                          {/* Chart nav */}
                          <div className="flex justify-between items-center">
                            <p className="font-pt text-textColor">Visits</p>
                            <div className="flex mini:space-x-2 font-open">
                              <button className="text-xs px-2 py-1 bg-[#D7DBEF] focus:border-none focus:outline-primColor focus:ring-0">
                                This Week
                              </button>
                              <button className="text-xs px-2 py-1 bg-[#F3F3F3] focus:border-none focus:outline-primColor focus:ring-0">
                                Last Week
                              </button>
                              <button className="text-xs px-2 py-1 bg-[#F3F3F3] focus:border-none focus:outline-primColor focus:ring-0">
                                Last Month
                              </button>
                            </div>
                          </div>
                          {/* Chart body */}
                          <div className="mt-14 mini:mt-16 border-slate-300 border">
                            <FusinChart />
                          </div>
                        </div>

                        {/* Registered users */}
                        <div className="shadow-md px-3 mini:px-5 py-7 mini:w-1/2 rounded-md">
                          {/* Chart nav */}
                          <div className="flex justify-between items-center">
                            <p className="font-pt text-textColor">
                              Registered Users
                            </p>
                            <div className="flex mini:space-x-2 font-open">
                              <button className="text-xs px-2 py-1 bg-[#D7DBEF] focus:border-none focus:outline-primColor focus:ring-0">
                                This Week
                              </button>
                              <button className="text-xs px-2 py-1 bg-[#F3F3F3] focus:border-none focus:outline-primColor focus:ring-0">
                                Last Week
                              </button>
                              <button className="text-xs px-2 py-1 bg-[#F3F3F3] focus:border-none focus:outline-primColor focus:ring-0">
                                Last Month
                              </button>
                            </div>
                          </div>
                          {/* Chart body */}
                          <div className="mt-14 mini:mt-16 border-slate-300 border">
                            <FusinChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* All stations */}
              {state.activeBody === "allStations" && (
                <>
                  <div className="mini:px-8 my-5">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              S/N
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div className="flex items-center">
                                Name
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">License No</div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">
                                Date Registered
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">Email</div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center justify-center">
                                Status
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                              <span class="sr-only">Edit/Delete</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {state.stations.map((station, index) => {
                            return (
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  {index + 1}
                                </th>
                                <td className="px-6 py-4">{station.name}</td>
                                <td className="px-6 py-4">
                                  {station.license_number}
                                </td>
                                <td className="px-6 py-4">
                                  {formatDate(station.joined)}
                                </td>
                                <td className="px-6 py-4">{station.email}</td>
                                <td className="px-6 py-4">
                                  <Badge
                                    shade={station.is_open ? "open" : "closed"}
                                  />
                                </td>
                                <td className="px-6 py-4 text-start font-bold text-xl hs-dropdown relative">
                                  <div className="hs-dropdown-toggle">
                                    <p className="cursor-pointer font-medium text-gray-400 hover:text-primColor  hs-dropdown-toggle">
                                      ...
                                    </p>
                                  </div>
                                  {/* verified stations dropdown */}
                                  <div
                                    class="hs-dropdown-menu space-y-4 absolute right-0 px-4 py-3 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                                    aria-labelledby="hs-dropdown-unstyled"
                                  >
                                    <p
                                      className="text-sm font-open"
                                      onClick={() => {
                                        dispatch({
                                          type: "selectedStation",
                                          station: station,
                                        });
                                        dispatch({
                                          type: "openEditModal",
                                          val: "default",
                                        });
                                      }}
                                    >
                                      Edit
                                    </p>
                                    <p
                                      className="text-sm font-open"
                                      onClick={() => {
                                        dispatch({
                                          type: "selectedStation",
                                          station: station,
                                        });
                                        dispatch({
                                          type: "openDeleteModal",
                                          val: "default",
                                        });
                                      }}
                                    >
                                      Delete
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>

                      {/* Edit Modal */}
                      <div className="">
                        <CustomModal
                          component={
                            <>
                              <div className="">
                                <div className="flex items-center space-x-3 pt-3">
                                  {/* Email */}
                                  <div className="mini:w-1/2">
                                    <TextInput
                                      dispatch={dispatch}
                                      icon={true}
                                      label={"Email Address"}
                                      placeholder={"Enter email address"}
                                      preValue={state.stationEmail}
                                      // name={"email"}
                                      type="email"
                                      dispatchType={"createStaffEmail"}
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          }
                          header={"Edit Station Details"}
                          dispatch={dispatch}
                          button1Text={"Close"}
                          button2Text={"Edit"}
                          modalState={state.openEditModal}
                          secondaryOperationAction={() => {
                            dispatch({ type: "openEditModal", val: undefined });
                            dispatch({ type: "clearForm" });
                          }}
                        />
                      </div>

                      {/* Delete Modal */}
                      <div className="">
                        <CustomModal
                          component={
                            <>
                              <div className="">
                                <div className="flex flex-col">
                                  <p className="text-center w-full font-medium text-lg">
                                    Are you sure you want to delete
                                    <span className="text-uniuyoGreen font-bold block">
                                      {state.stationName}
                                    </span>
                                  </p>
                                  <div className="w-full flex items-center justify-center space-x-6 pt-4">
                                    <Button
                                      clickFunction={() => {
                                        dispatch({
                                          type: "openDeleteModal",
                                          val: undefined,
                                        });
                                        dispatch({ type: "clearForm" });
                                      }}
                                      content={"Cancel"}
                                      shade={"gray"}
                                    />
                                    <Button
                                      clickFunction={() => {
                                        deleteStaff(state.staffId);
                                        dispatch({
                                          type: "openDeleteModal",
                                          val: undefined,
                                        });
                                        dispatch({
                                          type: "triggerReload",
                                        });
                                      }}
                                      content={"Delete"}
                                      shade={"blue"}
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          }
                          dispatch={dispatch}
                          modalState={state.openDeleteModal}
                          defaultModalButton={false}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* Verfied Stations */}
              {state.activeBody === "verifiedS" && (
                <>
                  <div className="mini:px-8 my-5">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              S/N
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div className="flex items-center">
                                Name
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">License No</div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">
                                Date Registered
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">
                                Email
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">
                                Status
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {state.stations
                            .filter((station) => station.is_verified === true)
                            .map((station, index) => {
                              return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    {index + 1}
                                  </th>
                                  <td className="px-6 py-4">{station.name}</td>
                                  <td className="px-6 py-4">
                                    {station.license_number}
                                  </td>
                                  <td className="px-6 py-4">
                                    {formatDate(station.joined)}
                                  </td>
                                  <td className="px-6 py-4">{station.email}</td>
                                  <td className="px-6 py-4">
                                    <Badge
                                      shade={
                                        station.is_open ? "open" : "closed"
                                      }
                                    />
                                  </td>
                                  <td className="px-6 py-4 text-start font-bold text-xl hs-dropdown relative">
                                    <div className="hs-dropdown-toggle">
                                      <p className="cursor-pointer font-medium text-blue-600 hover:underline hs-dropdown-toggle">
                                        ...
                                      </p>
                                    </div>
                                    {/* verifeid stations dropdown */}
                                    <div
                                      class="hs-dropdown-menu space-y-4 absolute right-0 px-4 py-3 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                                      aria-labelledby="hs-dropdown-unstyled"
                                    >
                                      <button
                                        onClick={() => {
                                          deleteStation(station.id);
                                          dispatch({
                                            type: "setStationReload",
                                            val: !state.stationReload,
                                          });
                                        }}
                                        className="text-sm font-open"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
              {/* Pending Verification */}
              {state.activeBody === "pendingS" && (
                <>
                  <div className="mini:px-8 my-5">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            S/N
                          </th>
                          <th scope="col" class="px-6 py-3">
                            <div className="flex items-center">
                              Name
                              <a href="#">
                                <svg
                                  className="w-3 h-3 ml-1.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                </svg>
                              </a>
                            </div>
                          </th>
                          <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">License No</div>
                          </th>
                          <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                              Date Registered
                              <a href="#">
                                <svg
                                  className="w-3 h-3 ml-1.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                </svg>
                              </a>
                            </div>
                          </th>
                          <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                              Email
                              <a href="#">
                                <svg
                                  className="w-3 h-3 ml-1.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                </svg>
                              </a>
                            </div>
                          </th>
                          <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                              Status
                              <a href="#">
                                <svg
                                  className="w-3 h-3 ml-1.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                </svg>
                              </a>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3">
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.stations
                          .filter((station) => station.is_verified === false)
                          .map((station, index) => {
                            return (
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  {index + 1}
                                </th>
                                <td className="px-6 py-4">{station.name}</td>
                                <td className="px-6 py-4">
                                  {station.license_number}
                                </td>
                                <td className="px-6 py-4">
                                  {formatDate(station.joined)}
                                </td>
                                <td className="px-6 py-4">{station.email}</td>
                                <td className="px-6 py-4">
                                  <Badge
                                    shade={station.is_open ? "open" : "closed"}
                                  />
                                </td>
                                <td className="px-6 py-4 text-start font-bold text-xl hs-dropdown relative">
                                  <div className="hs-dropdown-toggle">
                                    <p className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline hs-dropdown-toggle">
                                      ...
                                    </p>
                                  </div>
                                  {/* verifeid stations dropdown */}
                                  <div
                                    class="hs-dropdown-menu space-y-4 absolute right-0 px-4 py-3 shadow-md rounded-md transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-max hidden z-10 mt-2 min-w-[6rem] bg-white"
                                    aria-labelledby="hs-dropdown-unstyled"
                                  >
                                    <button
                                      className="text-sm font-open block"
                                      onClick={() => {
                                        verifyStation(station.user);
                                        dispatch({
                                          type: "setStationReload",
                                          val: !state.stationReload,
                                        });
                                      }}
                                    >
                                      Verify
                                    </button>
                                    <button
                                      className="text-sm font-open"
                                      onClick={() => {
                                        deleteStation(station.id);
                                        dispatch({
                                          type: "setStationReload",
                                          val: !state.stationReload,
                                        });
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              {/* Users */}
              {state.activeBody === "users" && (
                <>
                  <div className="mini:px-8 my-5">
                    <p className="font-bold font-pt text-textColor text-xl mb-8">
                      List of User({state.stats?.all_users})
                    </p>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              S/N
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div className="flex items-center">
                                Username
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">
                                Date Registered
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">Phone Number</div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              <div class="flex items-center">
                                Email
                                <a href="#">
                                  <svg
                                    className="w-3 h-3 ml-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                  </svg>
                                </a>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {state.users.map((station, index) => {
                            console.log(station);
                            return (
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                  {station?.username}
                                </td>
                                <td className="px-6 py-4">
                                  {formatDate(station.created_at)}
                                </td>
                                <td className="px-6 py-4">{station.phone}</td>
                                <td className="px-6 py-4">{station.email}</td>
                                <td className="px-6 py-4 text-start font-bold text-xl">
                                  <p className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    ...
                                  </p>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuperAdminDashboard;
