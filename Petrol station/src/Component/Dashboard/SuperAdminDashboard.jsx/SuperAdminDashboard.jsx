import React from "react";
import { useImmerReducer } from "use-immer";
import DashboardNavs from "./DashboardNavs";
import AdminDashboardCard from "./AdminDashboardCard";
import Badge from "./Badge";
import { stationDummyData } from "../../../Services/helper";

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "switchDashboard":
      draft.activeTab = "dash";
      draft.activeBody = "dash";
      break;
    case "switchFillingStation":
      draft.activeTab = "filling";
      break;
    case "switchUsers":
      draft.activeTab = "users";
      draft.activeBody = "users";
      break;
    case "switchSettings":
      draft.activeTab = "settings";
      draft.activeBody = "settings";
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
  }
};

const initialState = {
  activeTab: "dash",
  activeBody: "dash",
  stations: [...stationDummyData],
  verifiedStations: [...stationDummyData].filter((station) => {
    return station.verified === true;
  }),
  pendingVerification: [...stationDummyData].filter((station) => {
    return station.verified === false;
  }),
};

const SuperAdminDashboard = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);

  return (
    <>
      <section className="bg-gray-100/30 mini:h-screen overflow-hidden w-screen">
        <div className="ipad:grid admin__layout h-full w-full">
          {/* Logo */}
          <div className="py-5 bg-white flex justify-center items-center  ">
            <img src="/logo.svg" alt="logo" className="w-28" />
          </div>

          {/* Right side of header */}
          {/* Notification */}
          <div className=" bg-white flex justify-end items-center mini:px-10 mini:pr-16">
            There
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
              {/* Settings */}
              <DashboardNavs
                dispatch={dispatch}
                navBtnContent={
                  <>
                    <img
                      src={
                        state.activeTab === "users"
                          ? "/settings.svg"
                          : "/settings.svg"
                      }
                    />
                    <p className="">Settings</p>
                  </>
                }
                navTarget={"settings"}
                activeTab={state.activeTab === "settings" ? true : false}
                dropdown={false}
                dispatchEvent={"switchSettings"}
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
                  <div className="px-4 mini:px-8 my-5 grid grid-cols-1 gap-5 ipad:grid-cols-2 ipad:gap-5 mini:grid-cols-4 mini:gap-7">
                    <AdminDashboardCard
                      icon={"/new.svg"}
                      quantity={"New"}
                      cardText={"Create Account"}
                    />
                    <AdminDashboardCard
                      icon={"/verified.svg"}
                      quantity={"230"}
                      cardText={"Verified Stations"}
                    />
                    <AdminDashboardCard
                      icon={"/pending.svg"}
                      quantity={"15"}
                      cardText={"Pending Stations"}
                    />
                    <AdminDashboardCard
                      icon={"/cancelled.svg"}
                      quantity={"210"}
                      cardText={"Canceled Stations"}
                    />
                  </div>
                </>
              )}
              <div className="dashboard_limiter mt-7"></div>
              {/* Dashboard */}
              {state.activeBody === "dash" && (
                <>
                  <div className="mini:px-8 my-5">Dashboard</div>
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
                                  {station.licenseNo}
                                </td>
                                <td className="px-6 py-4">
                                  {station.dateRegistered}
                                </td>
                                <td className="px-6 py-4">{station.email}</td>
                                <td className="px-6 py-4">
                                  <Badge shade={station.status} />
                                </td>
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
                        <tbody>
                          {state.verifiedStations.map((station, index) => {
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
                                  {station.licenseNo}
                                </td>
                                <td className="px-6 py-4">
                                  {station.dateRegistered}
                                </td>
                                <td className="px-6 py-4">{station.email}</td>
                                <td className="px-6 py-4">
                                  <Badge shade={station.status} />
                                </td>
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
                          {state.pendingVerification.map((station, index) => {
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
                                  {station.licenseNo}
                                </td>
                                <td className="px-6 py-4">
                                  {station.dateRegistered}
                                </td>
                                <td className="px-6 py-4">{station.email}</td>
                                <td className="px-6 py-4">
                                  <Badge shade={station.status} />
                                </td>
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
                </>
              )}
              {/* Users */}
              {state.activeBody === "users" && (
                <>
                  <div className="mini:px-8 my-5">Users</div>
                </>
              )}
              {/* Settings */}
              {state.activeBody === "settings" && (
                <>
                  <div className="mini:px-8 my-5">Settings</div>
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
